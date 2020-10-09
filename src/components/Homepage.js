import React from "react";
import brewequipment from './brewequipment.jpg'
import "../App.css"

const Homepage = () => {
  return (
    <React.Fragment>
      <div className="homepage">
      <h1>Welcome to Brewspace.</h1>
      <p>A community driven project to provide people with the tools, knowledge and location to brew your own beer properly. We offer you professional grade equipment to ensure the quality of your brew is top notch.</p>
      <img src={brewequipment} alt="wow" />
      <br/>
      <h2>How does it work?</h2>
      <p>Members have access to the brewing equipment (including access to fermentation chambers until the brew is ready) up to 3 times a month. Our location has all the necessary equipment to get you up and running whether you're a first time homebrewer, or a seasoned veteran that would like their garage back!
      </p>
      <h2>What tools are available?</h2>
      <p>We have a constantly growing collection of tools. To see more about what is available, sign in and check out our Equipment List.</p>
      <h2>How do I reserve time to brew?</h2>
      <p>After you sign in, you can head over to our Calendar page and reserve some time. Just enter your name and drag the bottom of your time slot to stretch the amount of time you wish to reserve. We recommend at least 3 hour slots, especially for beginners</p>
      <h2>Does it cost anything?</h2>
      <p>There are membership dues to keep the lights on, but they are modest. When you sign up there will be more details about the rates.</p>
      <h2>Questions?</h2>
      <p>Head over to our forum and take a look around. A lot of great resources added by the community are already there!</p>
      </div>
    </React.Fragment>
  );
};
export default Homepage;

