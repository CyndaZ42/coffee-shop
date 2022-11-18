import React from "react";
import PropTypes from "prop-types";

function Coffee(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCoffeeClicked(props.id)}>
        <p>{props.name} Coffee - From {props.origin}</p>
        <p>{props.price}</p>
        <p>{props.inventory} remaining</p>
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  names: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.string,
  id: PropTypes.string,
  roast: PropTypes.string,
  inventory: PropTypes.number,
  whenCoffeeClicked: PropTypes.func
}

export default Coffee;