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

const CheckBoxCell = ({
  value,
  row: { index },
  column: { id },
  updateMyData,
}) => {
  const onChange = (e) => updateMyData(index, id, !value);
    return (
      <input name={id} type="checkbox" defaultChecked={value} disabled={value}   onChange={onChange} />
    );
};

export { TextBoxCell, CheckBoxCell };
