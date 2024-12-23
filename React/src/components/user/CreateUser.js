import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser,setUser } from './createuserSlice';
import { useForm } from 'react-hook-form';
import { useState } from 'react';


const CreateUser = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dis=useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [warning, setWarning] = useState('');

   
   
  
    const handleSaveClick = async (data) => {
      
  
      setWarning(''); // Clear any previous warnings
      const userData = { name: data.name, phone: data.phone, email: data.email, password: data.password };
      console.log({ userData });
      await dis(addUser(userData));
      dis(setUser(userData));
      navigate('/welcome');
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
        {warning && <div style={{ color: 'red', textAlign: 'center', marginBottom: '10px' }}>{warning}</div>} {/* Display warning message above buttons */}
        {errors.name && <div style={{ color: 'red' }}>Name is required.</div>}

      <br></br>
      <TextField id="outlined-basic" label="Phone" variant="outlined"  {...register("phone", { required: true })} value={phone} 
    onChange={(e) => setPhone(e.target.value)}/>
          {errors.phone && <div style={{ color: 'red' }}>Phone is required.</div>}

      <br></br>
      <TextField id="outlined-basic" label="Email" variant="outlined"   {...register("email", { required: true })} value={email}
    onChange={(e) => setEmail(e.target.value)}/>
      {errors.email && <div style={{ color: 'red' }}>Email is required.</div>}

      <br></br>
      <TextField id="outlined-basic" label="Password" variant="outlined"  {...register("password", { required: true })}value={password}  
    onChange={(e) => setPassword(e.target.value)}/>
    {errors.password && <div style={{ color: 'red' }}>Password is required.</div>}
      
    
    <br></br> 
    
  <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
    <Button  type="submit" variant="outlined" >Save</Button>
  </Stack>
  </Box> 
  
        </div>
    );
}

export default CreateUser;

