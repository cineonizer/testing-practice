const reverseString = (str) => {
  // split the string into an ordered array of substrings, then reverses the array in place, and finally join the elements
  return str.split('').reverse().join('');
};

export default reverseString;
