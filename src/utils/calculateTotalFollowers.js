import formatTotalNumber from "./formatTotalNumber.js";

export default function calculateTotalFollowers(user) {
  return formatTotalNumber(
    user.statistics.reduce((total, element) => {
      return total + element.followers.total;
    }, 0)
  );
}