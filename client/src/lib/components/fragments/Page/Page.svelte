<style lang="scss">
	header {
		position: fixed;
		left: 0;
		top: 0;
		width: 100vw;
		height: fit-content;
		z-index: 100;
	}
	main {
		width: 100vw;
		height: fit-content;
		display: flex;
		flex-direction: column;
		scroll-snap-type: y mandatory;
		color: #fff;
		overflow-x: hidden;
		scroll-behavior: smooth;
		align-items: center;
	}

	#blob {
		background: linear-gradient(to right, rgb(255, 85, 0), rgb(255, 63, 95));
		height: 500px;
		aspect-ratio: 1;
		position: absolute;
		left: 50%;
		top: 50%;
		translate: -50% -50%;
		border-radius: 50%;
		animation: rotate 20s infinite;
		filter: blur(200px);
		z-index: -0;
		opacity: 0;
		transition:opacity 1000ms;
		&.showBlob {
			opacity: 1;
		}
	}

	.content {
		margin-top: 48px;
		padding-bottom: 48px;
		> * {
			scroll-snap-align: start;
		}

		@media only screen and (min-width: 1000px) {
            width: 60rem;
        }
        @media only screen and (max-width: 1000px) {
            width: 95vw;
        }
		z-index: 1;
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

	@media (pointer: coarse) {
		#blob {
			display: none;
		}
	}
</style>

<script lang="ts">
	let m = { x: 0, y: 0 };
	let p = { x: 0, y: 0 };

	import type { IPageProps } from '../../../types/page.types';
	import Navbar from '../Navbar/Navbar.svelte';

	 // eslint-disable-next-line @typescript-eslint/no-empty-interface
	 interface $$Props extends IPageProps{}

	export let showBlob = true

	let blob: HTMLElement;

	const handleMouseMove = (event: MouseEvent) => {
		m.x = event.pageX;
		m.y = event.pageY;

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
	<div id="blob" bind:this="{blob}" class:showBlob={showBlob}></div>
	<header>
		<Navbar />
	</header>
	<div class="content">
		<slot />
	</div>
</main>
