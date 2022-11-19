import React from 'react';
import NewCoffeeForm from './NewCoffeeForm';
import CoffeeList from './CoffeeList';
import EditCoffeeForm from './EditCoffeeForm';
import CoffeeDetail from './CoffeeDetail';

class CoffeeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCoffeeList: [],
      selectedCoffee: null,
      editing: false
    };
  }
  
  handleClick = () => {
    if (this.state.selectedCoffee != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCoffee: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewCoffeeToList = (newCoffee) => {
    const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
    this.setState({mainCoffeeList: newMainCoffeeList});
    this.setState({formVisibleOnPage: false});
  }


  handleChangingSelectedCoffee = (id) => {
    const selectedCoffee = this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
    this.setState({selectedCoffee: selectedCoffee});
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingCoffeeInList = (coffeeToEdit) => {
    const editedMainCoffeeList = this.state.mainCoffeeList
      .filter(coffee => coffee.id !== this.state.selectedCoffee.id)
      .concat(coffeeToEdit);
    this.setState({
      mainCoffeeList: editedMainCoffeeList,
      editing: false,
      selectedCoffee: null
    });
  }

  handleDeletingCoffee = (id) => {
    const newMainCoffeeList = this.state.mainCoffeeList.filter(coffee => coffee.id !== id);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      selectedCoffee: null
    });
  }

  handleRestockClick = () => {
    if(this.state.selectedCoffee.inventory < 500) {
      const CoffeeToRestock = this.state.selectedCoffee;
      const changedCoffee = {
        name: CoffeeToRestock.name,
        origin: CoffeeToRestock.origin,
        price: CoffeeToRestock.price,
        roast: CoffeeToRestock.roast,
        inventory: CoffeeToRestock.inventory += 20,
        id: CoffeeToRestock.id,
        key: CoffeeToRestock.id,
      }
      this.setState({selectedCoffee: changedCoffee})
    }
  }

  handleBuyClick = () => {
    if(this.state.selectedCoffee.inventory !== 0) {
      const CoffeeToRestock = this.state.selectedCoffee;
      const changedCoffee = {
        name: CoffeeToRestock.name,
        origin: CoffeeToRestock.origin,
        price: CoffeeToRestock.price,
        roast: CoffeeToRestock.roast,
        inventory: CoffeeToRestock.inventory -= 1,
        id: CoffeeToRestock.id,
        key: CoffeeToRestock.id,
      }
      this.setState({selectedCoffee: changedCoffee})
    }
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 

    if (this.state.editing ) {      
      currentlyVisibleState = <EditCoffeeForm coffee = {this.state.selectedCoffee} onEditCoffee = {this.handleEditingCoffeeInList} />
      buttonText = "Return to Coffee List";
    } else if (this.state.selectedCoffee != null) {
      currentlyVisibleState = <CoffeeDetail coffee={this.state.selectedCoffee} onClickingDelete={this.handleDeletingCoffee} onClickingEdit = {this.handleEditClick} counter={this.state.inventory} onRestockClick={this.handleRestockClick} onBuyClick={this.handleBuyClick} />
      buttonText = "Return to Coffee List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCoffeeForm onNewCoffeeCreation={this.handleAddingNewCoffeeToList}/>;
      buttonText = "Return to Coffee List"; 
    } else {
      currentlyVisibleState = <CoffeeList onCoffeeSelection={this.handleChangingSelectedCoffee} coffeeList={this.state.mainCoffeeList} />;
      buttonText = "Add Coffee"; 
    }

  handleRestockClick = () => {
    if(this.state.selectedCoffee.inventory < 500) {
      const CoffeeToRestock = this.state.selectedCoffee;
      const changedCoffee = {
        name: CoffeeToRestock.name,
        origin: CoffeeToRestock.origin,
        price: CoffeeToRestock.price,
        roast: CoffeeToRestock.roast,
        inventory: CoffeeToRestock.inventory += 20,
        id: CoffeeToRestock.id,
        key: CoffeeToRestock.id,
      }
      this.setState({selectedCoffee: changedCoffee})
    }
  }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }
}

export default CoffeeControl;