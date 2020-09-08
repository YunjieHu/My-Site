import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import portfolioStyles from './portfolio.module.css';
import logo from '../../../../react-client/dist/react-client/logo.png';
import logo2 from '../../../../react-client/dist/react-client/lamp.png';
import logo3 from '../../../../react-client/dist/react-client/3d.png';
import logo4 from '../../../../react-client/dist/react-client/tonite.png';
import ShowcaseModal from './ShowcaseModals/Modal'

class PortfolioPage extends Component{ 
    constructor(props, context) {
        super(props, context);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);    
        this.state = {
            modalContent:'',
            isModalOpen: false,
        };
    }

    
    handleClose() {
        this.setState({ isModalOpen: false });
    }
    
    handleShow(e) {
        const selection = e.target.getAttribute('tag');
        let content;
        switch (selection){
            case '1' :
                content = 'ustart'
                break;
            case '2':
                content = 'hexaplex'
                break;
            case '3':
                content = 'tonite'
                break;
        }
        this.setState({ 
            modalContent: content,
            isModalOpen: true });
    }
    

    portfolioDefault = () => { 
        let jsx;
         jsx= (
            <div className={portfolioStyles['main']}>
                <div className={portfolioStyles['portfolio-section']}>
                    <Container>
                    <Row>
                        <Col md={{ span: 4 }}>
                            <Card className={portfolioStyles['card']}>
                                <Card.Body>
                                    <Card.Img variant="top" src={logo} />
                                    <Card.Title>U∙START</Card.Title>
                                    <Card.Text>
                                    U∙START is a social networking platform that allows for students to find collaborators for marketable, real world projects.
                                    </Card.Text>
                                    <Button variant="primary" tag ={1} onClick={this.handleShow}>See More</Button>
                                </Card.Body>
                            </Card>;
                        </Col>
                        <Col md={{ span: 4 }}>
                            <Card className={portfolioStyles['card']} >
                                <Card.Body>
                                    <Card.Img variant="top" src={logo4} style={{height:'310px'}} />
                                    <Card.Title>Tonite</Card.Title>
                                    <Card.Text>
                                    My side project, Tonite is a dating app project with a unique & refreshing design. This upcoming mobile app is written using React Native.
                                    </Card.Text>
                                    <Button variant="primary" tag ={3} onClick={this.handleShow}>See More</Button>
                                </Card.Body>
                            </Card>;
                        </Col>
                        <Col md={{ span: 4 }}>
                            <Card className={portfolioStyles['card']}>
                                <Card.Body>
                                    <Card.Img variant="top" src={logo3} style={{height:'310px'}} />
                                    <Card.Title>Project HexaPlex</Card.Title>
                                    <Card.Text>
                                    HexaPlex is an eco-friendly, modular, and economical storage solution. Produced from laser cutting, Hexaplex can be easily tailored to your everyday needs.
                                    </Card.Text>
                                    <Button variant="primary" tag ={2} onClick={this.handleShow}>See More</Button>
                                </Card.Body>
                            </Card>;
                        </Col>
                        <Col md={{ span: 4 }}>
                            <Card className={portfolioStyles['card']}>
                                <Card.Body>
                                    <Card.Img variant="top" src={logo2} />
                                    <Card.Title>This Site</Card.Title>
                                    <Card.Text>
                                    I created this site to learn how to setup webpack and babel from scratch. The SVG animations are done using GSAP's amazing animation libraries.
                                    </Card.Text>
                                    <Button variant="primary" href ="https://github.com/YunjieHu/My-Site" >See More</Button>
                                </Card.Body>
                            </Card>;
                        </Col>
                    </Row>
                    </Container>
                </div>  

                <ShowcaseModal isModalOpen={this.state.isModalOpen} onHide={this.handleClose} content ={this.state.modalContent}/>
            </div>
        );
        return jsx;
    }

    render() {
        return (
          <React.Fragment>
                {this.portfolioDefault()}
          </React.Fragment>
        )
    }

}

export default PortfolioPage;