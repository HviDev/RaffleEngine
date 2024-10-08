// BarChartComponent.tsx
import React, { useEffect } from 'react';
import * as echarts from 'echarts/core';
import { generateBarChartOption } from '../utils/echartBarrasUtils';

const BarChartComponent: React.FC = () => {
  useEffect(() => {
    const chartDom = document.getElementById('main')!;
    const myChart = echarts.init(chartDom);

    const data = [
      { name: 'Rainfall', values: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3] },
      { name: 'Evaporation', values: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3] }
    ];

    const option = generateBarChartOption(data);
    myChart.setOption(option);

    // Cleanup on component unmount
    return () => {
      myChart.dispose();
    };
  }, []);

  return <div id="main" style={{ width: '100%', height: '400px' }} />;
};

export default BarChartComponent;
