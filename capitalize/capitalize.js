// // solution 1 using eplace method
const capitalize = (str) => {
  if (!str) return ''; // check for empty condition since toUpperCase on an empty string will throw an error
  return str.replace(str[0], str[0].toUpperCase());
};

// solution 2 using concatenation and slice
// const capitalize = (s) => {
//   if (!s) return '' // check for empty condition
//   return s[0].toUpperCase() + s.slice(1)
// };

export default capitalize;
