let tasks = document.querySelector('.section__tasklist').children;

if (localStorage.getItem('lwc') !== null) {
  var lastwaschecked = JSON.parse(localStorage.getItem('lwc'));
}
else {
  var lastwaschecked = "-1";
}
filt(1);

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
}