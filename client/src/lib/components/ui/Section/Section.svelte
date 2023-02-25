<style lang="scss">
	.section {
		width: 100%;
		min-height: 100vh;
		max-height: fit-content;
		scroll-snap-align: center;
	}

	.overflow {
		overflow-x: hidden;
	}
</style>

<script lang="ts">
	export let overflow = false
</script>

<div class="section" class:overflow={!overflow}>
	<slot />
</div>
