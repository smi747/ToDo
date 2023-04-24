let tasks = document.querySelector('.task_list').children;
var lastwaschecked = "-1";

function filt(x) {
  if (x == "all") {
    for (i = 0; i < tasks.length; i++) {
      tasks[i].style.display = "flex";
    }
    lastwaschecked = "-1";
    all_but.classList.add("active");
    chckd_but.classList.remove("active");
    unchckd_but.classList.remove("active");
  }
  if (x == "chckd" || (lastwaschecked == "1" && x == 1)) {
    lastwaschecked = "1";
    for (i = 0; i < tasks.length; i++) {
      if (!tasks[i].firstChild.checked) {
        tasks[i].style.display = "none";
      }
      if (tasks[i].firstChild.checked) {
        tasks[i].style.display = "flex";
      }
    }
    all_but.classList.remove("active");
    chckd_but.classList.add("active");
    unchckd_but.classList.remove("active");
  }
  if (x == "unchckd" || (lastwaschecked == "0" && x == 1)) {
    for (i = 0; i < tasks.length; i++) {
      if (!tasks[i].firstChild.checked) {
        tasks[i].style.display = "flex";
      }
      if (tasks[i].firstChild.checked) {
        tasks[i].style.display = "none";
      }
    }
    lastwaschecked = "0";
    all_but.classList.remove("active");
    chckd_but.classList.remove("active");
    unchckd_but.classList.add("active");
  }

  if (x == 1) {
    let n = 0;
    for (i = 0; i < tasks.length; i++) {
      if (tasks[i].firstChild.checked) {
        n += 1;
      }
    }

    counter.innerText = "Невыполненных: " + (tasks.length-n).toString();
  }
}

function del(x) {
  x.parentNode.remove();
  let n = 0;
  for (i = 0; i < tasks.length; i++) {
    if (tasks[i].firstChild.checked) {
      n += 1;
    }
  }
  counter.innerText = "Невыполненных: " + (tasks.length-n).toString();
}
 
 inp.addEventListener("keyup", function(event) {
      if (event.key === "Enter") {
        let div = document.createElement('div');
        div.className = "task_div";
        div.innerHTML = "<input class='chckbox' type='checkbox' onClick='filt(1)'>"+"<p>"+inp.value+"</p>"+"<button class='del_but' onClick='del(this)'>Удалить</button>";
        inp.value = "";
        if (lastwaschecked == "1") {
          div.style.display = "none";
        }
        task_list.appendChild(div);
        
        let n = 0;
        for (i = 0; i < tasks.length; i++) {
          if (tasks[i].firstChild.checked) {
            n += 1;
          }
        }

        counter.innerText = "Невыполненных: " + (tasks.length-n).toString();
      }
  });


function checkall_func() {
  let n = 0;
  for (i = 0; i < tasks.length; i++) {
    if (tasks[i].firstChild.checked) {
      n += 1;
    }
  }
  if (n != tasks.length) {
    for (i = 0; i < tasks.length; i++) {
        for (i = 0; i < tasks.length; i++) {
          tasks[i].firstChild.checked = true;
    }
  }
 } else {
  for (i = 0; i < tasks.length; i++) {
    for (i = 0; i < tasks.length; i++) {
      tasks[i].firstChild.checked = false;
}

  }
}
filt(1);
}