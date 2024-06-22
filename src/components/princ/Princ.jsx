import './Princ.css'
import Card from '../card/card';
import xmen97 from '../../assets/capa1.png'
import clubedaluta from '../../assets/capa2.png'
import duna2 from '../../assets/capa3.png'
import oppenheimer from '../../assets/capa4.png'
import missaoimpossivelac1 from '../../assets/capa5.png'
import godzillavkongni from '../../assets/capa6.png'
function Princ() {
  return (
    <>
    <section id="bombando"/>
    <h2> Mais vistos em filmes & series:</h2>
    <div className="filmebar">
    <Card capa={xmen97}/>
   <Card capa={clubedaluta}/>
   <Card capa={duna2}/>
   <Card capa={godzillavkongni}/>
   <Card  capa={oppenheimer}/>
   <Card capa={missaoimpossivelac1}/>
    </div>
    <h2> Lançamentos:</h2>
    <div className="filmebar">
    <Card capa={xmen97}/>
   <Card capa={clubedaluta}/>
   <Card  capa={oppenheimer}/>
   <Card capa={missaoimpossivelac1}/>
   <Card capa={duna2}/>
   <Card capa={godzillavkongni}/>
    </div>
    <section id="filmes"/>
    <h2> Filmes:</h2>
    <div className="filmebar">
   <Card capa={godzillavkongni}/>
   <Card capa={clubedaluta}/>
    <Card capa={xmen97}/>
   <Card capa={duna2}/>
   <Card  capa={oppenheimer}/>
   <Card capa={missaoimpossivelac1}/>
    </div>
    <section id="series"/> 
    <h2> Series:</h2>
    <div className="filmebar">
    <Card capa={xmen97}/>
   <Card capa={clubedaluta}/>
   <Card capa={godzillavkongni}/>
   <Card capa={duna2}/>
   <Card capa={missaoimpossivelac1}/>
   <Card  capa={oppenheimer}/>
    </div>
    <section id="breve"/>
    <h2> Em Breve no MovieStream:</h2>
    <div className="filmebar">
   <Card capa={duna2}/>
    <Card capa={xmen97}/>
   <Card capa={godzillavkongni}/>
   <Card  capa={oppenheimer}/>
   <Card capa={clubedaluta}/>
   <Card capa={missaoimpossivelac1}/>
    </div>
   </>
   )
   }
   export default Princ;