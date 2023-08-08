function createTask() {
  if (inputField.value == "") {
    return;
  }

  const newTask = document.createElement('div');
  newTask.className = "task";
  newTask.setAttribute("ondblclick", "editTask(this)");
  newTask.innerHTML = "<input class='task__chckbox' type='checkbox' onClick='filterTasks(lastFilterValue)'>"+"<p class='task__text'>"+inputField.value+"</p>"+"<button class='task__del' onClick='deleteItem(this.parentElement)'>Удалить</button>";
  inputField.value = "";
  if (lastFilterValue == "chckd") {
    newTask.style.display = "none";
  }
  
  taskListElem.appendChild(newTask);
  let numOfLeftedTasks = getLeftedTasksNum();
  counter.innerText = "Невыполненных: " + (taskList.length-numOfLeftedTasks).toString();
  saveTasks();
}