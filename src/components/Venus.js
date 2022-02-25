import React from 'react'
import venus from '../images/planet-venus.svg'
import venusInternal from '../images/planet-venus-internal.svg'
import venusGeo from '../images/geology-venus.png'
import source from '../images/icon-source.svg'

const Venus = ({btnSelected, datas, choice1, choice2, choice3}) => {
  return (
    <main>
      <div className='mainContainer'>
        <div className='imgContainer'>
          <img className='planet venus' style={{display: `${choice1 ? "block" : " none"}`}} src={venus} alt='venus' />
          <img className='planet venus' style={{display: `${choice2 ? "block" : " none"}`}}  src={venusInternal} alt='venus' />
          <a href={datas[1].structure.source} target="_blank"><img  style={{display: `${choice3 ? "block" : " none"}`}}  className='planet venusGeo' src={venusGeo} alt='venus' /></a>
        </div>
        
        <div className='description'>
          <div className='description__container'>
            <h2>{datas[1].name}</h2>
            <p style={{display: `${choice1 && !choice3 ? "block" : " none"}`}} className='description__container--txt' >{datas[1].overview.content}</p>
            <p style={{display: `${choice2 ? "block" : " none"}`}} className='description__container--txt' >{datas[1].structure.content}</p>
            <p style={{display: `${choice3 ? "block" : " none"}`}} className='description__container--txt' >{datas[1].geology.content}</p>
            <div className='description__container--src'>
              <p>Source:</p>
              <a href={datas[1].overview.source} target="_blank"><span>Wikipédia</span><img src={source} alt='wiki' /></a>
            </div>
          </div>
          <div className='description__Btn'>
            <button id='0' onClick={btnSelected} className={choice1 && !choice3 ?'activeBtn1' : ""}> <span className='spanNumber'>01</span> OVERVIEW </button>
            <button id='1' onClick={btnSelected} className={choice2 ?'activeBtn1' : ""}> <span className='spanNumber'>02</span> INTERNAL <span>STRUCTURE</span></button>
            <button id='2' onClick={btnSelected} className={choice3 ?'activeBtn1' : ""}> <span className='spanNumber'>03</span> SURFACE <span>GEOLOGY</span></button>
          </div>
        </div>
      </div>
      <div className='footerBoxs'>
        <div className='footerBox'>
          <h3>ROTATION TIME</h3>
          <p>{datas[1].rotation}</p>
        </div>
        <div className='footerBox'>
          <h3>REVOLUTION TIME</h3>
          <p>{datas[1].revolution}</p>
        </div>
        <div className='footerBox'>
          <h3>RADIUS</h3>
          <p>{datas[1].radius}</p>
        </div>
        <div className='footerBox'>
          <h3>AVERAGE TEMP.</h3>
          <p>{datas[1].temperature}</p>
        </div>
      </div>
    </main>
  )
}

export default Venus