function tasks_load() {
  JSON.parse(localStorage.getItem("storage_tasks")).forEach(function (element, i, arr) {
    const div = document.createElement('div');
    div.className = "task";
    div.setAttribute("ondblclick", "edit_task(this)");
    if (element.is_checked) {
      div.innerHTML = "<input class='task__chckbox' type='checkbox' onClick='filt(lastwaschecked)' checked>"+"<p class='task__text'>"+element.text_value+"</p>"+"<button class='task__del' onClick='del(this.parentElement)'>Удалить</button>";
    }
    else {
      div.innerHTML = "<input class='task__chckbox' type='checkbox' onClick='filt(lastwaschecked)'>"+"<p class='task__text'>"+element.text_value+"</p>"+"<button class='task__del' onClick='del(this.parentElement)'>Удалить</button>";
    }
    task_list.appendChild(div);
  });
  const n = lefted_quantity();
  if (tasks.length != n || tasks.length == 0) {
    checkall.checked = false;
  }
  else {
    checkall.checked = true;
  }
  counter.innerText = "Невыполненных: " + (tasks.length-n).toString();
}