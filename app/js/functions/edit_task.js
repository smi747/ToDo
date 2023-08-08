function edit_task(elem) {
  elem.setAttribute("ondblclick", "");

  const inp_edit = document.createElement('input');
  const text = elem.getElementsByTagName('p')[0].innerText;
  inp_edit.setAttribute("type", "text");
  inp_edit.setAttribute("class", "input input_edit");
  inp_edit.value = text;

  elem.appendChild(inp_edit);
  inp_edit.focus();

  inp_edit.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      inp_edit.blur();
    }
  });
  inp_edit.addEventListener("focusout", function() {
    elem.getElementsByTagName('p')[0].innerHTML = inp_edit.value;
    elem.removeChild(elem.lastChild);
    elem.setAttribute("ondblclick", "edit_task(this)");
    if (inp_edit.value == "") {
      onDeleteItem(elem);
    }
    saveTasks();
  });
}