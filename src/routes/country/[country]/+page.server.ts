import { getCountry } from "$lib/server/api/endpoints";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import type { CountryDetails } from "$lib/server/types/Types";

export const load: PageServerLoad = async ({ fetch, params }) => {
    const country: CountryDetails | null = await getCountry(params.country)
    let neighbors: CountryDetails[] = [];

    if (country != null) {
        await Promise.all(
            country.borders.map(async (border) => {
                const tmp: CountryDetails | null = await getCountry(border)
    
                if (tmp != null) {
                    await neighbors.push(tmp);
                }
            })
        )
        return {
            country: country,
            neighbors: neighbors
        }
    }

    throw error(404, 'Country not found')
}