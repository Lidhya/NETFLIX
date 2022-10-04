import React, { useEffect, useState } from 'react'
import {API_KEY, imageUrl} from '../../constants/constants.js'
import axios from '../../axios'
import './Banner.css'

function Banner() {
  const [movie, setMovie]=useState([])
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      const {results}=response.data
      const randomIndex = Math.floor(Math.random() * results.length);
      setMovie(results[randomIndex])
    })
    }, [])

  return (
         <header
         style={{ backgroundImage: `url(${movie? imageUrl+movie.backdrop_path :""})` }}
      className="banner">
      {/* Background image */}
      <div className="banner_contents">
        {/* title */}
        <h1 className="banner_title">{movie? movie.title:"title not found"}</h1>

        {/* 2 buttons */}
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List </button>
        </div>

        {/* description */}
        <h1 className="banner_description">{movie? movie.overview:""}</h1>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  )
}

export default Banner