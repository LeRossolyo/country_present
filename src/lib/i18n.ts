import { getLocaleFromNavigator, init, register } from 'svelte-i18n';

register('en', () => import('./assets/lang/en.json'));
register('fr', () => import('./assets/lang/fr.json'));

init({
    fallbackLocale: 'fr',
    initialLocale: getLocaleFromNavigator(),
});