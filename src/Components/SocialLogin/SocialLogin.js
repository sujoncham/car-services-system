import React from "react";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import useToken from "../../Hooks/useToken";
import facebook from "../../images/social/facebook.png";
import github from "../../images/social/github.png";
import google from "../../images/social/google.png";
import Loading from "../SignUp/Loading";

const SocialIcon = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
  const [token] = useToken( user || gitUser);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location?.state?.from?.pathname || "/";

  let handleError;

  if (loading || gitLoading) {
    return <Loading></Loading>
  }

  if (error || gitError) {
    handleError = <p className="text-danger">  Error: {error?.message} {gitError?.message}</p>
  }

  if (token) {
    navigate(from, { replace: true });
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

export default SocialIcon;
