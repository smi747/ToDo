function checkAllTasks() {
  const n = getLeftedTasksNum();
  if (n != tasks.length) {
    Array.from(tasks).forEach(function (element, i, arr) {
      element.firstChild.checked = true;
    });
    delete_but.style.display = "block";
  } else {
    Array.from(tasks).forEach(function (element, i, arr) {
      element.firstChild.checked = false;
    });
    delete_but.style.display = "none";
  }
  
  filterTasks(lastwaschecked);
  saveTasks();
}