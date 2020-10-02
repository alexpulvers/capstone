import React from "react";
import firebase from "firebase/app";

function Signin() {
  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function () {
        console.log("success");
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }
  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function () {
        console.log("Successfully logged in");
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }
  function doSignOut() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        console.log("Successfully Signed out");
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }
  return (
    <React.Fragment>
      <b>
        <u>Sign up</u>
      </b>
      <form onSubmit={doSignUp}>
        <input type="text" name="email" placeholder="email" />
        <br />
        <input type="password" name="password" placeholder="Password" />
        <br />
        <button type="submit">Sign up</button>
      </form>
      <p>Already have an account?</p>
      <b>
        <u>Sign in</u>
      </b>
      <form onSubmit={doSignIn}>
        <input type="text" name="signinEmail" placeholder="email" />
        <br />
        <input type="password" name="signinPassword" placeholder="password" />
        <br />
        <button type="submit">Sign in</button>
      </form>
      <br />
      <b>
        <u>Sign Out</u>
      </b>
      <br />
      <button onClick={doSignOut}>Sign out</button>
      <hr />
    </React.Fragment>
  );
}

export default Signin;
