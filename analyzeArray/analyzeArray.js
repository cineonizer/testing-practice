const analyzeArray = (arr) => {
  if (arr.length) {
    return {
      average: arr.reduce((prev, curr) => prev + curr) / arr.length,
      min: Math.min(...arr),
      max: Math.max(...arr),
      length: arr.length,
    };
  }
  return;
};

export default analyzeArray;
