import { addDateDays, reduceDateDays } from "./dateDays";

const nextDay = (startDate, endDate, setStartDate, setEndDate) => {
  setStartDate && setStartDate(addDateDays(startDate, 1));
  setEndDate && setEndDate(addDateDays(endDate, 1));
};
const prevDay = (startDate, endDate, setStartDate, setEndDate) => {
  setStartDate && setStartDate(reduceDateDays(startDate, 1));
  setEndDate && setEndDate(reduceDateDays(endDate, 1));
};
export { nextDay, prevDay };
