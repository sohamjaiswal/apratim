<style lang="scss">
	.footer {
		position: relative;
		height: 85vh;
		width: 100vw;
		background-color: var(--primary);
		z-index: 1;
		color: #fff;
		display: flex;
		flex-direction: column;
		&>span {
			position: absolute;
			left: -40vw;
			height: 30vh;
			width: 180vw;
			background-color: var(--primary);
			z-index: -1;
		}
		&>.content {
			width: inherit;
			height: 50vh;
			padding: 10vh 12vw;
			padding-top: 0;
			display: flex;
			justify-content: space-between;
			position: relative;
			&>.maps {
				user-select: none;
				display: flex;
				justify-content: center;
				&>iframe {
					width: 35vw;
					height: 40vh;
					border-radius: 24px;
				}
			}
			&>.contactInfo {
				font-family: var(--nav-secondary-font);
				font-weight: 300;
				font-size: 2.7rem;
				width: 30vw;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				user-select: none;
				font-weight: 400;
				&>.heading {
					margin-bottom: -2vh;
					opacity: 0;
					animation: fadeInText 0.4s ease 0.3s forwards;
					font-weight: 500;
					font-size: 1.2rem;
					color: #fff;
				}
				&>div {
					opacity: 0;
					margin-bottom: -2vh;
					animation: fadeInText 0.4s ease 0.34s forwards;
					&>a {
						text-decoration: none;
						color: #000;
						display: block;
  						position: relative;
						width: fit-content;
						&::after {
							content: '';
  							position: absolute;
  							width: 100%;
  							transform: scaleX(0);
  							height: 4px;
  							bottom: 0;
  							left: 0;
  							background-color: #fff;
  							transform-origin: bottom right;
  							transition: transform 0.25s ease-out;
						}
						&:hover {
							&::after {
								transform: scaleX(1);
  								transform-origin: bottom left;
							}
						}
					}
				}
				&>a {
					margin-bottom: -2vh;
					opacity: 0;
					animation: fadeInText 0.4s ease 0.4s forwards;
					text-decoration: none;
					color: #000;
					&:hover {
						transform: scale(0.99);
						transition: all 0.2s ease;
					}
					&>span {
						display: block;
						&.seprators {
							display: none;
						}
					}
				}
			}
		}
		.logos {
			padding: 0 0 5vh 0;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		&>.underFooter {
			margin: 0 10vw;
			width: 80vw;
			height: 12vh;
			padding: 3vh 1.5vw;
			padding-bottom: 0;
			border-top: 1px solid #000;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 1.3rem;
			text-transform: uppercase;
			&>.links {
				display: flex;
				gap: 2vw;
				flex-wrap: wrap;
				height: fit-content;
				&>a {
					color: #000;
					text-decoration: none;
					transition: all 0.2s ease;
					&:hover {
						color: #fff;
					}
				}
			}
			&>.socials {
				display: flex;
				gap: 2vw;
				align-items: center;
				height: fit-content;
				&>.heading {
					color: #000;
					height: fit-content;
				}
				&>.logos {
					display: flex;
					gap: 1vw;
					&>a {
						display: flex;
						align-items: center;
						text-decoration: none;
						color: #000;
						padding: 1vh;
						border-radius: 50%;
						transition: all 0.2s ease;
						&:hover {
							background-color: rgb(219, 219, 0);
						}
						&>img {
							height: 3vh;
						}
					}
				}
			}
		}
	}
	@keyframes fadeInText {
		from {
			opacity: 0;
			margin-bottom: -2vh;
		}
		to {
			opacity: 1;
			margin-bottom: 0;
		}
	}
	@media screen and (max-width: 1380px) {
		.links {
			gap: 10px !important;
		}
	}
	@media screen and (max-width: 960px) {
		.underFooter {
			flex-direction: column;
		}
	}
	@media screen and (max-width: 1300px) {
		.contactInfo {
			font-size: 2.2rem !important;
		}
	}
	@media screen and (max-width: 1000px) {
		.footer {
			height: 60vh !important;
		}
		.content {
			height: 45vh !important;
		}
		.contactInfo {
			font-size: 1.8rem !important;
		}
	}
	@media screen and (max-width: 650px) {
		.footer {
			height: max-content !important;
		}
		.offlineAddress {
			&>span {
				display: inline !important;
				&.seprators {
					display: inline !important;
				}
			}
		}
		.content {
			height: fit-content !important;
			flex-direction: column;
			align-items: center;
			width: 80vw;
			padding: 0 !important;
			padding-bottom: 2vh !important;
			gap: 2vh;
		}
		.maps {
			width: 100% !important;
			&>iframe {
				width: 80% !important;
			}
		}
		.contactInfo {
			width: 80% !important;
			justify-content: center;
		}
		.underFooter {
			height: fit-content !important;
			padding-bottom: 2vh !important;
		}
	}
	@media screen and (max-width: 500px) {
		.socials {
			flex-direction: column;
		}
	}
</style>

<script lang="ts">
	import InstagramIcon from '$lib/assets/socials/instagram.svg';
	import LinkedInIcon from '$lib/assets/socials/linkedin.svg';
	import YoutubeIcon from '$lib/assets/socials/youtube.svg';
	import EkBharat from '$lib/assets/ek-bharat-logo.png';
	import { onMount } from 'svelte';

	let footer: HTMLElement;
	let fbr: HTMLElement;

	onMount(() => {
		const percentageSeen = (): number => {
			// Get the relevant measurements and positions
			if (!footer) return 0;
			const viewportHeight = window.innerHeight;
			const scrollTop = window.scrollY;
			const elementOffsetTop = footer.offsetTop;
			const elementHeight = footer.offsetHeight;
			// Calculate percentage of the element that's been seen
			const distance = scrollTop + viewportHeight - elementOffsetTop;
			const percentage = Math.round(
			  distance / ((viewportHeight + elementHeight) / 100)
			);
			// Restrict the range to between 0 and 100
			return Math.min(100, Math.max(0, percentage));
		};	
		window.addEventListener('scroll', () => {
			const y = percentageSeen();
			fbr.style.borderRadius = `${(y<23) ? 46 : y*2}% ${(y<23) ? 46 : y*2}% 0 0`;
			fbr.style.top = `-${(y>20) ? 20 : y}vh`;
		})
	})
</script>

<div class="footer" bind:this={footer} data-previous-scroll-pos=0 >
	<span bind:this={fbr}></span>
	<div class="content">
		<div class="maps">
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.687519256584!2d76.80650046560172!3d30.727183942950116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed212e27c319%3A0x491b3277baba3581!2sChandigarh%20College%20Of%20Engineering%20and%20Technology%20Degree%20Wing!5e0!3m2!1sen!2sin!4v1677411314991!5m2!1sen!2sin" style="border:0;" title="Chandigarh College Of Engineering and Technology" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
		</div>
		<div class="contactInfo">
			<div class="heading">
				GET IN TOUCH
			</div>
			<div class="digitalAddress">
				<a href="mailto:apratim@ccet.ac.in" class="email">
					apratim@ccet.ac.in
				</a>
				<a href="tel: +917970875920" class="mobile">
					(+91) 79708-75920
				</a>
			</div>
			<a href="https://goo.gl/maps/aJZ2mFZA1Q5yHfWo7" class="offlineAddress">
				<span>
					Chandigarh College of Engineering and Technology
				</span>
				<span class="seprators">
					,
				</span>
				<span>
					Sector 26
				</span>
				<span class="seprators">
					,
				</span>
				<span>
					Chandigarh
				</span>
			</a>
		</div>
	</div>
	<div class="logos">
		<img src={EkBharat} alt="Ek Bharat Shreshtha Bharat" />
	</div>
	<div class="underFooter">
		<div class="links">
			<a href="/privacy">Privacy Policy</a>
			<a href="/tnc">Terms and Conditions</a>
			<a href="/sponsors">Our sponsors</a>
		</div>
		<div class="socials">
			<div class="heading">
				See what we're up to
			</div>
			<div class="logos">
				<a href="https://www.instagram.com/ccetapratim/">
					<img src={InstagramIcon} alt="Instagram">
				</a>
				<a href="https://www.linkedin.com/school/chandigarh-college-of-engineering-technology-degree-wing-panjab-university/?originalSubdomain=in">
					<img src={LinkedInIcon} alt="LinkedIn">
				</a>
				<a href="https://www.youtube.com/@ccetapratim3386">
					<img src={YoutubeIcon} alt="Youtube">
				</a>
			</div>
		</div>
	</div>
</div>
