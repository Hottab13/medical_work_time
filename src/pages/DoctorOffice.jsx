import moment from "moment";
import { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Select from "react-select";

import { CalendarTable } from "../components/CalendarTable";
import { CheckBoxCell } from "../components/cell";
import { useGetDoctorWorkingHoursQuery } from "../redux/doctorWorkingHoursApi";
import { addDateDays, reduceDateDays } from "../util/dateDays";
import { forDaysRange } from "../util/forDaysRange";
import { prevDay, nextDay } from "../util/pageDay";

const options = [
  { value: 0, label: "Григорий Фомин" },
  { value: 1, label: "Борис Евкакиевич" },
  { value: 2, label: "Раис Савкаевич" },
];

const DoctorOffice = () => {
  const { data = [] } = useGetDoctorWorkingHoursQuery();
  const [startDate, setStartDate] = useState(reduceDateDays(new Date(), 1));
  const [endDate, setEndDate] = useState(addDateDays(new Date(), 12));
  const [selectedOptionDoctor, setSelectedOptionDoctor] = useState(options[0]);
  const columns = forDaysRange(startDate, endDate, CheckBoxCell);
  return (
    <>
      <div>
        <Select
          defaultValue={selectedOptionDoctor}
          onChange={setSelectedOptionDoctor}
          options={options}
        />
      </div>
      <div className="flex justify-center pb-10">
        <button
          onClick={() => prevDay(startDate, endDate, setStartDate, setEndDate)}
        >
          {<GrFormPrevious />}
        </button>
        <div className="text-xl font-bold">
          {moment(startDate).format("MMMM YYYY")}
        </div>
        <button
          onClick={() => nextDay(startDate, endDate, setStartDate, setEndDate)}
        >
          {<GrFormNext />}
        </button>
      </div>
      {data.length && (
        <CalendarTable
          columns={columns}
          dataDays={data[selectedOptionDoctor.value]}
        />
      )}
    </>
  );
};
export { DoctorOffice };
