function filterTasks(filterType) {
  if (filterType == "all") {
    Array.from(taskList).forEach(function (task, i, arr) {
      task.style.display = "flex";
    });
    lastFilterValue = "all";
    localStorage.setItem('storage_filter', JSON.stringify(lastFilterValue));
    selectAllButton.classList.add("button_active");
    selectCheckedButton.classList.remove("button_active");
    selectUncheckedButton.classList.remove("button_active");
  }

  if (filterType == "chckd") {
    Array.from(taskList).forEach(function (task, i, arr) {
      task.style.display = (task.firstChild.checked) ? "flex" : "none";
    });
    lastFilterValue = "chckd";
    localStorage.setItem('storage_filter', JSON.stringify(lastFilterValue));
    selectAllButton.classList.remove("button_active");
    selectCheckedButton.classList.add("button_active");
    selectUncheckedButton.classList.remove("button_active");
  }

  if (filterType == "unchckd") {
    Array.from(taskList).forEach(function (task, i, arr) {
      task.style.display = (task.firstChild.checked) ? "none" : "flex";
    });
    lastFilterValue = "unchckd";
    localStorage.setItem('storage_filter', JSON.stringify(lastFilterValue));
    selectAllButton.classList.remove("button_active");
    selectCheckedButton.classList.remove("button_active");
    selectUncheckedButton.classList.add("button_active");
  }

  const numOfLeftedTasks = getLeftedTasksNum();
  deleteButton.style.display = (numOfLeftedTasks == 0) ? "none" : "block";
  counter.innerText = "Невыполненных: " + (taskList.length-numOfLeftedTasks).toString();
  
  saveTasks();
}