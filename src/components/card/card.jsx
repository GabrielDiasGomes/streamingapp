import Openbtn from '../openbtn/Openbtn';
import './card.css'
import {useState} from 'react';
function card(props) {
    const [buttonPopup, setButtonPopup] =useState(false);
    return (
        <>
        <div className="card" >
            <button onClick={() => setButtonPopup(true)}>
            
            <img src={props.capa} alt="" />
            </button>
           
        </div>
         <Openbtn trigger={buttonPopup} setTrigger={setButtonPopup}/>
        </>






    )




}

export default card