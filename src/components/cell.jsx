import Select from "react-select";

const SelectCell = ({
  value,
  row: { index },
  column: { id },
  updateMyData,
}) => {
  const onChange = (e) => updateMyData(index, id, !value);
  return (
    <Select
      defaultValue={value ? value : { value: " ", label: "" }}
      onChange={onChange}
      options={value}
    />
  );
};

const CheckBoxCell = ({
  value,
  row: { index },
  column: { id },
  updateMyData,
}) => {
  const onChange = (e) => updateMyData(index, id, !value);
  return (
    <input
      name={id}
      type="checkbox"
      //defaultChecked={value}
      disabled={value}
      onChange={onChange}
    />
  );
};

export { CheckBoxCell, SelectCell };
