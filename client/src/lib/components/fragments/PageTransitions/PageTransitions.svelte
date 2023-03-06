<script lang="ts">
    import { fly } from "svelte/transition";
    export let refresh: string | null;
</script>

{#key refresh}
<section
    in:fly="{{
        y: 1000,
        duration: 250,
        delay: 300
    }}"
    >
    <slot />
</section>
{/key}