function deleteItem(itemToDelete) {
  itemToDelete.remove();
  const numOfLeftedTasks = getLeftedTasksNum();
  counter.innerText = "Невыполненных: " + (taskList.length-numOfLeftedTasks).toString();
  if (numOfLeftedTasks == 0) {
    deleteButton.style.display = "none";
  }
  
  saveTasks();
}