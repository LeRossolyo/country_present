<script lang="ts">
    import { _ } from "svelte-i18n";

    export let continent_name: string;
    let src = `./src/lib/assets/images/${continent_name}.png`;
</script>

<a href={`/${continent_name}`}>
        <div
            on:load={() => console.log("loaded")}
            class={`h-60 bg-cover`}
            style={`background-image: url('${src}')`}
        >
            <div
                class="h-full w-full bg-slate-900 bg-opacity-20 text-white p-5"
            >
                <p class="font-bold text-3xl">{$_(continent_name)}</p>
            </div>
    </div>
</a>
