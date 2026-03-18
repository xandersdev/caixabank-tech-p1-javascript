# Generador de HTML en Javascript

Este proyecto es un generador de páginas estáticas escrito en **JAVASCRIPT** que consume datos de la API de Rick & Morty, los procesa mediante Programación Orientada a Objetos y genera una web sencilla y minimalista completamente responsive con ficheros HTML independientes.

# Tecnologías utilizadas
* Runtime: [Bun](https://bun.com/) (o Node.js)
* Estilos: [Tailwind CSS](https://tailwindcss.com/) (vía CDN)
* API: [The Rick and Morty API](https://rickandmortyapi.com/)
* File System (fs): Para la persistencia de datos en local.

# Funcionamiento
1. Lectura y extracción de datos: Se consultan 50 personajes de la API manejando de forma automática la paginación.
2. Transformación: Los datos JSON se convierten en instancias de la Clase `Character`.
3. Generación: 
    - Se crea `index.html` con un Grid de todos los personajes obtenidos.
    - Se genera una carpeta `/pages` con archivos `.html` individuales para cada personaje con sus detalles técnicos.

# Ejecución:
Para generar el sitio web, hay que asegurarse de tener Bun o Node instalados y así poder ejecutar:

```bash
bun main.js
# o
node main.js 