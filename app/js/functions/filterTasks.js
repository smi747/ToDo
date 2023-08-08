function filterTasks(x) {
  if (x == "all") {
    Array.from(tasks).forEach(function (element, i, arr) {
      element.style.display = "flex";
    });
    lastwaschecked = "all";
    localStorage.setItem('storage_lwc', JSON.stringify(lastwaschecked));
    all_but.classList.add("button_active");
    chckd_but.classList.remove("button_active");
    unchckd_but.classList.remove("button_active");
  }
  if (x == "chckd") {
    Array.from(tasks).forEach(function (element, i, arr) {
      element.style.display = (element.firstChild.checked) ? "flex" : "none";
    });
    lastwaschecked = "chckd";
    localStorage.setItem('storage_lwc', JSON.stringify(lastwaschecked));
    all_but.classList.remove("button_active");
    chckd_but.classList.add("button_active");
    unchckd_but.classList.remove("button_active");
  }
  if (x == "unchckd") {
    Array.from(tasks).forEach(function (element, i, arr) {
      element.style.display = (element.firstChild.checked) ? "none" : "flex";
    });
    lastwaschecked = "unchckd";
    localStorage.setItem('storage_lwc', JSON.stringify(lastwaschecked));
    all_but.classList.remove("button_active");
    chckd_but.classList.remove("button_active");
    unchckd_but.classList.add("button_active");
  }
  const n = getLeftedTasksNum();
  delete_but.style.display = (n == 0) ? "none" : "block";
  counter.innerText = "Невыполненных: " + (tasks.length-n).toString();
  
  saveTasks();
}