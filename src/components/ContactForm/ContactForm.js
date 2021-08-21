import React from "react";
import { Button } from "../Navbar/Button";
import Modal from "../UI/Modal";
import "./ContactForm.css";
import useInput from "../../hooks/use-input";
import emailjs from "emailjs-com";

var mailformat =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const isNotEmpty = (value) => value.trim() !== "";

const ContactForm = (props) => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmailId",
        "template_spgnsba",
        e.target,
        "user_3cMfaxLwJeBKMwjMW3OvK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(
    (value) =>
      value.includes("@" && ".") && value.length > 8 && value.match(mailformat)
  );

  const {
    value: enteredPhone,
    isValid: enteredPhoneIsValid,
    hasError: phoneInputHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhoneInput,
  } = useInput((value) => value.length > 6 && value.length < 11);

  const {
    value: enteredText,
    isValid: enteredTextIsValid,
    hasError: textInputHasError,
    valueChangeHandler: textChangeHandler,
    inputBlurHandler: textBlurHandler,
    reset: resetTextInput,
  } = useInput(isNotEmpty);

  let formIsValid = false;
  if (
    enteredNameIsValid &&
    enteredEmailIsValid &&
    enteredPhoneIsValid &&
    enteredTextIsValid
  ) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (
      !enteredNameIsValid &&
      !enteredEmailIsValid &&
      !enteredPhoneIsValid &&
      !enteredTextIsValid
    ) {
      return;
    }
    // console.log(enteredName);
    // console.log(enteredEmail);
    // console.log(enteredPhone);
    // console.log(enteredText);

    // sendEmail();
    resetNameInput("");
    resetEmailInput("");
    resetPhoneInput("");
    resetTextInput("");
  };

  const nameinputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailinputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  const phoneinputClasses = phoneInputHasError
    ? "form-control invalid"
    : "form-control";

  const textinputClasses = textInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <Modal onClose={props.onClose}>
      {/* <form onSubmit={formSubmitHandler} className=".main"> */}
      <form onSubmit={(formSubmitHandler, sendEmail)} className=".main">
        <div className={nameinputClasses}>
          <label for="name">Name</label>
          <input
            type="text"
            autoComplete="off"
            name="name"
            id="name"
            placeholder="Enter your Name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameInputHasError && (
            <p className="errortext">Name must not be empty. </p>
          )}
        </div>
        <div className={emailinputClasses}>
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email"
            autoComplete="off"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
          />
          {emailInputHasError && (
            <p className="errortext">Please enter a valid email. </p>
          )}
        </div>

        <div className={phoneinputClasses}>
          <label for="phone">Ph-Number</label>
          <input
            type="number"
            name="phone"
            autoComplete="off"
            id="phone"
            placeholder="Enter your phone number"
            onChange={phoneChangeHandler}
            onBlur={phoneBlurHandler}
            value={enteredPhone}
          />
          {phoneInputHasError && (
            <p className="errortext">Please enter a valid phone number. </p>
          )}
        </div>
        <div className={textinputClasses}>
          <label for="message">Drop your needs.</label>
          <textarea
            name="message"
            id="message"
            cols="52"
            rows="5"
            onChange={textChangeHandler}
            onBlur={textBlurHandler}
            value={enteredText}
          ></textarea>
          {textInputHasError && (
            <p className="errortext">Please enter your needs. </p>
          )}
        </div>
        <div className="btn">
          <button
            type="submit"
            className="submit"
            // onClick={props.onClose}
            disabled={!formIsValid}
          >
            Submit
          </button>
          <Button onClick={props.onClose} className="btn1">
            Close
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default ContactForm;
