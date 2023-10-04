import React, { useMemo, useState } from "react";
import moment from "moment";

import { useAddDoctorWorkingHoursMutation } from "../redux/doctorWorkingHoursApi";
import { useArrRow } from "../hook/useArrRow";
import { Table } from "./Table";

const ButtonTableSend = ({hendleAddWorkingHours}) => (
  <div>
    <button
      className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
      onClick={hendleAddWorkingHours}
    >
      Отпраивть
    </button>
  </div>
);

export const CalendarTable = ({ columns, dataDays }) => {
  const arrRow = useArrRow();
console.log(arrRow)
  dataDays.forEach((element) => {
    const elKey = parseInt(moment(element.date).format("HH"));
    const elNameDate = moment(element.date)
      .format("MMMM D YYYY")
      .replace(/ /g, "");
    const object = arrRow[elKey];
    object[elNameDate] = true;
  });

  const data = useMemo(() => arrRow, []);
  const [date, setDate] = useState();

  const updateMyData = (rowIndex, columnId, value) => {
    const myMomentObject = moment(columnId, "MMMM D YYYY").toDate();
    const myMomentDate = moment(myMomentObject)
      .add(moment.utc((rowIndex) * 3600 * 1000).format("HH:mm"))
      .toDate();
    if (value) {
      setDate(myMomentDate);
    }
  };
  const [addWorkingHours, { isError }] = useAddDoctorWorkingHoursMutation();
  const hendleAddWorkingHours = async () => {
    console.log(date);
    await addWorkingHours({ name: "Григорий",surname:"Фмилия", date }).unwrap();
  };

  return (
    <div>
      <Table
        columns={columns}
        data={data}
        updateMyData={updateMyData}
      />
      <ButtonTableSend hendleAddWorkingHours={hendleAddWorkingHours} />
    </div>
  );
};
