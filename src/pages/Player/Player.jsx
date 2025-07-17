import React, { use, useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();

  const navigate = useNavigate();
  
  const [apiData,setapiData] = useState({
    name: '',
    key: '',
    published_at: '',
    type: ''
  })

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2IyMWViNzYxMzZjNjNlODdlODc0OWRhN2U2NmZlMSIsIm5iZiI6MTc1MDYwODAwOS42MzY5OTk4LCJzdWIiOiI2ODU4Mjg4OTZlY2Y2MGE4YzBjN2IwNDAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.KVNc3Y1kIAEv9fjBGKHOAxif9j4wIb3sTbTtq_9zFxU'
    }
  };

useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setapiData(res.results[0]))
  .catch(err => console.error(err));
},[])


  return (
    <div className='Player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}}/>
      <iframe width='90%' height='90%' title='trailer' allowFullScreen src={`https://www.youtube.com/embed/${apiData.key}`} frameborder="0"></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player 
