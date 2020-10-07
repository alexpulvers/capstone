import React from "react";

const Image = props => {
 return (
 <React.Fragment>
    <img src={process.env.REACT_APP_FIREBASE_DATABASE_URL + props.image.src}
    alt={props.image.name}
 />
  </React.Fragment>
 );
};

export default Image;