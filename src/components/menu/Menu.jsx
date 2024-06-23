import './Menu.css'
import slider from '../../assets/slider.png'
import { useState } from 'react'
import Openbtn from '../openbtn/Openbtn';
import sliderlogo from '../../assets/kotpota.png';
function Menu() {
  const [buttonPopup, setButtonPopup] =useState(false);
  return (

    <>
    
    <div className="main-of-menu">
    <h1>Novidade:</h1>
   
    <div className="menu">
    <button onClick={() => setButtonPopup(true)}>
    <img src={slider} alt='slider' /></button>
    </div>
    </div>
    <Openbtn trigger={buttonPopup} setTrigger={setButtonPopup} capadefilme={slider} logodefilme={sliderlogo} sinopsedefilme='a' classificadefilme='A14' gedefilme='Ação | Aventura | Fantasia | Ficção-Ciêntifica'/>
      
    </>
  );
}

export default Menu
