import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";



const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Login With</h2>
      <div className="space-y-3 grid grid-cols-1 ">
        <button className="btn btn-outline btn-secondary">
          <FcGoogle size={30} />
          Login With Google
        </button>
        <button className="btn btn-outline btn-primary">
          <FaGithub size={30} />
          Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
