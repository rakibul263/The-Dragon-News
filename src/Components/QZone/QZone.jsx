import React from 'react';
import swimming from "../../assets/swimming.png"
import classImg from "../../assets/class.png"
import playImg from "../../assets/playground.png"
const QZone = () => {
  return (
    <div className="mt-8 bg-base-200 p-2">
      <h2 className="font-bold mb-5">QZone</h2>
      <div className="grid grid-cols-1 mx-auto space-y-5 ml-8">
        <img src={swimming} alt="Swimming Image" />
        <img src={classImg} alt="Class Image" />
        <img src={playImg} alt="Playground Image" />
      </div>
    </div>
  );
};

export default QZone;
