export default (end_date) => {
  const todays_date = new Date().getTime();
  const event_end_date = new Date(end_date).getTime();

  return todays_date >= event_end_date;
};
