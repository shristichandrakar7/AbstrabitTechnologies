import React from 'react';
import { Card, CardContent, Typography} from '@mui/material';
import { PieChart, Pie, Legend, ResponsiveContainer, Cell } from 'recharts';

const COLORS = ['purple', 'orange', 'green', 'blue'];

const FDPortfolio = () => {
  const data = [
    { name: 'Bajaj Finserv', value: 25000 },
    { name: 'Shriram Finance', value: 20000 },
    { name: 'Mahindra Finance', value: 15000 },
    { name: 'Utkarsh Small Finance Bank', value: 40000 },
  ];

  const total = data.reduce((acc, entry) => acc + entry.value, 0);

  const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    const value = data[index].value;
    const percentage = ((value / total) * 100).toFixed(0);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={7}
      >
        {`${value} (${percentage}%)`}
      </text>
    );
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Your FD Portfolio</Typography>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={60}
              dataKey="value"
              labelLine={false}
              label={renderCustomLabel}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend
              align="right"
              verticalAlign="middle"
              layout="vertical"
              iconSize={5}
              wrapperStyle={{ whiteSpace: 'wrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default FDPortfolio;
