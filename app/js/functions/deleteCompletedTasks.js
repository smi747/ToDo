function deleteCompletedTasks() {
  Array.from(tasks).forEach(function (element, i, arr) {
    if (element.firstChild.checked) {
      onDeleteItem(element);
    }
  });
}