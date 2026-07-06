function cleanText(text) {
  return text.trim();
}
function capitalize(text) {
  const cleaned = cleanText(text);
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1).toLowerCase();
}
function formatDisplayName(firstName, lastName) {
  const first = capitalize(firstName);
  const last = capitalize(lastName);
  return `${first} ${last}`;
}
console.log(formatDisplayName("  ava", "STONE  "));
console.log(formatDisplayName("nOAh", "  kim"));
console.log(formatDisplayName("  mINA  ", "pATEL"));
