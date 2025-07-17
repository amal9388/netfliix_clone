import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import Titlecard from '../../components/Titlecard/Titlecard'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='Home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner_img'/>
        <div className="hero_caption">
          <img src={hero_title} alt="" className='caption_img'/>
          <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
          <div className="hero_btns">
            <button className='btn'><img src={play_icon} alt="" />play</button>
            <button className='btn dark_btn'><img src={info_icon} alt="" />info</button>
          </div>
          <Titlecard/>
        </div>
      </div>
      <div className="morecards">
      <Titlecard title={'Blockbuster Movies'} category={'top_rated'}/>
      <Titlecard title={'Only on Netflix'} category={'popular'}/>
      <Titlecard title={'Upcoming'} category={'upcoming'}/>
      <Titlecard title={'Top Picks for You'} category={'now_playing'}/>
      </div>

      <Footer/>
      
    </div>
  )
}

export default Home
