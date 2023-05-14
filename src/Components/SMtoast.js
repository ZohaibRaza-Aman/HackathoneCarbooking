import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function SMtoast(props) {
  console.log("props", props);
  return (
    <>
    <Stack sx={{ width: '40%' }} spacing={2}>
      <Alert severity={props.severity}>{props.label}</Alert>
    </Stack>
    </>
  );
}
export default SMtoast;