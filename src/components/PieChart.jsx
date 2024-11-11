import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Rent', value: 400 },
  { name: 'Groceries', value: 300 },
  { name: 'Utilities', value: 200 },
  { name: 'Entertainment', value: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function SimplePieChart() {
  return (
    <div style={{ width: '400px', height: '300px' }}>
      <ResponsiveContainer width='100%' height={300}>
        <PieChart>
          <Pie
            data={data}
            cx='50%'
            cy='50%'
            labelLine={false}
            label={({ name }) => name}
            outerRadius={100}
            fill='#8884d8'
            dataKey='value'
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SimplePieChart;
