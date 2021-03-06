import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from "../../Firebase/Firebase.init";
import useToken from "../../Hooks/useToken";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import SocialIcon from "../SocialLogin/SocialLogin";
import Loading from "./Loading";


const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  let handleError;
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, sendError] =
    useSendPasswordResetEmail(auth);
    const [token] = useToken(user);

  const handleSubmit = async(event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

  await signInWithEmailAndPassword(email, password);
  
  };

  if (token) {
    navigate(from, { replace: true });
  }

  if (error || sendError) {
    handleError = (
      <p className="text-danger">
        {error?.message} {sendError?.message}
      </p>
    );
  }

  if (loading || sending) {
    return <Loading></Loading>;
  }

  const navigateSignup = () => {
    navigate("/signup");
  };

  const navigateResetPassword = async () => {
    const email = emailRef.current.value;
    if(email){
      await sendPasswordResetEmail(email);
    toast("Sent email");
    } else{
      toast("Please, enter your email."); 
    }
  };

  return (
    <div className="w-25 mx-auto">
      <PageTitle title="Login"></PageTitle>
      <h1>Login</h1>
      {handleError}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="text"
            placeholder="Enter email"
            
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <div>
          Forgot Password. Please,
          <button className="btn btn-link" onClick={navigateResetPassword}>
            Reset Password
          </button>
        </div>
        <Button variant="primary" type="submit">
          LogIn
        </Button>
      </Form>

      <div>
        <p className="mt-3">
          New User ? Please,{" "}
          <span
            style={{ cursor: "pointer", textDecoration: "underline" }}
            className="text-primary pe-auto"
            onClick={navigateSignup}
          >
            Create Account
          </span>{" "}
          here
        </p>
      </div>
      
      <SocialIcon></SocialIcon>
    </div>
  );
};

export default Login;
