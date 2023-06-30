//APP DETAILS
type Viajero = {
    imagen: string
    nombre: texto
}

type Temporada = {
    imagen: string
    numeroTemporada: string
    descripcion: string
    slug: string
}

type SliderImage = {
    imagen: string
    id: number
}


//GENERALES
type BotonDePaginacionProps = {
    paginaActual: number
    lastPage: number
    slugBase: string
    slugBusqueda: string
}


//PERSONAJES
type StatusPersonaje = 'Alive' | 'Dead' | 'unknown'

type GenderPersonaje = 'Male' | 'Female' | 'Genderless' | 'unknown'

type OrigenLocacionPersonaje = {
    name: string
    url: string
}

type Personaje = {
    id: number
    name: string
    status: StatusPersonaje
    species: string
    type: string
    gender: GenderPersonaje
    origin: OrigenLocacionPersonaje
    location: OrigenLocacionPersonaje
    image: string
    episode: string[]
    url: string
    created: string
}


//LOCACIONES
type Locacion = {
    id: number
    name: string
    type: string
    dimension: string
    residents: string[]
    url: string
    created: string
}


//RESPUESTA FETCH
type InfoRespuestaFetch = {
    count: number
    pages: number
    next: string | null
    prev: string | null
}

interface RespuestaFetch {
    info: InfoRespuestaFetch
}

interface respuestaFetchPersonajes extends RespuestaFetch {
    results: Personaje[]
}

interface respuestaFetchLocaciones extends RespuestaFetch {
    results: Locacion[]
}

//RESULTADO BUSQUEDA
type BarraBusquedaProps = {
    slug: string
    placeholder: string
}

interface ResultadoBusqueda {
    totalResultados: number
    paginaActual: number
}

interface ResultadoBusquedaPersonajesProps extends ResultadoBusqueda {
    personajes: Personaje[]
}

interface ResultadoBusquedaLocacionesProps extends ResultadoBusqueda {
    locaciones: Locacion[]
}

