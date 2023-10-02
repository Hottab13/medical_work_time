const addDateDays = (date, x) => {
  return new Date(date.setDate(date.getDate() + x));
};
const reduceDateDays = (date, x) => {
  return new Date(date.setDate(date.getDate() - x));
};
export { addDateDays, reduceDateDays };
