import React from "react";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import facebook from "../../images/social/facebook.png";
import github from "../../images/social/github.png";
import google from "../../images/social/google.png";

const Social = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();

  if (loading || loading1) {
    return <p>Loading ...</p>;
  }

  let handleError;
  if (error || error1) {
    handleError = <p className="text-danger">  Error: {error?.message} {error1?.message}</p>
  }

  if (user || user1) {
    navigate("/");
  }

  return (
    <div className="mx-auto">
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="p-2 mt-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {loading}
      {handleError}
      <div className="mx-auto w-100 text-center">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-primary w-75"
        >
          <img style={{ width: "30px" }} src={google} alt="" />
          Google sign In
        </button>
        <p>or</p>
        <button className="btn btn-primary w-75">
          <img style={{ width: "30px" }} src={facebook} alt="" />
          Facebook sign In
        </button>
        <p>or</p>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-primary w-75"
        >
          <img style={{ width: "30px" }} src={github} alt="" />
          GitHub sign In
        </button>
      </div>
    </div>
  );
};

export default Social;
