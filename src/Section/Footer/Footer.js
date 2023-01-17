import React from 'react'
import {Container , Row , Col } from "react-bootstrap";


const Footer = () => {
  return (
    <div>
      <Container fluid>
      <Row>
        <Col lg="12">
         <Row>
            <Col lg="3">
                <h4>popular catogories</h4>
                <span>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </span>
            </Col>
            <Col lg="3"></Col>
            <Col lg="3"></Col>
            <Col lg="3"></Col>
         </Row>
        </Col>
        <Col lg="12"></Col>
      </Row>
      </Container>
    </div>
  )
}

export default Footer
