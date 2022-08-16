const getDateAffix = function (date: number) {
  if (date > 3 && date < 21) return "th";
  switch (date % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

export const getDateFormat = (dateString: string) => {
  const date = new Date(dateString);
  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDate();
  const dateAffix = getDateAffix(day);
  const result = `${day}${dateAffix} ${month}`;
  return result;
};
