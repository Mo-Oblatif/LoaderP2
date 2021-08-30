import './App.css';
import Loader from './components/Loader'

function App() {
  //  const [loader, setLoader] = useState(true);

  // useEffect(() => {
    
  //   setTimeout (() => {
  //     setLoader(false);
  //   }, 2500)

  // }, [])

  return (
    <div className="App">
      <Loader />
    </div>
  );
}

export default App;
