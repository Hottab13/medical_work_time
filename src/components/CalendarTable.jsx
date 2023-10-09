import React, { useEffect, useState } from "react";
import moment from "moment";

import { useAddDoctorWorkingHoursMutation } from "../redux/doctorWorkingHoursApi";
import { useArrRow } from "../hook/useArrRow";
import { Table } from "./Table";
import { tableGeneratorDoctor } from "../util/tableGenerator";

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

export const CalendarTable = ({ columns, dataDays }) => {
  const arrRow = useArrRow();

  const [tableData, setTableData] = useState(
    tableGeneratorDoctor(dataDays, arrRow)
  );
  const [arrDate, setDate] = useState([]);

  useEffect(() => {
    setTableData(tableGeneratorDoctor(dataDays, arrRow));
  }, [dataDays]);


  const updateMyData = (rowIndex, columnId, value) => {
    const myMomentObject = moment(columnId, "MMMM DD YYYY").toDate();
    const myMomentDate = moment(myMomentObject)
      .add(moment.utc(rowIndex * 3600 * 1000).format("HH:mm"))
      .toDate();
    if (value) {
      setDate([...arrDate, myMomentDate]);
    }
  };
  const [addWorkingHours, { isLoading }] = useAddDoctorWorkingHoursMutation();
  const hendleAddWorkingHours = async () => {
    const payloyd = {
      ...dataDays,
      desiredTime: [...dataDays.desiredTime, ...arrDate],
    };
    await addWorkingHours(payloyd).unwrap();
    //setTableData(tableGeneratorDoctor(dataDays, arrRow));
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
