export default function FormatFollowersNumber(number) {
  return number < 10_000 ? number.toString() : `${Math.floor((number / 1000))}k`;
}