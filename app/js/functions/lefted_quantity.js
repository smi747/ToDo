function lefted_quantity() {
  let n = 0;
  Array.from(tasks).forEach(function (element, i, arr) {
    if (element.firstChild.checked) {
      n += 1;
    }
  });
  return n;
}