import { useNavigate } from "react-router-dom"
import { createMovie } from "../services/movies-api"

export default function CreateMovie() {
    const nav = useNavigate()

    const createTheMovie = (e) => {
        const movie = {title: e.target.title.value, releaseyear: e.target.releaseyear.value, directors: e.target.directors.value, review: e.target.review.value, watched: e.target.watched.checked}
        createMovie(movie)
        nav('/')
    }

    return(
        <div>
            <h4>Add a Movie to your collection!</h4>
            <form onSubmit={createTheMovie}>
                Title:<input type='text' name='title' id='title' />
                Release Year:<input type='number' name='releaseyear' id='releaseyear' />
                Directors:<input type='text' name='directors' id='directors' />
                Review:<input type='text' name='review' id='review' />
                Watched:<input type='checkbox' name='watched' id='watched' />
                <input type='submit' />

            </form>
        </div>
    )
}