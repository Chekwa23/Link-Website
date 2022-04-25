import React, {useRef} from 'react'
import {Button, Image, Row, Col, Form, Container} from 'react-bootstrap'
import {Link} from "react-router-dom";

import handleViewport from 'react-in-viewport';
import emailjs from '@emailjs/browser';

import {updateEmailList} from './firebase/APIs.js';

import "./style.css"

export default function LandingPage() {
  const waitlistRef = useRef(null)
  const howDoesItWorkref = useRef(null)
  const formRef = useRef(null) 
  const emailRef = useRef(null)

  const sendWaitListEmail = (e) => {
    e.preventDefault();

    if(emailRef.current.value.length === 0){
      alert("Invalid email")
      return
    }
    emailjs.sendForm('service_r5ynn97', 'join_wait_list', formRef.current, 'hybkXDPp2uJG4OTum')
      .then((result) => {
          if(result.status === 200){
            updateEmailList(emailRef.current.value)
            emailRef.current.value = "";
            alert("You are officially on the Link wait list... We LINK soon!")
          }
      }, (error) => {
          alert("Error occured try again later or check your email address")
          console.error(error.text);
      });
  };

  return (
    <div>
    {/* Top bar */}
    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between",  margin: "2vw 8vw 0 8vw"}}>
      <div style={{display: "flex", flexDirection: "row"}}>
        <Image src={require("./images/linkLogoWhite.svg").default} style={{width: "2.5vw"}}/>
        <div style={{color: "#FFFFFF", fontSize: "1.6vw", marginLeft: "0.6vw"}}>
          LINK
        </div>
      </div>
      <Button 
        className="buttonStyle"
        variant="light"  
        style={{borderRadius: 0, fontSize: "0.8vw",fontWeight: "bold", padding: "0.7vw 1.8vw"}}
        onClick={() => waitlistRef.current.scrollIntoView()}
      >
        GET THE APP
      </Button>
    </div>

    <div className="slider" style={{marginTop: "3vw"}}>
      <div className="sliderRight" style={{left: "-11.7vw", zIndex: "-10", position: "absolute"}}>
        <div style={{fontSize:"6vw", fontWeight: "700", color: "#0E1724", lineHeight:"100%", textShadow: "-1px -1px 0 #999999, 1px -1px 0 #999999, -1px 1px 0 #999999, 1px 1px 0 #999999"}}>
          NOTHING IS EVER FUN ALONE...
        </div>
        <div style={{fontSize:"6vw", fontWeight: "700", color: "#0E1724", lineHeight:"100%", textShadow: "-1px -1px 0 #999999, 1px -1px 0 #999999, -1px 1px 0 #999999, 1px 1px 0 #999999"}}>
          NOTHING IS EVER FUN ALONE...
        </div>
        <div style={{fontSize:"6vw", fontWeight: "700", color: "#0E1724", lineHeight:"100%", textShadow: "-1px -1px 0 #999999, 1px -1px 0 #999999, -1px 1px 0 #999999, 1px 1px 0 #999999"}}>
          NOTHING IS EVER FUN ALONE...
        </div>
      </div>
      <div style={{color: "#FFFFFF", textAlign: "center"}}>
        <div >
          <Image src={require("./images/star.png")} style={{position: "absolute", width:"9vw", right: "38.5vw", top: "4.5vw" }}/>
          <Image src={require("./images/basketBallImage.png")} style={{width:"18vw", marginTop: "1vw"}}/>
        </div>
        <div className="slider">
          <div className="sliderUp" style={{fontSize:"4.4vw", fontWeight: "600", lineHeight:"100%"}} >
            NOTHING IS EVER FUN ALONE...
          </div>
        </div>
        <div className="slider">
          <div className="sliderUp" style={{fontSize:"1.8vw", color: "#E69D37", marginLeft: "45vw"}}>
            - yes, even that
          </div>
        </div>
        <Container fluid>
          <Row>
            <Col>
              <Image className='zoomOut' src={require("./images/outdoorParty.svg").default} style={{width:"22vw", marginTop: "0.5vw"}}/>
            </Col>
            <Col>
              <div className="slider">
                <div className="sliderUp" style={{fontSize:"1.4vw"}}>
                  <div style={{textDecoration: "line-through"}}>LESS CHAT, MORE ACTION</div>
                  <div style={{position: "relative", left: "1vw", bottom: "1.3vw", color: "#E69D37", fontWeight: "700"}}> NO CHAT, JUST ACTION </div>
                </div>
              </div>
              <div className="slider" style={{marginTop: "2.5vw"}}>
                <Button 
                  className="buttonStyle sliderUp" 
                  variant="light" 
                  style={{borderRadius: 0, fontSize: "0.8vw",fontWeight: "bold", padding: "0.7vw 1.8vw"}}
                  onClick={() => waitlistRef.current.scrollIntoView()}
                >
                  JOIN THE WAITLIST
                </Button>
              </div>
              <Image 
                src={require("./images/arrows.svg").default}  
                style={{width:"2vw", marginTop: "6vw", cursor: "pointer"}}
                onClick={() => howDoesItWorkref.current.scrollIntoView()}
              />
            </Col>
            <Col>
              <Image className='zoomOut' src={require("./images/burnFire.svg").default} style={{width:"22vw", marginTop: "3vw"}}/>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    {/* iphone */}
    <div ref={howDoesItWorkref}>
      <IphoneInstructionsViewPortBlock />
    </div>
    {/* Collage */}
    <div style={{marginTop: "15vw", textAlign: "center"}}>
      <div style={{color: "#FFFFFF", textAlign: "center"}}>
        <div className="" style={{fontSize:"0.8vw", letterSpacing: "0.2vw"}}>
          LET'S LINK!
        </div>
        <div className="" style={{fontSize:"2.8vw", fontWeight: "600"}}>
          what are you up for?
        </div>
        <div className="" style={{fontSize:"0.8vw", padding: "0 38vw"}}>
          music, sports, weekend trips, drinks... There are no limits. Now is the time to do the things you've always wanted to do!
        </div>
      </div>
      <div className="collageImages" style={{position: "relative", top: "-3vw"}}>
        <div style={{position: "relative", top: "8vw", display: "flex", flexDirection: "row"}}>
          <div className='collageImage1' style={{position: "relative", zIndex: "-15", left: "23.5vw"}}>
            <Image src={require("./images/collageImage1.svg").default} style={{width: "22vw"}}/>
          </div>
          <div className='collageImage5' style={{position: "relative", zIndex: "-5", left: "28.5vw"}}>
            <Image src={require("./images/collageImage5.svg").default} style={{width: "22vw"}}/>
          </div>
        </div>

        <div style={{position: "relative", display: "flex", flexDirection: "row"}}>
          <div className='collageImage3' style={{position: "relative", zIndex: "-10",  left: "13vw"}}>
            <Image src={require("./images/collageImage3.svg").default} style={{width: "22vw"}}/>
          </div>
          <div style={{position: "relative", zIndex: "-10", left: "18vw"}}>
            <Image src={require("./images/collageImage7.svg").default} style={{width: "22vw"}}/>
          </div>
          <div className='collageImage4' style={{position: "relative", zIndex: "-10", left: "22vw"}}>
            <Image src={require("./images/collageImage4.svg").default} style={{width: "22vw"}}/>
          </div>
        </div>

        <div style={{position: "relative", bottom: "6.5vw", display: "flex", flexDirection: "row"}}>
          <div className='collageImage2' style={{position: "relative", zIndex: "-5", left: "24.5vw"}}>
            <Image src={require("./images/collageImage2.svg").default} style={{width: "22vw"}}/>
          </div>
          <div className='collageImage2' style={{position: "relative", zIndex: "-5", left: "31vw"}}>
            <Image src={require("./images/collageImage6.svg").default} style={{width: "22vw"}}/>
          </div>
        </div>
      </div>
    </div>
    {/* iphone group */}
    <IphoneGroupViewPortBlock/>
    {/* join the wait list */}
    <div ref={waitlistRef} style={{backgroundColor: "#E69D37", textAlign: "center", padding: "5vw 28vw"}}>
      <div style={{fontSize:"2.8vw", fontWeight: "600", lineHeight: "3vw"}}>
        Join the waitlist and get notified when we launch
      </div>
      <div>
        <Form ref={formRef} onSubmit={sendWaitListEmail} style={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop:"2.5vw"}}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control ref={emailRef} type="email" name="user_email" placeholder="Enter your email address" />
          </Form.Group>
          <Button 
            className='buttonStyle2' 
            variant="dark" 
            type="submit" 
            style={{borderRadius: 0, fontSize: "0.8vw", padding: "0.7vw 1.8vw"}}
          >
            Join the waitlist
          </Button>
        </Form>
      </div>
    </div>
    {/* footer */}
    <div style={{textAlign: "center", color: "#CCCCCC", padding: "3vw 0"}}>
      <div style={{fontSize: "1.3vw", color: "#FFFFFF"}}>
        LINK
      </div>
      <div style={{fontSize: "0.8vw" }}>
        2022 LINK, Inc. All right reserved.
      </div>
      <div style={{fontSize: "0.8vw" }}>
        <span style={{marginRight: "1.5vw"}}><Link className='linkStyle' to="/privacy-policy">Privacy Policy</Link></span><span><Link className='linkStyle' to="/terms-of-service">Terms of Service</Link></span>
      </div>
    </div>
  </div>
  )
}

