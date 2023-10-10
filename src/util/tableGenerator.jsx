import moment from "moment";
import "moment/locale/ru";

const elKey = element => parseInt(moment(element).format("HH"));
const elNameDate = element => moment(element).format("MMMM DD YYYY").replace(/ /g, "");

export const tableGeneratorDoctor = (doctor, arrRow) => {
  if (doctor.desiredTime?.length) {
    doctor.desiredTime.forEach((element) => {
      const object = arrRow[elKey(element)];
      object[elNameDate(element)] = true;
    });

    doctor.approvedTime.forEach((element) => {
      const object = arrRow[elKey(element)];
      object[elNameDate(element)]="approved";
    });
  }
  return arrRow;
};

export const tableGenerator = (data, arrRow) => {
  data.forEach((doctor) => {
    const elName = `${doctor.name.charAt(0)}${
      doctor.surname ? doctor.surname.charAt(0) : ""
    }`;
    doctor.desiredTime.forEach((element) => {
      const object = arrRow[elKey(element)];
      object[elNameDate(element)] = object[elNameDate(element)]
        ? [...object[elNameDate(element)], { value: elName, label: elName }]
        : [{ value: elName, label: elName }];
    });

    doctor.approvedTime.forEach((element) => {
      const object = arrRow[elKey(element)];

      object[elNameDate(element)] = elName;
    });
  });
  return arrRow;
};
