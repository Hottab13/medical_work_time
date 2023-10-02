import moment from "moment";

const TextBoxCell = ({
  value,
  row: { index },
  column: { id },
  updateMyData,
}) => {
  const onChange = (e) => updateMyData(index, id, !value);
  return (
    <input
      className="w-full"
      name={id}
      type="text"
      onChange={onChange}
      value={value}
    />
  );
};

const forDaysRangeAdmin = (startDate, endDate) => {
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
   // console.log(moment(new Date(dt)).format("MMMM D YYYY").replace(/ /g, ""));
    arr.push({
      Header: moment(dt).format("D MM").toString(),
      accessor: moment(new Date(dt)).format("MMMM D YYYY").replace(/ /g, ""),
      Cell: TextBoxCell,
    });
  }
  return arr;
};
export { forDaysRangeAdmin };
