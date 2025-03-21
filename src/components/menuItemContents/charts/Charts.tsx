import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useGetCollection } from "@src/hooks/useGetCollection/useGetCollection";
import { TExpense } from "@src/types/expenseTypes";
import { groupExpensesByMonth } from "@src/utils/expense";

const getDaysToTet = () => {
    const today = new Date();
    const tet = new Date("2025-01-28");
    // Calculate the difference in milliseconds
    const differenceInMilliseconds = tet.getTime() - today.getTime();

    // Convert milliseconds to days
    const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

    return differenceInDays; // Return the difference in days
}

const getTimeOfLove = () => {
    const today = new Date();
    const thatDay = new Date("2024-08-25");

    const diffMiliseconds = today.getTime() - thatDay.getTime();
    const differenceInDays = Math.floor(diffMiliseconds / (1000 * 60 * 60 * 24));

    return differenceInDays; // Return the difference in days
}
export const Charts: React.FC = () => {
    const { data: expenses } = useGetCollection({ collectionName: "expenses", dependencies: [] }) as { data: TExpense[]; loading: boolean };

    // Example data for the chart
    const chartData = [
        { month: "January", value: 0 },
        { month: "February", value: 0 },
        { month: "March", value: 0 },
        { month: "April", value: 0 },
        { month: "May", value: 0 },
        { month: "June", value: 0 },
        { month: "July", value: 0 },
        { month: "August", value: 0 },
        { month: "September", value: 0 },
        { month: "October", value: 0 },
        { month: "November", value: 0 },
        { month: "December", value: 0 },
    ];

    const monthlyExpenses = groupExpensesByMonth(expenses);
    const currentYear = new Date().getFullYear();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const seriesData: any[] = chartData.map(({ month, value }) => ({
        name: month,
        data: [[month, monthlyExpenses[`${month} ${currentYear}`] || 0]],
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

    const daysToTet = getDaysToTet();
    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};
