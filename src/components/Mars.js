import React from 'react'
import mars from '../images/planet-mars.svg'
import marsInternal from '../images/planet-mars-internal.svg'
import marsGeo from '../images/geology-mars.png'
import source from '../images/icon-source.svg'

const Mars = ({btnSelected, datas, choice1, choice2, choice3}) => {
  return (
    <main>
      <div className='mainContainer'>
        <div className='imgContainer'>
          <img className='planet mars' style={{display: `${choice1 ? "block" : " none"}`}} src={mars} alt='mars' />
          <img className='planet mars' style={{display: `${choice2 ? "block" : " none"}`}}  src={marsInternal} alt='mars' />
          <a href={datas[3].structure.source} target="_blank"><img style={{display: `${choice3 ? "block" : " none"}`}}  className='planet marsGeo' src={marsGeo} alt='mars' /></a>
        </div>
        
        <div className='description'>
          <div className='description__container'>
            <h2>{datas[3].name}</h2>
            <p style={{display: `${choice1 && !choice3 ? "block" : " none"}`}} className='description__container--txt' >{datas[3].overview.content}</p>
            <p style={{display: `${choice2 ? "block" : " none"}`}} className='description__container--txt' >{datas[3].structure.content}</p>
            <p style={{display: `${choice3 ? "block" : " none"}`}} className='description__container--txt' >{datas[3].geology.content}</p>
            <div className='description__container--src'>
              <p>Source:</p>
              <a href={datas[3].overview.source} target="_blank"><span>Wikipédia</span><img src={source} alt='wiki' /></a>
            </div>
          </div>
          <div className='description__Btn'>
            <button id='0' onClick={btnSelected} className={choice1 && !choice3 ?'activeBtn3' : ""}> <span className='spanNumber'>01</span> OVERVIEW </button>
            <button id='1' onClick={btnSelected} className={choice2 ?'activeBtn3' : ""}> <span className='spanNumber'>02</span> INTERNAL <span>STRUCTURE</span></button>
            <button id='2' onClick={btnSelected} className={choice3 ?'activeBtn3' : ""}> <span className='spanNumber'>03</span> SURFACE <span>GEOLOGY</span></button>
          </div>
        </div>
      </div>
      <div className='footerBoxs'>
        <div className='footerBox'>
          <h3>ROTATION TIME</h3>
          <p>{datas[3].rotation}</p>
        </div>
        <div className='footerBox'>
          <h3>REVOLUTION TIME</h3>
          <p>{datas[3].revolution}</p>
        </div>
        <div className='footerBox'>
          <h3>RADIUS</h3>
          <p>{datas[3].radius}</p>
        </div>
        <div className='footerBox'>
          <h3>AVERAGE TEMP.</h3>
          <p>{datas[3].temperature}</p>
        </div>
      </div>
    </main>
  )
}

export default Mars