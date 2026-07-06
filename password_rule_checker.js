function hasMinimumLength(password) {
  return password.length >= 8;
}
function hasNumber(password) {
  return /\d/.test(password);
}
function hasUppercaseLetter(password) {
  return /[A-Z]/.test(password);
}
function getFailedRules(password) {
  const failedRules = [];
  if (!hasMinimumLength(password)) {
    failedRules.push("minimum length");
  }
  if (!hasNumber(password)) {
    failedRules.push("number");
  }
  if (!hasUppercaseLetter(password)) {
    failedRules.push("uppercase letter");
  }
  return failedRules;
}
function validatePassword(password) {
  const failedRules = getFailedRules(password);
  return {
    valid: failedRules.length === 0,
    failedRules,
  };
}
console.log(validatePassword("hello"));
console.log(validatePassword("Hello123"));
console.log(validatePassword("hello123"));
console.log(validatePassword("HELLOABC"));
