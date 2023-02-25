<script lang="ts">

    import Section from "$lib/components/ui/Section/Section.svelte";
	import Page from "$lib/components/fragments/Page/Page.svelte";
	import GlossyCards from "$lib/components/fragments/GlossyCards/GlossyCards.svelte";
	import type { IGlossyCard, IGlossyCards } from "$lib/types/glossy-card.types";

    const cards: IGlossyCard[] = [
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
        {
            image: "https://pic-bstarstatic.akamaized.net/ugc/65d655c68b92563e29212eb4e4cc9b83.jpg",
            description: "<h4>Harumaki Gohan</h4><hr style='width: 100%' /> <p>Witness the legend.</p>"
        },
                
    ]

</script>

<Page>
    <Section>
        <div class="heading">
            <h1>
                Events
                <hr />
            </h1>
        </div>
        <GlossyCards cards={cards} />
    </Section>
</Page>