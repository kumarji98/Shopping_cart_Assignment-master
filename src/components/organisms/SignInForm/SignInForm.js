import React, { useState } from "react";
//import "../Form/Form.scss";
import Button from "../../atoms/Button/Button";
import Inputbox from "../../atoms/Inputbox/Inputbox";
import usesigninForm from "../../../utils/useSigninForm";
import validateSignin from "../../../utils/validateSigninForm";

export default function Form({ className = "", inputLabel, button }) {
  const { handleChange, values, handleSubmit, errors } = usesigninForm(validateSignin);

  return (
    <form
      className={`${className} form`}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      {inputLabel.map((input) => (
        <Inputbox
          key={input.inputId}
          input={input}
          handleChange={handleChange}
          values={values[input.inputId]}
          errors={errors[input.inputId]}
        />
      ))}
      <Button className={"form__login-button"}>{button}</Button>
    </form>
  );
}
