const taskList = document.querySelector('.section__tasklist').children;

let lastFilterValue = "all";
if (localStorage.getItem('storage_filter') !== null) {
  lastFilterValue = JSON.parse(localStorage.getItem('storage_filter'));
}

if (localStorage.getItem("storage_tasks") == null) {
  localStorage.setItem("storage_tasks", JSON.stringify([]));
}

loadTasks();
filterTasks(lastFilterValue);

let isMouseOnButtonlist = false;
buttonlist.addEventListener('mouseover', function(event){
  isMouseOnButtonlist = true;
});
buttonlist.addEventListener('mouseleave', function(event){
  isMouseOnButtonlist = false;
});

inp.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    createTask();
  }
});
inp.addEventListener("focusout", function() {
  (isMouseOnButtonlist) ? inp.focus() : createTask();
});
