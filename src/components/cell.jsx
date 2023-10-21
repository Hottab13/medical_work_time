import Select, { components } from "react-select";
import { FcApproval } from "react-icons/fc";
import { createRef } from "react";

import {
  useAddApprovedWorkHoursMutation,
} from "../redux/doctorWorkingHoursApi";
import { dateGenerator } from "../util/dateGenerator";

const SelectCell = ({
  value,
  row: { index },
  column: { id },
  updateMyData,
}) => {
  const SelectMenuButton = (props) => {
    return (
      <components.MenuList {...props}>
        {props.children}
        <button className="group relative mt-1  overflow-hidden  bg-green-500 text-base font-bold text-white">
          Добавить
          <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
      </components.MenuList>
    );
  };
  const skuSelectRef = createRef();
  const [addApprovedWH, { isSuccess }] = useAddApprovedWorkHoursMutation();
  if (isSuccess) {
    return alert("Сохранено, обновите страницу!");
  }
  const onAddToCartClick = async (e) => {
    const payloyd = {
      date:dateGenerator(id, index),
      doctorID:skuSelectRef.current.props.value.value
  }
  console.log(payloyd)
    await addApprovedWH(payloyd).unwrap();
  };
 
  const onChange = (e) => updateMyData(index, id, !value);
  if (typeof value === "string") {
    return (
      <h1 className=" text-center mt-1  overflow-hidden h-full  bg-yellow-500 text-base font-bold text-white">
        {value}
      </h1>
    );
  }
  return (
    <>
      <Select
        ref={skuSelectRef}
        components={{ MenuList: SelectMenuButton }}
        defaultValue={value ? value : { value: " ", label: "" }}
        onChange={onChange}
        options={value}
      />
      <button
        key={id}
        onClick={onAddToCartClick}
        className="group relative mt-1  overflow-hidden  bg-green-500 text-base font-bold text-white"
      >
        Утвердить
      </button>
    </>
  );
};

const CheckBoxCell = ({
  value,
  row: { index },
  column: { id },
  updateMyData,
}) => {
  const onChange = (e) => updateMyData(index, id, !value);
  if (value === "approved") {
    return <FcApproval />;
  }
  return (
    <input
      name={id}
      type="checkbox"
      disabled={value}
      onChange={onChange}
    />
  );
};

export { CheckBoxCell, SelectCell };
