import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
  const { coffee, onClickingDelete, onRestockClick } = props; 

  return (
    <React.Fragment>
      <p>Price: {coffee.price}</p>
      <p>Roast: {coffee.roast}</p>
      <p>Inventory: {coffee.inventory}</p>

      <button onClick={()=> onRestockClick()}>Restock Coffee</button>
      <button onClick={props.onBuyClick}>Buy Coffee</button>
      <button onClick={props.onClickingEdit}>Edit Coffee</button>
      <button onClick={()=> onClickingDelete(coffee.id)}>Delete Coffee</button>
      <hr/>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onRestockClick: PropTypes.func,
  onBuyClick: PropTypes.func
};

export default CoffeeDetail;