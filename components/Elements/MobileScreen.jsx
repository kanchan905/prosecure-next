"use client";
import { Row, Col, Card, CardBody } from "react-bootstrap";
import styled from "styled-components";

export default function MobileAppScreen() {
  return (
    <Section>
      <div className="container-md container-fluid">
        <Card className="bg-dark text-white" style={{ background: "#000" }}>
          <CardBody>
            <Row>
              <Col sm="6" md="6" lg="5" className="col-flex">
                <ContentBlock>
                  <h2 className="card-title">
                    Western Safety Patrol <br /> Mobile App
                  </h2>
                  <p>
                    Our mobile app is designed to provide you with the best safety patrol services at your fingertips. Whether you're at home or on the go, you can rely on Western Safety Patrol to keep you safe and secure.
                  </p>
                </ContentBlock>
              </Col>
              <Col sm="6" md="6" lg="7">
                <ImageBlock>
                  <img src="/frontend/assets/app-screen/Phone_Screenshot_2.png" className="app-screen-1" alt="phone image" />
                  <img src="/frontend/assets/app-screen/Phone_Screenshot_3.png" className="app-screen-2" alt="phone image" />
                </ImageBlock>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Row className="my-5">
          <Col sm="6" md="6" lg="6" className="col-flex">
            <div className="features">
              <h2>Key Features</h2>
              <ul>
                <li>24/7 Safety Monitoring</li>
                <li>Real-time Alerts and Notifications</li>
                <li>Easy-to-use Interface</li>
                <li>GPS Tracking</li>
                <li>Instant Emergency Assistance</li>
              </ul>
              <p className="mb-2">Download app from</p>
              <CustomLink href="https://play.google.com/store/apps/details?id=com.wsppatrolemployee" target="_blank" rel="noopener noreferrer">
                <img src="/frontend/assets/image/play_store.png" className="play-store" alt="play store" />
              </CustomLink>
              <CustomLink href="https://apps.apple.com/in/app/western-safety-patrol/id6502806040" target="_blank" rel="noopener noreferrer">
                <img src="/frontend/assets/image/app_store.png" className="app-store" alt="app store" />
              </CustomLink>
            </div>
          </Col>
          <Col sm="6" md="6" lg="6" className="col-flex">
            <ImageBlock>
              <img src="/frontend/assets/app-screen/Phone_Screenshot_2.png" className="feature-screen" alt="phone image" />
            </ImageBlock>
          </Col>
        </Row>
        <Row className="my-5 reverse-block">
          <Col sm="6" md="6" lg="6" className="col-flex">
            <ImageBlock>
              <img src="/frontend/assets/app-screen/SOS-alert.png" className="feature-screen" alt="phone image" />
            </ImageBlock>
          </Col>
          <Col sm="6" md="6" lg="6" className="col-flex">
            <div className="features">
              <h2>SOS Alert</h2>
              <ul>
                <li>Medical Emergency</li>
                <li>Fire Emergency</li>
                <li>Suspicious Activity</li>
                <li>View SOS Location</li>
                <li>Instant Emergency Assistance</li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </Section>
  );
}

const Section = styled.section`
    
    padding: 2em 0;

    .card{
        height: 400px;
    }

    .col-flex{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .features ul {
        list-style-type: disc;
        padding: 0;
    }
    
    .features li {
        margin: 10px 0;
        margin-left: 2.5em;
    }    

    @media (max-width: 991px) { 
    
        .col-flex{
            font-size: 15px;
            align-items: center;
            justify-content: center;
        }
    }
    @media (max-width: 767px) { 
        .card{
            height: 100%;
        }
        .col-flex{
            font-size: 14px;
            align-items: center;
            justify-content: center;
            margin-bottom: 2em;
        }
    }
    @media (max-width: 575px){
        .reverse-block{
            flex-direction: column-reverse;
        }

    }

`
const ContentBlock = styled.div`
    width: 40%;
    position: absolute;
    top:71px;
    left:100px;

    .card-title{
        font-size: 2.2em;
    }
    p{
        margin-top: 1em;
        font-size: 1.2em;
    }
    @media (max-width: 991px) { 
        left: 54px;

        .card-title{
            font-size: 20px;
        }
        p{
            margin-top: 1em;
            font-size: 15px;
        }
    }
    @media (max-width: 767px) { 
        width: 100%;
        position: unset;
        left:0;
        top:0;

        .card-title{
            font-size: 20px;
        }
        p{
            margin-top: 1em;
            font-size: 15px;
        }
    }
`

const ImageBlock = styled.div`
    position: relative;
    img{
        width:163px;
    }

    .feature-screen{
        width:200px;
    }

    .app-screen-1, .app-screen-2{
        position: absolute;
    }
    .app-screen-1{
        top: 7px;
        left: 245px;
        transform: rotateZ(13deg);
        z-index: 10;
    }
    .app-screen-2{
        top: 7px;
        right: 133px;
    }

    @media (max-width: 991px) { 
        img{
            width:120px;
        }
        .app-screen-1{
            top: 21px;
            left: 158px;
            transform: rotateZ(0deg);
            z-index: 10;
        }
    }
    @media (max-width: 767px) { 
        display: flex;
        justify-content: space-evenly;
        padding: 2em 0;


        .app-screen-1, .app-screen-2{
            position: unset;
            left: 0;
            top: 0;
        }

        
    }
`


const CustomLink = styled('a')({
    textDecoration: 'none',
    marginTop: '1em',
    marginRight: '1em',
    '& img': {
        width: '159px',
        aspectRatio: '1/0.3',
        '&:hover': {
            color: '#fff',
            opacity: '0.8',
        },
    },
    '& .app-store':{
        opacity: '1',
    },
    '&:has(.app-store)':{
        pointerEvents: 'auto',
        cursor: 'pointer',
    },

    '@media (max-width: 991px)': { 
        '& img':{
            width:'140px',
        },
        
    }
});