import { format, setDefaultOptions } from "date-fns";

import { ru } from "date-fns/locale";

setDefaultOptions({ locale: ru });

const timeOfDay = [
  "00-01",
  "01-02",
  "02-03",
  "03-04",
  "04-05",
  "05-06",
  "06-07",
  "07-08",
  "08-09",
  "09-10",
  "10-11",
  "11-12",
  "12-13",
  "13-14",
  "14-15",
  "15-16",
  "16-17",
  "17-18",
  "18-19",
  "19-20",
  "20-21",
  "21-22",
  "22-23",
  "23-24",
];

interface Props {
  arr: any[];
  setStartDate: any;
  startDate: any;
  endDate: any;
  setEndDate: any;
}

const CalendarTable: React.FC<Props> = ({
  arr,
  setStartDate,
  startDate,
  setEndDate,
  endDate,
}) => {
  //const startDate = startOfMonth(value);
  // const endDate = endOfMonth(value);
  //const numDays = differenceInDays(endDate, startDate) + 1;
  //const numDays = differenceInDays(endDate, value)+1;

  const nextDay = () => {
    setStartDate(new Date(startDate.setDate(startDate.getDate() + 1)));
    setEndDate(new Date(endDate.setDate(endDate.getDate() + 1)));
  };
  const prevDay = () => {
    setStartDate(new Date(startDate.setDate(startDate.getDate() - 1)));
    setEndDate(new Date(endDate.setDate(endDate.getDate() - 1)));
  };

  /*const prefixDays = startDate.getDay();
  const suffixDays = 6 - endDate.getDay();
  const prevMonth = () => onChange && onChange(sub(value, { months: 1 }));
  const nextMonth = () => onChange && onChange(add(value, { months: 1 }));
  const prevYear = () => onChange && onChange(sub(value, { years: 1 }));
  const nextYear = () => onChange && onChange(add(value, { years: 1 }));*/
  return (
    <div className="container mx-auto mt-10">
      <div className="wrapper bg-white rounded shadow w-full ">
        <div className="flex justify-center pb-10">
          <button onClick={prevDay}>{"<"}</button>
          <div className="text-xl font-bold">
            {format(startDate, "LLLL-yyyy")}
          </div>
          <button onClick={nextDay}>{">"}</button>
        </div>

        <table className=" border-collapse border border-slate-400">
          <thead>
            <tr>
              <th className="border border-slate-300">Время</th>
              {arr.map((day) => {
                console.log(day);
                return (
                  <th key={day} className="border border-slate-300">
                    {format(day, "d-EEEEEE")}
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody>
            {timeOfDay.map((item) => (
              <tr key={item}>
                <td className="border border-slate-300">{item}</td>
                {Array.from([
                  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
                ]).map((_,) => (
                 <td className="border border-slate-300"> <input type="checkbox" /></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {/* 
          <div className="w-full grid grid-cols-7 items-center justify-center text-center">
            <Cell  onClick={prevYear}>{"<<"}</Cell>
            <Cell  onClick={prevMonth}>
              {"<"}
            </Cell>
            <Cell className="text-lg font-bold col-span-3">
              {format(value, "LLLL-yyyy")}
            </Cell>
            <Cell  onClick={nextMonth}>{">"}</Cell>
            <Cell  onClick={nextYear}>{">>"}</Cell>

            {daysOfWeek.map((day, index) => (
              <div
                key={index}
                className="p-2 border-x h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xl xl:font-bold mt-5 truncate"
              >
                <span>{day}</span>
              </div>
            ))}
            {Array.from({ length: prefixDays }).map((_, index) => (
              <CellDays key={index}></CellDays>
            ))}
            {Array.from({ length: numDays }).map((_, index) => {
              const date = index + 1;
              return <CellDays key={index}>{date}</CellDays>;
            })}
            {Array.from({ length: suffixDays }).map((_, index) => (
              <CellDays key={index}></CellDays>
            ))}

            
        </div>*/}
      </div>
    </div>
  );
};
export { CalendarTable };
