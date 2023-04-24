let tasks = document.querySelector('.task_list').children;
var lastwaschecked = "-1";

function filt(x) {
  if (x == "all") {
    for (i = 0; i < tasks.length; i++) {
      tasks[i].style.display = "block";
    }
    lastwaschecked = "-1";
    all_but.classList.add("active");
    chckd_but.classList.remove("active");
    unchckd_but.classList.remove("active");
  }
  if (x == "chckd" || (lastwaschecked == "1" && x == 1)) {
    lastwaschecked = "1";
    for (i = 0; i < tasks.length; i++) {
      if (!tasks[i].lastChild.checked) {
        tasks[i].style.display = "none";
      }
      if (tasks[i].lastChild.checked) {
        tasks[i].style.display = "block";
      }
    }
    all_but.classList.remove("active");
    chckd_but.classList.add("active");
    unchckd_but.classList.remove("active");
  }
  if (x == "unchckd" || (lastwaschecked == "0" && x == 1)) {
    for (i = 0; i < tasks.length; i++) {
      if (!tasks[i].lastChild.checked) {
        tasks[i].style.display = "block";
      }
      if (tasks[i].lastChild.checked) {
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
      if (tasks[i].lastChild.checked) {
        n += 1;
      }
    }

    counter.innerText = tasks.length-n;
  }
}

function del(x) {
  x.parentNode.remove();
  counter.innerText = tasks.length;
}
 
 inp.addEventListener("keyup", function(event) {
      if (event.key === "Enter") {
        let div = document.createElement('div');
        div.className = "task_div";
        div.innerHTML = "<button onClick='del(this)'>Удалить</button>"+inp.value+"<input type='checkbox' onClick='filt(1)'>";
        inp.value = "";
        if (lastwaschecked == "1") {
          div.style.display = "none";
        }
        task_list.appendChild(div);
        
        let n = 0;
        for (i = 0; i < tasks.length; i++) {
          if (tasks[i].lastChild.checked) {
            n += 1;
          }
        }

        counter.innerText = tasks.length-n;
      }
  });


function checkall_func() {
  let n = 0;
  for (i = 0; i < tasks.length; i++) {
    if (tasks[i].lastChild.checked) {
      n += 1;
    }
  }
  if (n != tasks.length) {
    for (i = 0; i < tasks.length; i++) {
        for (i = 0; i < tasks.length; i++) {
          tasks[i].lastChild.checked = true;
    }
  }
 } else {
  for (i = 0; i < tasks.length; i++) {
    for (i = 0; i < tasks.length; i++) {
      tasks[i].lastChild.checked = false;
}

  }
}
filt(1);
}