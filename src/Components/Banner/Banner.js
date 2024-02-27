import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from 'axios'
import {API_KEY,imageUrl} from '../Constants/Contant'
const Banner = () => {
  const [first, setfirst] = useState([])
  useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        //console.log(response.data.results[0]);
        setfirst(response.data.results[17])
      })
  }, [])
  
  return (
    <div style={{backgroundImage: first.backdrop_path ? `url(${imageUrl+first.backdrop_path})` : 'none'}} className='banner'>
      
        <div className='content'>
            <h1 className='title'>{first.title}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
           <h1 className='discription'>{first.overview}</h1>
        </div>
        <div className="fadebottom"></div>
    </div>
  )
}

export default Banner
