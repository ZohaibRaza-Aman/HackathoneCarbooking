import TextField from "@mui/material/TextField";

const  SMInput = (props) => {
  const { label, disabled, onChange, type,styles, name,value,variant } = props;
  return (
    <>
      <TextField
        color="primary"
        onChange={onChange}
        disabled={disabled}
        label={label} 
        type={type}
        sx={styles}
        name={name}
        value={value}
        variant={variant}
      />
         
    </>
  );
}
export default SMInput;