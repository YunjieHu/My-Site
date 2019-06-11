import React, { Component } from "react";
import { Modal, Carousel, Button } from 'react-bootstrap';
import portfolioStyles from '../portfolio.module.css';
import dashboard from '../../../../../react-client/dist/react-client/ustart_dashboard.png';
import profile from '../../../../../react-client/dist/react-client/ustart_profile.jpg';
import project from '../../../../../react-client/dist/react-client/ustart_project.jpg';
import search from '../../../../../react-client/dist/react-client/ustart_search.png'
import prototype1 from '../../../../../react-client/dist/react-client/prototype.png';
import prototype2 from '../../../../../react-client/dist/react-client/sketch.png';
import moodboard from '../../../../../react-client/dist/react-client/moodboard.png';
import finalproto from '../../../../../react-client/dist/react-client/idmproject2.png'

class ShowcaseModal extends Component{
    showContent(){
        if (this.props.content === 'ustart'){
            return(
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={profile}
                        alt="Profile"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={project}
                        alt="Project"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={dashboard}
                        alt="Dashboard"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={search}
                        alt="Search"
                        />
                    </Carousel.Item>
                </Carousel>
            );
        }
        if (this.props.content === 'hexaplex'){
            return(
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={moodboard}
                        alt="moodboard"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={prototype1}
                        alt="Prototype1"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={prototype2}
                        alt="Prototype2"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={finalproto}
                        alt="Finalproto"
                        />
                    </Carousel.Item>
                </Carousel>
            );
        }
    }
    render(){
        return(
            <Modal show={this.props.isModalOpen} onHide={this.props.onHide}   backdrop={true} dialogClassName={portfolioStyles["modal"]}>
                        <Modal.Body>
                            {this.showContent()}
                        </Modal.Body>
                </Modal>
        );
    }
}
export default ShowcaseModal;