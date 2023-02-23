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
	}

	.centered {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
	}
	.back {
		z-index: 1;
	}
	.fore {
		z-index: 2;
		h1 {
			font-size: 6rem;
			text-align: center;
			text-shadow: 0 0 5px black;
		}
	}
</style>

<!-- Landing Page 🤌 -->
<script lang="ts">
	import Section from "$lib/components/ui/Section/Section.svelte";
	import logo from "$lib/assets/logo.png"
</script>

<main>
	<Section>
		<section>
			<div class="centered back">
				<img src={logo} alt="Apratim logo" />
			</div>
			<div class="centered fore">
				<h1>Apratim is here</h1>
			</div>
		</section>
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
