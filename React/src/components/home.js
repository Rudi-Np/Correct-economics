import React from "react";
import SvgIcon from '@mui/material/SvgIcon';
import { Link } from 'react-router-dom';

function HomeIcon(props) {
    return (
      <SvgIcon {...props} sx={{ fontSize: 120, margin: 'auto', color: 'blue', display: 'block' }}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
}

const Home = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div>
                <h1 style={{ textAlign: 'center', color: 'blue', fontFamily: 'Cooper Black', fontSize: '160px' }}>Correct Economics</h1>
                <Link to="/loginnewuser">
                <HomeIcon />
                </Link>
            </div>
        </div>
    );
}
export default Home;