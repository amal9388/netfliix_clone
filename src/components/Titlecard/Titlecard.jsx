import React, { useEffect, useRef } from 'react'
import './Titlecard.css'
import cards_data from '../../assets/cards/Cards_data'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Titlecard = ({title,category}) => {

  const [apiData, setapiData] = useState([]);

  const cardsref = useRef();

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2IyMWViNzYxMzZjNjNlODdlODc0OWRhN2U2NmZlMSIsIm5iZiI6MTc1MDYwODAwOS42MzY5OTk4LCJzdWIiOiI2ODU4Mjg4OTZlY2Y2MGE4YzBjN2IwNDAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.KVNc3Y1kIAEv9fjBGKHOAxif9j4wIb3sTbTtq_9zFxU'
  }
  };


  const handlewheel = (event)=>{
    event.preventDefault();
    cardsref.current.scrollLeft += event.deltaY;
  }

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setapiData(res.results))
  .catch(err => console.error(err));
    cardsref.current.addEventListener('wheel',handlewheel);
  },[])

  return (
    <div className='Titlecard'>
      <h2>{title?title:'Popular on netflix'}</h2>
      <div className="card_list" ref={cardsref}>
        {apiData.map((card,index)=>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default Titlecard 
