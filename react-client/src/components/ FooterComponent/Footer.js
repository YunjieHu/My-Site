import React, { Component } from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cx from 'classnames';
import globalStyles from "../bootstrap.min.module.css";
import footerStyles from './footer.module.css';

class Footer extends Component {
  footerDefault = () => { 
    let jsx;
     jsx= (
      <footer className={cx(globalStyles["footer"], footerStyles["dark-theme"])}>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <div className={footerStyles["copyright"]}>
              © {new Date().getFullYear()}, YUNJIE HU.
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </footer>
    );
    return jsx;
  }
  render() {
    return (
      <React.Fragment>
      {this.footerDefault() }
      </React.Fragment>
    );
  }
}

export default Footer;
