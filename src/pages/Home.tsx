import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactECharts from 'echarts-for-react';
import { generateDoughnutChartOption } from '../utils/echartsUtils';
import BarChartComponent from '../components/BarChartComponent';

  const Home: React.FC = () => {
    const data = [
      { name: 'Venta Online', value: 335 },
      { name: 'Venta Física', value: 310 },
    ];

    const option = generateDoughnutChartOption(data);
    
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 mb-4">
          <div className="card" style={{ backgroundColor: 'var(--card-background-color)', color: 'var(--card-text-color)', borderColor: 'var(--card-border-color)' }}>
              <div className="card-body">
                <h5 className="card-title">Rifa en curso</h5>
                <p className="card-text">Total de boletos vendidos.</p>
                <div className="progress"
                  role='progressbar'
                  aria-valuenow={20}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ height: '3rem' }}
                  >
                  <div
                    className="progress-bar"
                    style={{ width: '20%' }} // Ajusta el porcentaje según sea necesario
                  
                  >
                    20%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
          <div className="card" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)', borderColor:'var(--border-color)'}}>
              <div className="card-body">
                <h5 className="card-title">Fuente de las ventas</h5>
                <p className="card-text">Contenido de la tarjeta pequeña 1.</p>
                <div style={{ width: '100%', height: '300px' }}>
                <ReactECharts option={option}/>
              </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
          <div className="card" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)', borderColor:'var(--border-color)'}}>
              <div className="card-body">
                <h5 className="card-title">Tarjeta Pequeña 2</h5>
                <p className="card-text">Contenido de la tarjeta pequeña 2.</p>
                <BarChartComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Home;
