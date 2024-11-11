import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { x: 10, y: 30 },
  { x: 20, y: 90 },
  // ... more points
];

function SimpleScatterChart() {
  return (
    <div style={{ width: '400px', height: '300px' }}>
    <ResponsiveContainer width='100%' height={300}>
      <ScatterChart>
        <CartesianGrid />
        <XAxis dataKey='x' name='Height' unit='cm' />
        <YAxis dataKey='y' name='Weight' unit='kg' />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name='A' data={data} fill='#8884d8' />
      </ScatterChart>
    </ResponsiveContainer>
    </div>
  );
}

export default SimpleScatterChart;
