import Button from "@mui/material/Button";
import CircularProgress from '@mui/material/CircularProgress';

function SMButton(props) {
  const { label, onClick, disabled, startIcon, endIcon,loading,sx,size,color } = props;
  return (
    <>
      <div className="Button1">
      <Button
        startIcon={startIcon}
        endIcon={endIcon}
        onClick={onClick}
        variant="contained"
        disabled={loading || disabled}
        size={size}
        sx={sx}
        color={color}
      >
        {loading ? <CircularProgress /> : label}
      </Button>
      </div>
      
    </>
  );
}
export default SMButton;