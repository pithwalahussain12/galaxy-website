import React, { useRef } from "react";

import "./Form.scss";
import FormPhonePrefixes from "./FormPhonePrefixes/FormPhonePrefixes.jsx";
import MainButton from "../MainButton/MainButton";

export default ({ type }) => {
  const phoneLabel = useRef(null);
  const textareaLabel = useRef(null);

  function handleFocus(e) {
    e.target.previousElementSibling.classList.remove("hidden");
    e.target.placeholder = "";
    if (!type) return;
    e.target.classList.add("form--contact-page__form-input-active");
  }

  function handleBlur(e) {
    if (!e.target.value)
      e.target.previousElementSibling.classList.add("hidden");
    e.target.placeholder = e.target.previousElementSibling.textContent;
    if (!type) return;
    e.target.classList.remove("form--contact-page__form-input-active");
  }

  function handlePhoneFocus(e) {
    phoneLabel.current.classList.remove("hidden");
    e.target.placeholder = "";
    if (!type) return;
    console.dir(e.target);
    e.target.classList.add("form--contact-page__form-input-active");
    e.target.previousElementSibling.classList.add(
      "form--contact-page__form-input-active"
    );
  }

  function handlePhoneBlur(e) {
    if (!e.target.value) {
      phoneLabel.current.classList.add("hidden");
      e.target.placeholder = "Phone number";
      if (!type) return;
      e.target.classList.remove("form--contact-page__form-input-active");
      e.target.previousElementSibling.classList.remove(
        "form--contact-page__form-input-active"
      );
    }
  }

  function handleTextareaFocus(e) {
    textareaLabel.current.classList.add("color-secondary");
  }

  function handleTextareaBlur(e) {
    if (!e.target.value)
      textareaLabel.current.classList.remove("color-secondary");
  }

  return (
    <form className={`form${type && " form--contact-page"}`}>
      <div className="form__input-container">
        <label
          htmlFor={type ? "first-name" : "full-name"}
          className="form__label hidden"
        >
          {type ? "First name" : "Full name"}
        </label>
        <input
          id={type ? "first-name" : "full-name"}
          type="text"
          className="form__input"
          placeholder={type ? "First name" : "Full name"}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      {type && (
        <div className="form__input-container">
          <label htmlFor="last-name" className="form__label hidden">
            Last name
          </label>
          <input
            id="last-name"
            type="text"
            className="form__input"
            placeholder="Last name"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
      )}
      <div className="form__input-container">
        <label htmlFor="email" className="form__label hidden">
          Email address
        </label>
        <input
          id="email"
          type="email"
          className="form__input"
          placeholder="Email address"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      {type && (
        <div className="form__input-container">
          <label htmlFor="website" className="form__label hidden">
            Website
          </label>
          <input
            id="website"
            type="text"
            className="form__input"
            placeholder="Website"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
      )}
      <div className="form__input-container">
        <label
          htmlFor="phone-number"
          ref={phoneLabel}
          className="form__label hidden"
        >
          Phone number
        </label>
        <div className="form__phone-container">
          <FormPhonePrefixes />
          <input
            id="phone-number"
            type="tel"
            className="form__input form__phone-input"
            placeholder="Phone number"
            onFocus={handlePhoneFocus}
            onBlur={handlePhoneBlur}
          />
        </div>
      </div>
      {type && (
        <div className="form__input-container form__input-container--textarea" style={{position:"relative", top:"55px",}}>
          <label
            ref={textareaLabel}
            className="form__label form__label--textarea"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="form__textarea"
            id="message"
            onFocus={handleTextareaFocus}
            onBlur={handleTextareaBlur}
            placeholder=""
          />
        </div>
      )}
      {type && (
        <div className="form__input-container" style={{marginTop:"-20px",}}>
          <label htmlFor="call" className="form__label hidden">
            Schedule a call
          </label>
          <input
            id="call"
            type="text"
            className="form__input"
            placeholder="Schedule a call"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
      )}
     <div className="form__input-container form__input-container--submit personal-contact">
    {!type ? (
      <MainButton text="JOIN GALAXY" />
    ) : (
      <input
        className="form--contact-page__submit"
        type="submit"
        value="submit"
      />
    )}
  </div>     
    </form>

  );
};
