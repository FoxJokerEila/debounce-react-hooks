function debounce(func, delay) {
  let timer = null;
  return function () {
    var firsttime = !timer;
    if (firsttime) {
      func.call(this, ...arguments);
    }
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      timer = null;
      if (!firsttime) {
        func.call(this, ...arguments);
      }
    }, delay)
  }
}