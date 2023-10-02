import React, { useMemo, useState } from "react";
import moment from "moment";
import { useTable } from "react-table";
import { useAddDoctorWorkingHoursMutation } from "../redux/doctorWorkingHoursApi";

const timeOfDay = [
  {
    time: "00-01",
  },
  {
    time: "01-02",
  },
  {
    time: "02-03",
  },
  {
    time: "03-04",
  },
  {
    time: "04-05",
  },
  {
    time: "05-06",
  },
  {
    time: "06-07",
  },
  {
    time: "07-08",
  },
  {
    time: "08-09",
  },
  {
    time: "09-10",
  },
  {
    time: "10-11",
  },
  {
    time: "11-12",
  },
  {
    time: "12-13",
  },
  {
    time: "13-14",
  },
  {
    time: "14-15",
  },
  {
    time: "15-16",
  },
  {
    time: "16-17",
  },
  {
    time: "17-18",
  },
  {
    time: "18-19",
  },
  {
    time: "19-20",
  },
  {
    time: "20-21",
  },
  {
    time: "21-22",
  },
  {
    time: "22-23",
  },
  {
    time: "23-24",
  },
];

const Table = ({ columns, data, updateMyData, hendleAddWorkingHours }) => {
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
    useTable({
      columns,
      data,
      updateMyData,
    });
  return (
    <>
      <table {...getTableProps()}>
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
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <button
          className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
          onClick={hendleAddWorkingHours}
        >
          Отпраивть
        </button>
      </div>
    </>
  );
};

export const CalendarTable = ({ columns }) => {
  const data = useMemo(() => timeOfDay, []);
  const [date, setDate] = useState();

  const updateMyData = (rowIndex, columnId, value) => {
    const myMomentObject = moment(columnId, "D MMMM YYYY").toDate();
    const myMomentDate = moment(myMomentObject)
      .add(moment.utc((rowIndex+3) * 3600 * 1000).format("HH:mm"))
      .toDate();
    if (value) {
      setDate( myMomentDate);
    }
  };
  const[addWorkingHours, {isError}] = useAddDoctorWorkingHoursMutation();
  const hendleAddWorkingHours = async () => {
    console.log(date);
    await addWorkingHours({name:"Григорий Степанович",date}).unwrap()
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
