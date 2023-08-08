function saveTasks() {
  const temporaryTaskList = [];
  Array.from(task_list.children).forEach(function (element, i, arr) {
    const textValue = element.getElementsByTagName('p')[0].innerText;
    const isChecked = element.getElementsByTagName('input')[0].checked;
    temporaryTaskList.push({text_value: textValue, is_checked: isChecked});
  });
  localStorage.setItem("storage_tasks", JSON.stringify(temporaryTaskList));

  const numOfLeftedTasks = getLeftedTasksNum();
  checkall.checked = !(tasks.length != numOfLeftedTasks || tasks.length == 0);
}