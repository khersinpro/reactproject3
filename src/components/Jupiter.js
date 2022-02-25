import React from 'react'
import jupiter from '../images/planet-jupiter.svg'
import jupiterInternal from '../images/planet-jupiter-internal.svg'
import jupiterGeo from '../images/geology-jupiter.png'
import source from '../images/icon-source.svg'

const Jupiter = ({btnSelected, datas, choice1, choice2, choice3}) => {
  console.log(datas);
  return (
    <main>
      <div className='mainContainer'>
        <div className='imgContainer'>
          <img className='planet jupiter' style={{display: `${choice1 ? "block" : " none"}`}} src={jupiter} alt='jupiter' />
          <img className='planet jupiter' style={{display: `${choice2 ? "block" : " none"}`}}  src={jupiterInternal} alt='jupiter' />
          <a href={datas[4].structure.source} target="_blank"><img style={{display: `${choice3 ? "block" : " none"}`}}  className='planet jupiterGeo' src={jupiterGeo} alt='jupiter' /></a>
        </div>
        
        <div className='description'>
          <div className='description__container'>
            <h2>{datas[4].name}</h2>
            <p style={{display: `${choice1 && !choice3 ? "block" : " none"}`}} className='description__container--txt' >{datas[4].overview.content}</p>
            <p style={{display: `${choice2 ? "block" : " none"}`}} className='description__container--txt' >{datas[4].structure.content}</p>
            <p style={{display: `${choice3 ? "block" : " none"}`}} className='description__container--txt' >{datas[4].geology.content}</p>
            <div className='description__container--src'>
              <p>Source:</p>
              <a href={datas[4].overview.source} target="_blank"><span>Wikipédia</span><img src={source} alt='wiki' /></a>
            </div>
          </div>
          <div className='description__Btn'>
            <button id='0' onClick={btnSelected} className={choice1 && !choice3 ?'activeBtn4' : ""}> <span className='spanNumber'>01</span> OVERVIEW </button>
            <button id='1' onClick={btnSelected} className={choice2 ?'activeBtn4' : ""}> <span className='spanNumber'>02</span> INTERNAL <span>STRUCTURE</span></button>
            <button id='2' onClick={btnSelected} className={choice3 ?'activeBtn4' : ""}> <span className='spanNumber'>03</span> SURFACE <span>GEOLOGY</span></button>
          </div>
        </div>
      </div>
      <div className='footerBoxs'>
       <div className='footerBox'>
          <h3>ROTATION TIME</h3>
          <p>{datas[4].rotation}</p>
        </div>
        <div className='footerBox'>
          <h3>REVOLUTION TIME</h3>
          <p>{datas[4].revolution}</p>
        </div>
        <div className='footerBox'>
          <h3>RADIUS</h3>
          <p>{datas[4].radius}</p>
        </div>
        <div className='footerBox'>
          <h3>AVERAGE TEMP.</h3>
          <p>{datas[4].temperature}</p>
        </div>
      </div>
    </main>
  )
}

export default Jupiter