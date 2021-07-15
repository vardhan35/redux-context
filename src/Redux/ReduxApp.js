import React from "react";
import CakeContainer from "./Components/CakeContainer";
import CakeContainerHooks from "./Components/CakeContainerHooks";
import IceCreamContainer from "./Components/IceCreamContainer";
import NewCakeContainer from "./Components/NewCakeContainer";
import UserContainer from "./Components/UserContainer";

const ReduxApp = () => {
  return (
    <div>
      <UserContainer />
      <CakeContainer />
      <CakeContainerHooks />
      <IceCreamContainer />
      <NewCakeContainer />
    </div>
  );
};

export default ReduxApp;
