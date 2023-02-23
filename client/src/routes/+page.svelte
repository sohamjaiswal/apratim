<!-- Landing Page 🤌 -->
<script lang="ts">
	import Section from "$lib/components/ui/Section/Section.svelte";
	import Page from "$lib/components/fragments/Page/Page.svelte";

	import logo from '$lib/assets/logo.png'
</script>

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

		font-size: 3rem;
		text-align: center;
		text-shadow: 0 0 5px black;
	}

	.back {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
	}


</style>

<Page>
	<Section>
		<div class="sect1">
			<div class="back">
				<img src={logo} alt="apratim logo" />
			</div>
			<div class="fore">
				<h1>Apratim is here.</h1>
			</div>
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
</Page>