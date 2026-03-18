function mostrarAlerta1() {
    alert("¡Hola! Has pulsado el botón principal.");
}

function mostrarAlerta2() {
    alert("¡Funciona! Este es el mensaje del segundo botón.");
}

// Nueva función para conectarse a la API
async function traerPersonajes() {
    // Buscamos el div donde vamos a meter los datos
    const caja = document.getElementById("caja-resultados");

    // Ponemos un mensaje de "Cargando..." por si el internet va lento
    caja.innerHTML = `"<p class="text-gray-700 text-lg">Cargando datos desde la API...</p>"`;


    try {
        let personajes = [];
        let pagina = 1;

        // Recorremos hasta tener 50 personajes
        while (personajes.length <= 50) {
            const respuesta = await fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`);
            const datos = await respuesta.json();

            personajes = personajes.concat(datos.results);
            pagina++;
        };

        // Nos quedamos con solo 50
        personajes = personajes.slice(0, 50);

        // Limpiamos el "Cargando..."
        caja.innerHTML = "";

        // Ahora vamos a crear las tarjetas para visualizar a los personajes
        personajes.forEach(personaje => {
            const card = document.createElement("div");
            card.className = "bg-white shadow rounded-lg p-4 w-64 flex flex-col items-center hover:shadow-lg transition";

            card.innerHTML = `
                <img src="${personaje.image}" alt="Foto de ${personaje.name}" class="w-24 h-24 rounded-full mb-4">
                <h3 class="text-lg font-semibold text-gray-900 mb-1">${personaje.name}</h3>
                <p class="text-gray-500">Especie: ${personaje.species}</p>
            `;

            caja.appendChild(card);
        });
    } catch (error) {
        // Por si algo sale mal (se cae el internet, etc.)
        caja.innerHTML = `<p class="text-red-600">Hubo un error al traer los datos.</p>`;
        console.error(error);
    }
}