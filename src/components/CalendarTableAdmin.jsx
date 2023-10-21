import React, { useMemo} from "react";

import { useAddDoctorWorkingHoursMutation } from "../redux/doctorWorkingHoursApi";
import { useArrRow } from "../hook/useArrRow";
import { Table } from "./Table";
import { tableGenerator } from "../util/tableGenerator";


export const CalendarTableAdmin = ({ columns, doctorsTime }) => {
  const arrRow = useArrRow();
  const tableData = tableGenerator(doctorsTime, arrRow);
  //const data = useMemo(() => tableData, []);


  const updateMyData = (rowIndex, columnId, value) => {};
  const [addWorkingHours, { isSuccess }] = useAddDoctorWorkingHoursMutation();

  const hendleAddWorkingHours = async () => {
    await addWorkingHours({ date }).unwrap();
  };
  return (
    <div>
      <Table
        columns={columns}
        data={tableData}
        updateMyData={updateMyData}
        hendleAddWorkingHours={hendleAddWorkingHours}
      />
    </div>
  );
};
