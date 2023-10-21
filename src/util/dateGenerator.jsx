import moment from "moment";

export const dateGenerator = (id, index) =>
  moment(moment(id, "MMMM DD YYYY").toDate())
    .add(moment.utc(index * 3600 * 1000).format("HH:mm"))
    .toDate();
