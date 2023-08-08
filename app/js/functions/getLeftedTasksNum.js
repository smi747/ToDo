function getLeftedTasksNum() {
  let numOfLeftedTasks = 0;
  Array.from(taskList).forEach(function (element, i, arr) {
    if (element.firstChild.checked) {
      numOfLeftedTasks += 1;
    }
  });
  return numOfLeftedTasks;
}