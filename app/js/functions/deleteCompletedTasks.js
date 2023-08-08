function deleteCompletedTasks() {
  Array.from(taskList).forEach(function (task, i, arr) {
    if (task.firstChild.checked) {
      deleteItem(task);
    }
  });
}