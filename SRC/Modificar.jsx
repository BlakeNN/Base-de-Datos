import React, { useEffect, useState } from 'react';
import ModForm from './ModForm';

const Modificar = () => {
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
            ID: {item.ID} <br /> Nombre: {item.Nombre} <br /> Email: {item.Email} <br /> Edad: {item.Edad}
          </li>
        ))}
      </ul>
      <ModForm data={data} setData={setData} />
    </>
  );
};

export default Modificar;
