// BarChart.js
import React from 'react';
import { useSelector } from 'react-redux';
import Plot from 'react-plotly.js';

function BarChart() {
  const data = useSelector(state => state.data.filter(item => item.checked));
  
  const chartData = {
    x: data.map(item => item.name),
    y: data.map(item => item.value1)
  };

  return (
    <div className="bar-chart">
      <Plot
        data={[{ type: 'bar', x: chartData.x, y: chartData.y }]}
        layout={{ width: 800, height: 400, title: 'Bar Chart' }}
      />
    </div>
  );
}

export default BarChart;
