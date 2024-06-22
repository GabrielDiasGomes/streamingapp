import './Openbtn.css';
import xmen97 from '../../assets/capa1.png';
import logo from '../../assets/batlogo.png'
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
function Openbtn(props) {
    return (props.trigger) ? (
        <div className="popup">
          <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false)}>
  
X

            </button>
            <div className="capa"><img src={xmen97} alt="capa" /></div>
            
            <div className="logo">
          <img src={logo} alt="Xmen97" /></div>
          <div className="watchbar"><a href=""> Assistir </a> <a href=""> Minha Lista </a></div>
          
          <div className="sinopse">
          <h3>Sinopse:</h3>
            <h4>
              Após a morte do professor Charles Xavier, os humanos e mutantes convivem em uma falsa harmonia; porém, quando as paredes desmoronam e a verdade vêm a tona, os X-Men devem escolher quem os liderará nesta nova era mutante onde a intolerância torna o mundo ainda mais perigoso.
            </h4>
            <h3>Classificação Indicativa:</h3>
            <h4>A14</h4>
            <h3>Gêneros:</h3>
            <h4>Ação | Aventura | Animação | Fantasia | Super-heróis</h4>
            </div>
          </div>
          </div>


    ) : "";
  }
  
  export default Openbtn;
  