import moment from "moment";

const CheckBoxCell = ({
  value,
  row: { index },
  column: { id },
  updateMyData,
}) => {
  const onChange = (e) => updateMyData(index, id, !value);
  return (
    <input name={id} type="checkbox" checked={value} onChange={onChange} />
  );
};

const forDaysRange = (startDate, endDate) => {
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
      Header: moment(dt).format("D MMMM YYYY").toString(),
      accessor: moment(new Date(dt)).format("D MMMM YYYY"),
      Cell: CheckBoxCell,
    });
  }
  return arr;
};

export { forDaysRange };
