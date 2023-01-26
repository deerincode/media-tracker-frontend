import { getMovie, editMovie } from '../services/movies-api'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditMovie(){
    const {id} = useParams()
    const nav = useNavigate()
    const [data, setData] = useState({})

    useEffect(() => {
        getMovie(id)
        .then(res => setData(res.data))
    }, [])
    console.log(data)

    const editTheMovie = e => {
        e.preventDefault()
        const updatedMovie = {title: e.target.title.value, releaseyear: e.target.releaseyear.value, directors: e.target.directors.value, review: e.target.review.value, watched: e.target.watched.checked}
        editMovie(id, updatedMovie)
        nav(`/${id}`)
    }

    return(
        <div>
            <form onSubmit={editTheMovie}>
                Title:<input type='text' name='title' defaultValue={data.title}/>
                Release Year:<input type='number' name='releaseyear' defaultValue={data.releaseyear}/>
                Directors:<input type='text' name='directors' defaultValue={data.directors}/>
                Review:<input type='text' name='review' defaultValue={data.review}/>
                Watched:<input type='checkbox' name='watched' defaultChecked={data.watched} />
                <input type='submit' />
            </form>
        </div>
    )
}