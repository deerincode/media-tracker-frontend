import { getVideogame, editVideogame } from '../services/videogames-api'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditVideogame(){
    const {id} = useParams()
    const nav = useNavigate()
    const [data, setData] = useState({})

    useEffect(() => {
        getVideogame(id)
        .then(res => setData(res.data))
    }, [])
    console.log(data)

    const editTheVideogame = e => {
        e.preventDefault()
        const updatedVideogame = {title: e.target.title.value, releaseyear: e.target.releaseyear.value, developers: e.target.developers.value, publishers: e.target.publishers.value, review: e.target.review.value, notes: e.target.notes.value, played: e.target.played.checked, completed: e.target.completed.checked}
        editVideogame(id, updatedVideogame)
        nav(`/videogames/${id}`)
    }

    return(
        <div>
            <form onSubmit={editTheVideogame}>
                Title:<input type='text' name='title' defaultValue={data.title}/>
                Release Year:<input type='number' name='releaseyear' defaultValue={data.releaseyear}/>
                Developers:<input type='text' name='developers' defaultValue={data.developers}/>
                Publishers:<input type='text' name='publishers' defaultValue={data.publishers}/>
                Review:<input type='text' name='review' defaultValue={data.review}/>
                Notes:<input type='text' name='notes' defaultValue={data.notes} />
                Played:<input type='checkbox' name='played' defaultChecked={data.played} />
                Completed:<input type='checkbox' name='completed' defaultChecked={data.completed} />
                <input type='submit' />
            </form>
        </div>
    )
}