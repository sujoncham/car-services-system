import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import GoogleMaping from "../Components/GoogleMap/GoogleMaping";
import PageTitle from "../Shared/PageTitle/PageTitle";

const Contact = () => {
  return (
    <Container>
    <Row>
      <PageTitle title="Contact"></PageTitle>
      <h1 className="text-center mt-5 mb-5">Contact with us</h1>
      <Col xs={12} md={6} lg={6}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
      <Col xs={12} md={6} lg={4}>
        <GoogleMaping></GoogleMaping>
      </Col>
    </Row>
    </Container>
  );
};

export default Contact;
