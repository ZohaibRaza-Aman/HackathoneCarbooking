import { useState } from "react";
import "./BAinput.css";

function BAInput(props) {
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  const [focused, setFocused] = useState(false);
  const handleFocuse = (e) => {
    setFocused(true);
  };
  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocuse}
        onFocus={()=>inputProps.name==="confirmPassword" && setFocused(true)}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
}
export default BAInput;
