let tasks = document.querySelector('.section__tasklist').children;

if (localStorage.getItem('lwc') !== null) {
  var lastwaschecked = JSON.parse(localStorage.getItem('lwc'));
}
else {
  var lastwaschecked = "-1";
}

if (localStorage.getItem("test") == null) {
  alert(1);
  localStorage.setItem("test", JSON.stringify([]));
}

//localStorage.setItem("test", JSON.stringify(JSON.parse(localStorage.getItem("test")).concat([{a: "проверка", b: true}])));
//alert(JSON.parse(localStorage.getItem("test"))[0].a);

function tasks_load() {
  JSON.parse(localStorage.getItem("test")).forEach(function (element, i, arr) {
    let div = document.createElement('div');
    div.className = "task";
    div.setAttribute("ondblclick", "edit_task(this)");
    if (element.b) {
      div.innerHTML = "<input class='task__chckbox' type='checkbox' onClick='filt(1)' checked>"+"<p class='task__text'>"+element.a+"</p>"+"<button class='task__del' onClick='del(this)'>Удалить</button>";
    }
    else {
      div.innerHTML = "<input class='task__chckbox' type='checkbox' onClick='filt(1)'>"+"<p class='task__text'>"+element.a+"</p>"+"<button class='task__del' onClick='del(this)'>Удалить</button>";
    }
    inp.value = "";
    if (lastwaschecked == "1") {
      div.style.display = "none";
    }
    task_list.appendChild(div);
    
    let n = 0;
    Array.from(tasks).forEach(function (element, i, arr) {
      if (element.firstChild.checked) {
        n += 1;
      }
    });
    if (tasks.length != n || (tasks.length == n && tasks.length == 0)) {
      checkall.checked = false;
    }
    else {
      checkall.checked = true;
    }
    counter.innerText = "Невыполненных: " + (tasks.length-n).toString();
  });
}

tasks_load();
filt(1);

function tasks_save() {
  let tmp_tsk_list = [];
  Array.from(task_list.children).forEach(function (element, i, arr) {
    let v_1 = element.getElementsByTagName('p')[0].innerText;
    let v_2 = element.getElementsByTagName('input')[0].checked;
    tmp_tsk_list.push({a: v_1, b: v_2});
  });
  localStorage.setItem("test", JSON.stringify(tmp_tsk_list));
  let n = 0;
    Array.from(tasks).forEach(function (element, i, arr) {
      if (element.firstChild.checked) {
        n += 1;
      }
    });
    if (tasks.length != n || (tasks.length == n && tasks.length == 0)) {
      checkall.checked = false;
    }
    else {
      checkall.checked = true;
    }
}


let n = 0;
Array.from(tasks).forEach(function (element, i, arr) {
  if (element.firstChild.checked) {
    n += 1;
  }
});
if (n > 0) {
  delete_but.style.display = "block";
}
else {
  delete_but.style.display = "none";
}
//Переменная lastwaschecked хранит выбранное состояние сортировки:
//-1 - all - все
//0 - unchckd - невыполненные
//1 - chckd - выполненные

//ф-я filt - отображение заданий с определенным статусом и сокрытие всех остальных; работа со счетчиком невыполненных заданий и обработки состояний чекбоксов. Параметр x: all - все, chckd - выполненные, unchckd - невыполненные,
//а также 1 - специальное значение аргумента, используемое при смене значения чекбокса завершения задания
function filt(x) {
  if (x == "all" || (lastwaschecked == "-1" && x == 1)) {
    Array.from(tasks).forEach(function (element, i, arr) {
      element.style.display = "flex";
    });
    lastwaschecked = "-1";
    localStorage.setItem('lwc', JSON.stringify(lastwaschecked));
    all_but.classList.add("button_active");
    chckd_but.classList.remove("button_active");
    unchckd_but.classList.remove("button_active");
  }
  if (x == "chckd" || (lastwaschecked == "1" && x == 1)) {
    lastwaschecked = "1";
    localStorage.setItem('lwc', JSON.stringify(lastwaschecked));
    Array.from(tasks).forEach(function (element, i, arr) {
      if (!element.firstChild.checked) {
        element.style.display = "none";
      }
      else {
        element.style.display = "flex";
      }
    });
    all_but.classList.remove("button_active");
    chckd_but.classList.add("button_active");
    unchckd_but.classList.remove("button_active");
  }
  if (x == "unchckd" || (lastwaschecked == "0" && x == 1)) {
    Array.from(tasks).forEach(function (element, i, arr) {
      if (element.firstChild.checked) {
        element.style.display = "none";
      }
      else {
        element.style.display = "flex";
      }
    });
    lastwaschecked = "0";
    localStorage.setItem('lwc', JSON.stringify(lastwaschecked));
    all_but.classList.remove("button_active");
    chckd_but.classList.remove("button_active");
    unchckd_but.classList.add("button_active");
  }
  if (x == 1) {
    let n = 0;
    Array.from(tasks).forEach(function (element, i, arr) {
      if (element.firstChild.checked) {
        n += 1;
      }
    });
    if (n == 0) {
      delete_but.style.display = "none";
    }
    else {
      delete_but.style.display = "block";
    }
    counter.innerText = "Невыполненных: " + (tasks.length-n).toString();
  }
  tasks_save();
}

//Удаление задачи и обновление счетчика
function del(x) {
  x.parentNode.remove();
  let n = 0;
  Array.from(tasks).forEach(function (element, i, arr) {
    if (element.firstChild.checked) {
      n += 1;
    }
  });
  counter.innerText = "Невыполненных: " + (tasks.length-n).toString();
  if (n == 0) {
    delete_but.style.display = "none";
  }
  tasks_save();
}

function rem_completed() {
  Array.from(tasks).forEach(function (element, i, arr) {
    if (element.firstChild.checked) {
      del(element.firstChild);
    }
  });
}
 
//Ввод задачи и обновление счетчика
function new_task() {
  if (inp.value != "") {
    let div = document.createElement('div');
    div.className = "task";
    div.setAttribute("ondblclick", "edit_task(this)");
    div.innerHTML = "<input class='task__chckbox' type='checkbox' onClick='filt(1)'>"+"<p class='task__text'>"+inp.value+"</p>"+"<button class='task__del' onClick='del(this)'>Удалить</button>";
    inp.value = "";
    if (lastwaschecked == "1") {
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

inp.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    new_task();
  }
});
inp.addEventListener("focusout", function() {
  new_task();
});

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
      del(elem.lastChild);
    }
    tasks_save();
  });
}

//Если есть невыполненные задачи, то отметить их выполненными, иначе отметить все невыполненными
function checkall_func() {
  let n = 0;
  Array.from(tasks).forEach(function (element, i, arr) {
    if (element.firstChild.checked) {
      n += 1;
    }
  });
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
//Производим обновление сортировки в соответсвии с обновленными значениями чекбоксов
  filt(1);
  tasks_save();
}