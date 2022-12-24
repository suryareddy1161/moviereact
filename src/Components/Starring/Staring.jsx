import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './Staring.css'
const Staring = () => {
    const [movie, setMovie] = useState([])
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
    <h1 className='staring'>Starring</h1>
    <div>

    </div>
</div>
  )
}

export default Staring
