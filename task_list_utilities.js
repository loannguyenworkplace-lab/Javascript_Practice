function addTask(tasks, title) {
  const ids = tasks.map((task) => task.id);
  const nextIds = Math.max(...ids) + 1;
  const newTask = { id: nextIds, title, completed: false };
  return [...tasks, newTask];
}
function completeTask(tasks, taskId) {
  return tasks.map((task) =>
    task.id === taskId ? { ...task, completed: true } : task,
  );
}
function removeTask(tasks, taskId) {
  return tasks.filter((task) => task.id !== taskId);
}
function countIncompleteTasks(completed) {
  return tasks.filter((task) => task.completed === false).length;
}

const tasks = [
  { id: 1, title: "Review variables", completed: true },
  { id: 2, title: "Practice functions", completed: false },
];

const withNewTask = addTask(tasks, "Build task utilities");
console.log(withNewTask.map((task) => task.title));

const completed = completeTask(withNewTask, 2);
console.log(countIncompleteTasks(completed));

console.log(removeTask(completed, 1).map((task) => task.id));
console.log(tasks.length);
console.log(countIncompleteTasks(tasks));
