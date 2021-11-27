import logo from './logo.svg';
import './App.css';
import useDebounce from './utils/debounce';
import useThrottle from './utils/throttle'

function App() {
  const deb = useDebounce(() => {
    console.log('防抖.')
  }, 500)
  const thr = useThrottle(() => {
    console.log('节流.')
  }, 500)
  return (
    <div className="App">
      <button onClick={deb}>防抖按钮</button>
      <button onClick={thr}>节流按钮</button>
    </div>
  );
}

export default App;
