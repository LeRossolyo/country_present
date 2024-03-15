export type Country = {
    flags : {
        png: string,
        svg : string,
        alt: string
    }
    name : {
        common: string,
        official: string,
        nativeName: any
    }
    cca2: string
}

export type CountryDetails = {
    flags : {
        png: string,
        svg : string,
        alt: string
    }
    name : {
        common: string,
        official: string,
        nativeName: any
    }
    cca2: string,
    currencies: {},
    capital: string[],
    region: string,
    subregion: string,
    altSpellings : string[],
    languages : {},
    borders: string[],
    flag: string,
    area: number,
    population: number,
    coatOfArms: string[],
    timezones: string[],
    maps: {
        googleMaps: string,
        openStreetMaps: string
    }
}