import { TWorkingTime } from "@src/types/workingTimeTypes";
import dayjs from "dayjs";

export const groupTimeByDate = (dataSource: TWorkingTime[]) => {
    if (!dataSource.length) {
        return [];
    }
    return dataSource.reduce((acc, currentItem) => {
        const dateKey = dayjs(currentItem.createdAt).format('YYYY-MM-DD');
        if (!acc[dateKey]) {
            acc[dateKey] = [];
        }
        const tappingTime = dayjs(currentItem.createdAt).format('HH:mm:ss');
        acc[dateKey].push(tappingTime)
        return acc;
    }, {});
};

export const getWorkingTimeDataSource = (dataSource: TWorkingTime[]) => {
    const groupedTime = groupTimeByDate(dataSource);
    const result: any = [];

    Object.keys(groupedTime).forEach(key => {
        const length = groupedTime[key].length;
        result.push({
            key: new Date().getTime(),
            createdDay: key,
            checkIn: groupedTime[key][length - 1],
            checkOut: groupedTime[key][0]
        })
    });
    return result;
}