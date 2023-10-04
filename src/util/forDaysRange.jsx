import moment from "moment";

const forDaysRange = (startDate, endDate, cell, replace) => {
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
    if (replace) {
      arr.push({
        Header: moment(dt).format("D MM").toString(),
        accessor: moment(new Date(dt)).format("MMMM D YYYY").replace(/ /g, ""),
        Cell: cell,
      });
    } else {
      arr.push({
        Header: moment(dt).format("D MM").toString(),
        accessor: moment(new Date(dt)).format("MMMM D YYYY"),
        Cell: cell,
      });
    }
  }
  return arr;
};

export { forDaysRange };
