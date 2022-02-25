import React from 'react'
import uranus from '../images/planet-uranus.svg'
import uranusInternal from '../images/planet-uranus-internal.svg'
import uranusGeo from '../images/geology-uranus.png'
import source from '../images/icon-source.svg'

const Uranus = ({btnSelected, datas, choice1, choice2, choice3}) => {
  
  return (
    <main>
      <div className='mainContainer'>
        <div className='imgContainer'>
          <img className='planet uranus' style={{display: `${choice1 ? "block" : " none"}`}} src={uranus} alt='uranus' />
          <img className='planet uranus' style={{display: `${choice2 ? "block" : " none"}`}}  src={uranusInternal} alt='uranus' />
          <a href={datas[6].structure.source} target="_blank"><img style={{display: `${choice3 ? "block" : " none"}`}}  className='planet uranusGeo' src={uranusGeo} alt='uranus' /></a>
        </div>
        
        <div className='description'>
          <div className='description__container'>
            <h2>{datas[6].name}</h2>
            <p style={{display: `${choice1 && !choice3 ? "block" : " none"}`}} className='description__container--txt' >{datas[6].overview.content}</p>
            <p style={{display: `${choice2 ? "block" : " none"}`}} className='description__container--txt' >{datas[6].structure.content}</p>
            <p style={{display: `${choice3 ? "block" : " none"}`}} className='description__container--txt' >{datas[6].geology.content}</p>
            <div className='description__container--src'>
              <p>Source:</p>
              <a href={datas[6].overview.source} target="_blank"><span>Wikipédia</span><img src={source} alt='wiki' /></a>
            </div>
          </div>
          <div className='description__Btn'>
            <button id='0' onClick={btnSelected} className={choice1 && !choice3 ?'activeBtn6' : ""}> <span className='spanNumber'>01</span> OVERVIEW </button>
            <button id='1' onClick={btnSelected} className={choice2 ?'activeBtn6' : ""}> <span className='spanNumber'>02</span> INTERNAL <span>STRUCTURE</span></button>
            <button id='2' onClick={btnSelected} className={choice3 ?'activeBtn6' : ""}> <span className='spanNumber'>03</span> SURFACE <span>GEOLOGY</span></button>
          </div>
        </div>
      </div>
      <div className='footerBoxs'>
        <div className='footerBox'>
          <h3>ROTATION TIME</h3>
          <p>{datas[6].rotation}</p>
        </div>
        <div className='footerBox'>
          <h3>REVOLUTION TIME</h3>
          <p>{datas[6].revolution}</p>
        </div>
        <div className='footerBox'>
          <h3>RADIUS</h3>
          <p>{datas[6].radius}</p>
        </div>
        <div className='footerBox'>
          <h3>AVERAGE TEMP.</h3>
          <p>{datas[6].temperature}</p>
        </div>
      </div>
    </main>
  )
}

export default Uranus