type Info = {
    count: number
    season: number
}

type Episodio = {
    id: number
    numeroEpisodio: number
    name: string
    air_date: string
    characters: string[]
    duration: string
    age: string
    image: string
}

type Results = {
    episodios: Episodio[]
}

type Temporada = {
    info: Info
    results: Results
}

type temporadasInfo = {
    temporada1: Temporada
    // temporada2: Temporada
    // temporada3: Temporada
    // temporada4: Temporada
    // temporada5: Temporada
}

export const temporadasInfo:any = {
    temporada1: {
        info: {
            count: 11,
            season: 1
        },
        results: {
            episodios: [
                {
                    id: 1,
                    numeroEpisodio: 1,
                    name: "Pilot",
                    air_date: "December 2, 2013",
                    characters: [
                    "1",
                    "2",
                    "35",
                    "38",
                    "62",
                    "92",
                    "127",
                    "144",
                    "158",
                    "175",
                    "179",
                    "181",
                    "239",
                    "249",
                    "271",
                    "338",
                    "394",
                    "395",
                    "435"
                    ],
                    duration: '22 MIN',
                    age: '16+',
                    image: ''
                }
            ]
        }
    }
}