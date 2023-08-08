function onDeleteItem(itemToDelete) {
  itemToDelete.remove();
  const numOfLeftedTasks = getLeftedTasksNum();
  counter.innerText = "Невыполненных: " + (taskList.length-numOfLeftedTasks).toString();
  if (numOfLeftedTasks == 0) {
    delete_but.style.display = "none";
  }
  saveTasks();
}