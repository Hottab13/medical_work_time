import React, { useMemo, useState } from "react";

import { useAddDoctorWorkingHoursMutation } from "../redux/doctorWorkingHoursApi";
import { useArrRow } from "../hook/useArrRow";
import { Table } from "./Table";
import { tableGenerator } from "../util/tableGenerator";


export const CalendarTableAdmin = ({ columns, scheduledDoctorTime }) => {
  const tableData = tableGenerator(scheduledDoctorTime, useArrRow());
  console.log(tableData)
  const data = useMemo(() => tableData, []);
  const [date, setDate] = useState([]);

  const updateMyData = (rowIndex, columnId, value) => {};
  const [addWorkingHours, { isError }] = useAddDoctorWorkingHoursMutation();

  const hendleAddWorkingHours = async () => {
    console.log(date);
    await addWorkingHours({ date }).unwrap();
  };
  return (
    <div>
      <Table
        columns={columns}
        data={data}
        updateMyData={updateMyData}
        hendleAddWorkingHours={hendleAddWorkingHours}
      />
    </div>
  );
};
