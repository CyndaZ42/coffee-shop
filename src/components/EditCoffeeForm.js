import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditCoffeeForm (props) {
  const { coffee } = props;

  function handleEditCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onEditCoffee({
      name: event.target.name.value, 
      origin: event.target.origin.value, price:
      event.target.price.value, steep:
      event.target.roast.value, 
      inventory: coffee.inventory, 
      id: coffee.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditCoffeeFormSubmission} 
        buttonText="Update Coffee" />
    </React.Fragment>
  );
}

EditCoffeeForm.propTypes = {
  onEditCoffee: PropTypes.func,
  coffee: PropTypes.object
};

export default EditCoffeeForm;