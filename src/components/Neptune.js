import React from 'react'
import neptune from '../images/planet-neptune.svg'
import neptuneInternal from '../images/planet-neptune-internal.svg'
import neptuneGeo from '../images/geology-neptune.png'
import source from '../images/icon-source.svg'

const Neptune = ({btnSelected, datas, choice1, choice2, choice3}) => {
  return (
    <main>
      <div className='mainContainer'>
        <div className='imgContainer'>
          <img className='planet neptune' style={{display: `${choice1 ? "block" : " none"}`}} src={neptune} alt='neptune' />
          <img className='planet neptune' style={{display: `${choice2 ? "block" : " none"}`}}  src={neptuneInternal} alt='neptune' />
          <a href={datas[7].structure.source} target="_blank"><img style={{display: `${choice3 ? "block" : " none"}`}}  className='planet neptuneGeo' src={neptuneGeo} alt='neptune' /></a>
        </div>
        
        <div className='description'>
          <div className='description__container'>
            <h2>{datas[7].name}</h2>
            <p style={{display: `${choice1 && !choice3 ? "block" : " none"}`}} className='description__container--txt' >{datas[7].overview.content}</p>
            <p style={{display: `${choice2 ? "block" : " none"}`}} className='description__container--txt' >{datas[7].structure.content}</p>
            <p style={{display: `${choice3 ? "block" : " none"}`}} className='description__container--txt' >{datas[7].geology.content}</p>
            <div className='description__container--src'>
              <p>Source:</p>
              <a href={datas[7].overview.source} target="_blank"><span>Wikipédia</span><img src={source} alt='wiki' /></a>
            </div>
          </div>
          <div className='description__Btn'>
            <button id='0' onClick={btnSelected} className={choice1 && !choice3 ?'activeBtn7' : ""}> <span className='spanNumber'>01</span> OVERVIEW </button>
            <button id='1' onClick={btnSelected} className={choice2 ?'activeBtn7' : ""}> <span className='spanNumber'>02</span> INTERNAL <span>STRUCTURE</span></button>
            <button id='2' onClick={btnSelected} className={choice3 ?'activeBtn7' : ""}> <span className='spanNumber'>03</span> SURFACE <span>GEOLOGY</span></button>
          </div>
        </div>
      </div>
      <div className='footerBoxs'>
        <div className='footerBox'>
          <h3>ROTATION TIME</h3>
          <p>{datas[7].rotation}</p>
        </div>
        <div className='footerBox'>
          <h3>REVOLUTION TIME</h3>
          <p>{datas[7].revolution}</p>
        </div>
        <div className='footerBox'>
          <h3>RADIUS</h3>
          <p>{datas[7].radius}</p>
        </div>
        <div className='footerBox'>
          <h3>AVERAGE TEMP.</h3>
          <p>{datas[7].temperature}</p>
        </div>
      </div>
    </main>
  )
}

export default Neptune