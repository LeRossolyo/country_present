import type { Country, CountryDetails } from "../types/Types"

export async function getRegionCountries(region_name: string): Promise<Country[] | null> {
    const data: Country[] | undefined = await fetch(`https://restcountries.com/v3.1/region/${region_name}?fields=name,flags,cca2`, {
        method: 'GET',
    })
        .then(response => response.json())

    if (data != null)
        return data
    return null
}

export async function getCountry(country_code: string): Promise<CountryDetails | null> {
    const data = await fetch(`https://restcountries.com/v3.1/alpha/${country_code}?fields=name,cca2,currencies,capital,region,subregion,altSpellings,languages,borders,flags,flag,area,population,coatOfArms,timezones,maps`, {
        method: 'GET',
    })
        .then(response => response.json())

    if (data != null) {
        return data
    }

    return null
}

export async function getRandomCountry(): Promise<CountryDetails | null> {
    const data = await fetch(`https://restcountries.com/v3.1/all?fields=name,cca2,currencies,capital,region,subregion,altSpellings,languages,borders,flags,flag,area,population,coatOfArms,timezones,maps`, {
        method: 'GET',
    })
        .then(response => response.json())

    if (data != null) {
        return data[Math.floor(Math.random() * data.length)]
    }
    return null;
}