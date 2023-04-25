import logo from './logo.svg';
import './App.css';
import WeatherApp from './components/WeatherApp';
import PDFM from '../src/components/pdf';
function App() {
  return (
    <>
      <WeatherApp />
      <PDFM />
    </>
  );
}

export default App;
