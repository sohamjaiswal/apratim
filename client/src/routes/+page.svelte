<style lang="scss">
	main {
		width: 100%;
		height: fit-content;
		display: flex;
		flex-direction: column;
		scroll-snap-type: y mandatory;
		color: #fff;
	}

	section {
		scroll-snap-align: center;
		color: #fff;
	}

	div {
		display: flex;
		width: 100%;
		height: 100%;
		justify-content: center;
		align-items: center;
	}
</style>

<!-- Landing Page 🤌 -->
<script lang="ts">
	import Section from "$lib/components/ui/Section/Section.svelte";
</script>

<main>
	<Section>
		<div class="first">
			<h1>
				Apratim is here.
			</h1>
		</div>
	</Section>
	<Section>
		<div class="second"></div>
	</Section>
	<Section>
		<div class="third"></div>
	</Section>
	<Section>
		<div class="fourth"></div>
	</Section>
</main>