const IphoneInstructionsViewPortBlock = handleViewport((props) => {
  const { inViewport, forwardedRef } = props;
  const animationStyleSliderUp = inViewport ? 'sliderUp' : '';
  const animationStyleSliderRight = inViewport ? 'sliderRight' : '';
  const animationStyleSliderLeft = inViewport ? 'sliderLeft' : '';

  return (
    <div ref={forwardedRef} style={{marginTop: "10vw", textAlign: "center"}}>
      <div style={{color: "#FFFFFF", textAlign: "center"}}>
        <div className="slider">
          <div className={animationStyleSliderUp} style={{fontSize:"0.8vw", letterSpacing: "0.2vw"}}>
            LET'S LINK!
          </div>
        </div>
        <div className="slider">  
          <div className={animationStyleSliderUp} style={{fontSize:"2.8vw", fontWeight: "600"}}>
            how does it work?
          </div>
        </div>
        <div className="slider">
          <div className={animationStyleSliderUp} style={{fontSize:"0.8vw"}}>
            All you need to do is join or create a group and that's all the magic to it
          </div>
        </div>
      </div>
      <div className="slider">
        <div className={animationStyleSliderRight}>
          <div style={{position: "absolute", left: "24vw", marginTop: "10vw"}}>
            <div style={{width: "22vw", fontSize: "1vw", textAlign: "right", display: "flex", flexDirection: "row", backgroundColor: "#FFFFFF"}}>
              <div style={{padding: "1vw 1vw 1vw 1vw", width: "82%"}}>
                <div style={{color: "#2B72D6", fontWeight: "500", fontSize:"1.3vw"}}>
                  Join a group
                </div>
                <div>
                  You can choose to join existing groups and sort based on your interests be it social, sports and all sorts.
                </div>
              </div>
              <div style={{display: "flex", flexDirection: "col", justifyContent:"center", alignItems:"center", backgroundColor: "#E69D37", width: "18%"}}>
                <Image src={require("./images/linkLogoWhite.svg").default} style={{width: "2.5vw"}}/>
              </div>
            </div>
          </div>
          <div style={{position: "absolute", left: "46vw", marginTop: "15vw"}}>
            <Image src={require("./images/vectorLeft.svg").default} style={{width:"3vw"}}/>
          </div>
        </div>
        <div className={animationStyleSliderLeft}>
          <div style={{position: "absolute", right: "12.5vw", marginTop: "13vw"}}>
            <div style={{width: "22vw", fontSize: "1vw", textAlign: "left", display: "flex", flexDirection: "row", backgroundColor: "#FFFFFF"}}>
              <div style={{display: "flex", flexDirection: "col", justifyContent:"center", alignItems:"center", backgroundColor: "#E69D37", width: "18%"}}>
                <Image src={require("./images/linkLogoWhite.svg").default} style={{width: "2.5vw"}}/>
              </div>
              <div style={{padding: "1vw 1vw 1vw 1vw", width: "82%"}}>
                <div style={{color: "#2B72D6", fontWeight: "500", fontSize:"1.3vw"}}>
                  Create a group
                </div>
                <div>
                  You can also create your own group, listing out all the specific details for other people to join in.
                </div>
              </div>
            </div>
          </div>
          <div style={{position: "absolute", right: "34.2vw", marginTop: "14.5vw"}}>
            <Image src={require("./images/vectorRight.svg").default} style={{width:"5vw"}}/>
          </div>
        </div>
        <div className={animationStyleSliderLeft}>
          <div style={{position: "absolute", right: "27vw", marginTop: "33vw"}}>
            <div style={{width: "22vw", fontSize: "1vw", textAlign: "left", display: "flex", flexDirection: "row", backgroundColor: "#FFFFFF"}}>
              <div style={{display: "flex", flexDirection: "col", justifyContent:"center", alignItems:"center", backgroundColor: "#E69D37", width: "18%"}}>
                <Image src={require("./images/linkLogoWhite.svg").default} style={{width: "2.5vw"}}/>
              </div>
              <div style={{padding: "1vw 1vw 1vw 1vw", width: "82%"}}>
                <div style={{color: "#2B72D6", fontWeight: "500", fontSize:"1.3vw"}}>
                  View group details
                </div>
                <div>
                  Check out group details to know stuff like where and time to meet up.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{position: "relative", zIndex: "-10"}}>
          <Image src={require("./images/iphoneHomePage.svg").default} style={{width:"40vw"}}/>
        </div>
      </div>
    </div>
  )
});

const IphoneGroupViewPortBlock = handleViewport((props) => {
  const { inViewport, forwardedRef } = props;
  const animationStyle = inViewport ? 'sliderUp' : '';
  return (
    <div style={{textAlign: "center"}} ref={forwardedRef}>
      <div style={{color: "#FFFFFF", textAlign: "center"}}>
        <div className="" style={{fontSize:"2.8vw", fontWeight: "600"}}>
          do more things you like
        </div>
        <div className="" style={{fontSize:"0.8vw", padding: "0vw 35vw"}}>
          LINK is simple, fun, and productive. You can post and discover plan ideas, participate in groups, and plan activities together.
        </div>
      </div>
      <div className="slider">
        <div className={animationStyle} id="sliderUpIphoneGroup" style={{marginTop: "5vw"}}>
          <Image src={require("./images/iphoneGroup.svg").default} style={{width: "70vw"}}/>
        </div>
      </div>
    </div>
  );
});

