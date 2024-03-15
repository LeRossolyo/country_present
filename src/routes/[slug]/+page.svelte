<script lang="ts">
    import CountryCard from "$lib/components/countryCard.svelte";
    import {fade} from "svelte/transition"
    import { _ } from "svelte-i18n";

    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<div transition:fade class="flex flex-col">
    <div class="flex items-center justify-between p-5">
        <a class="btn" href="/">
            <h1>{"<"}</h1>
        </a>
        <h1 class="text-center">{$_("list_of_countries")}</h1>
        <div/>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 flex-wrap px-10">
        {#each data.countries as country}
            <CountryCard
                name={country.name.common}
                flag={country.flags.svg}
                cca2={country.cca2}
            />
        {/each}
    </div>
</div>
