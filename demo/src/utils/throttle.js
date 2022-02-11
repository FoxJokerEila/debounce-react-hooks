import { useCallback, useRef } from 'react'

function useThrottle(func, delay, deps = []) {
  const { current } = useRef({ func: func, bef: 0, now: new Date().getTime() })
  return useCallback(function () {
    current.now = new Date().getTime()
    if (current.now - current.bef > delay) {
      current.func.call(this, ...arguments)
      current.bef = current.now
    }
  }, deps)
}

export default useThrottle
