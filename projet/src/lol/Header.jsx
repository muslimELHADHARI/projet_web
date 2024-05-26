import React from 'react';

const Header = () => {
  return (
    <div className="container">
      <div className="jumbotron jumbotron-fluid mb-3 pt-0 pb-0 bg-lightblue position-relative">
        <div className="pl-4 pr-0 h-100 tofront">
          <div className="row justify-content-between">
            <div className="col-md-6 pt-6 pb-6 align-self-center">
              <h1 className="secondfont mb-3 font-weight-bold">ELHADHARI-BLOGS is a Blog website give the opportunity to users to see, feel and share their special moments with the world :)</h1>
              <p className="mb-3">
                This website built using:
                <ul>
                  <li><p>HTML5</p></li>
                  <li><p>Javascript</p></li>
                  <li><p>SCSS</p></li>
                </ul>
              </p>
              <a href="./article.html" className="btn btn-dark">Read More</a>
            </div>
            <div className="col-md-6 d-none d-md-block pr-0" style={{backgroundSize: 'cover', backgroundImage: 'url(img/home.jpg)'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
