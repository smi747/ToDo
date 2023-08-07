function tasks_save() {
  let tmp_tsk_list = [];
  Array.from(task_list.children).forEach(function (element, i, arr) {
    let v_1 = element.getElementsByTagName('p')[0].innerText;
    let v_2 = element.getElementsByTagName('input')[0].checked;
    tmp_tsk_list.push({text_value: v_1, is_checked: v_2});
  });
  localStorage.setItem("storage_tasks", JSON.stringify(tmp_tsk_list));

  let n = lefted_quantity();
  if (tasks.length != n || tasks.length == 0) {
    checkall.checked = false;
  }
  else {
    checkall.checked = true;
  }
}