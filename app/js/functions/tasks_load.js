function tasks_load() {
  JSON.parse(localStorage.getItem("storage_tasks")).forEach(function (element, i, arr) {
    const div = document.createElement('div');
    div.className = "task";
    div.setAttribute("ondblclick", "edit_task(this)");

    div.innerHTML = (element.is_checked) ?
    "<input class='task__chckbox' type='checkbox' onClick='filt(lastwaschecked)' checked>"+"<p class='task__text'>"+element.text_value+"</p>"+"<button class='task__del' onClick='del(this.parentElement)'>Удалить</button>"
    : "<input class='task__chckbox' type='checkbox' onClick='filt(lastwaschecked)'>"+"<p class='task__text'>"+element.text_value+"</p>"+"<button class='task__del' onClick='del(this.parentElement)'>Удалить</button>";
    
    task_list.appendChild(div);
  });

  const n = lefted_quantity();
  checkall.checked = !(tasks.length != n || tasks.length == 0);
  
  counter.innerText = "Невыполненных: " + (tasks.length-n).toString();
}