function loadTasks() {
  JSON.parse(localStorage.getItem("storage_tasks")).forEach(function (task, i, arr) {
    const newTask = document.createElement('div');
    newTask.className = "task";
    newTask.setAttribute("ondblclick", "editTask(this)");

    newTask.innerHTML = (task.is_checked) ?
    "<input class='task__chckbox' type='checkbox' onClick='filterTasks(lastFilterValue)' checked>"+"<p class='task__text'>"+task.text_value+"</p>"+"<button class='task__del' onClick='deleteItem(this.parentElement)'>Удалить</button>"
    : "<input class='task__chckbox' type='checkbox' onClick='filterTasks(lastFilterValue)'>"+"<p class='task__text'>"+task.text_value+"</p>"+"<button class='task__del' onClick='deleteItem(this.parentElement)'>Удалить</button>";
    
    taskListElem.appendChild(newTask);
  });

  const numOfLeftedTasks = getLeftedTasksNum();
  checkAll.checked = !(taskList.length != numOfLeftedTasks || taskList.length == 0);
  counter.innerText = "Невыполненных: " + (taskList.length-numOfLeftedTasks).toString();
}