import React, { useMemo, useState } from "react";
import moment from "moment";
import { useTable } from "react-table";
import { useAddDoctorWorkingHoursMutation } from "../redux/doctorWorkingHoursApi";


const Table = ({ columns, data, updateMyData }) => {
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
    useTable({
      columns,
      data,
      updateMyData,
    });
  return (
    <>
      <table
        {...getTableProps()}
        className="border-separate border-spacing-1 border border-slate-400 "
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      className="w-1/14 border border-slate-300"
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export const CalendarTableAdmin = ({
  columns,
  scheduledDoctorTime,
}) => {
  const arrRow = [];

  for (let i = 0; i <= 23; i++) {
    arrRow.push({
      time: `${i}-${i + 1}`,
    });
  }
  scheduledDoctorTime.forEach((element) => {
    const elName = element.name;
    const elKey = moment(element.date).format("hh")-3;
    const elNameDate = moment(element.date).format("MMMM D YYYY").replace(/ /g, "");
    const object = arrRow[elKey];
    object[elNameDate]=elName;
  });

  console.log(arrRow);


  const data = useMemo(() => arrRow, []);
  const [date, setDate] = useState([]);
  const updateMyData = (rowIndex, columnId, value) => {
    const myMomentObject = moment(columnId, "D MMMM YYYY").toDate();
    const myMomentDate = moment(myMomentObject)
      .add(moment.utc(rowIndex * 3600 * 1000).format("HH:mm"))
      .toDate();
    if (value) {
      setDate([...date, myMomentDate]);
    }
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
