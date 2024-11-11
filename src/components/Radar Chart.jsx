import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { subject: 'Math', A: 120, B: 110, fullMark: 150 },
  { subject: 'Science', A: 98, B: 130, fullMark: 150 },
  // ... more subjects
];

function SimpleRadarChart() {
  return (
    <div style={{ width: '400px', height: '300px' }}>
      <ResponsiveContainer width='100%' height={300}>
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey='subject' />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            name='Student A'
            dataKey='A'
            stroke='#8884d8'
            fill='#8884d8'
            fillOpacity={0.6}
          />
          <Radar
            name='Student B'
            dataKey='B'
            stroke='#82ca9d'
            fill='#82ca9d'
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SimpleRadarChart;
