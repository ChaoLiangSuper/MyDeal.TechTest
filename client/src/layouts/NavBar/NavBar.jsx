import React from 'react';

function NavBar() {
  return (
      <div className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
              <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                  <a className='navbar-brand' href='/'>MyDeal</a>
              </div>
              <div className="navbar-collapse collapse">
                  <ul className="nav navbar-nav">
                      <li><a href='/'>Home</a></li>
                  </ul>
              </div>
          </div>
      </div>
  );
}

export default NavBar;