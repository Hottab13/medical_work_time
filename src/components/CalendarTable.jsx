import React, { useState } from "react";

import { useAddDoctorWorkingHoursMutation } from "../redux/doctorWorkingHoursApi";
import { useArrRow } from "../hook/useArrRow";
import { Table } from "./Table";
import { tableGeneratorDoctor } from "../util/tableGenerator";
import { dateGenerator } from "../util/dateGenerator";

const ButtonTableSend = ({ hendleAddWorkingHours }) => (
  <div>
    <button
      type="button"
      className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
      onClick={hendleAddWorkingHours}
    >
      Отпраивть
    </button>
  </div>
);

export const CalendarTable = ({ columns, doctor }) => {
  const arrRow = useArrRow();
/*useEffect(() => {
    setTableData(tableGeneratorDoctor(dataDays, arrRow));
  }, [dataDays]);
  const [tableData, setTableData] = useState(
    tableGeneratorDoctor(doctor, arrRow)
  );*/
  const tableData = tableGeneratorDoctor(doctor, arrRow);
  const [arrDate, setDate] = useState([]);

  const updateMyData = (rowIndex, columnId, value) => {
    setDate([...arrDate,{date: dateGenerator(columnId, rowIndex),doctorID:doctor.id} ]);
  };
  const [addWorkingHours, { isSuccess, data }] = useAddDoctorWorkingHoursMutation();
  if (isSuccess) {
    return alert("Дата отправлена, обновите страницу!");
  }
  const hendleAddWorkingHours = async () => {
    await addWorkingHours(arrDate).unwrap();
  };
  return (
    <div>
      <Table
        columns={columns}
        data={tableData}
        updateMyData={updateMyData}
        hendleAddWorkingHours={hendleAddWorkingHours}
      />
      <ButtonTableSend hendleAddWorkingHours={hendleAddWorkingHours} />
    </div>
  );
};
