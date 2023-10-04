import React, { useMemo, useState } from "react";
import moment from "moment";

import { useAddDoctorWorkingHoursMutation } from "../redux/doctorWorkingHoursApi";
import { useArrRow } from "../hook/useArrRow";
import { Table } from "./Table";

export const CalendarTableAdmin = ({ columns, scheduledDoctorTime }) => {
  const arrRow = useArrRow();

  scheduledDoctorTime.forEach((element) => {
    const elName = `${element.name.charAt(0)}${
      element.surname ? element.surname.charAt(0) : ""
    }`;
    const elKey = parseInt(moment(element.date).format("HH"));
    const elNameDate = moment(element.date)
      .format("MMMM D YYYY")
      .replace(/ /g, "");
    const object = arrRow[elKey];
    object[elNameDate] = elName;
  });
  console.log(arrRow)
  const data = useMemo(() => arrRow, []);
  const [date, setDate] = useState([]);

  const updateMyData = (rowIndex, columnId, value) => {
    
  };
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
