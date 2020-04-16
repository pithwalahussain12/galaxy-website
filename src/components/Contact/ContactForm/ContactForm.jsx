import React from "react";

export default function ContactForm() {
  const phoneLabel = useRef(null);

  function handleFocus(e) {
    e.target.previousElementSibling.classList.remove("hidden");
    e.target.placeholder = "";
  }

  function handleBlur(e) {
    if (!e.target.value)
      e.target.previousElementSibling.classList.add("hidden");
    e.target.placeholder = e.target.previousElementSibling.textContent;
  }

  function handlePhoneFocus(e) {
    phoneLabel.current.classList.remove("hidden");
    e.target.placeholder = "";
  }

  function handlePhoneBlur(e) {
    if (!e.target.value) {
      phoneLabel.current.classList.add("hidden");
      e.target.placeholder = "Phone number";
    }
  }
  return (
    <form className="form">
      <div className="form__input-container">
        <label htmlFor="full-name" className="form__label hidden">
          Full name
        </label>
        <input
          id="full-name"
          type="text"
          className="form__input"
          placeholder="Full name"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
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
      <div className="form__input-container">
        <MainButton text="JOIN GALAXY" />
      </div>
    </form>
  );
}
