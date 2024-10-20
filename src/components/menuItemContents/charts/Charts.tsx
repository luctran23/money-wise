import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export const Charts: React.FC = () => {
    // Example data for the chart
    const chartData = [
        { month: "January", value: 100 },
        { month: "February", value: 150 },
        { month: "March", value: 200 },
        { month: "April", value: 120 },
        { month: "May", value: 180 },
        { month: "June", value: 220 },
        { month: "July", value: 160 },
        { month: "August", value: 190 },
        { month: "September", value: 140 },
        { month: "October", value: 170 },
        { month: "November", value: 210 },
        { month: "December", value: 130 },
    ];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const seriesData: any[] = chartData.map(({ month, value }) => ({
        name: month,
        data: [[month, value]],
    }));

    // Highcharts configuration options
    const options: Highcharts.Options = {
        chart: {
            type: "column",
        },
        title: {
            text: "Biểu đồ theo dõi chi tiêu",
        },
        xAxis: {
            type: "category",
            title: {
                text: "Month",
            },
        },
        yAxis: {
            title: {
                text: "Value",
            },
        },
        plotOptions: {
            column: {
                pointWidth: 40,
            },
        },
        series: seriesData,
    };

    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};
