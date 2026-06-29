function formatName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function getGreeting(timeOfDay) {
  if (timeOfDay === "morning") {
    return "Good morning";
  } else if (timeOfDay === "evening") {
    return "Good evening";
  } else return "Good afternoon";
}

function createGreeting(firstName, lastName, timeOfDay) {
  const name = formatName(firstName, lastName);
  const time = getGreeting(timeOfDay);
  return `${time}, ${name}`;
}
console.log(createGreeting("Ava", "Stone", "morning"));
console.log(createGreeting("Noah", "Kim", "evening"));
console.log(createGreeting("Mina", "Patel", "afternoon"));
