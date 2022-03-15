export default (num, size) => {
  return num > size ? num : `0${num + 1}`;
};
