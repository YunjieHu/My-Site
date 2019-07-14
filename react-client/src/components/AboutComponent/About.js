import React, { Component } from 'react';
import pageStyles from './about.module.css';
import { Container } from 'react-bootstrap';

class About extends Component {

    aboutDefault = () => { 
        let jsx;
         jsx= (
            <div className={pageStyles['main']}>
                    <Container>
                        <div className={pageStyles['about-body']}>
                            <h1>About me</h1>
                            <p>
                            Yunjie Hu is the front end developer of <a href ="https://www.ustart.today/">U∙START</a>, a social networking platform aimed to provide students with opportunities to gain valuable professional experience. He enjoys tackling complex, real world problems with creativity to convert them into simple, elegant solutions. He believes that collaboration with other talented individuals from a wide range of disciplines can lead to innovative concepts crucial to any project’s long term success.
 <br/> His current work consists of analysis and design, as well as construction and testing of web applications. By employing his refined critical thinking skills, he strives to streamline processes, maximize their efficiency, and establish strong, professional relationships within organizations.
                            </p>
                        </div>
                    </Container>
            </div>
        );
        return jsx;
    }

    render() {
        return (
          <React.Fragment>
                {this.aboutDefault()}
          </React.Fragment>
        )
    }
}

export default About;