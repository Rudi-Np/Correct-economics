import React from "react";
import { useSelector } from "react-redux";
import Stack from '@mui/material/Stack'; 
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Star from './Star'; // Correct import (assuming Star.js is in the same directory as Welcome.js)


const Welcome = () => {
    const user = useSelector((state) => state.user); // Access the user state
    const navigate = useNavigate();

    const handleStartClick = () => {
        navigate('/navigation'); // Replace '/navigation' with your desired route
    };
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < 50; i++) { // Increase the number of stars
            stars.push(<Star key={i} style={{ left: `${Math.random() * 100}vw`, top: `${Math.random() * 100}vh` }} />);
        }
        return stars;
    };
    return (
            <div style={{ position: 'relative', overflow: 'hidden' ,width: '100vw', /* Full viewport width */
                height: '100vh' }}>
            {renderStars()} 
            <h2 style={{ textAlign: 'center', color: 'blue', fontFamily: 'Cooper Black', fontSize: '80px' }}>
                Hi {user.name} 
            </h2>
            <h1 style={{ textAlign: 'center', color: 'blue', fontFamily: 'Cooper Black', fontSize: '80px' }}>
                Welcome to our site
            </h1>
            <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
             <Button  type="submit" variant="outlined" size="large" onClick={handleStartClick} >▶ start</Button>
           </Stack>
        </div>
    );
}

export default Welcome;
