import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getRegionCountries } from '$lib/server/api/endpoints';
import type { Country } from '$lib/server/types/Types';
 
export const load: PageServerLoad = async ({params}) => {
    const countries : Country[] | null = await getRegionCountries(params.slug)

    if (countries != null) {
        countries.sort(function(a, b) {
            var textA = a.name.common.toUpperCase();
            var textB = b.name.common.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
    
        return {
            countries : countries
        }
    }
    throw error(404, 'Not found')
};