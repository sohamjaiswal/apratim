<script lang="ts">
	import GlossyCards from '$lib/components/fragments/GlossyCards/GlossyCards.svelte';

    import Section from "$lib/components/ui/Section/Section.svelte";
	import Page from "$lib/components/fragments/Page/Page.svelte";
	import type { IGlossyCard } from "$lib/types/glossy-card.types";

    import {showBlob} from '../store'

    const cards: IGlossyCard[] = [
        {
            image: "https://pic-bstarstatic.akamaized.net/ugc/65d655c68b92563e29212eb4e4cc9b83.jpg",
            description: "<h4>Harumaki Gohan</h4><hr style='width: 100%' /> <p>Witness the legend.</p>",
            link: "https://google.com/"
        },
        {
            image: "https://pic-bstarstatic.akamaized.net/ugc/65d655c68b92563e29212eb4e4cc9b83.jpg",
            description: "<h4>Harumaki Gohan</h4><hr style='width: 100%' /> <p>Witness the legend.</p>"
        },
        {
            image: "https://pic-bstarstatic.akamaized.net/ugc/65d655c68b92563e29212eb4e4cc9b83.jpg",
            description: "<h4>Harumaki Gohan</h4><hr style='width: 100%' /> <p>Witness the legend.</p>"
        },
        {
            image: "https://pic-bstarstatic.akamaized.net/ugc/65d655c68b92563e29212eb4e4cc9b83.jpg",
            description: "<h4>Harumaki Gohan</h4><hr style='width: 100%' /> <p>Witness the legend.</p>"
        },
        {
            image: "https://pic-bstarstatic.akamaized.net/ugc/65d655c68b92563e29212eb4e4cc9b83.jpg",
            description: "<h4>Harumaki Gohan</h4><hr style='width: 100%' /> <p>Witness the legend.</p>"
        },
        {
            image: "https://pic-bstarstatic.akamaized.net/ugc/65d655c68b92563e29212eb4e4cc9b83.jpg",
            description: "<h4>Harumaki Gohan</h4><hr style='width: 100%' /> <p>Witness the legend.</p>"
        },
        {
            image: "https://pic-bstarstatic.akamaized.net/ugc/65d655c68b92563e29212eb4e4cc9b83.jpg",
            description: "<h4>Harumaki Gohan</h4><hr style='width: 100%' /> <p>Witness the legend.</p>"
        },
        {
            image: "https://pic-bstarstatic.akamaized.net/ugc/65d655c68b92563e29212eb4e4cc9b83.jpg",
            description: "<h4>Harumaki Gohan</h4><hr style='width: 100%' /> <p>Witness the legend.</p>"
        },
                
    ]

</script>

<Section>
    <div class="heading">
        <h1>
            Sponsors
            <hr />
        </h1>
    </div>
    <div class="glossyCardContainer" on:mouseenter="{() => showBlob.update(_ => false)}" on:mouseleave="{() => showBlob.update(_ => true)}">
        <GlossyCards cards={cards} />
    </div>
</Section>

<style lang="scss">

    .glossyCardContainer {
        display: flex;
    }

</style>
