import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateExpense = () => {
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate();

  const handleSaveClick = async (e) => {
    e.preventDefault(); // הוסף את השורה הזו
    try {
        const response = await axios.post('http://127.0.0.1:5000/api/expenses', {
            amount,
            type,
            date,
            category,
            paymentMethod
        });
        console.log(response.data);
        navigate('/remarks');
      } catch (error) {
        console.error('Error adding expense:', error);
    }
};

    return(
        <div>
            <Box
                component="form"
                onSubmit={handleSaveClick} // השתמש ב-onSubmit כאן
                sx={{ 
                    display: 'flex',
                    marginTop:'150px',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& > :not(style)': { m: 1, width: '25ch' }
                }}
                noValidate
                autoComplete="off"
            >
                <TextField 
                    id="outlined-basic" 
                    label="Expense type" 
                    variant="outlined" 
                    value={type} 
                    onChange={(e) => setType(e.target.value)} 
                />
                <TextField 
                    id="outlined-basic" 
                    label="Date" 
                    variant="outlined" 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)} 
                />
                <TextField 
                    id="outlined-basic" 
                    label="Amount" 
                    variant="outlined" 
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)} 
                />
                <TextField 
                    id="outlined-basic" 
                    label="Payment method" 
                    variant="outlined" 
                    value={paymentMethod} 
                    onChange={(e) => setPaymentMethod(e.target.value)} 
                />
                <Stack direction="row" spacing={1} sx={{ justifyContent: 'center' }}>
                    <Button type="submit" variant="outlined">Save</Button> {/* הסר את onClick */}
                </Stack>
            </Box>
            <h1 style={{ textAlign: 'center', color: 'blue', fontFamily: 'Cooper Black', fontSize: '130px' }}>Update</h1>
        </div>
    );
}
export default UpdateExpense;
