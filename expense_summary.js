function calculateTotal(expenses) {
  let total = 0;
  for (const expense of expenses) {
    total += expense.amount;
  }
  return total;
}

function calculateCategoryTotal(expenses, category) {
  let total = 0;
  for (const expense of expenses) {
    if (expense.category === category) {
      total += expense.amount;
    }
  }
  return total;
}
function findLargestExpense(expenses) {
  let amountLargest = 0;
  let categoryLargest = null;
  for (const expense of expenses) {
    if (expense.amount > amountLargest) {
      amountLargest = expense.amount;
      categoryLargest = expense;
    }
  }
  return categoryLargest;
}
function createExpenseSummary(expenses) {
  return {
    total: calculateTotal(expenses),
    foodTotal: calculateCategoryTotal(expenses, "food"),
    transportTotal: calculateCategoryTotal(expenses, "transport"),
    largestExpense: findLargestExpense(expenses),
  };
}
const expenses = [
  { id: 1, category: "food", amount: 24 },
  { id: 2, category: "transport", amount: 15 },
  { id: 3, category: "food", amount: 18 },
  { id: 4, category: "books", amount: 40 },
];

console.log(createExpenseSummary(expenses));
console.log(calculateCategoryTotal(expenses, "food"));
console.log(calculateCategoryTotal(expenses, "health"));
console.log(findLargestExpense(expenses));
