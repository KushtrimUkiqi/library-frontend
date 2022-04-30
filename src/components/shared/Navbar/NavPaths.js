import {Link} from 'react-router-dom';

//hooks
import {useEffect,useState} from 'react';

//services
import HttpClientService from '../../../services/HttpClient';

export default function NavPaths({paths}) {

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
  )
}
