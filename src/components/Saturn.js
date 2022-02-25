import React from 'react'
import saturn from '../images/planet-saturn.svg'
import saturnInternal from '../images/planet-saturn-internal.svg'
import saturnGeo from '../images/geology-saturn.png'
import source from '../images/icon-source.svg'

const Saturn = ({btnSelected, datas, choice1, choice2, choice3}) => {
  return (
    <main>
      <div className='mainContainer'>
        <div className='imgContainer'>
          <img className='planet saturn' style={{display: `${choice1 ? "block" : " none"}`}} src={saturn} alt='saturn' />
          <img className='planet saturn' style={{display: `${choice2 ? "block" : " none"}`}}  src={saturnInternal} alt='saturn' />
          <a href={datas[5].structure.source} target="_blank"><img style={{display: `${choice3 ? "block" : " none"}`}}  className='planet saturnGeo' src={saturnGeo} alt='saturn' /></a>
        </div>
        
        <div className='description'>
          <div className='description__container'>
            <h2>{datas[5].name}</h2>
            <p style={{display: `${choice1 && !choice3 ? "block" : " none"}`}} className='description__container--txt' >{datas[5].overview.content}</p>
            <p style={{display: `${choice2 ? "block" : " none"}`}} className='description__container--txt' >{datas[5].structure.content}</p>
            <p style={{display: `${choice3 ? "block" : " none"}`}} className='description__container--txt' >{datas[5].geology.content}</p>
            <div className='description__container--src'>
              <p>Source:</p>
              <a href={datas[5].overview.source} target="_blank"><span>Wikipédia</span><img src={source} alt='wiki' /></a>
            </div>
          </div>
          <div className='description__Btn'>
            <button id='0' onClick={btnSelected} className={choice1 && !choice3 ?'activeBtn5' : ""}> <span className='spanNumber'>01</span> OVERVIEW </button>
            <button id='1' onClick={btnSelected} className={choice2 ?'activeBtn5' : ""}> <span className='spanNumber'>02</span> INTERNAL <span>STRUCTURE</span></button>
            <button id='2' onClick={btnSelected} className={choice3 ?'activeBtn5' : ""}> <span className='spanNumber'>03</span> SURFACE <span>GEOLOGY</span></button>
          </div>
        </div>
      </div>
      <div className='footerBoxs'>
       <div className='footerBox'>
          <h3>ROTATION TIME</h3>
          <p>{datas[5].rotation}</p>
        </div>
        <div className='footerBox'>
          <h3>REVOLUTION TIME</h3>
          <p>{datas[5].revolution}</p>
        </div>
        <div className='footerBox'>
          <h3>RADIUS</h3>
          <p>{datas[5].radius}</p>
        </div>
        <div className='footerBox'>
          <h3>AVERAGE TEMP.</h3>
          <p>{datas[5].temperature}</p>
        </div>
      </div>
    </main>
  )
}

export default Saturn