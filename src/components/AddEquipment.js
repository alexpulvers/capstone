import React, { useState } from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import firebase, { useFirestore } from "react-redux-firebase";
import { storage } from "../firebase";



function NewItemForm(props) {
  const inputs = {imgUrl: ''}
  const [imageAsFile, setImageAsFile] = useState('');
  const [imageAsUrl, setImageAsUrl] = useState(inputs);
  const firestore = useFirestore();
  console.log(imageAsFile);
  const handleImageAsFile = (e) => {
    const image = e.target.files[0]
    setImageAsFile(imageFile => (image))
  }
  
  function addItemToFirestore(event) {
    event.preventDefault();
    props.onNewItemCreation();
    if(imageAsFile===''){
      console.error('not an image')
    }
const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile);
uploadTask.on('state_changed', 
(snapShot) => {
  //takes a snap shot of the process as it is happening
  console.log(snapShot)
}, (err) => {
  //catches the errors
  console.log(err)
}, () => {
  // gets the functions from storage refences the image storage in firebase by the children
  // gets the download url then sets the image from firebase as the value for the imgUrl key:
  storage.ref('images').child(imageAsFile.name).getDownloadURL()
   .then(fireBaseUrl => {
     setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))
   })
})
    return firestore.collection("items").add({
      name: event.target.name.value,
      description: event.target.description.value,
    });
  }


  
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={addItemToFirestore}
        changeHandler={handleImageAsFile}
        buttonText="add Equipment"
      />

    </React.Fragment>
  );
}



NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func,
};

export default NewItemForm;
