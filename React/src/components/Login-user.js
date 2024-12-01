import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';




const LoginUser = () => {
    const navigate = useNavigate();
    
   
  
      const handleCreatAccountClick = () => {
        navigate('/loginnewuser');
      };
      const handleLoginClick = () => {
        navigate('/navigation');
      };
      
    return (
        <div style={{ marginTop: '60px' }}>
             <h1 style={{ textAlign: 'center', color: 'blue',fontFamily: 'Cooper Black',fontSize:'80px' }}>Wellcom</h1>
    <Box
      component="form"
      sx={{ display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      <br></br>
      <TextField id="outlined-basic" label="Password" variant="outlined" />
      
    </Box> 
    <br></br> 
    
  <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
   <Button variant="outlined" onClick={() => handleLoginClick()}>Login</Button>
  <Button variant="outlined" onClick={() => handleCreatAccountClick()}>Create account</Button>

  </Stack>

        </div>
    );
}

export default LoginUser;