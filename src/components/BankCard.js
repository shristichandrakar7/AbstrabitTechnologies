import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import bankLogo from './bank-logo.png';

const BankCard = ({ name, interest, description }) => {
  return (
    <Card sx={{ backgroundColor: '#e6e6fa', marginTop: '10px', marginBottom: '10px', border: '3px solid white'}}> 
      <CardContent style={{ display: 'flex', alignItems: 'center' }}>
        <img src={bankLogo} alt="Bank Logo" style={{ width: '50px', height: 'auto', marginRight: '10px' }} />
        <Typography variant="h10" component="span" style={{ fontWeight: 'bold' }}>{name}</Typography>
      </CardContent>
      <Grid container spacing={0} sx={{ justifyContent: 'flex-end' }}>
        <Grid item xs={12} sm={6}>
        <Grid container spacing={1} alignItems="center">
            <Grid item style={{ marginRight: '-12px' , marginLeft:'15px'}}>
              <CheckCircle color="primary" style={{ fontSize: '18px' }} />
            </Grid>
            <Grid item>
              <Typography variant="body2" style={{ marginLeft: '5px' }} sx={{backgroundColor: '#c6b3fe'}}>{description}</Typography>
            </Grid>
          </Grid>
          <Typography variant="body2" style={{ marginLeft: '10px' }}><span style={{ color: 'grey' }}>Interest Up to</span></Typography>
          <Typography variant="body2" style={{ marginLeft: '10px', marginBottom: '5px'}}><span style={{ fontWeight: 'bold' }}>{interest}</span></Typography>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'flex-end'}}>
          <Button
            variant="contained"
            color="primary"
            sx={{ height: '35px', marginRight: '10px' , marginLeft: '10px', backgroundColor: '#7f30e0'}}
          >
            Book Now
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default BankCard;
