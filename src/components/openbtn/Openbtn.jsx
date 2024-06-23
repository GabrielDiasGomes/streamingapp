import './Openbtn.css';

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
function Openbtn(props) {
    return (props.trigger) ? (
        <div className="popup">
          <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false)}>
  
X

            </button>
            <div className="capa"><img src={props.capadefilme} alt="capa" /></div>
            
            <div className="logo">
          <img src={props.logodefilme} alt="logo" /></div>
          <div className="watchbar"><a href=""> Assistir </a> <a href=""> Minha Lista </a></div>
          
          <div className="sinopse">
          <h3>Sinopse:</h3>
            <h4>
              {props.sinopsedefilme}
            </h4>
            <h3>Classificação Indicativa:</h3>
            <h4>{props.classificadefilme}</h4>
            <h3>Gêneros:</h3>
            <h4>{props.gedefilme}</h4>
            </div>
          </div>
          </div>


    ) : "";
  }
  
  export default Openbtn;
  