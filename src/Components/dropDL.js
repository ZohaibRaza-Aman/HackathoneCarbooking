import "../App.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function DropDL(props) {
  const {datasource ,handleOonChange ,value ,label} = props;
  console.log('handleOonChange', handleOonChange)

  return (
    <div>
      <FormControl  sx={{minWidth: 310}}>
        <InputLabel className="text-white" id="demo-simple-select-helper-label">
          Select Type
        </InputLabel>
        <Select
        className="text-white"
        variant={"standard"}
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={value}
          label={label}
          onChange={handleOonChange}
        >
          {datasource.map((x, i) => {
            return (
              <MenuItem value={x.id} key={i}>
                {x.name || "-"}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}

export default DropDL;
