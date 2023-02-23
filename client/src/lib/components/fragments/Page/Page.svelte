<style lang="scss">
	main {
		width: 100%;
		height: fit-content;
		display: flex;
		flex-direction: column;
		scroll-snap-type: y mandatory;
		color: #fff;
	}

	#blob {
		background: linear-gradient(to right, aquamarine, mediumpurple);
		height: 500px;
		aspect-ratio: 1;
		position: absolute;
		left: 50%;
		top: 50%;
		translate: -50% -50%;
		border-radius: 50%;
		animation: rotate 20s infinite;
		filter: blur(200px);
	}

	@keyframes rotate {
		from {
			rotate: 0deg;
		}

		50% {
			scale: 1 1.5;
		}

		to {
			rotate: 360deg;
		}
	}
</style>

<script lang="ts">
	import { onMount } from "svelte";

	let m = { x: 0, y: 0 };

	let blob: HTMLElement;

	const handleMouseMove = (event: MouseEvent) => {
		m.x = event.clientX;
		m.y = event.clientY;

		blob.animate(
			{
				left: `${m.x}px`,
				top: `${m.y}px`
			},
			{ duration: 3000, fill: "forwards" }
		);
	};
</script>

<main on:mousemove="{handleMouseMove}">
	<div id="blob" bind:this="{blob}"></div>
	<slot />
</main>
