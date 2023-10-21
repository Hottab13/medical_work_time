import moment from "moment";
import { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
//import Select from "react-select";
import { useSelector } from "react-redux";

import { CalendarTable } from "../components/CalendarTable";
import { CheckBoxCell } from "../components/Cell";
import { addDateDays, reduceDateDays } from "../util/dateDays";
import { forDaysRange } from "../util/forDaysRange";
import { prevDay, nextDay } from "../util/pageDay";
import {useGetDoctorDataQuery} from "../redux/doctorWorkingHoursApi";
import {Loader} from "../components/Loader";

/*const options = [
  { value: 0, label: "Григорий Фомин" },
  { value: 1, label: "Борис Евкакиевич" },
  { value: 2, label: "Раис Савкаевич" },
];*/

const DoctorOffice = () => {
  const authData = useSelector((state) => state.rootReducer?.authDoctor || "");
  const [startDate, setStartDate] = useState(reduceDateDays(new Date(), 1));
  const [endDate, setEndDate] = useState(addDateDays(new Date(), 12));
  //const [selectedOptionDoctor, setSelectedOptionDoctor] = useState(options[0]);
  const { data = [], isLoading  } = useGetDoctorDataQuery(authData);
  if (isLoading) return <Loader />;
  const columns = forDaysRange(startDate, endDate, CheckBoxCell);
  
  return (
    <>
      <div>
      <h1>{"Доктор:" + authData.name + " " + authData.surname}</h1>
      </div>
      <div className="justify-center pb-10 text-xl font-bold">
        <button
          onClick={() => prevDay(startDate, endDate, setStartDate, setEndDate)}
        >
          {<GrFormPrevious />}
        </button>
          {moment(startDate).format("MMMM YYYY")}
        <button
          onClick={() => nextDay(startDate, endDate, setStartDate, setEndDate)}
        >
          {<GrFormNext />}
        </button>
      </div>
        <CalendarTable
          columns={columns}
          doctor={data}
        />
    </>
  );
};
export { DoctorOffice };
