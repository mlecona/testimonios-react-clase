import React from 'react';
import './App.css';
import Testimonio  from './componentes/Testimonio.js';
import testi_data from './datos/testimonio.json';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="contenedor-principal">
          <h1>Esto es lo que dicen nuestros ex alumnos sobre los Cursos:</h1>
          {testi_data.map((testimonio) => (
            <Testimonio
              key={testimonio.id}
              nombre={testimonio.nombre}
              pais={testimonio.pais}
              imagen={testimonio.imagen}
              cargo={testimonio.cargo}
              empresa={testimonio.empresa}
              testimonio={testimonio.testimonio}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
