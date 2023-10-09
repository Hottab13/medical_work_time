import moment from "moment";
import "moment/locale/ru";

const forDaysRange = (startDate, endDate, cell) => {
  const arr = [];
  arr.push({
    Header: "Время",
    accessor: "time",
  });
  for (
    const dt = new Date(startDate);
    dt <= new Date(endDate);
    dt.setDate(dt.getDate() + 1)
  ) {
    arr.push({
      Header: moment(dt).format("D dd").toString(),
      accessor: moment(new Date(dt)).format("MMMM DD YYYY").replace(/ /g, ""),
      Cell: cell,
    });
  }
  return arr;
};

export { forDaysRange };
