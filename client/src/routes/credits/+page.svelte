<script lang="ts">

    import DevCard from "$lib/components/fragments/DevCard/DevCard.svelte";
import Page from "$lib/components/fragments/Page/Page.svelte";
    import Section from "$lib/components/ui/Section/Section.svelte";
	import { SahilDetails } from "$lib/devs/Sahil";
	import { SohamDetails } from "$lib/devs/Soham";

</script>

<Section>
	<div class="developers-panel">
		<div class="header">
			<h1>
				Developers 🐵
			</h1>
			<hr />
		</div>
		<div class="devs">
			<h1>
				👑 Front-End Engineers 👑
				<hr />
			</h1>
			<div class="many-devs">
				<DevCard {...SahilDetails} />
				<DevCard {...SohamDetails} />
			</div>
		</div>
	</div>
</Section>

<style lang="scss">

    hr {
		width: 100%;
		justify-content: center;
	}
	.wraps {
		flex-wrap: wrap;
	}
	.wrap-on-less-width {
		@media only screen and (max-width: 800px) {
            flex-wrap: wrap;
        }
	}
	.many-devs {
		display: flex;
		justify-content: center;
		gap: 2rem;
		width: 100%;
	}
	.developers-panel {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		.devs {
			margin-top: 1rem;
			display: flex;
			align-items: center;
			flex-direction: column;
			width: 100%;
			gap: 2rem;
		}
	}

</style>