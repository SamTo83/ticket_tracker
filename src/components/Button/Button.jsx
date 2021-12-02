import React from 'react';
import './Button.scss';

const Button = ({buttonText, isSecondary,}) => {

  let buttonStyles = "button";

  if (isSecondary === true) {
    buttonStyles += " button--secondary";
  } else {
    buttonStyles += " button--primary";
  }

  return (
    <button className={buttonStyles}>{buttonText}</button>
  )
};

export default Button
