function checkAllTasks() {
  const numOfLeftedTasks = getLeftedTasksNum();
  if (numOfLeftedTasks != taskList.length) {
    Array.from(taskList).forEach(function (task, i, arr) {
      task.firstChild.checked = true;
    });
    deleteButton.style.display = "block";
  } else {
    Array.from(taskList).forEach(function (task, i, arr) {
      task.firstChild.checked = false;
    });
    deleteButton.style.display = "none";
  }
  
  filterTasks(lastFilterValue);
  saveTasks();
}