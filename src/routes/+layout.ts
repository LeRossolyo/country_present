// +layout.ts
import { browser } from '$app/environment'
import '$lib/i18n'
import { locale, waitLocale } from 'svelte-i18n'
import type { LayoutLoad } from './$types'
import type { CountryDetails } from '$lib/server/types/Types'
import { writable } from 'svelte/store'

export const load: LayoutLoad = async () => {
	if (browser) {
		locale.set(window.navigator.language)
	}
	// const dailyCountry: string | null = localStorage.getItem('dailyCountry');

	// if (dailyCountry === null) {
	// 	const tmp: CountryDetails | null = await getRandomCountry();

	// 	if (tmp === null) {
	// 		throw new Error('Failed to fetch random country');
	// 	} else {
	// 		dailyCountry.set(tmp);
	// 	}
	// }

	await waitLocale()
}