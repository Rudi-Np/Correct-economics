// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { addUser,setUser,deleteUser  } from './createuserSlice';
// import { useForm } from 'react-hook-form';
// import { useState } from 'react';


// const DeleteUser = () => {
//     const navigate = useNavigate();
//     const [name, setName] = useState('');
//     const [phone, setPhone] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const dis=useDispatch();
//     const {register,handleSubmit}=useForm();
   
   
//     const handleDeleteClick = async (e) => {
//         const userId = e.password;
//         console.log({userId});
        
//       await dis(deleteUser(userId));
//       // Optionally, navigate or update state after deletion
//   };
  
   
//     return (
//         <div style={{ marginTop: '60px' }}>
//              <h1 style={{ textAlign: 'center', color: 'blue',fontFamily: 'Cooper Black',fontSize:'80px' }}>To delete user</h1>
//     <Box
//       component="form"
//       onSubmit={handleSubmit(handleDeleteClick)}
//       sx={{ display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center', '& > :not(style)': { m: 1, width: '25ch' } }}
//       noValidate
//       autoComplete="off"
//     >
//         <TextField id="outlined-basic" label="Name" variant="outlined"  {...register("name", { required: true })} value={name} 
//             onChange={(e) => setName(e.target.value)}/>
//               <br></br>
//               <TextField id="outlined-basic" label="Phone" variant="outlined"  {...register("phone", { required: true })} value={phone} 
//             onChange={(e) => setPhone(e.target.value)}/>
//               <br></br>
//               <TextField id="outlined-basic" label="Email" variant="outlined"   {...register("email", { required: true })} value={email}
//             onChange={(e) => setEmail(e.target.value)}/>
//               <br></br>
//       <TextField id="outlined-basic" label="Password" variant="outlined"  {...register("password", { required: true })}value={password}  
//     onChange={(e) => setPassword(e.target.value)}/>
      
    
//     <br></br> 
    
//   <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
//     <Button  type="submit" variant="outlined" >Delete User</Button>
//   </Stack>
//   </Box> 
//   {/* <Button onClick={(d) => handleDeleteClick(d.target.password)} variant="outlined"></Button> */}
//         </div>
//     );
// }

// export default DeleteUser;

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteUser } from './createuserSlice'; // Ensure this imports the correct action
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const DeleteUser = () => {
    const navigate = useNavigate();
    const [userId, setUserId] = useState(''); // Use userId for deletion
    const dis = useDispatch();
    const { register, handleSubmit } = useForm();

    const handleDeleteClick = async () => {
        console.log({ userId });
        await dis(deleteUser(userId)); // Pass userId to deleteuser
        // Optionally, navigate or update state after deletion
    };

    return (
        <div style={{ marginTop: '60px' }}>
            <h1 style={{ textAlign: 'center', color: 'blue', fontFamily: 'Cooper Black', fontSize: '80px' }}>To delete user</h1>
            <Box
                component="form"
                onSubmit={handleSubmit(handleDeleteClick)}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& > :not(style)': { m: 1, width: '25ch' }
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-basic"
                    label="User ID" // Change label to User ID
                    variant="outlined"
                    {...register("userId", { required: true })}
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)} // Set userId
                />
                <br />
                <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
                    <Button type="submit" variant="outlined">Delete User</Button>
                </Stack>
            </Box>
        </div>
    );
}

export default DeleteUser;
