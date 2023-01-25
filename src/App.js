import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import AllMedia from './components/AllMedia'
import Movies from './components/Movies';
import Videogames from './components/Videogames';
import VideogameEntry from './components/VideogameEntry'
import MovieEntry from './components/MovieEntry'

function App() {
  return (
    <div className="App">
      Media List
      <Router>
        <Routes>
          <Route path='/' element={<AllMedia />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
