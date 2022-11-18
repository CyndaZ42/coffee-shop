import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
  const { coffee } = props; 

  return (
    <React.Fragment>
      <h1>Coffee Detail's</h1>
      <h3>{coffee.name} Coffee - From {coffee.origin}</h3>
      <p>Price: {coffee.price}</p>
      <p>Roast: {coffee.roast}</p>
      <p>Inventory: {coffee.inventory}</p>
      <hr/>
      <hr/>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
};

export default CoffeeDetail;