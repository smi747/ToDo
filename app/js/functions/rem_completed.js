function rem_completed() {
  Array.from(tasks).forEach(function (element, i, arr) {
    if (element.firstChild.checked) {
      del(element);
    }
  });
}