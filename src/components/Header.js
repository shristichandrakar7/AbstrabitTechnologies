import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import logoImage from './logo.png';

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: 'white' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}> {/* Use justify-content: space-between */}
        <img src={logoImage} alt="Your Company Logo" style={{ width: '50px', height: 'auto', marginLeft: '25px' }} />
        <div style={{ display: 'flex' }}> {/* Wrap buttons in a flex container */}
          <Button style={{ color: 'black' }}>Dashboard</Button>
          <Button style={{ color: 'black', marginLeft: 10 }}>FAQs</Button>
          <Button style={{ color: 'black', marginLeft: 10 , marginRight: 30}}>Support</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;


