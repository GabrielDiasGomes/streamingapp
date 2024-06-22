import './Navbar.css'


function Navbar() {
  return (
    <div className='navbar'>
      <h1>MOVIESTREAM</h1>
      <div className="links">
      <a href='#'>
        INÍCIO
      </a>
      <a href='#bombando'>
        BOMBANDO
      </a>
      <a href='#filmes'>
        FILMES
      </a>
      <a href='#series'>
        SÉRIES
      </a>
      <a href='#breve'>
        EM BREVE
      </a>
      <a href='#pesquisar'>
        Pesquisar
      </a>
      </div>
    </div>
  );
}

export default Navbar
