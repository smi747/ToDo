const taskList = document.querySelector('.section__tasklist').children;

const inputField = document.getElementById('input_field');
const taskListElem = document.getElementById('task_list');
const counter = document.getElementById('counter_elem');
const deleteButton = document.getElementById('delete_but');
const selectAllButton = document.getElementById('all_but');
const selectCheckedButton = document.getElementById('chckd_but');
const selectUncheckedButton = document.getElementById('unchckd_but');
const checkAll = document.getElementById('checkall');

checkAll.addEventListener("click", () => {checkAllTasks()});
selectAllButton.addEventListener("click", () => {filterTasks('all')});
selectCheckedButton.addEventListener("click", () => {filterTasks('chckd')});
selectUncheckedButton.addEventListener("click", () => {filterTasks('unchckd')});
deleteButton.addEventListener("click", () => {deleteCompletedTasks()});

let lastFilterValue = "all";
if (localStorage.getItem('storage_filter') !== null) {
  lastFilterValue = JSON.parse(localStorage.getItem('storage_filter'));
}

if (localStorage.getItem("storage_tasks") == null) {
  localStorage.setItem("storage_tasks", JSON.stringify([]));
}

let isMouseOnButtonlist = false;
buttonlist.addEventListener('mouseover', function(event){
  isMouseOnButtonlist = true;
});
buttonlist.addEventListener('mouseleave', function(event){
  isMouseOnButtonlist = false;
});

input_field.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    createTask();
  }
});
input_field.addEventListener("focusout", function() {
  (isMouseOnButtonlist) ? input_field.focus() : createTask();
});

loadTasks();
filterTasks(lastFilterValue);