import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube'
import { API_KEY, imageUrl } from '../../constants/constants.js'
import axios from '../../axios'
import './PosterRow.css'

function PosterRow(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.Url).then((response) => {
      setMovies(response.data.results)
    }).catch((err) => {
      //alert('network error')
    })
  })
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }
  }

  const handleMovieTrailer=(id)=>{
 axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
  const{results}=response.data
if(results.length!==0){
  setUrlId(results[0].key)
}else{
  setUrlId('00000')
}
})
  }

  return (
    <div className="row">
      <p className={props.isSmall?"":"poster_large"}>{props.title}</p>
      <div className="row_posters">
        {movies.map((obj, index) => 
          <img key={index} onClick={()=>{handleMovieTrailer(obj.id)}} className={props.isSmall?"small_poster":"row_poster"} src={`${imageUrl+ obj.poster_path}`} alt="poster" />
        )}
      </div>
     { urlId && <Youtube opts={opts} videoId={urlId} />}
    </div>
  )
}

export default PosterRow