import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate, } from 'react-router-dom';
import {useForm} from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { addExpense } from './expenseSlice'


const UpdateExpense = () => {
  const [type, setType] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate();
  const dis = useDispatch()
  const {register,handleSubmit}=useForm()


  const handleSaveClick = async (e) => {
    await dis(addExpense(e))
    navigate('/deleteuser')

};

    return(
        <div>
            <Box
                component="form"
                onSubmit={handleSubmit(handleSaveClick)}
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
    {...register("type", { required: true })} // Change here
    value={type} 
    onChange={(e) => setType(e.target.value)} 
/>
<TextField 
    id="outlined-basic" 
    label="Date" 
    variant="outlined" 
    value={date} 
    {...register("date", { required: true })} // Change here
    onChange={(e) => setDate(e.target.value)} 
/>
<TextField 
    id="outlined-basic" 
    label="Amount" 
    variant="outlined" 
    value={amount} 
    {...register("amount", { required: true })} // Change here
    onChange={(e) => setAmount(e.target.value)} 
/>
<TextField 
    id="outlined-basic" 
    label="Category" 
    variant="outlined"
    {...register("category", { required: true })} 
    value={category} 
    onChange={(e) => setCategory(e.target.value)} 
/>
<TextField 
    id="outlined-basic" 
    label="Payment method" 
    variant="outlined" 
    {...register("paymentMethod", { required: true })} // Change here
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
