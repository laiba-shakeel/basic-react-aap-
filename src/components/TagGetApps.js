import React from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import {
  Container,
  Row,
  Col,
}from "react-bootstrap"
import img1 from "../assets/olxMobile.jpg";

const TagGetApps = () => {
  return (
    <div>
      <Container fluid className="mb-5 border" style={{
        BackgroundColor: "#808080"
      }}>
        <Row className="">
          <Col xs={6}>
            <div>
              <img src={img1} alt="img" />
            </div>
          </Col>
          <Col>
            <div
              className="align-items-center"
              style={{
                width: "0.2rem",
                margin: "0 auto",
                backgroundColor: "rgba(0,47,52,.2)",
                height: "10.5rem",
                textAlign: "center"
              }}></div>
          </Col>
          <Col className="ms-0 , me-0">
            <div className="LastOne">
              <h3
                style={{
                  color: "Black",
                  fontSize: "18px",
                  fontWeight: "bolder",
                }}>
                Get your App Today
              </h3>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TagGetApps;
