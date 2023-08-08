function createTask() {
  if (inp.value == "") {
    return;
  }
  const div = document.createElement('div');
  div.className = "task";
  div.setAttribute("ondblclick", "editTask(this)");
  div.innerHTML = "<input class='task__chckbox' type='checkbox' onClick='filt(lastwaschecked)'>"+"<p class='task__text'>"+inp.value+"</p>"+"<button class='task__del' onClick='onDeleteItem(this.parentElement)'>Удалить</button>";
  inp.value = "";
  if (lastwaschecked == "chckd") {
    div.style.display = "none";
  }
  task_list.appendChild(div);
  
  let n = 0;
  Array.from(tasks).forEach(function (element, i, arr) {
    if (element.firstChild.checked) {
      n += 1;
    }
  });
  counter.innerText = "Невыполненных: " + (tasks.length-n).toString();
  saveTasks();
}