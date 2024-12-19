// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { addUser } from './createuserSlice';
// import { useForm } from 'react-hook-form';
// import { useState } from 'react';


// const CreateUser = () => {
//     const navigate = useNavigate();
//     const [name, setName] = useState('');
//     const [phone, setPhone] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const dis=useDispatch();
//     const {register,handleSubmit}=useForm();
   
//     // const handleSaveClick = () => {
//     //     navigate('/navigation');
//     //   };
      
//       const SaveClick = async (e) => {
//           await dis(addUser(e))
      
//       };
//     return (
//         <div style={{ marginTop: '60px' }}>
//              <h1 style={{ textAlign: 'center', color: 'blue',fontFamily: 'Cooper Black',fontSize:'80px' }}>To create an account</h1>
//     <Box
//       component="form"
//       onSubmit={handleSubmit(SaveClick)}
//       sx={{ display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center', '& > :not(style)': { m: 1, width: '25ch' } }}
//       noValidate
//       autoComplete="off"
//     >
//       <TextField id="outlined-basic" label="Name" variant="outlined" value={name} {...register("name", { required: true })}  
//     onChange={(e) => setName(e.target.value)}/>
//       <br></br>
//       <TextField id="outlined-basic" label="Phone" variant="outlined" value={phone} {...register("phone", { required: true })}  
//     onChange={(e) => setPhone(e.target.value)}/>
//       <br></br>
//       <TextField id="outlined-basic" label="Email" variant="outlined"   value={email}{...register("email", { required: true })} 
//     onChange={(e) => setEmail(e.target.value)}/>
//       <br></br>
//       <TextField id="outlined-basic" label="Password" variant="outlined" value={password} {...register("password", { required: true })}  
//     onChange={(e) => setPassword(e.target.value)}/>
      
//     </Box> 
//     <br></br> 
    
//   <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
//     <Button variant="outlined" onClick={() => SaveClick()}>Save</Button>
//   </Stack>

//         </div>
//     );
// }

// export default CreateUser;

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from './createuserSlice';
import { useForm } from 'react-hook-form';

const CreateUser = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const SaveClick = async (data) => {
        await dispatch(addUser(data));
        navigate('/navigation');
    };

    return (
        <div style={{ marginTop: '60px' }}>
            <h1 style={{ textAlign: 'center', color: 'blue', fontFamily: 'Cooper Black', fontSize: '80px' }}>To create an account</h1>
            <Box
                component="form"
                onSubmit={handleSubmit(SaveClick)}
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >
                <TextField label="Name" variant="outlined" {...register("name", { required: true })} />
                <TextField label="Phone" variant="outlined" {...register("phone", { required: true })} />
                <TextField label="Email" variant="outlined" {...register("email", { required: true })} />
                <TextField type="password" label="Password" variant="outlined" {...register("password", { required: true })} />
            </Box>
            <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
                <Button variant="outlined" type="submit">Save</Button>
            </Stack>
        </div>
    );
}

export default CreateUser;
