import './App.css';
import ParentComponent from './components/useCallback-hook/ParentComponent';
import Counter from './components/useMemo-hook/Counter';

function App() {
  return (
    <div className="App">
      {/* <ParentComponent/> */}
      <Counter/>
    </div>
  );
}

export default App;
