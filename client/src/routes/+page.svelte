<style lang="scss">
	main {
		width: 100%;
		height: fit-content;
		display: flex;
		flex-direction: column;
		scroll-snap-type: y mandatory;
		color: #fff;
	}

	// div {
	// 	display: flex;
	// 	width: 100%;
	// 	height: 100%;
	// 	justify-content: center;
	// 	align-items: center;
	// 	scroll-snap-align: center;
	// }

	.fore {
		position: absolute;
		z-index: 2;
		top: 50%; left: 50%;
		transform: translateX(-50%) translateY(-50%);
	}
</style>

<!-- Landing Page 🤌 -->
<script lang="ts">
	import Section from "$lib/components/ui/Section/Section.svelte";
</script>

<main>
	<Section>
		<div class="back">
			
		</div>
		<div class="fore">
			<h1>Apratim is here.</h1>
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
