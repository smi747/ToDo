function getLeftedTasksNum() {
  let numOfLeftedTasks = 0;
  Array.from(taskList).forEach(function (task, i, arr) {
    if (task.firstChild.checked) {
      numOfLeftedTasks += 1;
    }
  });
  
  return numOfLeftedTasks;
}