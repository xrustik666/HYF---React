import useWindowDimension from './useWindowSize.jsx';

function App() {
  const { width, height } = useWindowDimension();

  return (
    <div>
      <h3>Width: {width}</h3>
      <h3>Height: {height}</h3>
    </div>
  );
}

export default App;