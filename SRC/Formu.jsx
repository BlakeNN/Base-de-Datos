import React, { useState } from 'react';

function Formu() {
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost//DB.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    nombre,
                    edad,
                    email,
                }).toString(),
            });

            const data = await response.json();

            // Manejar la respuesta del servidor
            if (response.ok) {
                console.log(data.message); // Mensaje de éxito
                // Realizar cualquier acción adicional después del registro exitoso
            } else {
                console.error(data.message); // Mensaje de error
                // Realizar cualquier acción adicional en caso de error
            }
        } catch (error) {
            console.error('Error de conexión:', error);
        }

        // Reiniciar los campos del formulario
        setNombre('');
        setEdad('');
        setEmail('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nombre">Nombre:</label>
                <input
                    type="text"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor="edad">Edad:</label>
                <input
                    type="number"
                    id="edad"
                    value={edad}
                    onChange={(e) => setEdad(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            <button type="submit">Enviar</button>
        </form>
    );
};

export default Formu;