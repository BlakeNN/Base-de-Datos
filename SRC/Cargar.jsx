import React, { useState } from 'react';
import "./Cargar.css";
function Cargar() {
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [email, setEmail] = useState('');
    const [modo, setModo] = useState('')
    const cambiarModo = () => {
        setModo();
    }

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

            if (response.ok) {
                console.log(data.message);
            } else {
                console.error(data.message);
            }
        } catch (error) {
            console.error('Error de conexión:', error);
        }

        setNombre('');
        setEdad('');
        setEmail('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div className='label'>
                    <label htmlFor="nombre">Nombre:</label> <br />
                </div>
                <input
                    type="text"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />
            </div>
            <div>
                <div className='label'>
                    <label htmlFor="edad">Edad:</label> <br />
                </div>
                <input
                    type="number"
                    id="edad"
                    value={edad}
                    onChange={(e) => setEdad(e.target.value)}
                    required
                />
            </div>
            <div>
                <div className='label'>
                    <label htmlFor="email">Email:</label> <br />
                </div>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <br />
            <button type="submit">Enviar</button>
        </form>
    );
}
export default Cargar;