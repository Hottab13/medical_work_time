import { format } from "date-fns";
import { useState } from "react";

import { CalendarTable } from "../components/CalendarTable";
import { addDateDays, reduceDateDays } from "../util/dateDays";
import { forDaysRange } from "../util/forDaysRange";

const DoctorOffice = () => {
  const [startDate, setStartDate] = useState(reduceDateDays(new Date(), 1));
  const [endDate, setEndDate] = useState(addDateDays(new Date(), 12));
  const columns = forDaysRange(startDate, endDate);

  const nextDay = () => {
    setStartDate && setStartDate(addDateDays(startDate, 1));
    setEndDate && setEndDate(addDateDays(endDate, 1));
  };
  const prevDay = () => {
    setStartDate && setStartDate(reduceDateDays(startDate, 1));
    setEndDate && setEndDate(reduceDateDays(endDate, 1));
  };
  return (
    <>
      <div className="flex justify-center pb-10">
        <button onClick={prevDay}>{"<"}</button>
        <div className="text-xl font-bold">
          {format(startDate, "LLLL-yyyy")}
        </div>
        <button onClick={nextDay}>{">"}</button>
      </div>
      <CalendarTable columns={columns} />
    </>
  );
};
export { DoctorOffice };
