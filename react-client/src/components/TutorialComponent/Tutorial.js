import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, Modal, Carousel } from 'react-bootstrap';
import TutorialStyles from './tutorial.module.css';
import logo from '../../../../react-client/dist/react-client/react-native.png';
import logo2 from '../../../../react-client/dist/react-client/react-nav.png';

class TutorialPage extends Component{ 
    

    tutorialDefault = () => { 
        let jsx;
         jsx= (
            <div className={Styles['main']}>
                <div className={TutorialStyles['tutorial-section']}>
                    <Container>
                    <Row>
                        <Col md={{ span: 4 }}>
                            <Card>
                                <Card.Body>
                                    <Card.Img variant="top" src={logo} style={{height:'310px'}}/>
                                    <Card.Title>Multi-Step Form in React Native</Card.Title>
                                    <Card.Text>
                                    Understand the basics of how to create a Multi-Step form, in React native, by clicking the button below
                                    </Card.Text>
                                    <Button variant="primary" tag ={1} >Explore</Button>
                                </Card.Body>
                            </Card>;
                        </Col>
                        <Col md={{ span: 4 }}>
                            <Card>
                                <Card.Body>
                                    <Card.Img variant="top" src={logo2} style={{height:'310px'}} />
                                    <Card.Title>Drag up! Bottom Sheet with React Navigation</Card.Title>
                                    <Card.Text>
                                    Digging into the 'react-nativation' library to place a bottom sheet directly above the bottom tab navigator. Find out how below!
                                    </Card.Text>
                                    <Button variant="primary" tag ={2} >Explore</Button>
                                </Card.Body>
                            </Card>;
                        </Col>
                    </Row>
                    </Container>
                </div>  

            </div>
        );
        return jsx;
    }

    render() {
        return (
          <React.Fragment>
                {this.tutorialDefault()}
          </React.Fragment>
        )
    }

}

export default TutorialPage;