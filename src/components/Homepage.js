import React from "react";
import pirateShip from './pirateShip.jpg'


const Homepage = () => {
  return (
    <React.Fragment>
      <h1>This is the homepage.</h1>
      <p>This is where users will be redirected when they successfully log in!</p>
      <img src={pirateShip} alt="wow" />
      <br/>
      <b>Pirate ships are awesome.</b>
    </React.Fragment>
  );
};
Homepage();
export default Homepage;

