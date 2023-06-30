import BarraBusqueda from "../components/BarraBusqueda";
import BotonDePaginacion from "../components/BotonDePaginacion";
import GradientSeparator from "../components/GradientSeparator";
import ResultadoBusquedaPersonajes from "../components/ResultadoBusquedaPersonajes";

const fetchPersonajes = () => {
    return fetch("https://rickandmortyapi.com/api/character", { cache: 'no-store' })
        .then(res => res.json());
}

export default async function Personajes() {

    //PERSONAJES
    const personajes:respuestaFetchPersonajes = await fetchPersonajes();

    //JSX
    return (
        <main className={`mt-20`}>

            {/* TEXTO INTRODUCTORIO */}
            <div className={`w-full px-4 md:px-11 lg:px-[225px] pb-8 pt-8 sectionBackground lg:max-w-[1140px] lg:mx-auto lg:my-0`}>
                <h5 className={`sectionTitle mb-7`}>PERSONAJES DE TODO EL UNIVERSO</h5>
                <p className={`w-full mb-3 text-center font-gilmory text-xl font-semibold`}>
                    ¡Bienvenidos al caótico multiverso de Rick and Morty, donde la ciencia se mezcla con la locura! Prepárate para conocer a un elenco de personajes tan extravagantes como un Meeseeks desesperado por cumplir deseos, un Plumbus de usos desconocidos, y un señor de las galletas intergaláctico obsesionado con las golosinas.
                </p>
                <GradientSeparator />
            </div>

            {/* BARRA BUSQUEDA */}
            <BarraBusqueda 
                slug="/personajes/busqueda"
                placeholder="Buscar personaje..."
            />

            {/* RESULTADO PERSONAJES */}
            <ResultadoBusquedaPersonajes
                personajes={personajes.results}
                totalResultados={personajes.info.count}
                paginaActual={1}
            />

            {/* BOTONES PAGINACION */}
            <BotonDePaginacion 
                paginaActual={1}
                lastPage={personajes.info.pages}
                slugBase="/personajes"
                slugBusqueda="/personajes/pagina"
            />

        </main>
    )
}

