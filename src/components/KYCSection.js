import React from 'react';
import { Card, CardContent, Typography, Button, Grid, Box } from '@mui/material';

const KYCSection = () => {
  return (
    <div>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                Video KYC
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2" sx={{ textAlign: 'center' }}>
                Scheduled On
              </Typography>
              <Box
                sx={{
                  backgroundColor: '#f5f5f5',
                  padding: '10px',
                  textAlign: 'center',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  marginTop: '5px', // Add margin for separation
                }}
              >
                28
              </Box>
              <Box
                sx={{
                  backgroundColor: 'red',
                  textAlign: 'center',
                  padding: '5px 10px',
                  color: 'white',
                  fontSize: '14px',
                  textTransform: 'uppercase', // Make text uppercase
                }}
              >
                Oct, 2023
              </Box>
            </Grid>
            <Grid item xs={8}>
              <Box>
                <Typography variant="body2"><b>Utkarsh SF Bank FD Plan 2</b></Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" sx={{ marginTop: '20px' }}>
                <Typography variant="body2">Deposit Amt</Typography>
                <Typography variant="body2">Tenure</Typography>
                <Typography variant="body2">Interest Rate</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="body2"><b>Rs. 20,000</b></Typography>
                <Typography variant="body2"><b>2 Years</b></Typography>
                <Typography variant="body2"><b>9.10%</b></Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex'}}>
              <Button variant="contained" color="primary">
                Complete Now
              </Button>
              <Button variant="outlined" color="secondary" sx={{ marginLeft: '30px' }}>
                Reschedule
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card sx={{ marginTop: '2px' }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                Pending Payment
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2" sx={{ textAlign: 'center' }}>
                Pay By
              </Typography>
              <Box
                sx={{
                  backgroundColor: '#f5f5f5',
                  padding: '10px',
                  textAlign: 'center',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  marginTop: '5px', // Add margin for separation
                }}
              >
                30
              </Box>
              <Box
                sx={{
                  backgroundColor: 'red',
                  textAlign: 'center',
                  padding: '5px 10px',
                  color: 'white',
                  fontSize: '14px',
                  textTransform: 'uppercase', // Make text uppercase
                }}
              >
                Oct, 2023
              </Box>
            </Grid>
            <Grid item xs={8}>
              <Box>
                <Typography variant="body2"><b>Bajaj Finserv Corp FD 1</b></Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" sx={{ marginTop: '20px' }}>
                <Typography variant="body2">Deposit Amt</Typography>
                <Typography variant="body2">Tenure</Typography>
                <Typography variant="body2">Interest Rate</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="body2"><b>Rs. 25,000</b></Typography>
                <Typography variant="body2"><b>18 Months</b></Typography>
                <Typography variant="body2"><b>8.10%</b></Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex'}}>
              <Button variant="contained" color="primary" sx={{ whiteSpace: 'nowrap' }}>
                Complete Now
              </Button>
              <Button variant="outlined" color="secondary" sx={{ marginLeft: '10px', whiteSpace: 'nowrap'  }}>
                Cancel Application
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card sx={{ marginTop: '2px' }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                Upcoming FD Maturity
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2" sx={{ textAlign: 'center' }}>
                Renew By
              </Typography>
              <Box
                sx={{
                  backgroundColor: '#f5f5f5',
                  padding: '10px',
                  textAlign: 'center',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  marginTop: '5px', // Add margin for separation
                }}
              >
                30
              </Box>
              <Box
                sx={{
                  backgroundColor: 'red',
                  textAlign: 'center',
                  padding: '5px 10px',
                  color: 'white',
                  fontSize: '14px',
                  textTransform: 'uppercase', // Make text uppercase
                }}
              >
                Oct, 2023
              </Box>
            </Grid>
            <Grid item xs={8}>
              <Box>
                <Typography variant="body2"><b>Shriram Finance Corp FD 1</b></Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" sx={{ marginTop: '20px' }}>
                <Typography variant="body2">Deposit Amt</Typography>
                <Typography variant="body2">Tenure</Typography>
                <Typography variant="body2">Interest Rate</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="body2"><b>Rs. 20,000</b></Typography>
                <Typography variant="body2"><b>2 Years</b></Typography>
                <Typography variant="body2"><b>9.10%</b></Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex'}}>
              <Button variant="contained" color="primary">
                Renew Now
              </Button>
              <Button variant="outlined" color="secondary" sx={{ marginLeft: '10px' }}>
                Compare Other FDs
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default KYCSection;
