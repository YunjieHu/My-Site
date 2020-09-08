import React, { Component } from 'react';
import cx from 'classnames';
import { Navbar, Nav } from 'react-bootstrap';
import globalStyles from "../bootstrap.min.module.css"
import navbarStyles from './navbar.module.css';

class NavBar extends Component {

  navBarDefault = () => { 
    let jsx;
     jsx= (
       <Navbar className= {cx(globalStyles['navbar'],navbarStyles['navbar'])} bg="transparent" expand="lg">
       <div className= {cx(globalStyles['container'], navbarStyles['container'])} >
       <Navbar.Brand></Navbar.Brand>
       <Nav className={navbarStyles['mobile-nav']}>
          <Nav.Link className={navbarStyles['mobile-nav-link']} href="/">Home</Nav.Link>
          <Nav.Link className={navbarStyles['mobile-nav-link']} href="/About">About</Nav.Link>
          <Nav.Link className={navbarStyles['mobile-nav-link']} href="/Portfolio">Portfolio</Nav.Link>
          <Nav.Link className={navbarStyles['mobile-nav-link']} href="/Resume">Résumé</Nav.Link>
        </Nav>
         <Navbar.Collapse id={navbarStyles['basic-navbar-nav']}>
         <Nav>
         <li className={globalStyles['nav-item']}  >
           <a className={cx(globalStyles['nav-link'],navbarStyles['nav-link-inverse'])} href="/">
           <div className="svg-wrapper">
              <svg height="60" width="100" xmlns="http://www.w3.org/2000/svg">
                <g>
                <rect className="shape" height="60" width="100" />
                <text x="23" y="45" font-size="20" fill="white">Home</text>
                </g>
              </svg>
            </div>
           </a>
         </li>
         <li className={globalStyles['nav-item']}>
           <a className={cx(globalStyles['nav-link'],navbarStyles['nav-link-inverse']) }  href="/About">
            <div className="svg-wrapper">
                <svg height="60" width="100" xmlns="http://www.w3.org/2000/svg">
                  <g>
                  <rect className="shape" height="60" width="100" />
                  <text x="21" y="45" font-size="20" fill="white">About</text>
                  </g>
                </svg>
              </div>
           </a>
         </li>
         {/*<li className={globalStyles['nav-item']}>
           <a className={cx(globalStyles['nav-link'],navbarStyles['nav-link-inverse']) }  href="/Tutorials">
           <div className="svg-wrapper">
              <svg height="60" width="100" xmlns="http://www.w3.org/2000/svg">
                <g>
                <rect className="shape" height="60" width="100" />
                <text x="11" y="45" font-size="20" fill="white">Tutorials</text>
                </g>
              </svg>
            </div>
            </a>
         </li>*/}
         <li className={globalStyles['nav-item']}>
           <a className={cx(globalStyles['nav-link'],navbarStyles['nav-link-inverse']) }  href="/Portfolio">
           <div className="svg-wrapper">
              <svg height="60" width="100" xmlns="http://www.w3.org/2000/svg">
                <g>
                <rect className="shape" height="60" width="100" />
                <text x="11" y="45" font-size="20" fill="white">Portfolio</text>
                </g>
              </svg>
            </div>
            </a>
         </li>
         <li className={globalStyles['nav-item']}>
           <a className={cx(globalStyles['nav-link'],navbarStyles['nav-link-inverse']) }  href="/Resume">
           <div className="svg-wrapper">
              <svg height="60" width="100" xmlns="http://www.w3.org/2000/svg">
                <g>
                <rect className="shape" height="60" width="100" />
                <text x="12" y="45" font-size="20" fill="white">Résumé</text>
                </g>
              </svg>
            </div>
            </a>
         </li>
         </Nav>
         </Navbar.Collapse>
       </div>
      </Navbar>
     );
     return jsx;
 }

  render() {
    return (
      <React.Fragment>
      {this.navBarDefault() }
      </React.Fragment>
    )
  }
}

export default NavBar;