
<!-- Landing Page 🤌 -->

<script lang="ts">
	import Section from "$lib/components/ui/Section/Section.svelte";




</script>

<main>
	<Section>
		<div class="first">
			Apratim is here.
		</div>
	</Section>
	<Section>
		<div class="second">
	
		</div>
	</Section>
	<Section>
		<div class="third">
		
		</div>
	</Section>
	<Section>
		<div class="fourth">
	
		</div>
	</Section>
</main>

<style lang="scss">

	main {
		width: 100%;
		height: fit-content;
		display: flex;
		flex-direction: column;
		scroll-snap-type: y mandatory;
		color: white;
	}

	section {
		scroll-snap-align: center;
	}

	div {
		display: flex;
		width: 100%;
		height: 100%;
		justify-content: center;
		align-items: center;
	}
</style>
