import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import pageStyles from './resume.module.css';
import resumePreview from '../../../../react-client/dist/react-client/preview.png'
import homePageStyles from '../HomePageComponent/homepage.module.css';
import globalStyles from "../bootstrap.min.module.css";
import cx from 'classnames';
import Resume from "./Resume.pdf"

class ResumePage extends Component {

    resumeDefault = () => { 
        let jsx;
         jsx= (
            <div className={pageStyles['main']}>
                <div className={pageStyles['image-section']}>
                    <Container>
                            <div className={pageStyles['resume-body']}>
                                <img src = {resumePreview}></img>
                            </div>
                            <a href ={Resume} className={cx(globalStyles['btn'] ,homePageStyles['btn'], pageStyles['download-btn']) } download >Download Here</a>
                    </Container>
                </div>

                
            </div>
        );
        return jsx;
    }

    render() {
        return (
          <React.Fragment>
                {this.resumeDefault()}
          </React.Fragment>
        )
    }
}

export default ResumePage;