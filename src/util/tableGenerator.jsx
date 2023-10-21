import moment from "moment";

const elKey = (element) => parseInt(moment(element).format("HH"));
const elNameDate = (element) =>
  moment(element).format("MMMM DD YYYY").replace(/ /g, "");
  
const forDateDoctorTime = (workTime,arrRow,approved  )=>{
  workTime.forEach((el) => {
    const object = arrRow[elKey(el.date)];
    object[elNameDate(el.date)] = approved;
  });
  return arrRow
}
const tableGeneratorDoctor = (doctor, arrRow) => {
    forDateDoctorTime(doctor.desiredWorkTime,arrRow,true )
    forDateDoctorTime(doctor.approvedWorkTime,arrRow,"approved" )
  return arrRow;
};

const tableGenerator = (data, arrRow) => {
  data.forEach((doctor) => {
    const elName = `${doctor.name.charAt(0)}${
      doctor.surname ? doctor.surname.charAt(0) : ""
    }`;
    doctor.desiredWorkTime.forEach((el) => {
      const element = el.date;
      const object = arrRow[elKey(element)];
      object[elNameDate(element)] = object[elNameDate(element)]
        ? [...object[elNameDate(element)], { value: doctor.id, label: elName }]
        : [{ value: doctor.id, label: elName }];
    });
    doctor.approvedWorkTime.forEach((el) => {
      const element = el.date;
      const object = arrRow[elKey(element)];
      object[elNameDate(element)] = elName;
    });
  });
  return arrRow;
};
export { tableGeneratorDoctor, tableGenerator };
