import './App.css';
import Weather from "./Weather";

export default function App() {
  return <div className="App">
    <div className="container">
      <Weather defaultCity="Paris" />
      <footer> This project was coded by Andrea Sheppard and is{" "}<a href="https://github.com/asheppard14/weather-react" target="blank" rel="noopener noreferrer">open-sourced on GitHub</a></footer>
    </div>
    </div>;
}


