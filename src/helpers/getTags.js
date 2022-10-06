const getTags = (str) => {
  return str ? str.split(',').map((res) => res && res.trim()) : [];
};

export default getTags;
