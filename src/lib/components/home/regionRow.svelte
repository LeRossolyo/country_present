<script>
    import { _ } from "svelte-i18n";
    import ContinentCard from "./continentCard.svelte";
</script>

<div class="grid grid-cols-1 lg:grid-cols-4 gap-5">
    <ContinentCard continent_name="europe" />
    <ContinentCard continent_name="africa" />
    <ContinentCard continent_name="asia" />
    <ContinentCard continent_name="america" />
    <ContinentCard continent_name="oceania" />
</div>