export function getDateFromTimeFrame(param) {
  let date = new Date();

  if (param === "oneWeek") {
    date.setDate(date.getDate() - 7);
  } else if (param === "twoWeek") {
    date.setDate(date.getDate() - 14);
  } else if (param === "oneMonth") {
    date.setMonth(date.getMonth() - 1);
  } else {
    throw new Error(
      "Invalid parameter! Please use one of the following: oneWeekAgo, twoWeekAgo, oneMonthAgo"
    );
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
