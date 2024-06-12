import React from 'react';
import { Chart } from 'react-google-charts';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';

const MaturityTimeline = () => {
  const data = [
    [
      { type: 'string', label: 'Task ID' },
      { type: 'string', label: 'Task Name' },
      { type: 'string', label: 'Resource' },
      { type: 'date', label: 'Start Date' },
      { type: 'date', label: 'End Date' },
      { type: 'number', label: 'Duration' },
      { type: 'number', label: 'Percent Complete' },
      { type: 'string', label: 'Dependencies' },
    ],
    [
      'UtkarshFD1',
      'Utkarsh FD 1',
      'Utkarsh',
      new Date(2024, 0, 1),
      new Date(2024, 4, 30),
      null,
      100,
      null,
    ],
    [
      'ShriramFD2',
      'Shriram FD Plan 2',
      'Shriram',
      new Date(2024, 0, 1),
      new Date(2025, 0, 31),
      null,
      100,
      null,
    ],
    [
      'BajajFinservFD1',
      'Bajaj Finserv FD 1',
      'Bajaj',
      new Date(2024, 1, 1),
      new Date(2025, 4, 30),
      null,
      100,
      null,
    ],
    [
      'MahindraFD2',
      'Mahindra FD Plan 2',
      'Mahindra',
      new Date(2024, 0, 1),
      new Date(2026, 0, 31),
      null,
      100,
      null,
    ],
  ];

  const options = {
    height: 350,
    gantt: {
      trackHeight: 30,
      barHeight: 20,
      criticalPathEnabled: false,
      innerGridTrack: { fill: '#e0e0e0' },
      innerGridDarkTrack: { fill: '#c0c0c0' },
      labelStyle: {
        fontName: 'Arial',
        fontSize: 12,
        color: '#000',
      },
    },
  };

  return (
    <Card sx={{ height: '270px' }}> 
      <CardContent>
        <Typography variant="h5">
          FD Maturity Timeline
        </Typography>
        <Chart
          chartType="Gantt"
          width="100%"
          height="350px" // Reduced height
          data={data}
          options={options}
        />
      </CardContent>
    </Card>
  );
};

export default MaturityTimeline;