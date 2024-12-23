import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { findUser } from './createuserSlice';

const LoginUser = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [warning, setWarning] = useState('');

    const handleCreatAccountClick = () => {
        navigate('/createuser');
    };

    const handleLoginClick = async () => {
        const user = { name: username, password: userPassword };
        const result = await dispatch(findUser(user));

        if (result.meta.requestStatus === 'fulfilled') {
            navigate("/navigation");
        } else {
            setWarning("User does not exist."); // Set warning message instead of alert
        }
    };

    return (
        <div style={{ marginTop: '60px' }}>
            <h1 style={{ textAlign: 'center', color: 'blue', fontFamily: 'Cooper Black', fontSize: '80px' }}>Welcome</h1>
            <Box
                component="form"
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-basic"
                    label="Username"
                    variant="outlined"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    type="password"
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                />
            </Box>
            <br />
            {warning && <div style={{ color: 'red', textAlign: 'center', marginBottom: '10px' }}>{warning}</div>} {/* Display warning message above buttons */}

            <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
                <Button variant="outlined" onClick={handleLoginClick}>Login</Button>
                <Button variant="outlined" onClick={handleCreatAccountClick}>Create account</Button>

            </Stack>
        </div>
    );
}

export default LoginUser;
