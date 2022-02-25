import React, {Fragment, useState} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {data} from "./components/data"
import Nav from './components/Nav';
import Mercury from './components/Mercury'
import Venus from './components/Venus'
import Earth from './components/Earth'
import Mars from './components/Mars'
import Jupiter from './components/Jupiter'
import Saturn from './components/Saturn'
import Uranus from './components/Uranus'
import Neptune from './components/Neptune'
import './styles/main.scss';

function App() {

  const [datas, setDatas] = useState(data)
  const [choice1, setChoice1] = useState(true)
  const [choice2, setChoice2] = useState(false)
  const [choice3, setChoice3] = useState(false)
  const [directionAnim, setDirectionAnim] = useState(0)
  const [openOrClose, setOpenOrClose] = useState(false)

  const openMenu = () => {
    if(openOrClose){
      setOpenOrClose(false)
    }else{
      setOpenOrClose(true)
    }
  }

  const planetsChange = () => {
    setDirectionAnim(0)
    setChoice1(true)
    setChoice2(false)
    setChoice3(false) 
    setOpenOrClose(false)
  }

  const animationChoice = (e, imgs) => {
    if(directionAnim > e.target.id){
      imgs[e.target.id].style.animation = "planetsUp 0.5s ease-in-out"  
      setDirectionAnim(e.target.id)
    }else if(directionAnim == e.target.id){
      imgs[e.target.id].style.animation =""
    }else{
      imgs[0].style.animation = "planetsDown 0.5s ease-in-out"
      imgs[e.target.id].style.animation = "planetsDown 0.5s ease-in-out"
      setDirectionAnim(e.target.id)
    }
  }

  const btnSelected = (e) => {
    const imgs = document.querySelectorAll('.imgContainer img')
    if(e.target.id === "0"){
      animationChoice(e, imgs)
      setChoice1(true)
      setChoice2(false)
      setChoice3(false) 
    }else if(e.target.id === "1"){
      animationChoice(e, imgs)
      setChoice1(false)
      setChoice2(true)
      setChoice3(false)
    }else{
      animationChoice(e, imgs)
      setChoice1(true)
      setChoice2(false)
      setChoice3(true)
    }
  }

  return (
    <BrowserRouter>
      <Fragment>
        <Nav planetsChange={planetsChange} openMenu={openMenu} openOrClose={openOrClose} />
        <Routes>
          <Route path='/reactproject3/' element={<Mercury btnSelected={btnSelected} datas={datas} choice1={choice1} choice2={choice2} choice3={choice3}/>} />
          <Route path='/reactproject3/venus'   element={<Venus btnSelected={btnSelected} datas={datas} choice1={choice1} choice2={choice2} choice3={choice3} />}   />
          <Route path='/reactproject3/earth'   element={<Earth btnSelected={btnSelected} datas={datas} choice1={choice1} choice2={choice2} choice3={choice3} />}   />
          <Route path='/reactproject3/mars'    element={<Mars btnSelected={btnSelected} datas={datas} choice1={choice1} choice2={choice2} choice3={choice3} />}    />
          <Route path='/reactproject3/jupiter' element={<Jupiter btnSelected={btnSelected} datas={datas} choice1={choice1} choice2={choice2} choice3={choice3} />} />
          <Route path='/reactproject3/saturn'  element={<Saturn btnSelected={btnSelected} datas={datas} choice1={choice1} choice2={choice2} choice3={choice3} />}  />
          <Route path='/reactproject3/uranus'  element={<Uranus btnSelected={btnSelected} datas={datas} choice1={choice1} choice2={choice2} choice3={choice3} />}  />
          <Route path='/reactproject3/neptune' element={<Neptune btnSelected={btnSelected} datas={datas} choice1={choice1} choice2={choice2} choice3={choice3} />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
