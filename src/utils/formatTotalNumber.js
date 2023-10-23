export default function formatTotalNumber(number) {
  let formatedNumber = number.toString();
  for(let i = formatedNumber.length - 3; i > 0; i -= 3) {
    formatedNumber = formatedNumber.slice(0, i) + "," + formatedNumber.slice(i);
  }
  return formatedNumber;
}