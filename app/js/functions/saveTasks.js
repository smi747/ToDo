function saveTasks() {
  const temporaryTaskList = [];
  Array.from(task_list.children).forEach(function (task, i, arr) {
    const textValue = task.getElementsByTagName('p')[0].innerText;
    const isChecked = task.getElementsByTagName('input')[0].checked;
    temporaryTaskList.push({text_value: textValue, is_checked: isChecked});
  });
  localStorage.setItem("storage_tasks", JSON.stringify(temporaryTaskList));

  const numOfLeftedTasks = getLeftedTasksNum();
  checkall.checked = !(taskList.length != numOfLeftedTasks || taskList.length == 0);
}