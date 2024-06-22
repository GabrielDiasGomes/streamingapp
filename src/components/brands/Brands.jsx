import './Brands.css'
import warner from '../../assets/wblogo.png'
import disney from '../../assets/disneylogo.png'
import universal from '../../assets/unilogo.png'
import paramount from '../../assets/paralogo.png'
import columbia from '../../assets/colulogo.png'
function Brands() {
  return (

    <>
    <h1 className="mc">
      Marcas relacionadas:
    </h1>
    <div className="navbrands">
      <a className="container" href="#"><img src={warner} alt='warner' /></a>
      <a className="container" href="#"><img src={disney} alt='disney' /></a>
      <a className="container" href="#"><img src={universal} alt='universal' /></a>
      <a className="container" href="#"><img src={paramount} alt='paramount' /></a>
      <a className="container" href="#"><img src={columbia} alt='columbia pictures' /></a>
    </div>
      
    </>
  );
}

export default Brands
