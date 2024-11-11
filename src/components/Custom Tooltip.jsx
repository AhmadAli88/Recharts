/*eslint-disable*/
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Sample data
const data = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

// Custom Tooltip component
function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: '#fff',
          padding: '5px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      >
        <p>{`Month: ${payload[0].payload.name}`}</p>
        <p>{`UV: ${payload[0].value}`}</p>
        <p>{`PV: ${payload[1].value}`}</p>
        <p>{`Amount: ${payload[0].payload.amt}`}</p>
      </div>
    );
  }
  return null;
}

function LineChartWithCustomTooltip() {
  return (
    <div style={{ width: '400px', height: '300px' }}>
      <ResponsiveContainer width='100%' height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip content={<CustomTooltip />} /> {/* Use custom tooltip */}
          <Line
            type='monotone'
            dataKey='pv'
            stroke='#8884d8'
            activeDot={{ r: 8 }}
          />
          <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineChartWithCustomTooltip;
