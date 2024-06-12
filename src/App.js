import React from 'react';
import { Container, Grid, Typography} from '@mui/material';
import Header from './components/Header';
import FDPortfolio from './components/FDPortfolio';
import MaturityTimeline from './components/MaturityTimeline';
import BankCard from './components/BankCard';
import KYCSection from './components/KYCSection'; 
import QuestionSection from './components/QuestionSection';

const App = () => {
  return (
    <div>
      <Header />
      <div style={{ backgroundColor: '#fafafa' }}>
      <Typography variant="h5" style={{ marginBottom: '20px', marginTop:'20px' , marginLeft:'55px'}}>
          Welcome, Johan Paul
      </Typography>
      <Container >
        {/* Parallel layout for FDPortfolio and MaturityTimeline */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <FDPortfolio />
          </Grid>
          <Grid item xs={12} md={8}>
            <MaturityTimeline />
          </Grid>
        </Grid>

        {/* Bank Cards and Question section (left 2/3) */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <BankCard name="Utkarsh Small Finance Bank" interest="9.10%" description="Highest Interest Rate" />
              </Grid>
              <Grid item xs={12} md={6}>
                <BankCard name="Bajaj Finserv" interest="8.80%" description="Crisil AAA Rated" />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <BankCard name="Shriram Finance" interest="8.80%" description="Crisil AAA Rated" />
              </Grid>
              <Grid item xs={12} md={6}>
                <BankCard name="Mahindra Finance" interest="8.80%" description="Crisil AAA Rated" />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <QuestionSection />
              </Grid>
            </Grid>
          </Grid>

          {/* Video KYC (right 1/3) */}
          <Grid item xs={12} md={4}>
            <KYCSection />
          </Grid>
        </Grid>
      </Container>
      </div>
    </div>
  );
};

export default App;
