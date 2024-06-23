import './App.css'
import Navbar from './components/navbar/Navbar';
import Menu from './components/menu/Menu';
import Brands from './components/brands/Brands';
import Princ from './components/princ/Princ';
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Menu />
      </main> 
      <Brands/>
      <Princ/>
      <Footer/>
    </>
  );
}

export default App
