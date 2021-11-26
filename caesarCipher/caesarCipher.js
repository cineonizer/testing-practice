const caesarCipher = (str, num) => {
  // split the characters of a string into an array
  return str
    .split('')
    .map((char) => shiftChar(char, num))
    .join('');
};

const shiftChar = (char, num) => {
  const charCode = char.charCodeAt(0);
  // base set based on the charCode either being uppercase or lowercase
  const set = charCode < 91 ? 65 : 97;
  // shifts letters by validating their charCodes values that fall within 97 - 122 and 65 - 90 range
  if (
    (65 <= charCode && charCode <= 90) ||
    (95 <= charCode && charCode <= 122)
  ) {
    // funky looking modulo is to account for negative shifts because of taking the modulo of a negative number
    const shiftedCharCode = ((((charCode + num - set) % 26) + 26) % 26) + set;
    return String.fromCharCode(shiftedCharCode);
  }
  return char;
};

export default caesarCipher;
