function tasks_save() {
  const tmp_tsk_list = [];
  Array.from(task_list.children).forEach(function (element, i, arr) {
    const v_1 = element.getElementsByTagName('p')[0].innerText;
    const v_2 = element.getElementsByTagName('input')[0].checked;
    tmp_tsk_list.push({text_value: v_1, is_checked: v_2});
  });
  localStorage.setItem("storage_tasks", JSON.stringify(tmp_tsk_list));

  const n = lefted_quantity();
  if (tasks.length != n || tasks.length == 0) {
    checkall.checked = false;
  }
  else {
    checkall.checked = true;
  }
}