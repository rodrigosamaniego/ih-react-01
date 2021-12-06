/**
 * APP.JS - COMPONENTES
 * 1. IMPORTACIONES
 */


import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main'

/**
 * 
 * 2. FUNCIÓN
 */

function App() {

  // MANEJO DE VARIABLES Y OTRAS FUNCIONES
  const bootcamp = "Ironhack"

  // ESTE FORMATO NO ES HTML COMPLETAMENTE, SINO TAMBIÉN INVOLUCRA JAVASCRIPT AL SIMULTÁNEO.
  // HTML + JS = JSX
  return (
    <div className="App">
      <p>Hola mundo</p>
      <p>Rodrigo Samaniego</p>
      <p>{12 * 12}</p>
      <p>{bootcamp}</p>

      <Header nombre="Rodrigo" ciudad="CDMX" />
      <Header nombre="UwU" ciudad="Tlaxcala" />
      <Header />
      <hr />

      <Main />

      <hr />

      <Footer mes="diciembre 2021" />


    </div>
  );
}


// 3. EXPORTACIÓN
export default App;