<style lang="scss">
	.container {
		&>.sect1 {
			display: flex;
			cursor: default;
			// &>.bird {
			// 	position: absolute;
			// 	height: 100px;
			// 	width: 100px;
			// 	bottom: -100px;
			// 	left: 50%;
			// 	transform: translate(-50%, 0);
			// 	animation: PheonixComingUp 1.5s ease-in forwards;
			// 	z-index: 100;
			// 	&>img {
			// 		width: inherit;
			// 		height: inherit;
			// 	}
			// }
			&>.back {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translateX(-50%) translateY(-50%);
				width: 60%;
				height: 90vh;
				// background-image: url('$lib/assets/ccetImages/building.jpg');
				background-repeat: no-repeat;
				background-size: cover;
				& > .logo {
					aspect-ratio: 1;
					width: 100%;
					height: 100%;
				}
			}
			& > .fore {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translateX(-50%) translateY(-50%);
				font-size: 7rem;
				font-weight: 800;
				text-align: center;
				text-shadow: 0px 5px 50px black;
 				// background: var(--landing-heading-bg);
				// -webkit-text-fill-color: transparent;
				// -webkit-background-clip: text;
				// background-clip: text;
				letter-spacing: -.06em;
				line-height: 1.5;
				&>.cta {
					display: flex;
					justify-content: center;
					align-items: center;
					gap: 2vw;
				}
			}
		}
		&>.sponsors {
			position: absolute;
			bottom: 3vh;
			right: 2vw;
			display: grid;
			grid-template-rows: auto auto;
			row-gap: 5vh;
			width: fit-content;
			height: fit-content;
			& > div {
				display: flex;
				gap: 2vw;
				align-items: center;
				justify-content: flex-end;
				& > div {
					position: relative;
					transition: all 0.2s ease;
					cursor: pointer;
					&::before {
						content: "";
						position: absolute;
						width: 100%;
						height: 100%;
						top: -50%;
						left: -50%;
						z-index: -1;
						border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
						background-image: var(--blob-bg);
						translate: 50% 50%;
						animation: rotateBlob 15s forwards infinite;
					}
					&:hover {
						scale: 1.2;
					}
					& > img {
						position: absolute;
						left: 50%;
						top: 50%;
						transform: translate(-50%, -50%);
						max-width: 80%;
						max-height: 65%;
					}
					&.titleSponsor {
						width: 300px;
						height: 300px;
						& > img {
							transform: translate(-55%, -55%);
						}
					}
					&.platinumSponsor {
						width: 100px;
						height: 100px;
						& > img {
							transform: translate(-54%, -55%);
						}
					}
				}
			}
		}	
	}
	

	

	.mobileCarousel {
		display: none;
	}
	@media screen and (max-width: 600px) {
		.mobileCarousel {
			display: block;
		}
		.carousel {
			display: none;
		}
	}
	.fixed-wrapper {
		position: absolute;
		width: 100vw;
		height: 100%;
	}

	@keyframes rotateBlob {
		0% {
			rotate: 0deg;
		}
		100% {
			rotate: 360deg;
		}
	}
	// @keyframes PheonixComingUp {
	// 	0% {
	// 		bottom: -100px;
	// 		width: 100px;
	// 		height: 100px;
	// 		transform: translate(-50%, 0);
	// 		opacity: 1;
	// 		z-index: 100;
	// 	}
	// 	99% {
	// 		opacity: 1;
	// 		z-index: 100;
	// 	}
	// 	100% {
	// 		bottom: 50%;
	// 		transform: translate(-50%, 50%);
	// 		width: 300px;
	// 		height: 300px;
	// 		opacity: 0;
	// 		z-index: -100;
	// 	}
	// }
</style>

<!-- Landing Page 🤌 -->
<script lang="ts">
	import titleSponsor from "$lib/assets/sponsors/title.webp";
	import plat1 from "$lib/assets/sponsors/plat1.png";
	import plat2 from "$lib/assets/sponsors/plat2.png";
	import plat3 from "$lib/assets/sponsors/plat3.png";
	import plat4 from "$lib/assets/sponsors/plat4.png";
	import plat5 from "$lib/assets/sponsors/plat5.png";

	// import flyingPheonix from "$lib/assets/logo animation.gif";

	import Section from "$lib/components/ui/Section/Section.svelte";
	import GoDown from "$lib/components/ui/GoDown/GoDown.svelte";
	import Button from "$lib/components/ui/Button/Button.svelte";
	import HomeEvents from "$lib/components/fragments/HomeEvents/HomeEvents.svelte";
	import Carousel from "$lib/components/fragments/Carousel/Carousel.svelte";
	import MobileCarousel from "$lib/components/fragments/mobileCarousel/MobileCarousel.svelte";
	import Page from "$lib/components/fragments/Page/Page.svelte";

	import logo from "$lib/assets/logo.png";
	import logoTransparent from "$lib/assets/building.png";
	const gotoRegister = () => {
		// open/goto register page.
	}
	const gotoLogin = () => {
		// open/goto login page.
	}
</script>

<Section>
	<div class="container">
		<div class="sect1">
			<!-- <div class="bird">
				<img src="{flyingPheonix}" alt="Flying Pheonix">
			</div> -->
			<div class="back">
				<img class="logo" src="{logoTransparent}" alt="apratim logo" />
			</div>
			<div class="fore">
				Apratim is here.
				<div class="cta">
					<Button variant="secondary" label="Login" onClick={gotoLogin} size="large" ></Button>
					<Button variant="primary" label="Register" onClick={gotoRegister} size="large" ></Button>
				</div>
			</div>
			<GoDown />
		</div>
		<div class="sponsors">
			<div class="container">
				<div class="titleSponsor">
					<img src="{titleSponsor}" alt="Bharat Bass Festival" />
				</div>
			</div>
			<div class="container">
				<div class="platinumSponsor"><img src="{plat1}" alt="Platinum 1" /></div>
				<div class="platinumSponsor"><img src="{plat2}" alt="Platinum 2" /></div>
				<div class="platinumSponsor"><img src="{plat3}" alt="Platinum 3" /></div>
				<div class="platinumSponsor"><img src="{plat4}" alt="Platinum 4" /></div>
				<div class="platinumSponsor"><img src="{plat5}" alt="Platinum 5" /></div>
			</div>
		</div>
	</div>
</Section>
<Section>
	<HomeEvents />
</Section>
<!-- <Section> -->
<!-- <div class="carousel">
		<Carousel />
	</div>
	<div class="mobileCarousel">
		<MobileCarousel />
	</div> -->
<!-- </Section> -->
