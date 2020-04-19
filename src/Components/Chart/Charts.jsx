import React, { useState, useEffect } from 'react';
import { Line, Bar} from 'react-chartjs-2';

import { fetchDailyData } from '../../Api';

import styles from './Charts.module.css';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();
      //console.log(initialDailyData);
      setDailyData(initialDailyData);
    };

    fetchMyAPI();
  }, []);

  const barChart = (
      confirmed?(
        <Bar
        
            data = {{
                labels:['infected', 'Recovered', 'Death'],
                datasets:[{
                    label:'People',
                    backgroundColor: ['rgb(255, 12, 12)', 'rgb(200, 255, 0)', 'rgb(0,0,0)'],
                    data:[confirmed.value, recovered.value, deaths.value],
                }]
            }}

            options={{
                legend:{display:false},
                title:{display:true, text:`Current situation in ${country}`},

            }}
        
        
        />

        
      ) : null

  );

  const lineChart = (
    dailyData[0] ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [{
            data: dailyData.map((data) => data.confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          }, {
            data: dailyData.map((data) => data.deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          },
          ],
        }}
      />
    ) : null
  );

  return (
    <div className={styles.container}>
      {country ? barChart : lineChart}
    </div>
  );
};

export default Chart;
