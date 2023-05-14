import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function BAScreenHeader(props){
    const {screenTitle, buttonList} = props;
    let back = () => {
        window.history.back();
    };
    return(
        <>
        <Box className='darkth rounded mb-3 bg-white shadow align-items-center p-3'>
        <div className="d-flex align-items-center screenHeader">
        <IconButton onClick={back} aria-label="delete">
            <ArrowBackIcon/>
        </IconButton>
        <Typography variant="h5" className="fw-bold">
            {screenTitle}
        </Typography>
        </div>
        <div>
            {buttonList && 
            buttonList.length > 0 &&
            buttonList.map((e,i) => e.displayField)}
        </div>
        </Box>
        </>
    )
}