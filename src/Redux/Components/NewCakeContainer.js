import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCakes } from "../redux/cake/CakeActions";

const NewCakeContainer = () => {
  const cakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h1>No of Cakes : {cakes}</h1>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(buyCakes(number))}>
        Buy {number} of Cakes
      </button>
    </div>
  );
};

export default NewCakeContainer;
