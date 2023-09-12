import { useState } from "react";
import { CalendarTable } from "./calendar/CalendarTable";

const App = () => {
  const [startDate, setStartDate] = useState(
    new Date(new Date().setDate(new Date().getDate() - 1)),
  );
  const [endDate, setEndDate] = useState(
    new Date(new Date().setDate(new Date().getDate() + 12)),
  );

  const arr:Date[] = [];
  for (
    const dt = new Date(startDate);
    dt <= new Date(endDate);
    dt.setDate(dt.getDate() + 1)
  ) {
    arr.push(new Date(dt));
  }


  return (
    <div className="bg-gray-200">
      <CalendarTable
        arr={arr}
        setStartDate={setStartDate}
        startDate={startDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
    </div>
  );
};
export default App;

