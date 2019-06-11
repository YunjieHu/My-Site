import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import HomePage from './HomePageComponent/HomePage';
import AboutPage from './AboutComponent/About';
import NavBar from './HeaderComponent/NavBar';
import ResumePage from './ResumeComponent/Resume'
import PortfolioPage from './PortfolioComponent/Portfolio'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="about" exact path="/About" component={AboutPage} />
          <Route name="portfolio" exact path="/Portfolio" component={PortfolioPage} />
          <Route name="resume" exact path="/Resume" component={ResumePage} />
        </div>
      </Router>
    )
  }
}

export default App;