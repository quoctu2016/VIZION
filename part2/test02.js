/**
 * Increase by 1 value in the last position of string
 * @param inputString string
 * @returns string
 */
function StringUpNo(inputString) {
  // Regex to split characters and numbers from a string to array
  const reg = /(?:[^.]([0-9.]+)(?![0-9.]))|(?:([a-z]+)(?![a-z]))/gi;
  const arrStr = inputString.match(reg);
  const arrStrLength = arrStr.length;

  // inputString contains characters and numbers
  if (arrStrLength) {
    const lastItem = arrStr[arrStrLength - 1];
    // Regex to check string is Number
    const regNumber = new RegExp("^[0-9]*$");
    // check last item is number
    if (regNumber.test(lastItem)) {
      const newLastItem = String(Number(lastItem) + 1).padStart(
        lastItem.length,
        "0"
      );
      return `${arrStr.slice(0, arrStrLength - 1).join("")}${newLastItem}`;
    } else {
      return `${inputString}1`;
    }
  }
  return inputString;
}

// console.log(StringUpNo("foo000bar"));
// console.log(StringUpNo("foo"));
// console.log(StringUpNo("foo1"));
// console.log(StringUpNo("foo9"));
// console.log(StringUpNo("test01string03"));
