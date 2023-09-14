<style lang="scss">
	section {
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		& > swiper-container {
			height: 320px;
			width: 240px;
			& > .swiper-slide {
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 18px;
				& > img {
					background-size: cover;
					background-position: center;
				}
			}
		}
	}
</style>

<script type="ts">
	import { onMount } from "svelte";
	import "swiper/css";
	import { register } from "swiper/element/bundle";
	onMount(() => register());
	import sampleImage from "../../../assets/sample.webp";
</script>

<section>
	<swiper-container effect="cards" grab-cursor="true">
		<swiper-slide class="swiper-slide">
			<img src="{sampleImage}" alt="" />
		</swiper-slide>
		<swiper-slide class="swiper-slide">
			<img src="{sampleImage}" alt="" />
		</swiper-slide>
		<swiper-slide class="swiper-slide">
			<img src="{sampleImage}" alt="" />
		</swiper-slide>
		<swiper-slide class="swiper-slide">
			<img src="{sampleImage}" alt="" />
		</swiper-slide>
		<swiper-slide class="swiper-slide">
			<img src="{sampleImage}" alt="" />
		</swiper-slide>
		<swiper-slide class="swiper-slide">
			<img src="{sampleImage}" alt="" />
		</swiper-slide>
	</swiper-container>
</section>
