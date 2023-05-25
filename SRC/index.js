import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Login.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Cargar from './Cargar';
import Modificar from './Modificar';
import Eliminar from './Eliminar';
import Opciones from './Opciones'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>

<Router>
  <Opciones/>
    <Routes>
      <Route path='/' />      
      <Route path='/cargar' element={<Cargar />} />
      <Route path='/mod' element={<Modificar />} />
      <Route path='/del' element={<Eliminar />} />

    </Routes>
</Router>
</>
);
