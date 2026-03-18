function mostrarAlerta1() {
    alert("¡Hola! Has pulsado el botón principal.");
}

function mostrarAlerta2() {
    alert("¡Funciona! Este es el mensaje del segundo botón.");
}

// Nueva función para conectarse a la API
function traerPersonajes() {
    // 1. Buscamos el div donde vamos a meter los datos
    const caja = document.getElementById("caja-resultados");
    
    // 2. Ponemos un mensaje de "Cargando..." por si el internet va lento
    caja.innerHTML = "<p>Cargando datos desde la API...</p>";

    // 3. Hacemos la llamada (el GET) a la API
    fetch("https://rickandmortyapi.com/api/character")
        .then(respuesta => respuesta.json()) // Convertimos la respuesta a formato JSON
        .then(datos => {
            // Limpiamos el "Cargando..."
            caja.innerHTML = "";

            // La API devuelve muchos, nos quedamos solo con los 3 primeros
            const primerosTres = datos.results.slice(0, 3);

            // Recorremos esos 3 personajes y creamos su HTML
            primerosTres.forEach(personaje => {
                caja.innerHTML += `
                    <div class="tarjeta-personaje">
                        <img src="${personaje.image}" alt="Foto de ${personaje.name}">
                        <h3>${personaje.name}</h3>
                        <p>Especie: ${personaje.species}</p>
                    </div>
                `;
            });
        })
        .catch(error => {
            // Por si algo sale mal (se cae el internet, etc.)
            caja.innerHTML = "<p>Hubo un error al traer los datos.</p>";
            console.error(error);
        });
}