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

type InfoRespuestaFetch = {
    count: number
    pages: number
    next: string
    prev: string | null
}

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

type respuestaFetchPersonajes = {
    info: InfoRespuestaFetch
    results: Personaje[]
}

type BotonDePaginacionProps = {
    paginaActual: number
    lastPage: number
}
