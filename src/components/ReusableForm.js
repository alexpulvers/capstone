import React from "react";
import PropTypes from "prop-types";



function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type="text" name="name" placeholder="Equipment name" />
        <input type="text" name="description" placeholder="description" />
        <input type="file" name="image" onChange={props.changeHandler}/>
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>

  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  changeHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
