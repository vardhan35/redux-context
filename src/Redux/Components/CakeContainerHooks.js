import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCakes } from "../redux/cake/CakeActions";

const CakeContainerHooks = () => {
  const cakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>No of Cakes : {cakes}</h1>
      <button onClick={() => dispatch(buyCakes())}>Buy Cakes</button>
    </div>
  );
};

export default CakeContainerHooks;
