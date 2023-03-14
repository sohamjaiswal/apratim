<script lang="ts">
    import FlipCard from "$lib/components/ui/FlipCard/FlipCard.svelte";
</script>

<section>
    <div class="container">
        <div class="heading">
            Join us in our fest
        </div>
        <div class="cards">
            <FlipCard title="Technical" subtitle="Tech Events: Where Innovation Thrives" desc="Explore the Latest Technologies, Compete with others and Gain Insights - Technical Events are Your Perfect Opportunity!" src="/assets/events/technical events.jpg" />
            <FlipCard title="Literary" subtitle="Where Words Come to Life: Literary Events" desc="Immerse Yourself in Literature: Discover New Works and Authors at Literary Events!" src="/assets/events/literary events.jpg" />
            <FlipCard title="Cultural" subtitle="Embrace Diversity and Culture at Cultural Events" desc="Are you fascinated by different cultures and traditions and celebrations? Then cultural events are just what you need! These events offer a unique opportunity to immerse yourself in the rich tapestry of cultures and celebrate diversity." src="/assets/events/cultural events.jpg" />
        </div>
    </div>
</section>

<style lang="scss">
    section {
        height: fit-content;
        width: 100%;
        &>.container {
            display: flex;
            min-height: 80vh;
            height: fit-content;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 5vh;
            &>.heading {
                font-size: 2rem;
                text-align: center;
            }
            &>.cards {
                width: inherit;
                height: fit-content;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 2vw;
                align-items: center;
            }
        }
    }
</style>