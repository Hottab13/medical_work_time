import { useState } from "react";
import moment from "moment";
import "moment/locale/ru";
import tw from "tailwind-styled-components";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

import { useGetDoctorWorkingHoursQuery } from "../redux/doctorWorkingHoursApi";
import { CalendarTableAdmin } from "../components/CalendarTableAdmin";
import { SelectCell } from "../components/cell";
import { addDateDays, reduceDateDays } from "../util/dateDays";
import { forDaysRange } from "../util/forDaysRange";
import { prevDay, nextDay } from "../util/pageDay";

const Admin = () => {
  const [startDate, setStartDate] = useState(reduceDateDays(new Date(), 1));
  const [endDate, setEndDate] = useState(addDateDays(new Date(), 12));
  const { data = [], isLoading } = useGetDoctorWorkingHoursQuery();
  const columns = forDaysRange(startDate, endDate, SelectCell, true);
  const Container = tw.div`
    container 
    mx-auto 
    mt-10
`;
  const Wrapper = tw.div`
    bg-white 
    rounded 
    shadow 
    w-full
`;
  return (
    <Container>
      <Wrapper>
        <div className="flex justify-center pb-10">
          <button
            onClick={() =>
              prevDay(startDate, endDate, setStartDate, setEndDate)
            }
          >
            {<GrFormPrevious />}
          </button>
          <div className="text-xl font-bold">
            {moment(startDate).format("MMMM YYYY")}
          </div>
          <button
            onClick={() =>
              nextDay(startDate, endDate, setStartDate, setEndDate)
            }
          >
            {<GrFormNext />}
          </button>
        </div>
        <CalendarTableAdmin
          columns={columns}
          startDate={startDate}
          endDate={endDate}
          scheduledDoctorTime={data}
        />
      </Wrapper>
    </Container>
  );
};
export { Admin };
