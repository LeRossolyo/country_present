<script lang="ts">
    import type { PageData } from "./$types";
    import CountryCard from "$lib/components/countryCard.svelte";
    import RandomNumber from "./randomNumber.svelte";
    import { _ } from "svelte-i18n";

    export let data: PageData;
</script>

<div
    class="bg-no-repeat bg-cover bg-center h-screen justify-between"
    style={`background-image: url(${data.country.flags.svg}`}
>
    <div
        class="flex-col text-center h-full w-full bg-slate-900 bg-opacity-80 text-white py-10 px-10"
    >
        <div class="space-y-6">
            <div class="flex justify-center">
                <div class="flex-col">
                    <p class="text-3xl font-black">
                        {data.country.name.common}
                    </p>
                    <p class="font-bold">
                        {#each data.country.altSpellings as altSpelling}
                            <span class="font-normal">{altSpelling}, </span>
                        {/each}
                    </p>
                </div>
            </div>
            <div class="flex-col">
                <a href={`/${data.country.region}`}>
                    <p class="font-bold text-white text-lg">
                        {data.country.region}
                    </p>
                </a>
                <p class="font-thin">{data.country.subregion}</p>
            </div>
            <div
                class="stats max-w-full lg:w-1/2 stats-vertical lg:stats-horizontal"
            >
                <div class="stat items-center">
                    <div class="stat-figure text-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-9 w-9"
                            viewBox="0 0 24 24"
                            ><path
                                fill="currentColor"
                                d="M11 0H5v2H3v6h2v2h6V8H5V2h6zm0 2h2v6h-2zM0 14h2v4h12v2H0zm2 0h12v-2H2zm14 0h-2v6h2zM15 0h4v2h-4zm4 8h-4v2h4zm0-6h2v6h-2zm5 12h-2v4h-4v2h6zm-6-2h4v2h-4z"
                            /></svg
                        >
                    </div>
                    <div class="stat-value">
                        <RandomNumber statNumber={data.country.population} />
                    </div>
                </div>
                <div class="stat items-center">
                    <div class="stat-figure text-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-9 w-9"
                            viewBox="0 0 24 24"
                            ><path
                                fill="currentColor"
                                d="M20 2h2v20H2v-8h2v6h4v-4h2v4h4v-6h2v6h4V4H10v2H8V2zm-8 10h2v2h-2zm-2-2h2v2h-2zm-2 0V8h2v2zm-2 2v-2h2v2zm0 0H4v2h2zm10-6h2v2h-2zm-2 0h-2v2h2zm2 4h2v2h-2z"
                            /></svg
                        >
                    </div>
                    <div class="stat-value">
                        <RandomNumber statNumber={data.country.area} />
                        km²
                    </div>
                </div>
            </div>
            <div class="mt-12">
                {#if data.neighbors.length === 0}
                    <p>No Neighbors #sad country</p>
                {:else if data.neighbors.length > 0}
                    <h2 class="mb-6">{$_("borders")}</h2>
                    <div class="grid grid-cols-1 gap-4 lg:grid-cols-4">
                        {#each data.neighbors as country}
                            <CountryCard
                                name={country.name.common}
                                flag={country.flags.png}
                                cca2={country.cca2}
                            />
                        {/each}
                    </div>
                {/if}
            </div>
        </div>
    </div>
</div>
