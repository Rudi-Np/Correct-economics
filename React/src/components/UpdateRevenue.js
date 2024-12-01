import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';


const UpdateRevenue = () => {
    const navigate = useNavigate();
    const handleSaveClick = () => {
        navigate('/remarks');
      };
    return(
        <div>
     <Box
  component="form"
  sx={{ 
    display: 'flex',
    merginTop:'150px',
    flexDirection: 'column',
    alignItems: 'center',
    '& > :not(style)': { m: 1, width: '25ch' }
  }}
  noValidate
  autoComplete="off"
>
  <TextField id="outlined-basic" label="Revenue type" variant="outlined" />
  <br></br>
  <TextField id="outlined-basic" label="Date" variant="outlined" />
  <br></br>
  <TextField id="outlined-basic" label="Amount" variant="outlined" />
  <br></br>
  <TextField id="outlined-basic" label="Payment method" variant="outlined" />
</Box>
<br></br>
<Stack direction="row" spacing={1} sx={{ justifyContent: 'center' }}>
    <Button variant="outlined" onClick={() => handleSaveClick()}>Save</Button>
  </Stack>
<h1 style={{ textAlign: 'center', color: 'blue',fontFamily: 'Cooper Black',fontSize:'130px' }}>Update</h1>
        </div>
    );
}
export default UpdateRevenue;