const month = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const getDate = (date) => {
  const today = new Date(date);
  const dd = today.getDate(date);
  const mm = month[today.getMonth()];
  const yyyy = today.getFullYear();
  return `${mm} ${dd}, ${yyyy}`;
};

export default getDate;
