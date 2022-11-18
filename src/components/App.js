import React from "react";
import Header from "./Header";
import CoffeeControl from "./CoffeeControl";

function App(){
  return (
    <React.Fragment>
      <div className="container">
        <Header />
        <CoffeeControl />
      </div>
    </React.Fragment>
  );
}

export default App;