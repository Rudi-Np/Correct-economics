import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Connect = () => {
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/expenses', {
                amount,
                type,
                date,
                category,
                paymentMethod
            });
            console.log(response.data);
            navigate('/'); // או כל נתיב אחר שתרצה לאחר ההצלחה
        } catch (error) {
            console.error('Error adding expense:', error);
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <TextField label="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
            <TextField label="Type" value={type} onChange={(e) => setType(e.target.value)} required />
            <TextField label="Date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            <TextField label="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
            <TextField label="Payment Method" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} required />
            <Stack direction="row" spacing={2}>
                <Button type="submit" variant="contained">Add Expense</Button>
            </Stack>
        </Box>
    );
};

export default Connect;
