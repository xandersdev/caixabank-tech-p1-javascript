// Creamos una función que genera nuestro HTML principal con la lista obtenida de los personajes
export const renderIndex = (personajes) => {
    // Iniciamos la estructura del HTML. Para ello se hace uso de Tailwind para el diseño minimalista y responsive
    let html = `
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Rick & Morty</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-gray-100 to-gray-50 min-h-screen">

<h1 class="text-4xl font-extrabold text-center my-10 text-gray-800 drop-shadow-lg">Personajes</h1>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6">
`;

    // Recorremos la lista de los personajes y generamos una "card" para cada uno
    personajes.forEach(p => {
        html += `
<a href="pages/character_${p.id}.html" class="bg-white rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden group">
    <div class="overflow-hidden">
        <img src="${p.image}" class="w-full h-56 object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-110">
    </div>
    <h3 class="mt-3 text-lg font-semibold text-gray-800 px-4 py-2 text-center group-hover:text-blue-500 transition-colors duration-300">${p.name}</h3>
</a>
`;
    });

    html += `
</div>
</body>
</html>
    `;

    return html;
};


// Función que genera el HTML para los detalles de un personaje en específico
export const renderCharacter = (p) => {
    return `
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>${p.name}</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-gray-100 to-gray-50 flex justify-center items-center min-h-screen transition-colors duration-500">

<div class="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-sm w-full transform transition duration-500 hover:scale-105">
    <img src="${p.image}" class="w-48 h-48 mx-auto rounded-full border-4 border-gray-200 mb-6 shadow-lg object-cover transition-transform duration-500 hover:rotate-3">
    <h1 class="text-3xl font-bold text-gray-800 mb-2">${p.name}</h1>
    <p class="text-gray-600 mb-1">Especie: <span class="font-semibold">${p.species}</span></p>
    <p class="text-gray-600 mb-4">Estado: <span class="font-semibold">${p.status}</span></p>

    <a href="../index.html" class="inline-block mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 hover:scale-105 transition transform duration-300">Volver</a>
</div>

</body>
</html>
    `;
};