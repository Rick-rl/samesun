// Ejemplo simple de lista de profesionales
const profesionales = [
    { nombre: "Juan Pérez", especialidad: "Desarrollador Web", telefono: "123-456-7890" },
    { nombre: "Ana Gómez", especialidad: "Diseñadora Gráfica", telefono: "098-765-4321" },
    // Agrega más profesionales aquí
];

// Muestra los profesionales en la página
const lista = document.getElementById('profesionales-lista');
profesionales.forEach(profesional => {
    const div = document.createElement('div');
    div.classList.add('profesional');
    div.innerHTML = `
        <h3>${profesional.nombre}</h3>
        <p>Especialidad: ${profesional.especialidad}</p>
        <p>Teléfono: ${profesional.telefono}</p>
    `;
    lista.appendChild(div);
});

// Funcionalidad de búsqueda
document.getElementById('search').addEventListener('input', (e) => {
    const searchQuery = e.target.value.toLowerCase();
    const filteredProfesionales = profesionales.filter(p => p.nombre.toLowerCase().includes(searchQuery));
    lista.innerHTML = ''; // Limpia la lista
    filteredProfesionales.forEach(profesional => {
        const div = document.createElement('div');
        div.classList.add('profesional');
        div.innerHTML = `
            <h3>${profesional.nombre}</h3>
            <p>Especialidad: ${profesional.especialidad}</p>
            <p>Teléfono: ${profesional.telefono}</p>
        `;
        lista.appendChild(div);
    });
});
