function loadTasks() {
  JSON.parse(localStorage.getItem("storage_tasks")).forEach(function (element, i, arr) {
    const div = document.createElement('div');
    div.className = "task";
    div.setAttribute("ondblclick", "editTask(this)");

    div.innerHTML = (element.is_checked) ?
    "<input class='task__chckbox' type='checkbox' onClick='filt(lastwaschecked)' checked>"+"<p class='task__text'>"+element.text_value+"</p>"+"<button class='task__del' onClick='onDeleteItem(this.parentElement)'>Удалить</button>"
    : "<input class='task__chckbox' type='checkbox' onClick='filt(lastwaschecked)'>"+"<p class='task__text'>"+element.text_value+"</p>"+"<button class='task__del' onClick='onDeleteItem(this.parentElement)'>Удалить</button>";
    
    task_list.appendChild(div);
  });

  const n = getLeftedTasksNum();
  checkall.checked = !(tasks.length != n || tasks.length == 0);

  counter.innerText = "Невыполненных: " + (tasks.length-n).toString();
}