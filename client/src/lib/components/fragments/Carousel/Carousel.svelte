<style lang="scss">
	.container {
		width: 100vw;
		height: 90vh;
		display: flex;
		align-items: center;
		& > .crousel {
			position: absolute;
			left: -2vw;
			display: flex;
			gap: 2.5vw;
			width: 110vw;
			height: 100%;
			align-items: center;
			transform: rotate(6deg);
			overflow-x: scroll;
			overflow-y: hidden;
			&::-webkit-scrollbar {
				display: none;
			}
			& > .image {
				perspective: 100px;
				transform-style: preserve-3d;
				& > div {
					& > img {
						width: 650px;
						height: 560px;
						border-radius: 60px;
					}
				}
				&:nth-child(1) {
					// perspective-origin: right;
					& > div {
						transform: rotateY(2.5deg);
					}
				}
				&:nth-child(2) {
					& > div {
						transform: scaleY(0.87);
					}
				}
				&:nth-child(3) {
					// perspective-origin: left;
					& > div {
						transform: rotateY(-2.5deg);
					}
				}
			}
		}
	}
</style>

<script type="ts">
	import sampleImage from "../../../assets/sample.webp";

	let crsl: HTMLElement;

	export let images: string[] = [
		sampleImage,
		sampleImage,
		sampleImage,
		sampleImage,
		sampleImage,
		sampleImage,
		sampleImage
	];

	const handleScroll = () => {
		crsl.scrollTo({ left: window.scrollY * 1.5, behavior: "smooth" });
		// Changing perspective
		// eslint-disable-next-line no-undef
		Array.from(crsl.children as HTMLCollectionOf<HTMLElement>).forEach((elem) => {
			(elem.firstElementChild as HTMLElement).style.transform = `rotateY(${
				(-elem.getBoundingClientRect().x * 3) / 700 + 1
			}deg)`;
			console.log((elem.firstElementChild as HTMLElement).style.transform);
		});
	};
</script>

<section class="container">
	<div class="crousel" bind:this="{crsl}">
		{#each images as image, i}
			<div class="image">
				<div>
					<img src="{image}" alt="Sample" />
				</div>
			</div>
		{/each}
	</div>
</section>

<svelte:window on:scroll="{handleScroll}" />
