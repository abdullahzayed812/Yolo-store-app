export function numberWithCommas(number) {
  let stringNumber = number.toString();
  let result = "";
  for (let i = 0; i < stringNumber.length; i += 1) {
    if (i === 3) {
      result += ",";
    }
    result += stringNumber[i];
  }
  return result;
}
