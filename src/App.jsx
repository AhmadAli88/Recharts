import './App.css';
import SimpleAreaChart from './components/AreaChart';
import SimpleBarChart from './components/Bar Chart';
import SimpleLineChart from './components/Basic Line Chart';
import SimpleComposedChart from './components/ComposedChart';
import LineChartWithCustomTooltip from './components/Custom Tooltip';
import SimplePieChart from './components/PieChart';
import SimpleRadarChart from './components/Radar Chart';
import SimpleScatterChart from './components/ScatterPlot';

function App() {
  return (
    <div>
      <SimpleLineChart />
      <SimpleBarChart/>
      <SimplePieChart/>
      <SimpleAreaChart/>
      <SimpleRadarChart/>
      <SimpleScatterChart/>
      <SimpleComposedChart/>
      <LineChartWithCustomTooltip/>
    </div>
  );
}

export default App;
