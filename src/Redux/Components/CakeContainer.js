import React from "react";
import { buyCakes } from "../redux/cake/CakeActions";
import { connect } from "react-redux";

const CakeContainer = ({ cakes, buyCake }) => {
  return (
    <div>
      <h2>Number of Cake : {cakes}</h2>
      <button onClick={buyCake}>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCakes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
