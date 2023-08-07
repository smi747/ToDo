function filt(x) {
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
      if (!element.firstChild.checked) {
        element.style.display = "none";
      }
      else {
        element.style.display = "flex";
      }
    });
    lastwaschecked = "chckd";
    localStorage.setItem('storage_lwc', JSON.stringify(lastwaschecked));
    all_but.classList.remove("button_active");
    chckd_but.classList.add("button_active");
    unchckd_but.classList.remove("button_active");
  }
  if (x == "unchckd") {
    Array.from(tasks).forEach(function (element, i, arr) {
      if (element.firstChild.checked) {
        element.style.display = "none";
      }
      else {
        element.style.display = "flex";
      }
    });
    lastwaschecked = "unchckd";
    localStorage.setItem('storage_lwc', JSON.stringify(lastwaschecked));
    all_but.classList.remove("button_active");
    chckd_but.classList.remove("button_active");
    unchckd_but.classList.add("button_active");
  }
  let n = lefted_quantity();
  if (n == 0) {
    delete_but.style.display = "none";
  }
  else {
    delete_but.style.display = "block";
  }
  counter.innerText = "Невыполненных: " + (tasks.length-n).toString();
  
  tasks_save();
}