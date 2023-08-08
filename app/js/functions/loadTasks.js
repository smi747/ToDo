function loadTasks() {
  JSON.parse(localStorage.getItem("storage_tasks")).forEach(function (task, i, arr) {
    const taskDiv = document.createElement('div');
    taskDiv.className = "task";
    taskDiv.setAttribute("ondblclick", "editTask(this)");

    taskDiv.innerHTML = (task.is_checked) ?
    "<input class='task__chckbox' type='checkbox' onClick='filterTasks(lastFilterValue)' checked>"+"<p class='task__text'>"+task.text_value+"</p>"+"<button class='task__del' onClick='deleteItem(this.parentElement)'>Удалить</button>"
    : "<input class='task__chckbox' type='checkbox' onClick='filterTasks(lastFilterValue)'>"+"<p class='task__text'>"+task.text_value+"</p>"+"<button class='task__del' onClick='deleteItem(this.parentElement)'>Удалить</button>";
    
    task_list.appendChild(taskDiv);
  });

  const numOfLeftedTasks = getLeftedTasksNum();
  checkall.checked = !(taskList.length != numOfLeftedTasks || taskList.length == 0);
  counter.innerText = "Невыполненных: " + (taskList.length-numOfLeftedTasks).toString();
}