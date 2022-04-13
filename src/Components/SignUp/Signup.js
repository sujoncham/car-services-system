import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();

    const navigateLogin =()=>{
        navigate('/login')
    }

    const handleRegister = (event)=>{
        event.preventDefault();
        console.log(event.target.email.value);
    }

    return (
        <div className="w-25 mx-auto">
      <h1>Sign Up</h1>
      <Form onSubmit={handleRegister}>
      <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Enter password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="text" name='confirm-password' placeholder="confirm password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create Account
        </Button>
      </Form>
      <div>
          <p>Already have an account ? Please, <Link to="/login" onClick={navigateLogin}>Login</Link> here</p>
      </div>
    </div>
    );
};

export default Signup;