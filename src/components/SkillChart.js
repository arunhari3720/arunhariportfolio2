import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const SkillsChart = () => {
    const data = {
        labels: ['Java', 'Python', 'HTML', 'CSS'],
        datasets: [
            {
                label: 'My Skills',
                data: [40, 30, 20, 10],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                ],
                hoverOffset: 8, // a bit larger hover effect
                borderWidth: 2,
                borderColor: 'white',
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            animateRotate: true,
            duration: 2000, // 2 seconds animation
            easing: 'easeOutBounce',
        },
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 14,
                    },
                    color: '#333',
                },
            },
            title: {
                display: true,
                text: 'Skill Proficiency',
                font: {
                    size: 18,
                    weight: 'bold',
                },
                color: '#222',
            },
        },
    };

    return (
        <div
            style={{
                margin: '40px auto',
                width: '300px',
                height: '300px',
                position: 'relative',
            }}
        >
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default SkillsChart;
