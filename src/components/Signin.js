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
      alert("success");
    }).then(window.location.href = './SiteControl')
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
  function doSignInGoogle(event){
    event.preventDefault();
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleAuthProvider)

  }
  function doSignOut() {
    firebase
      .auth()
      .signOut()
      .then(window.location.href = "./Homepage"
      )
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
      <br/>
      <form onSubmit={doSignInGoogle}>
      <div>
      <p>Or, Sign in with Google</p>
      <button
        onClick={() => {
          const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
          firebase.auth().signInWithPopup(googleAuthProvider).then(window.location.href = './SiteControl');
        }}
      >
        Sign in with Google
      </button>
    </div>
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

const IfUnAuthed = () => {

  return (
    <div>
      <h2>You're not signed in </h2>
      <button
        onClick={() => {
          firebase
            .app()
            .auth()
            .signInAnonymously();
        }}
      >
        Sign in anonymously
      </button>
      <button
        onClick={() => {
          const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
          firebase.auth().signInWithPopup(googleAuthProvider);
        }}
      >
        Sign in with Google
      </button>
    </div>
  );
};


export default Signin;
