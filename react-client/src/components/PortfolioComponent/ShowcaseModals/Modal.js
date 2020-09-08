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
import finalproto from '../../../../../react-client/dist/react-client/project2.png'
import tonite1 from '../../../../../react-client/dist/react-client/tonite1.png'
import tonite2 from '../../../../../react-client/dist/react-client/tonite2.png'
import tonite3 from '../../../../../react-client/dist/react-client/tonite3.png'
import tonite4 from '../../../../../react-client/dist/react-client/tonite4.png'
import tonite5 from '../../../../../react-client/dist/react-client/tonite5.png'
import tonite6 from '../../../../../react-client/dist/react-client/tonite6.png'
import tonite7 from '../../../../../react-client/dist/react-client/tonite7.png'
import tonite8 from '../../../../../react-client/dist/react-client/tonite8.png'
import tonite9 from '../../../../../react-client/dist/react-client/tonite9.png'
import tonite10 from '../../../../../react-client/dist/react-client/tonite10.png'
import tonite11 from '../../../../../react-client/dist/react-client/tonite11.png'
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
        if (this.props.content === 'tonite'){
            return(
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={tonite1}
                        alt="tonite1"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={tonite2}
                        alt="tonite2"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={tonite3}
                        alt="tonite3"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={tonite4}
                        alt="tonite4"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={tonite5}
                        alt="tonite5"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={tonite6}
                        alt="tonite6"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={tonite7}
                        alt="tonite7"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={tonite8}
                        alt="tonite8"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={tonite9}
                        alt="tonite9"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={tonite10}
                        alt="tonite10"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={tonite11}
                        alt="tonite11"
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