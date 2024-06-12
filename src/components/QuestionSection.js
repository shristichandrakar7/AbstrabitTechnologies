import React from 'react';
import { Container, Grid, Card, CardContent, Typography, IconButton  } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const QuestionSection = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '-10px'}}>
          Get Answers
        </Typography>
      <div style={{ display: 'flex', alignItems: 'center'}}>
        <Typography sx={{ fontWeight: 'bold', fontSize: '12px' , marginBottom: '-10px'}}>
          to all your questions
        </Typography>
        <IconButton aria-label="get answers" sx={{ marginLeft: 'auto' }}>
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
      <Grid container spacing={3} style={{marginTop:'-10px'}}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h8" sx={{ fontWeight: 'bold' }}>How are FDs</Typography><br/>
              <Typography variant="h8" sx={{ fontWeight: 'bold' }} style={{marginTop:'-10px'}}>taxed</Typography>
              <Typography variant="body2" style={{fontSize: '12px'}}>
                Lorem Ipsum is simply dummy
              </Typography><Typography variant="body2" style={{fontSize: '12px'}}>
                text of the printing and 
              </Typography><Typography variant="body2" style={{fontSize: '12px'}}>
                typesetting industry.
              </Typography>
              <Typography color="primary" fontSize="small" style={{ textDecoration: 'underline' }}>
                Read More...
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h8" sx={{ fontWeight: 'bold' }}>How are FDs</Typography><br/>
              <Typography variant="h8" sx={{ fontWeight: 'bold' }} style={{marginTop:'-10px'}}>taxed</Typography>
              <Typography variant="body2" style={{fontSize: '12px'}}>
                Lorem Ipsum is simply dummy
              </Typography><Typography variant="body2" style={{fontSize: '12px'}}>
                text of the printing and 
              </Typography><Typography variant="body2" style={{fontSize: '12px'}}>
                typesetting industry.
              </Typography>
              <Typography color="primary" fontSize="small" style={{ textDecoration: 'underline' }}>
                Read More...
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h8" sx={{ fontWeight: 'bold' }}>How are FDs</Typography><br/>
              <Typography variant="h8" sx={{ fontWeight: 'bold' }} style={{marginTop:'-10px'}}>taxed</Typography>
              <Typography variant="body2" style={{fontSize: '12px'}}>
                Lorem Ipsum is simply dummy
              </Typography><Typography variant="body2" style={{fontSize: '12px'}}>
                text of the printing and 
              </Typography><Typography variant="body2" style={{fontSize: '12px'}}>
                typesetting industry.
              </Typography>
              <Typography color="primary" fontSize="small" style={{ textDecoration: 'underline' }}>
                Read More...
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default QuestionSection;
