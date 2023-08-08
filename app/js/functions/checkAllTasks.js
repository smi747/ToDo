function checkAllTasks() {
  const numOfLeftedTasks = getLeftedTasksNum();
  if (numOfLeftedTasks != taskList.length) {
    Array.from(taskList).forEach(function (task, i, arr) {
      task.firstChild.checked = true;
    });
    delete_but.style.display = "block";
  } else {
    Array.from(taskList).forEach(function (task, i, arr) {
      task.firstChild.checked = false;
    });
    delete_but.style.display = "none";
  }
  
  filterTasks(lastFilterValue);
  saveTasks();
}