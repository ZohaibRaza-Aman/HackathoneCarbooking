import * as React from "react";
import BAInput from "./BAInput";
import { useState } from "react";

export default function RigistrationForm() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      errorMessage:"Username should be 3-16 characters and shouldn't include any character!",
      placeholder: "Username",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required:true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      errorMessage:'It should be a valid email adrees!',
      placeholder: "Email",
      label: "Email",
      required:true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "text",
      errorMessage:'password should be a 8-20 characters and include at lest 1 letter, 1 number, and 1 special character!',
      placeholder: "Password",
      label: "password",
      pattern: "`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,20}$`",
      required:true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "text",
      errorMessage:"password don't match!",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      pattern: values.password,
      required:true,
    },
  ];
  const submitForm = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
console.log(values);
  return (
    <div className="form">
      <form onSubmit={submitForm}>
        <h1 className="heading">RigistrationForm</h1>
        {inputs.map((input) => (
          <BAInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        <button className="submitbtn">Submit</button>
      </form>
    </div>
  );
}
