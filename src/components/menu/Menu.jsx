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
    <Openbtn trigger={buttonPopup} setTrigger={setButtonPopup} capadefilme={slider} logodefilme={sliderlogo} sinopsedefilme='Muitas sociedades de macacos cresceram desde quando César levou seu povo a um oásis, enquanto os humanos foram reduzidos a sobreviver e se esconder nas sombras. Um líder macaco começa a escravizar outros grupos para encontrar tecnologia humana, enquanto um jovem macaco, que viu seu clã ser capturado, embarca em uma viagem para encontrar a liberdade, sendo uma jovem humana a chave para todos.' classificadefilme='A14' gedefilme='Ação | Aventura | Fantasia | Ficção-Ciêntifica'/>
      
    </>
  );
}

export default Menu
