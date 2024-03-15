<script lang="ts">
    import {slide} from "svelte/transition"

    export let cca2: string;
    export let flag: string;
    export let name: string;
</script>

<a href={`/country/${cca2}`}>
    <div
        class="group h-56 rounded-md shadow-md items-center hover:shadow-xl cursor-pointer bg-cover bg-center"
        style={`background-image: url(${flag})`}
    >
        <div class="flex justify-center items-center h-full w-full bg-slate-900 bg-opacity-20 text-white hover:">
            <p class="group-hover:animate-bounce font-bold text-l">{name}</p>
        </div>
    </div>
</a>
