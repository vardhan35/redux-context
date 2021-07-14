import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCream } from "../redux/IceCream/CreamActions";
const CakeContainerHooks = () => {
  const creams = useSelector((state) => state.cream.numOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>No of Creams : {creams}</h1>
      <button onClick={() => dispatch(buyCream())}>Buy IceCream</button>
    </div>
  );
};

export default CakeContainerHooks;
