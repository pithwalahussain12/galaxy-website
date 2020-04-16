import React from "react";

export default () => {
  return (
    <select
      id="full-name"
      type="tel"
      className="form__input form__phone-prefix"
      defaultValue="+1"
    >
      <option value="+1">+1</option>
      <option>+2</option>
    </select>
  );
};
