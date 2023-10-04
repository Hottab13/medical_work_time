const useArrRow = () => {
  const arrRow = [];
  for (let i = 0; i <= 23; i++) {
    arrRow.push({
      time: `${i}-${i + 1}`,
    });
  }
  return arrRow;
};
export { useArrRow };
