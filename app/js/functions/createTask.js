function createTask() {
  if (input_field.value == "") {
    return;
  }
  const newTask = document.createElement('div');
  newTask.className = "task";
  newTask.setAttribute("ondblclick", "editTask(this)");
  newTask.innerHTML = "<input class='task__chckbox' type='checkbox' onClick='filterTasks(lastFilterValue)'>"+"<p class='task__text'>"+input_field.value+"</p>"+"<button class='task__del' onClick='deleteItem(this.parentElement)'>Удалить</button>";
  input_field.value = "";
  if (lastFilterValue == "chckd") {
    newTask.style.display = "none";
  }
  task_list.appendChild(newTask);
  
  let numOfLeftedTasks = getLeftedTasksNum();
  counter.innerText = "Невыполненных: " + (taskList.length-numOfLeftedTasks).toString();
  saveTasks();
}