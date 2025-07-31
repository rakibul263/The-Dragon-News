import React from "react";
import Marquee from "react-fast-marquee";

const Latest_News = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-2 mt-7">
      <p className="bg-secondary text-base-100 px-3 py-2">Latest</p>

      {/* breaking news part start here */}
      <Marquee className="flex gap-5" pauseOnHover={true} speed={50}>
        <p className="font-semibold">
          Sen. John Kennedy Calls for “More Idiot Control” After NYC Mass
          Shooting
        </p>
        <p className="font-semibold">
          Blackstone Employees Barricade Doors During Midtown Shooting
        </p>
        <p className="font-semibold">UN‑backed Report Warns of Famine in Gaza</p>
        <p className="font-semibold">
          UK May Recognize Palestine as State If No Gaza Ceasefire
        </p>
        <p className="font-semibold">
          Aamir Khan Releases New Film Directly on YouTube
        </p>
      </Marquee>
      {/* braking news part end here */}


    </div>
  );
};

export default Latest_News;
