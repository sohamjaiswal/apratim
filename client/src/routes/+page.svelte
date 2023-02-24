<style lang="scss">
	.sect1 {
		display: flex;
		cursor: default;
	}

	.fore {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);

		font-size: 2.5rem;
		text-align: center;
		text-shadow: 0 0 5px black;
	}

	.back {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
		width: 60%;
	}

	.logo {
		aspect-ratio: 1;
		width: 100%;
	}
</style>

<!-- Landing Page 🤌 -->
<script lang="ts">
	import Section from "$lib/components/ui/Section/Section.svelte";
	import Carousel from "$lib/components/fragments/Carousel/Carousel.svelte";
	import Page from "$lib/components/fragments/Page/Page.svelte";

	import logo from "$lib/assets/logo.png";
</script>

<Page>
	<Section>
		<div class="sect1">
			<div class="back">
				<img class="logo" src="{logo}" alt="apratim logo" />
			</div>
			<div class="fore">
				<h1>Apratim is here.</h1>
			</div>
		</div>
	</Section>
	<Section>
		<Carousel />
	</Section>
	<Section>
		<div class="third"></div>
	</Section>
	<Section>
		<div class="fourth"></div>
	</Section>
</Page>
