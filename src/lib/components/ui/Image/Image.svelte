<style lang="scss">
	.image {
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: center;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
	}
</style>

<script lang="ts">
	export let image: string;
	export let aspectRatio: number | undefined | null;
</script>

<div
	class="image"
	style="{`

    background-image:${image};
    aspect-ratio: ${aspectRatio ? `${aspectRatio}` : 'none'}

`}"
></div>
