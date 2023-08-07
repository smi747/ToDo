function tasks_load() {
  JSON.parse(localStorage.getItem("storage_tasks")).forEach(function (element, i, arr) {
    let div = document.createElement('div');
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
  let n = lefted_quantity();
  if (tasks.length != n || tasks.length == 0) {
    checkall.checked = false;
  }
  else {
    checkall.checked = true;
  }
  counter.innerText = "Невыполненных: " + (tasks.length-n).toString();
}

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

function filt(x) {
  if (x == "all") {
    Array.from(tasks).forEach(function (element, i, arr) {
      element.style.display = "flex";
    });
    lastwaschecked = "all";
    localStorage.setItem('storage_lwc', JSON.stringify(lastwaschecked));
    all_but.classList.add("button_active");
    chckd_but.classList.remove("button_active");
    unchckd_but.classList.remove("button_active");
  }
  if (x == "chckd") {
    Array.from(tasks).forEach(function (element, i, arr) {
      if (!element.firstChild.checked) {
        element.style.display = "none";
      }
      else {
        element.style.display = "flex";
      }
    });
    lastwaschecked = "chckd";
    localStorage.setItem('storage_lwc', JSON.stringify(lastwaschecked));
    all_but.classList.remove("button_active");
    chckd_but.classList.add("button_active");
    unchckd_but.classList.remove("button_active");
  }
  if (x == "unchckd") {
    Array.from(tasks).forEach(function (element, i, arr) {
      if (element.firstChild.checked) {
        element.style.display = "none";
      }
      else {
        element.style.display = "flex";
      }
    });
    lastwaschecked = "unchckd";
    localStorage.setItem('storage_lwc', JSON.stringify(lastwaschecked));
    all_but.classList.remove("button_active");
    chckd_but.classList.remove("button_active");
    unchckd_but.classList.add("button_active");
  }
  let n = lefted_quantity();
  if (n == 0) {
    delete_but.style.display = "none";
  }
  else {
    delete_but.style.display = "block";
  }
  counter.innerText = "Невыполненных: " + (tasks.length-n).toString();
  
  tasks_save();
}

function del(x) {
  x.remove();
  let n = lefted_quantity();
  counter.innerText = "Невыполненных: " + (tasks.length-n).toString();
  if (n == 0) {
    delete_but.style.display = "none";
  }
  tasks_save();
}

function rem_completed() {
  Array.from(tasks).forEach(function (element, i, arr) {
    if (element.firstChild.checked) {
      del(element);
    }
  });
}

function new_task() {
  if (inp.value != "") {
    let div = document.createElement('div');
    div.className = "task";
    div.setAttribute("ondblclick", "edit_task(this)");
    div.innerHTML = "<input class='task__chckbox' type='checkbox' onClick='filt(lastwaschecked)'>"+"<p class='task__text'>"+inp.value+"</p>"+"<button class='task__del' onClick='del(this.parentElement)'>Удалить</button>";
    inp.value = "";
    if (lastwaschecked == "chckd") {
      div.style.display = "none";
    }
    task_list.appendChild(div);
    
    let n = 0;
    Array.from(tasks).forEach(function (element, i, arr) {
      if (element.firstChild.checked) {
        n += 1;
      }
    });
    counter.innerText = "Невыполненных: " + (tasks.length-n).toString();
    tasks_save();
  }
}

function edit_task(elem) {
  elem.setAttribute("ondblclick", "");

  let inp_edit = document.createElement('input');
  let text = elem.getElementsByTagName('p')[0].innerText;
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
      del(elem);
    }
    tasks_save();
  });
}

function checkall_func() {
  let n = lefted_quantity();
  if (n != tasks.length) {
    Array.from(tasks).forEach(function (element, i, arr) {
      element.firstChild.checked = true;
    });
    delete_but.style.display = "block";
  } else {
    Array.from(tasks).forEach(function (element, i, arr) {
      element.firstChild.checked = false;
    });
    delete_but.style.display = "none";
  }
  
  filt(lastwaschecked);
  tasks_save();
}

function lefted_quantity() {
  let n = 0;
  Array.from(tasks).forEach(function (element, i, arr) {
    if (element.firstChild.checked) {
      n += 1;
    }
  });
  return n;
}

let tasks = document.querySelector('.section__tasklist').children;

if (localStorage.getItem('storage_lwc') !== null) {
  var lastwaschecked = JSON.parse(localStorage.getItem('storage_lwc'));
}
else {
  var lastwaschecked = "all";
}

if (localStorage.getItem("storage_tasks") == null) {
  localStorage.setItem("storage_tasks", JSON.stringify([]));
}

tasks_load();
filt(lastwaschecked);


let is_mouse_on_buttonlist = false;
buttonlist.addEventListener('mouseover', function(event){
    is_mouse_on_buttonlist = true;
});
buttonlist.addEventListener('mouseleave', function(event){
  is_mouse_on_buttonlist = false;
});

inp.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    new_task();
  }
});
inp.addEventListener("focusout", function() {
  if (is_mouse_on_buttonlist == false) {
    new_task();
  }
  else {
    inp.focus();
  }
});
