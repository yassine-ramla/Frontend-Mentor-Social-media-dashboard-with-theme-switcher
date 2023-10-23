export default function CalculatePercentage(today, lastDay) {
  return ((today - lastDay) * 100 / lastDay).toFixed(0);
}