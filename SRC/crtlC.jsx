const handleInputChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
};

const handleSubmit = event => {
    event.preventDefault();

    const { ID, Nombre, Email, Edad } = formData;

    // Realizar la solicitud HTTP para enviar los datos modificados al servidor
    fetch('http://localhost/editar.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ID, Nombre, Email, Edad })
    })
        .then(response => response.json())
        .then(responseData => {
            // Actualizar los datos en el estado de React
            const updatedData = data.map(item => {
                if (item.ID === ID) {
                    return { ...item, Nombre, Email, Edad };
                }
                return item;
            });
            setData(updatedData);
            setFormData({
                ID: '',
                Nombre: '',
                Email: '',
                Edad: ''
            });
        })
        .catch(error => console.log(error));
};
