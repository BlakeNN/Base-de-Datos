import './Opciones.css';
import React from 'react';
import { Link } from 'react-router-dom';


function Opciones() {
    return (
        <>
            <h1>Elige que vas a hacer con la base de datos</h1>
            <ul className='list'>
                <li>
                    <Link to="/" className='listi'><button>Inicio</button></Link>
                </li>
                <li>
                    <Link to="/cargar" className='listi'><button>Cargar Datos</button></Link>
                </li>
                <li>
                    <Link to="/mod" className='listi'><button>Modificar Datos</button></Link>
                </li>
                <li>
                    <Link to="/del" className='listi'><button>Eliminar Datos</button></Link>
                </li>
            </ul>




        </>
    );
}
export default Opciones;