import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the necessary components for chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const SkillsChart = () => {
    // Define the data for the chart
    const data = {

        
        labels: ['Java', 'Python', 'HTML', 'CSS'],
        datasets: [
            {
                label: 'My Skills',
                data: [40, 30, 20, 10], // Percentages for each skill
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                ],
                hoverOffset: 4,
            },
        ],
    
    };

    <p> hi how are u</p>
    // Define chart options
    const options = {
        responsive: true,
         maintainAspectRatio: false, 
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Skill Proficiency',
            },
        },
    };

    return  <div style={{ position: 'static',bottom:'0',margin: 'auto',left:'0',right:'0',width: '50%', height: '200px' }}> {/* Adjust these sizes */}
            <Doughnut data={data} options={options} />
        </div>
};

export default SkillsChart;