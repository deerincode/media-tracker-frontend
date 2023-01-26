import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import AllMedia from './components/AllMedia'
import Movies from './components/Movies';
import Videogames from './components/Videogames';
import VideogameEntry from './components/VideogameEntry'
import MovieEntry from './components/MovieEntry'
import EditMovie from './components/EditMovie'
import CreateMovie from './components/CreateMovieEntry';

function App() {
  return (
    <div className="App">
      Media List
      
      <Router>
        <nav>
          <Link to={`/`}>Home </Link> |
          <Link to={`/new`}> New Movie </Link>|
          <Link to={`/movies`}>Movie List</Link>
        </nav>
        <Routes>
          <Route path='/' element={<AllMedia />}/>
          <Route path='/:id' element={<MovieEntry />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/new' element={<CreateMovie />}></Route>
          <Route path=':id/edit' element={<EditMovie />}/>
          {/* <Route path='/movies'>
            <Route index element={<Movies />} />
            <Route path='/movies/:id' element={<MovieEntry />} />
          </Route> */}
          
          {/* <Route path='/:id' element={<VideogameEntry />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
