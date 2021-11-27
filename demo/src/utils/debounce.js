import { useCallback, useRef } from 'react'

function useDebounce(func, delay, deps = []) {
  const { current } = useRef({ func: func, firsttime: true, timer: null })
  return useCallback(function (...args) {
    current.firsttime = !current.timer;
    if (current.firsttime) {
      current.func.call(this, ...args);
    }
    if (current.timer) {
      clearTimeout(current.timer);
    }
    current.timer = setTimeout(() => {
      current.timer = null;
      if (!current.firsttime) {
        current.func.call(this, ...args);
      }
    }, delay)
  }, deps)
}

export default useDebounce