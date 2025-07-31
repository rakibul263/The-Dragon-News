import React, { Suspense } from "react";
import Category from "../../Category/Category";

const LeftAside = () => {
  return (
    <div>
      <Suspense
        fallback={<span className="loading loading-ring loading-xl"></span>}
      >
        <Category></Category>
      </Suspense>
    </div>
  );
};

export default LeftAside;
