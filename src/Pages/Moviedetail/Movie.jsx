import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './Movie.css'
import Stars from '../../Components/Star/Star'

import ShowInfo from '../../Components/Showinfo/ShowInfo'
import Staring from '../../Components/Starring/Staring'
const Movie = () => {
    const [movie, setMovie] = useState({})
    const { id } = useParams()


    useEffect(() => {
        axios.get(`https://api.tvmaze.com/shows/${id}`).then((res) => {
            //console.log(res.data)

            setMovie(res.data)
        })
    }, [])
    console.log(movie)
    return (
        <div>
            <div>
                <div>
                    <h1>TV Blade</h1>
                </div>
                
            </div>
            <div>
                {
                   Object.keys(movie).map((ele,id)=>{
                    return(
                        <div>
                            {/* <img src={movie[ele].image.medium}></img> */}
                            <div>{movie[ele].name}</div>
                        </div>
                    )
                   })
                }
            </div>
        </div>
    )
}

export default Movie



