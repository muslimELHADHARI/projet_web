import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="topnav navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/"><strong>ELHADHARI-BLOGS</strong></Link>
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarColor02">
          <ul className="navbar-nav mr-auto d-flex align-items-center">
            <li className="nav-item"><Link className="nav-link" to="/art">Art</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#">-</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/cinema">Cinema</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/design">Design</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/food">Food</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/docs">Help</Link></li>
            <li className="nav-link"><b>User: Muslim</b></li>
          </ul>
          <ul className="navbar-nav ml-auto d-flex align-items-center">
            <li><Link to="/" className="btn btn-dark">Logout</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
