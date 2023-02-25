<style lang="scss">
	section {
		height: 60vh;
		width: 100vw;
		overflow: hidden;
		position: relative;
		& > .image-track {
			display: flex;
			gap: 4vmin;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(0%, -50%);
			user-select: none;
			& > .image {
				width: 55vmin;
				height: 46vmin;
				object-fit: cover;
				object-position: center;
				border-radius: 18px;
			}
		}
	}
	@media screen and (max-width: 1024px) {
		section {
			height: 46vmin !important;
		}
		.image-track {
			left: 25% !important;
		}
	}
</style>

<script type="ts">
	import sampleImage from "../../../assets/sample.webp";
	import { onMount } from "svelte";

	let track: any;
	const handleOnDown = (e: any) => {
		track.dataset.mouseDownAt = e.clientX;
	};
	const handleOnMove = (e: any) => {
		if (track.dataset.mouseDownAt === "0") return;
		const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
			maxDelta = window.innerWidth / 2;
		const percentage = (mouseDelta / maxDelta) * -100,
			nextPercentage = Math.max(
				Math.min(parseFloat(track.dataset.prevPercentage) + percentage, 0),
				-100
			);
		track.dataset.percentage = nextPercentage;
		track.style.transform = `translate(${nextPercentage}%, -50%)`;
		track.animate(
			{
				transform: `translate(${nextPercentage}%, -50%)`
			},
			{ duration: 1200, fill: "forwards" }
		);
		for (const image of track.getElementsByClassName("image")) {
			image.animate(
				{
					objectPosition: `${100 + nextPercentage}% center`
				},
				{ duration: 1200, fill: "forwards" }
			);
		}
	};
	const handleOnUp = (e: any) => {
		track.dataset.mouseDownAt = "0";
		track.dataset.prevPercentage = track.dataset.percentage;
	};
	onMount(() => {
		window.onmousedown = (e) => handleOnDown(e);
		window.ontouchstart = (e) => handleOnDown(e.touches[0]);
		window.onmouseup = (e) => handleOnUp(e);
		window.ontouchend = (e) => handleOnUp(e.touches[0]);
		window.onmousemove = (e) => handleOnMove(e);
		window.ontouchmove = (e) => handleOnMove(e.touches[0]);
	});
</script>

<section>
	<div class="image-track" bind:this="{track}" data-mouse-down-at="0" data-prev-percentage="0">
		<img src="{sampleImage}" alt="" class="image" draggable="false" />
		<img src="{sampleImage}" alt="" class="image" draggable="false" />
		<img src="{sampleImage}" alt="" class="image" draggable="false" />
		<img src="{sampleImage}" alt="" class="image" draggable="false" />
		<img src="{sampleImage}" alt="" class="image" draggable="false" />
		<img src="{sampleImage}" alt="" class="image" draggable="false" />
	</div>
</section>
