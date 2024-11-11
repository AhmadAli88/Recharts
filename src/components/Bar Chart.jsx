import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Product A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Product B', uv: 3000, pv: 1398, amt: 2210 },
  // ... more products
];

function SimpleBarChart() {
  return (
    <div style={{ width: '400px', height: '300px' }}>
      <ResponsiveContainer width='100%' height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='pv' fill='#8884d8' />
          <Bar dataKey='uv' fill='#82ca9d' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SimpleBarChart;
