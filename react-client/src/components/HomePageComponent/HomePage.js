import React, { Component } from 'react';
import Banner from '../../svg/homePage.svg'
import { TimelineMax, CSSPlugin } from "gsap/all";
import homePageStyles from './homepage.module.css';
import globalStyles from "../bootstrap.min.module.css";
import Footer from "../ FooterComponent/Footer"
import cx from 'classnames';
import { Container, Row, Col, ButtonToolbar } from 'react-bootstrap';

class HomePage extends Component {
  constructor(props){
    super(props);
    this.myTween = new TimelineMax();
    this.assets = ({
      bgd: '',
      table: '',
      lampLeg: '',
      lampbt: '',
      lampLight: '',
      lampLine: '',
      lampLineB : '',
      lampLineT: '',
      lampCircle: '',
      lampHead: '',
      lampHeader: '',
      lampBody : '',
      computer : '',
      text: '',
      keyboard : '',
      screen: '',
      other : ''
    })
  }
  componentDidMount(){
    this.assets.bgd = document.querySelector('#background rect');
    this.assets.table = document.querySelectorAll('#table_legs, #table');
    this.assets.lampLeg = document.querySelector('#lamp > .lamp-leg');
    this.assets.lampbt= document.querySelector('#lamp-bottom');
    this.assets.lampLight= document.querySelector('#lamp > .light');
    this.assets.lampLine= document.querySelector('#lamp-line');
    this.assets.lampLineB = document.querySelector('#lamp-line-b');
    this.assets.lampLineT= document.querySelector('#lamp-line-t');
    this.assets.lampCircle= document.querySelector('#lamp-circle');
    this.assets.lampHead= document.querySelector('#lamp-head');
    this.assets.lampHeader= document.querySelector('#lamp-header');
    this.assets.lampBody = document.querySelector('#lamp-body');
    this.assets.computer = document.querySelectorAll('#computer > *');
    this.assets.screen= document.querySelector('#computer rect');
    this.assets.text = document.querySelectorAll('#text');
    this.assets.other = document.querySelectorAll('#computer_mouse > * , #coffee_mug > *');
    this.assets.keyboard = document.querySelectorAll('#keyboard > *');
    console.log(this.assets.text);
    this.myTween.from(this.assets.bgd, 0.2, {opacity:0, scale:0, transformOrigin: 'center center'})
    .staggerFrom(this.assets.table, 0.2, {y:"-=200", opacity: 0, ease: Elastic.easeOut}, 0.1)
    .staggerFrom(this.assets.computer, 1, {opacity: 0, scale: 0, transformOrigin: 'center center', ease: Back .easeOut}, 0.2)
    .staggerFrom(this.assets.keyboard, 0.5, {opacity: 0, y: '-=100', ease: Linear.easeInOut }, 0.05)
    .staggerFrom(this.assets.other, 0.5, {opacity: 0}, 0.05)
    .to(this.assets.lampLight, 0.2, {opacity:0.8, ease: Elastic.easeOut, delay:0.5}, "a")
    .to(this.assets.lampLight, 0.1, {opacity:0}, "b")
    .to(this.assets.lampLight, 0.1, {opacity:0.2}, "c")
    .to(this.assets.bgd, 0.2, {opacity: 0.1, delay:0.5}, "a-=0.05")
    .to(this.assets.bgd, 0.1, {opacity: 1}, "b-=0.05")
    .to(this.assets.bgd, 0.1, {opacity: 0.5}, "c-=0.05")
    .to(this.assets.bgd, 0.2, {opacity: 1, fill: '#FDD10D'})
    .fromTo(this.assets.lampLine, 0.2, {opacity: 0},{opacity: 0.2, delay:0.5}, "a-=0.05")
    .to(this.assets.lampLine, 0.1, {opacity: 1}, "b-=0.05")
    .to(this.assets.lampLine, 0.1, {opacity: 0.5}, "c-=0.05")
    .to(this.assets.screen, 0.2, {opacity: 1, fill: '#87cefa'})
    .to(this.assets.text, 1, {text:{
      value: "Welcome"
    }, ease:Linear.easeNone})
    .to(this.assets.text, 2, {text:{
      value: "I'm Yunjie Hu"
    }, ease:Linear.easeIn})
    
  }
  render() {
    return (
      <React.Fragment>
        <div className={homePageStyles['main']}>
          <span dangerouslySetInnerHTML={{__html: Banner}} />
        </div>
        <div className={homePageStyles['promo-section']}>
        <Container>
            <Row>
                <Col md={{ span: 12 }}>
                    <h2 className={homePageStyles['promo-header']}>
                          Creator, Entrepreneur, Programmer
                    </h2>
                    <h5 className={homePageStyles['promo-desc']}>
                          Welcome to my Site
                    </h5>
                    <br/>
                    <ButtonToolbar>
                    <a href="mailto:yunjiehu1112@gmail.com" className={cx(globalStyles['btn'],homePageStyles['btn'], homePageStyles['promo-btn'])}>CONTACT</a>
                    </ButtonToolbar>
                </Col>
            </Row>
        </Container>
      </div>
      <Footer/>
    </React.Fragment>
    )
  }
}


export default HomePage;