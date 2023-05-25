import React, { useState } from 'react';
import "./Mod.css";

function ModForm() {


  return (
    <>
      <h1>Ingresa los datos a Modificar</h1>
      <form method='POST' action='http://localhost/editar.php' className='fomr2'>
        <input
          type="text"
          name="ID"
          placeholder="ID"
        />
        <input
          type="text"
          name="Nombre"
          placeholder="Nombre"
        />
        <input
          type="email"
          name="Email"
          placeholder="Email"
        />
        <input
          type="text"
          name="Edad"
          placeholder="Edad"
        />
        <button type="submit">Modificar</button>
      </form>
    </>
  );
}

export default ModForm;
