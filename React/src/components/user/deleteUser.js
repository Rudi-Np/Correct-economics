import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser,setUser,deleteUser  } from './createuserSlice';
import { useForm } from 'react-hook-form';
import { useState } from 'react';


const DeleteUser = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dis=useDispatch();
    const {register,handleSubmit}=useForm();
   
   
    const handleDeleteClick = async (userId) => {
        console.log({userId});
        
      await dis(deleteUser(userId));
      // Optionally, navigate or update state after deletion
  };
  
    //   const handleSaveClick = async (e) => {
    //     console.log({e});
    //       await dis(addUser(e))
    //       dis(setUser(e));
    //       navigate('/welcome')
    //   };
    return (
        <div style={{ marginTop: '60px' }}>
             <h1 style={{ textAlign: 'center', color: 'blue',fontFamily: 'Cooper Black',fontSize:'80px' }}>To delete user</h1>
    <Box
      component="form"
      onSubmit={handleSubmit(handleDeleteClick)}
      sx={{ display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Password" variant="outlined"  {...register("password", { required: true })}value={password}  
    onChange={(userId) => setPassword(userId.target.value)}/>
      
    
    <br></br> 
    
  <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
    <Button  type="submit" variant="outlined" >Delete User</Button>
  </Stack>
  </Box> 
  {/* <Button onClick={(d) => handleDeleteClick(d.target.password)} variant="outlined"></Button> */}
        </div>
    );
}

export default DeleteUser;

