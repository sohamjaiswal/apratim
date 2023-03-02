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
		scroll-behavior: smooth;
		align-items: center;
        margin-top: 175px;
        margin-bottom: 175px;
	}

	#blob {
		background: linear-gradient(to right, var(--highlight), var(--highlight-hover));
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
		padding-bottom: 48px;
		overflow: hidden;
		> * {
			scroll-snap-align: start;
		}
		@media only screen and (min-width: 1000px) {
            width: 1000px;
        }
		@media only screen and (min-width: 1080px) {
			width: 1080px;
		}
		@media only screen and (min-width: 1300px) {
			width: 1300px
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

	// import type {IPageProps} from '$lib/types/page.types'
	import Navbar from '$lib/components/fragments/Navbar/Navbar.svelte';
	import Footer from '$lib/components/fragments/Footer/Footer.svelte';
	import PageTransitions from '$lib/components/ui/PageTransitions/PageTransitions.svelte';
	import { page } from '$app/stores';

    import {showBlob} from './store.js'

	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	// interface $$Props extends IPageProps{}

    let liveShowBlob: boolean

    showBlob.subscribe(value => {
        liveShowBlob = value
    })

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

<header>
	<Navbar />
</header>
<main on:mousemove="{handleMouseMove}">
	<div id="blob" bind:this="{blob}" class:showBlob={liveShowBlob}></div>
	<div class="content">
		<PageTransitions refresh={$page.route.id}>
			<slot />
		</PageTransitions>
	</div>
</main>
<footer on:mouseenter="{() => showBlob.update(_ => false)}" on:mouseleave="{() => showBlob.update(_ => true)}" >
	<Footer />
</footer>
