module.exports.isEven = (n) => {
  if (typeof(n) !== "number") return null;
  n = n.toString()
  return ["0", "2", "4", "6", "8"].some(i => n.endsWith(i));
}
