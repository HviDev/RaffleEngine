// echartsUtils.ts

import * as echarts from 'echarts/core';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart} from 'echarts/charts';


// Registra los componentes necesarios
echarts.use([TitleComponent, TooltipComponent, LegendComponent, PieChart, CanvasRenderer ]);


// Función para generar la opción del gráfico de tipo Doughnut
export const generateDoughnutChartOption = (data: { name: string; value: number }[]) => {
  return {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
      orient: 'vertical',
      top: 'middle',
      right: 10,
      data: data.map(item => item.name),
    },
    series: [
      {
        name: 'Ejemplo de Doughnut Chart',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '30',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: data,
      },
    ],
  };
};

