function isAnswerCorrecr(question, userAnswer) {
  if (!userAnswer) {
    return false;
  }
  return question.correctAnswer === userAnswer.answer;
}

function countCorrectAnswers(questions, userAnswers) {
  let correctCount = 0;
  for (const question of questions) {
    const userAnswer = userAnswers.find((answer) => {
      return answer.questionId === question.id;
    });
    if (isAnswerCorrecr(question, userAnswer)) {
      correctCount += 1;
    }
  }
  return correctCount;
}
function calculatePercentage(correctCount, totalQuestions) {
  if (totalQuestions === 0) {
    return 0;
  }
  return (correctCount / totalQuestions) * 100;
}
function getResultMessage(percentage) {
  if (percentage >= 80) {
    return "Great work";
  } else if (percentage >= 60) {
    return "You passed";
  }
  return "Keep practicing";
}
function createQuizResult(questions, userAnswers) {
  const correctCount = countCorrectAnswers(questions, userAnswers);
  const totalQuestions = questions.length;
  const percentage = calculatePercentage(correctCount, totalQuestions);

  return {
    correctCount: countCorrectAnswers(questions, userAnswers),
    totalQuestions: questions.length,
    percentage: percentage,
    message: getResultMessage(percentage),
  };
}

const questions = [
  { id: 1, correctAnswer: "B" },
  { id: 2, correctAnswer: "A" },
  { id: 3, correctAnswer: "D" },
  { id: 4, correctAnswer: "C" },
];

const userAnswers = [
  { questionId: 1, answer: "B" },
  { questionId: 2, answer: "C" },
  { questionId: 3, answer: "D" },
  { questionId: 4, answer: "C" },
];

console.log(createQuizResult(questions, userAnswers));
console.log(countCorrectAnswers(questions, userAnswers));
console.log(calculatePercentage(3, questions.length));

const partialAnswers = [{ questionId: 1, answer: "B" }];
console.log(createQuizResult(questions, partialAnswers));
