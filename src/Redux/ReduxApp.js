import React from "react";
import CakeContainer from "./Components/CakeContainer";
import CakeContainerHooks from "./Components/CakeContainerHooks";
import IceCreamContainer from "./Components/IceCreamContainer";
import NewCakeContainer from "./Components/NewCakeContainer";

const ReduxApp = () => {
  return (
    <div>
      <CakeContainer />
      <CakeContainerHooks />
      <IceCreamContainer />
      <NewCakeContainer />
    </div>
  );
};

export default ReduxApp;
