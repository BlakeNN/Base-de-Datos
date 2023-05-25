import React, { useEffect, useState } from 'react';
import "./Eliminar.css"

function Eliminar() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost/mostrar.php')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.log(error));
    }, []);
    return (
        <>
            <h1>Datos de la Base</h1>
            <ul className='li-cont'>
                {data.map(item => (
                    <li key={item.ID} className='li1'>
                        ID: {item.ID}, Nombre: {item.Nombre}, Email: {item.Email}, Edad: {item.Edad}
                    </li>
                ))}
            </ul>
            <h1>Ingresa la fila que quieres eliminar</h1>
            <form action='http://localhost/eliminar.php' method='POST'>
                <label htmlFor="ID">Ingresa el ID de la fila:</label>
                <input type="number" name='ID' placeholder='ID de Fila' />
                <input type="submit" value="Enviar" />
            </form>
        </>
    );
}

export default Eliminar;