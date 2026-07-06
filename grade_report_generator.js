function hasPassed(name, score) {
  return score >= 60 ? "true" : "false";
}

function createGradeReport(name, score) {
  if (score >= 90) {
    grade = "A";
    feedback = "Excellent work";
  } else if (90 < score >= 80) {
    grade = "B";
    feedback = "Great job";
  } else if (80 < score >= 70) {
    grade = "C";
    feedback = "You passed";
  } else if (70 < score >= 60) {
    grade = "D";
    feedback = "You passed";
  } else {
    grade = "F";
    feedback = "Keep practicing";
  }
  return {
    name: name,
    score: score,
    grade: grade,
    passed: hasPassed(name, score),
    feedback: feedback,
  };
}
console.log(createGradeReport("Ava", 92));
console.log(createGradeReport("Noah", 48));
console.log(createGradeReport("Mina", 75));
console.log(createGradeReport("Sam", 60));
