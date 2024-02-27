import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from 'axios'
import {imageUrl} from '../Constants/Contant'
const RowPost = (props) => {
  const [first, setfirst] = useState([])
useEffect(()=>{
  axios.get(props.code).then((response)=>{
    //console.log(response.data.result);
    setfirst(response.data.results)
  })
},[props.code])
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
            {first.map((obj)=>(
              <div key={obj.id}>
                <img className={props.isSmall ?'smallposter':'poster'} src={imageUrl+obj.poster_path} alt="" />
              </div>
            ))}
            
        </div>
    </div>
  )
}

export default RowPost