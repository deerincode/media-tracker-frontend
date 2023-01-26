import { useNavigate } from "react-router-dom";
import { createVideogame } from "../services/videogames-api"

export default function CreateVideogame() {
    const nav  = useNavigate()

    const createTheVideogame = (e) =>{
        const videogame = {title: e.target.title.value, releaseyear: e.target.releaseyear.value, developers: e.target.developers.value, publishers: e.target.publishers.value, review: e.target.review.value, notes: e.target.notes.value, played: e.target.played.checked, completed: e.target.completed.checked}

        createVideogame(videogame)
        nav('/videogames/list')
    }
    
    return (
        <div>
            <h4>Add a videogame to your tracking list!</h4>
            <form onSubmit={createTheVideogame}>
                Title:<input type='text' name='title' id='title' />
                Release Year:<input type='number' name='releaseyear' id='releaseyear' />
                Developers:<input type='text' name='developers' id='developers' />
                Publishers:<input type='text' name='publishers' id='publishers' />
                Review:<input type='text' name='review' id='review' />
                Notes:<input type='text' name='notes' id='notes' />
                Played?:<input type='checkbox' name='played' id='played' />
                Completed?:<input type='checkbox' name='completed' id='completed' />
                <input type='submit' />
            </form>
        </div>
    )

}