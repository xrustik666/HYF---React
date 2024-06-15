import useWindowDimension from './useWindowSize.jsx';

function App() {
  const { width, height } = useWindowDimension();

  return (
    <div>
      <h2>Screen dimensions</h2>
      <h3>Width: {width}</h3>
      <h3>Height: {height}</h3>
    </div>
  );
}

export default App;