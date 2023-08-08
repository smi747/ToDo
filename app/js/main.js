const tasks = document.querySelector('.section__tasklist').children;

let lastwaschecked = "all";
if (localStorage.getItem('storage_lwc') !== null) {
  lastwaschecked = JSON.parse(localStorage.getItem('storage_lwc'));
}

if (localStorage.getItem("storage_tasks") == null) {
  localStorage.setItem("storage_tasks", JSON.stringify([]));
}

tasks_load();
filt(lastwaschecked);

let is_mouse_on_buttonlist = false;
buttonlist.addEventListener('mouseover', function(event){
  is_mouse_on_buttonlist = true;
});
buttonlist.addEventListener('mouseleave', function(event){
  is_mouse_on_buttonlist = false;
});

inp.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    new_task();
  }
});
inp.addEventListener("focusout", function() {
  if (is_mouse_on_buttonlist == false) {
    new_task();
  }
  else {
    inp.focus();
  }
});
