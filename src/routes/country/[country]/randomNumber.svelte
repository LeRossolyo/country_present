<script lang="ts">
    import { onMount} from "svelte";
    import { fade } from "svelte/transition";

    export let statNumber: number;

    let displayedNumbers: number = 0;

    function getRandomInt(min: number, max: number) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
    }

    const updateRandomNumbers = () => {
        displayedNumbers = getRandomInt(10000000, 99999999);
    };

    onMount(() => {
        const interval = setInterval(updateRandomNumbers, 200);
        updateRandomNumbers();
        setTimeout(() => {
            displayedNumbers = statNumber;
            clearInterval(interval);
        }, 1000);
    });
</script>

{#if displayedNumbers != 0}
    <span transition:fade>{displayedNumbers}</span>
{/if}
