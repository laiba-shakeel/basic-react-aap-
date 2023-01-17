import React from "react";
import { img1, appleLogo, googleLogo, hawaiLogo } from "../../assets/";

import { Container, Row, Col } from "react-bootstrap";

const style = {
  img: {
    backgroundImage: "cover",
    width: "auto",
    maxWidth: "400px",
  },
  mainStyle: {
    borderColor: "#cfe8fc",
    border: "2px solid #cfe8fc",
    // height: "40vh",
    marginBottom: "5%",
    width: "100%",
    backgroundColor: "#F7F8F9",
  },
  VerticalLine: {
    height: "150px",
    borderLeft: "1px solid",
    left: "90%",
    color: "textprimary",
  },
  heading: {
    color: "black",
    fontWidth: "blod",
    fontSize: "16px",
  },
};
const TagGetApps = () => {
  return (
    <div>
      <Container fluid style={style.mainStyle}>
        <Row className="d-flex justify-content-center align-items-center">
          <Col lg="6" md="6">
            <img src={img1} alt="" style={style.img} />
          </Col>
          <Col lg="6" md="6" style={style.VerticalLine}>
            <Row className="ps-3 pt-4">
              <Col lg="12" className="fw-bold text-start" style={style.heading}>
                GET YOUR APP TODAY
              </Col>
              <Col lg="4" xs="4">
                <img src={googleLogo} alt="logo" />
              </Col>
              <Col lg="4" xs="4">
                <img src={appleLogo} alt="logo" />
              </Col>
              <Col lg="4" xs="4">
                <img src={hawaiLogo} alt="logo" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TagGetApps;
