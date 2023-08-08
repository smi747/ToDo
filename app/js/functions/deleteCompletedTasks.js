function deleteCompletedTasks() {
  Array.from(taskList).forEach(function (element, i, arr) {
    if (element.firstChild.checked) {
      onDeleteItem(element);
    }
  });
}