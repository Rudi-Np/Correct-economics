import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from './createuserSlice';
import { useForm } from 'react-hook-form';
import { useState } from 'react';


const CreateUser = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dis=useDispatch();
    const {register,handleSubmit}=useForm();
   
   
      
      const handleSaveClick = async (e) => {
        console.log({e});
          await dis(addUser(e))
      
      };
    return (
        <div style={{ marginTop: '60px' }}>
             <h1 style={{ textAlign: 'center', color: 'blue',fontFamily: 'Cooper Black',fontSize:'80px' }}>To create an account</h1>
    <Box
      component="form"
      onSubmit={handleSubmit(handleSaveClick)}
      sx={{ display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name" variant="outlined"  {...register("name", { required: true })} value={name} 
    onChange={(e) => setName(e.target.value)}/>
      <br></br>
      <TextField id="outlined-basic" label="Phone" variant="outlined"  {...register("phone", { required: true })} value={phone} 
    onChange={(e) => setPhone(e.target.value)}/>
      <br></br>
      <TextField id="outlined-basic" label="Email" variant="outlined"   {...register("email", { required: true })} value={email}
    onChange={(e) => setEmail(e.target.value)}/>
      <br></br>
      <TextField id="outlined-basic" label="Password" variant="outlined"  {...register("password", { required: true })}value={password}  
    onChange={(e) => setPassword(e.target.value)}/>
      
    
    <br></br> 
    
  <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
    <Button  type="submit" variant="outlined" >Save</Button>
  </Stack>
  </Box> 

        </div>
    );
}

export default CreateUser;

