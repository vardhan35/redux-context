import React from "react";
import CakeContainer from "./Components/CakeContainer";
import CakeContainerHooks from "./Components/CakeContainerHooks";
import IceCreamContainer from "./Components/IceCreamContainer";

const ReduxApp = () => {
  return (
    <div>
      <CakeContainer />
      <CakeContainerHooks />
      <IceCreamContainer />
    </div>
  );
};

export default ReduxApp;
