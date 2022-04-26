import axios from "axios";
import { Toast } from "bootstrap";
import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import useCheckOutService from "../../Hooks/useCheckOutService";
import PageTitle from "../../Shared/PageTitle/PageTitle";

const CheckOut = () => {
    const [user] = useAuthState(auth);
  const { serviceId } = useParams();
  const [service] = useCheckOutService(serviceId);

    const chackOutFormSubmit = event =>{
        event.preventDefault();
        const order = {
            name: user.displayName,
            email: user.email,
            service: service.title,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value,
        }
        axios.post('https://stormy-caverns-39639.herokuapp.com/order', order)
        .then(response =>{
           const data = response; 
           if(data.insertedId){
              Toast('booked your order');
               event.target.reset();
           }
        })
    }

  return (
    <Container>
        <PageTitle title="CheckOut"></PageTitle>
        <Row className="w-50 mx-auto">
      <h3>Checkout Id : {serviceId}</h3>
      <h4>name: {service.title}</h4>
      <Form onSubmit={chackOutFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your name</Form.Label>
          <Form.Control type="text" value={user?.displayName} placeholder="Enter name" readOnly disabled />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" value={user?.email} placeholder="Enter email" readOnly disabled />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicService">
          <Form.Label>Your Service</Form.Label>
          <Form.Control type="text" value={service.title} placeholder="Enter Service" readOnly disabled />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Your address</Form.Label>
          <Form.Control type="text" name="address" autoComplete="off" placeholder="Enter address" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone number</Form.Label>
          <Form.Control type="text" name="phone" placeholder="Phone number" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Row>
    </Container>
  );
};

export default CheckOut;
