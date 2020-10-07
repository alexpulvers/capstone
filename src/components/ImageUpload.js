import React, {useState } from "react";
import { storage } from "../firebase";
import { firestore } from "firebase";

const ImageUpload = (props) => {
  const [imageAsFile,  setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState(props.items)
  console.log(imageAsFile);
  const handleImageAsFile = (e) => {
    const image = e.target.files[0]
    setImageAsFile(imageFile => (image))
  }

  const handleFirebaseUpload = e => {
    e.preventDefault();
    console.log("Uploading"); 
  }

  const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile);

  uploadTask.on('state_changed', (snapShot) => {
    console.log(snapShot)
  }, () => {
    storage.ref('images').child(imageAsFile.name).getDownloadURL().then(firebaseUrl => {
      setImageAsUrl(prevObject => ({...prevObject, imgUrl:firebaseUrl}))
    })
  })
  
  const addImageObjToFirebase = (event) => {
    event.preventDefault();
    return firestore.collection('Images').add(props.state);
  }
 return (
   <div>
     <form onSubmit={handleFirebaseUpload}>
       <input type="file" onChange={handleImageAsFile} />
     <input type="file" onChange={addImageObjToFirebase} />
     </form>
   </div>
 ) 
}
export default ImageUpload;