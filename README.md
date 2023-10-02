# Desafio Frontend

## Documentación del Proceso:

Comencé revisando los requerimientos específicos del challenge y luego examiné el diseño en Figma para entender cómo abordaría el desafío. Opté por dividir el proyecto en partes más manejables.

Mi elección fue utilizar Next.js, una herramienta que ya conocía y que consideré perfecta para este desafío.

Comencé creando la navbar, ya que es un componente simple y que se encuentra en todas las rutas de la página. Luego dividí la parte principal en dos: izquierda y derecha. En la izquierda, hice dos componentes para "new trailers" y "favourite genres". Para la derecha, hice tres componentes: uno para el banner, otro para "continue watching" y uno más para "popular movies". También creé un componente llamado "content card" para mostrar las películas.

Para obtener y organizar la información de las películas, creé una ruta en la carpeta de API para conectarme con la API de themoviedb. Esta ruta me permitió obtener los datos necesarios para mostrar en las tarjetas de contenido. Además, implementé otra ruta de la API para realizar búsquedas de películas y una ruta en el frontend para mostrar los resultados de estas búsquedas.

Una vez finalizada la funcionalidad principal, dediqué tiempo a resolver problemas de estilo para asegurarme de que la página funcionara de manera óptima en dispositivos móviles y en diferentes tamaños de pantalla.


## Getting Started
First, add .env with the following environment variables:
```env
NEXT_PUBLIC_API_URL=http://localhost:3000
TMDB_API_KEY=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzY2MWJlOTA2NmJjMzljZGRiZDM5YTliMWVjMmNmNiIsInN1YiI6IjY1MTVmMmM5YzUwYWQyMDEyYzE3ZDFiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qxU1ppnfL71CfYejQ8xwsMGCYpcTQ0_u8hwK2FbZoiA
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
