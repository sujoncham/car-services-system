import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import useToken from "../../Hooks/useToken";
import Social from "../SocialLogin/SocialLogin";
import Loading from "./Loading";

const SignupUser = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const [token] = useToken(user);

  const navigateLogin = () => {
    navigate("/login");
  };

  if (loading || updating) {
    return <Loading></Loading>
  }

  if (error || updateError) {
    return <p>{error.message} {updateError.message}</p>;
  }

  if (token) {
    navigate("/home");
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    // const agree = event.target.terms.checked;
   
    await createUserWithEmailAndPassword(email, password, name, confirmPassword);
    await updateProfile({ displayName:name });
          console.log('Updated profile');
          
  };

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
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="text"
            name="confirmPassword"
            placeholder="confirm password"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check onClick={()=>setAgree(!agree)} name="terms" className={agree ? "text-primary" : "text-danger"} type="checkbox" label="Agree with Terms & Conditions" />
        </Form.Group>

        <Button disabled={!agree} variant="primary" type="submit">
          Create Account
        </Button>
      </Form>

      <div>
        <p className="mt-3">
          Already have an account ? Please,
          <Link to="/login" onClick={navigateLogin}>
            Login
          </Link>
          here
        </p>
      </div>
      <Social></Social>
    </div>
  );
};

export default SignupUser;
