import React from 'react'
import mercury from '../images/planet-mercury.svg'
import mercuryInternal from '../images/planet-mercury-internal.svg'
import mercuryGeo from '../images/geology-mercury.png'
import source from '../images/icon-source.svg'

const Mercury = ({btnSelected, datas, choice1, choice2, choice3}) => {
  return (
      <main>
        <div className='mainContainer'>
          <div className='imgContainer'>
            <img className='planet mercury' style={{display: `${choice1 ? "block" : " none"}`}} src={mercury} alt='mercury' />
            <img className='planet mercury ' style={{display: `${choice2 ? "block" : " none"}`}}  src={mercuryInternal} alt='mercury' />
            <a href={datas[0].structure.source} target="_blank"><img style={{display: `${choice3 ? "block" : " none"}`}}  className='planet geoMercury' src={mercuryGeo} alt='mercury' /></a>
          </div>
          
          <div className='description'>
            <div className='description__container'>
              <h2>{datas[0].name}</h2>
              <p style={{display: `${choice1 && !choice3 ? "block" : " none"}`}} className='description__container--txt' >{datas[0].overview.content}</p>
              <p style={{display: `${choice2 ? "block" : " none"}`}} className='description__container--txt' >{datas[0].structure.content}</p>
              <p style={{display: `${choice3 ? "block" : " none"}`}} className='description__container--txt' >{datas[0].geology.content}</p>
              <div className='description__container--src'>
                <p>Source:</p>
                <a href={datas[0].overview.source} target="_blank"><span>Wikipédia</span><img src={source} alt='wiki' /></a>
              </div>
            </div>
            <div className='description__Btn'>

              <button id='0' onClick={btnSelected} className={choice1 && !choice3 ?'activeBtn0' : ""}> 
                <span className='spanNumber'>01</span> OVERVIEW 
              </button>

              <button id='1' onClick={btnSelected} className={choice2 ?'activeBtn0' : ""}> 
                <span className='spanNumber'>02</span> INTERNAL <span> STRUCTURE </span>
              </button>

              <button id='2' onClick={btnSelected} className={choice3 ?'activeBtn0' : ""}> 
                <span className='spanNumber'>03</span> SURFACE <span>GEOLOGY</span>     
              </button>

            </div>
          </div>
        </div>
        <div className='footerBoxs'>
          <div className='footerBox'>
            <h3>ROTATION TIME</h3>
            <p>56.6 DAYS</p>
          </div>
          <div className='footerBox'>
            <h3>REVOLUTION TIME</h3>
            <p>87.97DAYS</p>
          </div>
          <div className='footerBox'>
            <h3>RADIUS</h3>
            <p>2,439.7 KM</p>
          </div>
          <div className='footerBox'>
            <h3>AVERAGE TEMP.</h3>
            <p>430°C</p>
          </div>
        </div>
      </main>
  )
}

export default Mercury