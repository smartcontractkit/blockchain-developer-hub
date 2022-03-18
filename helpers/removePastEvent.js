import expiredDate from '@/helpers/expiredDate.js';

export default (item) => {
  const result = item.filter((res) => !expiredDate(res.end_date));
  return result;
};
