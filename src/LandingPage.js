import React, {useRef} from 'react'
import {Button, Image, Row, Col, Form, Container} from 'react-bootstrap'
import {Link} from "react-router-dom";

import handleViewport from 'react-in-viewport';
import emailjs from '@emailjs/browser';

import {updateEmailList} from './firebase/APIs.js';

import "./animationStyles.css"
import "./responsiveStyles.css"

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
    <div className='topBarDiv'>
      <div style={{display: "flex", flexDirection: "row"}}>
        <Image src={require("./images/linkLogoWhite.svg").default} className='companyLogo' />
        <div className='comanyNameDiv' >
          LINK
        </div>
      </div>
      <Button 
        className="buttonStyle getAppButton"
        variant="light"
        onClick={() => waitlistRef.current.scrollIntoView()}
      >
        GET THE APP
      </Button>
    </div>
    {/* catch phrase */}
    <div className="slider" style={{marginTop: "3vw"}}>
      <div className='sliderRight tripleCatchPhraseDiv' >
        <div className='singleTripleCatchPhraseDiv' >
          NOTHING IS EVER FUN ALONE...
        </div>
        <div className='singleTripleCatchPhraseDiv' >
          NOTHING IS EVER FUN ALONE...
        </div>
        <div className='singleTripleCatchPhraseDiv' >
          NOTHING IS EVER FUN ALONE...
        </div>
      </div>
      <div style={{color: "#FFFFFF", textAlign: "center"}}>
        <div >
          <Image src={require("./images/star.png")} className='starImage'/>
          <Image src={require("./images/basketBallImage.png")} className='basketBallImage'/>
        </div>
        <div className="slider">
          <div className="sliderUp catchPhraseDiv" >
            NOTHING IS EVER FUN ALONE...
          </div>
        </div>
        <div className="slider">
          <div className="sliderUp yesEvenThatDiv">
            - yes, even that
          </div>
        </div>
        <Container fluid>
          <Row>
            <Col className='noDisplayOnMobile'>
              <Image className='zoomOut' src={require("./images/outdoorParty.svg").default} style={{width:"22vw", marginTop: "0.5vw"}}/>
            </Col>
            <Col>
              <div className="slider">
                <div className="sliderUp lessChatMoreActionDiv">
                  <div style={{textDecoration: "line-through"}}>LESS CHAT, MORE ACTION</div>
                  <div className='noChatJustAction'> NO CHAT, JUST ACTION </div>
                </div>
              </div>
              <div className="slider joinWaitListButtonDiv">
                <Button 
                  className="buttonStyle sliderUp joinWaitListButton" 
                  variant="light" 
                  onClick={() => waitlistRef.current.scrollIntoView()}
                >
                  JOIN THE WAITLIST
                </Button>
              </div>
              <Image 
                src={require("./images/arrows.svg").default}  
                className='arrowImage'
                onClick={() => howDoesItWorkref.current.scrollIntoView()}
              />
            </Col>
            <Col className='noDisplayOnMobile'>
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
    <div style={{textAlign: "center"}}>
      <div style={{color: "#FFFFFF", textAlign: "center"}}>
        <div className="letsLinkDiv">
          LET'S LINK!
        </div>
        <div className="whatAreYouUpToDiv">
          what are you up for?
        </div>
        <div className="appDescriptionDiv">
          music, sports, weekend trips, drinks... There are no limits. Now is the time to find and do the things you've always wanted to do!
        </div>
      </div>
      <div className="collageImages slider" style={{position: "relative", top: "-4vw"}}>
        <div className='collageImage3 noDisplayOnWeb' style={{position: "relative", zIndex: "-10", top: "25vw"}}>
          <Image src={require("./images/collageImage3.svg").default} className="collageImageWidth"/>
        </div>
        <div className='collageRow1Div'>
          <div className='collageImage1 collageImage1Div'>
            <Image src={require("./images/collageImage1.svg").default} className="collageImageWidth"/>
          </div>
          <div className='collageImage5 collageImage5Div'>
            <Image src={require("./images/collageImage5.svg").default} className="collageImageWidth"/>
          </div>
        </div>

        <div className='collageRow2Div'>
          <div className='collageImage3 noDisplayOnMobile' style={{position: "relative", zIndex: "-10", left: "13vw"}}>
            <Image src={require("./images/collageImage3.svg").default} className="collageImageWidth"/>
          </div>
          <div className='collageImage7Div'>
            <Image src={require("./images/collageImage7.svg").default} className="collageImageWidth"/>
          </div>
          <div className='collageImage4 noDisplayOnMobile' style={{position: "relative", zIndex: "-10", left: "22vw"}}>
            <Image src={require("./images/collageImage4.svg").default} className="collageImageWidth"/>
          </div>
        </div>

        <div className='collageRow3Div'>
          <div className='collageImage2 collageImage2Div'>
            <Image src={require("./images/collageImage2.svg").default} className="collageImageWidth"/>
          </div>
          <div className='collageImage2 collageImage6Div'>
            <Image src={require("./images/collageImage6.svg").default} className="collageImageWidth"/>
          </div>
        </div>
        <div className='collageImage4 noDisplayOnWeb' style={{position: "relative", zIndex: "-10", left: "0vw", bottom: "25vw"}}>
          <Image src={require("./images/collageImage4.svg").default} className="collageImageWidth"/>
        </div>
      </div>
    </div>
    {/* iphone group */}
    <IphoneGroupViewPortBlock/>
    {/* join the wait list */}
    <div ref={waitlistRef} className="joinWaitListDiv">
      <div className='joinWaitListTextDiv'>
        Join the waitlist and get notified when we launch
      </div>
      <div>
        <Form ref={formRef} onSubmit={sendWaitListEmail} style={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop:"2.5vw"}}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control ref={emailRef} type="email" name="user_email" placeholder="Enter your email address" />
          </Form.Group>
          <Button 
            className='buttonStyle2 joinWaitListSubmitButton' 
            variant="dark" 
            type="submit" 
          >
            Join the waitlist
          </Button>
        </Form>
      </div>
    </div>
    {/* footer */}
    <div style={{textAlign: "center", color: "#CCCCCC", padding: "3vw 0"}}>
      <div className='linkTextDiv'>
        LINK
      </div>
      <div className='rightsTextDiv'>
        2022 LINK, Inc. All right reserved.
      </div>
      <div className='rightsTextDiv'>
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
    <div ref={forwardedRef} className="iphoneInstructionsDiv">
        <div style={{color: "#FFFFFF", textAlign: "center"}}>
            <div className="slider">
            <div className={`${animationStyleSliderUp} letsLinkDiv`}>
                LET'S LINK!
            </div>
            </div>
            <div className="slider">  
            <div className={`${animationStyleSliderUp} whatAreYouUpToDiv`}>
                how does it work?
            </div>
            </div>
            <div className="slider">
            <div className={`${animationStyleSliderUp} appDescriptionDiv`}>
                All you need to do create or join a group and that's all the magic to it
            </div>
            </div>
        </div>
        <div className="slider">
            <div className={animationStyleSliderRight}>
                <div className='iphoneCard1Div1'>
                  <div className='iphoneCard1Div2'>
                    <div style={{padding: "1vw 1vw 1vw 1vw", width: "82%"}}>
                      <div className='iphoneCardJoinGroupDiv'>
                        Join a group
                      </div>
                      <div>
                        You can choose to join existing groups and sort based on your interests be it social, sports and all sorts.
                      </div>
                    </div>
                    <div style={{display: "flex", flexDirection: "col", justifyContent:"center", alignItems:"center", backgroundColor: "#E69D37", width: "18%"}}>
                      <Image src={require("./images/linkLogoWhite.svg").default} className='iphoneCardLogoImageWidth'/>
                    </div>
                  </div>
                </div>
                <div className='iphoneCardVectorLeftDiv'>
                    <Image src={require("./images/vectorLeft.svg").default} className='iphoneCardVectorLeftImage'/>
                </div>
            </div>
            <div className={animationStyleSliderLeft}>
                <div className='iphoneCard2Div1'>
                    <div className='iphoneCard2Div2'>
                        <div style={{display: "flex", flexDirection: "col", justifyContent:"center", alignItems:"center", backgroundColor: "#E69D37", width: "18%"}}>
                            <Image src={require("./images/linkLogoWhite.svg").default} className='iphoneCardLogoImageWidth'/>
                        </div>
                        <div style={{padding: "1vw 1vw 1vw 1vw", width: "82%"}}>
                            <div className='iphoneCardJoinGroupDiv'>
                            Create a group
                            </div>
                            <div>
                            You can also create your own group, listing out all the specific details for other people to join in.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='iphoneCardVectorRightDiv'>
                    <Image src={require("./images/vectorRight.svg").default} className='iphoneCardVectorRightImage'/>
                </div>
            </div>
            <div className={animationStyleSliderLeft}>
                <div className='iphoneCard3Div1'>
                    <div className='iphoneCard2Div2'>
                        <div style={{display: "flex", flexDirection: "col", justifyContent:"center", alignItems:"center", backgroundColor: "#E69D37", width: "18%"}}>
                            <Image src={require("./images/linkLogoWhite.svg").default} className='iphoneCardLogoImageWidth'/>
                        </div>
                        <div style={{padding: "1vw 1vw 1vw 1vw", width: "82%"}}>
                            <div className='iphoneCardJoinGroupDiv'>
                            View group details
                            </div>
                            <div>
                            Check out group details to know stuff like where and time to meet up.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='iphoneImageDiv'>
                <Image src={require("./images/iphoneHomePage.svg").default} className='iphoneImage'/>
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
        <div className="whatAreYouUpToDiv">
          do more things you like
        </div>
        <div className="appDescriptionDiv">
          LINK is simple, fun and productive. You can create or discover. Join groups and engage in activities you love, either with strangers or friends. Now you are never alone!
        </div>
      </div>
      <div className="slider">
        <div className={`${animationStyle} iphoneGroupImageDiv`} id="sliderUpIphoneGroup">
          <Image src={require("./images/iphoneGroup.svg").default} className="iphoneGroupImage"/>
        </div>
      </div>
    </div>
  );
});

