import {Link} from 'react-router-dom';

//images
import navBarLogo from '../../../images/NavBarLogo.svg'

//components
import Search from '../Search/Search';
import NavPaths from './NavPaths';

function Nav(){

    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to={''}>
            <img src={navBarLogo} />
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <NavPaths></NavPaths>
          {/* TODO MAKE IT BE RESPONSIVE TO THE SITE THE ROUTER IS ON */}
          <Search urlPattern={""} placeholder={"Search"}>
          </Search>
        </div>
      </div>
    </nav>
    );
} 

export default Nav;


              {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-dark" type="submit">Search</button> */}