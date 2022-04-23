import {Link} from 'react-router-dom';

//hooks
import {useEffect,useState} from 'react';

//services
import HttpClientService from '../../../services/HttpClient';

//images
import navBarLogo from '../../../images/NavBarLogo.svg'

function Nav(){

    const [booksCategory,setBooksCategory] = useState(["FANTASY","FICTIION"]);


    async function fetchBooksCategories() {
      HttpClientService
        .fetchCategories()
          .then((response) => {
            setBooksCategory([...response.data]);
          })
          .catch(error => {
            console.log('error')
          })
    }

    useEffect(() => {
      fetchBooksCategories();
    },[]);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={navBarLogo} />
        </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link to={''}>
              <a  className="nav-link" >Books</a>
              </Link>
              </li>
              <li className="nav-item">
              <Link to={'authors'}>
              <a  className="nav-link" href="#">Authors</a>
              </Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {
                    booksCategory.map((category,index) =>
                    <li key={index}><a className="dropdown-item" href="#">{category}</a></li>
                    )
                  }
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Countries</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-dark" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    );
} 

export default Nav;