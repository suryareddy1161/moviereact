import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './Movie.css'
import Stars from '../../Components/Star/Star'

import ShowInfo from '../../Components/Showinfo/ShowInfo'
import Staring from '../../Components/Starring/Staring'
const Movie = () => {
    const [movie, setMovie] = useState([])
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://api.tvmaze.com/shows/${id}`).then((res) => {
            setMovie(res.data)
            //console.log(responst.data)  
        })
    }, [])
    //console.log(movie)

    return (
        <div>
            <div>
                <div className='cardc'>
                    <h1> 🆃🆅  🅱🅻🅰🅽🅳</h1>
                </div>
            </div>
            <div className='detail'>
                <div >
                    <div className='cardm'>
                        <div>
                            <img className='imgm' src={movie.image?.medium}></img>
                            <div className='rating'><Stars stars={movie.rating?.average} /></div>
                        </div>
                        <div >
                            <div className='movien'>{movie.name}</div>
                            <p className='moviep'>{movie.summary}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='gridmo'>
                <Staring />
                <ShowInfo />
            </div>
        </div>
    )
}

export default Movie



