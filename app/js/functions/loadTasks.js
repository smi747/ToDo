function loadTasks() {
  JSON.parse(localStorage.getItem("storage_tasks")).forEach(function (element, i, arr) {
    const newTask = document.createElement('div');
    newTask.className = "task";
    newTask.setAttribute("ondblclick", "editTask(this)");

    newTask.innerHTML = (element.is_checked) ?
    "<input class='task__chckbox' type='checkbox' onClick='filterTasks(lastFilterValue)' checked>"+"<p class='task__text'>"+element.text_value+"</p>"+"<button class='task__del' onClick='onDeleteItem(this.parentElement)'>Удалить</button>"
    : "<input class='task__chckbox' type='checkbox' onClick='filterTasks(lastFilterValue)'>"+"<p class='task__text'>"+element.text_value+"</p>"+"<button class='task__del' onClick='onDeleteItem(this.parentElement)'>Удалить</button>";
    
    task_list.appendChild(newTask);
  });

  const numOfLeftedTasks = getLeftedTasksNum();
  checkall.checked = !(taskList.length != numOfLeftedTasks || taskList.length == 0);
  counter.innerText = "Невыполненных: " + (taskList.length-numOfLeftedTasks).toString();
}