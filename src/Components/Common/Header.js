import * as React from "react";
import { Link } from "react-router-dom";
import {
  useLocation
} from "react-router-dom";
const Header = (props) => {
  console.log("site log", props);
  const { pathname } = useLocation();
  console.log("path ", pathname)
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand">{pathname === '/create' ? "Create Template" : "Template List"}</a>
          <form className="d-flex">
            {
              pathname === '/'
              ? <Link className="btn btn-outline-success" to={'/create'}> Create Template </Link> 
              : <Link className="btn btn-outline-success" to={'/'}> Back </Link>
            }
          </form>
        </div>
      </nav>
    </>
  );
};

export default Header;
