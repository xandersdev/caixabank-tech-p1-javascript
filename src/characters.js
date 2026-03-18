// Creamos la clase para los personajes
export class Character {
    constructor(id, name, species, image, status) {
        this.id = id;
        this.name = name;
        this.species = species;
        this.image = image;
        this.status = status;
    }
}

// Creamos la función que hará el fetch sobre los personajes en la API
export const loadCharacters = async (n = 50) => {
    try {
        let personajes = [];
        let pagina = 1;

        while (personajes.length < n) {
            const respuesta = await fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`);
            if (!respuesta.ok) {
                throw new Error(`Error HTTP: ${respuesta.status}`);
            }

            const datos = await respuesta.json();
            const nuevos = datos.results.map(p => new Character(
                p.id,
                p.name,
                p.species,
                p.image,
                p.status,
            ));

            personajes = personajes.concat(nuevos);
            pagina++;
        }

        return personajes.slice(0, n);
    } catch (error) {
        console.error("Error al cargar los personajes: ", error);
        return [];
    }
};