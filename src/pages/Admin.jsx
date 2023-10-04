import { useState } from "react";
import { CalendarTableAdmin } from "../components/CalendarTableAdmin";
import { useGetDoctorWorkingHoursQuery } from "../redux/doctorWorkingHoursApi";
import { addDateDays, reduceDateDays } from "../util/dateDays";
import tw from "tailwind-styled-components";
import { forDaysRange } from "../util/forDaysRange";
import { TextBoxCell } from "../components/cell";
import { format } from "date-fns";

const Admin = () => {
  const [startDate, setStartDate] = useState(reduceDateDays(new Date(), 1));
  const [endDate, setEndDate] = useState(addDateDays(new Date(), 12));
  const { data = [], isLoading } = useGetDoctorWorkingHoursQuery();

  const columns = forDaysRange(startDate, endDate, TextBoxCell, true);

  const nextDay = () => {
    setStartDate && setStartDate(addDateDays(startDate, 1));
    setEndDate && setEndDate(addDateDays(endDate, 1));
  };

  const prevDay = () => {
    setStartDate && setStartDate(reduceDateDays(startDate, 1));
    setEndDate && setEndDate(reduceDateDays(endDate, 1));
  };
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
          <h1>Привет Админ!</h1>
          <button onClick={prevDay}>{"<"}</button>
          <div className="text-xl font-bold">{format(startDate, "LLLL-yyyy")}</div>
          <button onClick={nextDay}>{">"}</button>
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
