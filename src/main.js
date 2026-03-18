import fs from "fs";
import { loadCharacters } from "./characters.js";
import { renderIndex, renderCharacter } from "./pages.js";


// Función asíncrona principal que orquesta la generación de nuestro sitio
const main = async () => {
    const personajes = await loadCharacters(50);
    if (personajes.length === 0) {
        console.error("No se han podido obtener los personajes correctamente");
        return;
    }

    // Se crea la carpeta "pages" si no existe. Allí almacenaremos los archivos generados para mostrar a los personajes individualmente
    if (!fs.existsSync("pages")) {
        fs.mkdirSync("pages");
    }

    // Aquí generamos nuestro archivo index.html
    fs.writeFileSync("index.html", renderIndex(personajes));

    // Aquí se generan las páginas individuales
    personajes.forEach(p => {
        fs.writeFileSync(
            `pages/character_${p.id}.html`,
            renderCharacter(p)
        );
    });

    // Mostramos un mensaje en consola para saber que ha ido todo bien
    console.log("Proyecto generado correctamente");
};

// Punto de entrada de la aplicación
main();

