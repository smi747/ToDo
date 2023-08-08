function editTask(editedTask) {
  editedTask.setAttribute("ondblclick", "");

  const editingInputElement = document.createElement('input');
  const editedText = editedTask.getElementsByTagName('p')[0].innerText;
  editingInputElement.setAttribute("type", "text");
  editingInputElement.setAttribute("class", "input input_edit");
  editingInputElement.value = editedText;

  editedTask.appendChild(editingInputElement);
  editingInputElement.focus();

  editingInputElement.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      editingInputElement.blur();
    }
  });
  editingInputElement.addEventListener("focusout", function() {
    editedTask.getElementsByTagName('p')[0].innerHTML = editingInputElement.value;
    editedTask.removeChild(editedTask.lastChild);
    editedTask.setAttribute("ondblclick", "editTask(this)");
    if (editingInputElement.value == "") {
      onDeleteItem(editedTask);
    }
    saveTasks();
  });
}