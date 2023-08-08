function filterTasks(x) {
  if (x == "all") {
    Array.from(taskList).forEach(function (element, i, arr) {
      element.style.display = "flex";
    });
    lastFilterValue = "all";
    localStorage.setItem('storage_filter', JSON.stringify(lastFilterValue));
    all_but.classList.add("button_active");
    chckd_but.classList.remove("button_active");
    unchckd_but.classList.remove("button_active");
  }
  if (x == "chckd") {
    Array.from(taskList).forEach(function (element, i, arr) {
      element.style.display = (element.firstChild.checked) ? "flex" : "none";
    });
    lastFilterValue = "chckd";
    localStorage.setItem('storage_filter', JSON.stringify(lastFilterValue));
    all_but.classList.remove("button_active");
    chckd_but.classList.add("button_active");
    unchckd_but.classList.remove("button_active");
  }
  if (x == "unchckd") {
    Array.from(taskList).forEach(function (element, i, arr) {
      element.style.display = (element.firstChild.checked) ? "none" : "flex";
    });
    lastFilterValue = "unchckd";
    localStorage.setItem('storage_filter', JSON.stringify(lastFilterValue));
    all_but.classList.remove("button_active");
    chckd_but.classList.remove("button_active");
    unchckd_but.classList.add("button_active");
  }
  const numOfLeftedTasks = getLeftedTasksNum();
  delete_but.style.display = (numOfLeftedTasks == 0) ? "none" : "block";
  counter.innerText = "Невыполненных: " + (taskList.length-numOfLeftedTasks).toString();
  
  saveTasks();
}