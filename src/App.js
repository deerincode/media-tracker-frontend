import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css'
import AllMedia from './components/AllMedia'
import Movies from './components/Movies'
import Videogames from './components/Videogames'
import VideogameEntry from './components/VideogameEntry'
import MovieEntry from './components/MovieEntry'
import EditMovie from './components/EditMovie'
import CreateMovie from './components/CreateMovieEntry'
import CreateVideogame from './components/CreateVideogameEntry'
import MovieOutlet from './components/MovieOutlet'
import VideogameOutlet from './components/VideogameOutlet'
import EditVideogame from './components/EditVideogame'

function App() {
  return (
    <div className="App">
      <h2>Vogue's Media Tracker</h2>
      
      <Router>
        <nav>
          <Link to={`/`}>Home </Link> |
          <Link to={`/movies/new`}> New Movie </Link>|
          <Link to={`/movies/list`}> Movie List </Link>|
          <Link to={'/videogames/new'}> New Videogame </Link>|
          <Link to={'/videogames/list'}> Videogame List </Link>
        </nav>
        
        <Routes>
          <Route path='/' element={<AllMedia />}/>
        </Routes>
        <Routes>
          <Route path='/movies' element={<MovieOutlet />}>
            <Route path=':id' element={<MovieEntry />}/>
            <Route path='list' element={<Movies />}/>
            <Route path='new' element={<CreateMovie />}/>
            <Route path=':id/edit' element={<EditMovie />}/>
          </Route>
        </Routes>
        <Routes>
          <Route path='/videogames' element={<VideogameOutlet />}>
            <Route path=':id' element={<VideogameEntry />}/>
            <Route path='list' element={<Videogames />}/>
            <Route path='new' element={<CreateVideogame />}/>
            <Route path=':id/edit' element={<EditVideogame />}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
