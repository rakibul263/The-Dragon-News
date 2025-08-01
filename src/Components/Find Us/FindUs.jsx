import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';

const FindUs = () => {
  return (
    <div className="mt-8">
      <h2 className="font-bold mb-3">Find Us On</h2>
      <div className="join join-vertical grid grid-cols-1">
        <button className="btn bg-base-100 justify-start join-item"><FaFacebook></FaFacebook> Facebook</button>
        <button className="btn bg-base-100 justify-start join-item"><FaTwitter></FaTwitter>Twitter</button>
        <button className="btn bg-base-100 justify-start join-item"><FaInstagram></FaInstagram>Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;
