import React from 'react'
import {originals, trending, action, ComedyMovies, HorrorMovies, RomanceMovies, Documentaries} from '../../constants/constants'
import Banner from '../../Components/Banner/Banner'
import NavBar from '../../Components/NavBar/NavBar'
import PosterRow from '../../Components/PosterRow/PosterRow'

function Home({setLogin}) {
  return (
    <div>
    <NavBar setLogin={setLogin}/>
    <Banner/>
    <PosterRow Url={originals} title='Netflix Originals'/>
    <PosterRow Url={trending} title='Trending' isSmall/>
    <PosterRow Url={action} title='Action' isSmall/>
    <PosterRow Url={ComedyMovies} title='Comedy Movies' isSmall/>
    <PosterRow Url={HorrorMovies} title='Horror Movies' isSmall/>
    <PosterRow Url={RomanceMovies} title='Romance Movies' isSmall/>
    <PosterRow Url={Documentaries} title='Documentaries' isSmall/>
  </div>
  )
}

export default Home