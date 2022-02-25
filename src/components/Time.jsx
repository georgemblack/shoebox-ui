const months = {
  0: "Jan",
  1: "Feb",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec",
};

function Time(props) {
  const date = new Date(props.timestamp);

  const formatted = `${
    months[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;

  return <>{formatted}</>;
}

export default Time;
