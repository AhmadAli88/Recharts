import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  // ... more months
];

function SimpleComposedChart() {
  return (
    <div style={{ width: '400px', height: '300px' }}>
      <ResponsiveContainer width='100%' height={300}>
        <ComposedChart data={data}>
          <CartesianGrid stroke='#f5f5f5' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='pv' barSize={20} fill='#413ea0' />
          <Line type='monotone' dataKey='uv' stroke='#ff7300' />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SimpleComposedChart;
