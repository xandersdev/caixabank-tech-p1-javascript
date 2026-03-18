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

// Creamos una función asíncrona que hará el fetch sobre los personajes en la API que obtendrá el número específico de personajes que le indicamos
export const loadCharacters = async (n = 50) => {
    try {
        let personajes = [];
        let pagina = 1;

        while (personajes.length < n) {
            const respuesta = await fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`);

            // Simplemente verificamos que la respuesta del servidor es exitosa
            if (!respuesta.ok) {
                throw new Error(`Error HTTP: ${respuesta.status}`);
            }

            // Transformamos los datos JSON obtenidos de la API en instancias de nuestro objeto
            const datos = await respuesta.json();
            const nuevos = datos.results.map(p => new Character(
                p.id,
                p.name,
                p.species,
                p.image,
                p.status,
            ));

            // Agregamos los nuevos elementos al array ya existente
            personajes.push(...nuevos);
            pagina++;
        }

        return personajes.slice(0, n);
    } catch (error) {
        // Capturamos cualquier error que pudiera presentarse y devolvemos un array vacío para evitar que el programa se rompa
        console.error("Error al cargar los personajes: ", error);
        return []; 
    }
};