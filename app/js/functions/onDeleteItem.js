function onDeleteItem(x) {
  x.remove();
  const n = getLeftedTasksNum();
  counter.innerText = "Невыполненных: " + (tasks.length-n).toString();
  if (n == 0) {
    delete_but.style.display = "none";
  }
  saveTasks();
}