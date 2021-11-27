function throttle(func, delay) {
  let bef = 0
  return function () {
    let now = new Date().getTime()
    if (now - bef > delay) {
      func.call(this, ...arguments)
      bef = now
    }
  }
}