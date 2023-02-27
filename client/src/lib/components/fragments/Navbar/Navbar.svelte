<style lang="scss">
	section {
		width: 100vw;
		height: fit-content;
		cursor: pointer;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 5vh 5vw;
		&>.logo {
			z-index: 1001;
			user-select: none;
			height: 120px;
			&>img {
				height: inherit;
			}
		}
		& > .hamburger {
			width: 90px;
			height: 90px;
			border-radius: 50%;
			background-color: var(--primary);
			display: flex;
			justify-content: center;
			align-items: center;
			z-index: 1001;
			&:hover {
				transform: scale(0.96);
				transition: all 0.2s ease;
			}
			&:active {
				transform: scale(0.8);
				transition: transform 0.2s ease;
			}
			& > div {
				display: flex;
				flex-direction: column;
				gap: 5px;
				width: 40px;
				& > span {
					display: block;
					background-color: #fff;
					height: 5px;
					border-radius: 18px;
					&:nth-child(1) {
						width: 25px;
					}
					&:nth-child(2) {
						width: 40px;
					}
					&:nth-child(3) {
						align-self: flex-end;
						width: 25px;
					}
				}
			}
		}
		& > .overlay {
			background-color: #fff;
			width: 100vw;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 1000;
			animation: overlayHeight 0.3s ease forwards;
			cursor: initial;
			&>.contactInfo {
				position: absolute;
				left: 3vw;
				bottom: 2.5vh;
				color: #000;
				font-family: var(--nav-secondary-font);
				font-weight: 300;
				font-size: 2.7rem;
				width: 30vw;
				display: flex;
				flex-direction: column;
				gap: 2vh;
				user-select: none;
				&>.heading {
					margin-bottom: -2vh;
					opacity: 0;
					animation: fadeInText 0.4s ease 0.3s forwards;
					font-weight: 500;
					font-size: 1.2rem;
					color: var(--primary);
				}
				&>div {
					opacity: 0;
					margin-bottom: -2vh;
					animation: fadeInText 0.4s ease 0.34s forwards;
					&>a {
						display: block;
						text-decoration: none;
						color: #000;
					}
				}
				&>a {
					margin-bottom: -2vh;
					opacity: 0;
					animation: fadeInText 0.4s ease 0.4s forwards;
					text-decoration: none;
					color: #000;
				}
			}
			& > nav {
				position: absolute;
				right: 5vw;
				bottom: 1vh;
				cursor: initial;
				&.links {
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					user-select: none;
					width: 55vw;
					height: 80vh;
					& > a {
						text-decoration: none;
						cursor: pointer;
						margin-left: 50vw;
						width: fit-content;
						overflow-inline: hidden;
						&:nth-child(1) {
							animation: navText 0.6s ease 0.2s forwards;
						}
						&:nth-child(2) {
							animation: navText 0.6s ease 0.22s forwards;
						}
						&:nth-child(3) {
							animation: navText 0.6s ease 0.24s forwards;
						}
						&:nth-child(4) {
							animation: navText 0.6s ease 0.26s forwards;
						}
						&:nth-child(5) {
							animation: navText 0.6s ease 0.28s forwards;
						}
						&:nth-child(6) {
							animation: navText 0.6s ease 0.3s forwards;
						}
						&:nth-child(7) {
							animation: navText 0.6s ease 0.32s forwards;
						}
					}
				}
			}
		}
	}

	.close {
		position: relative;
		box-sizing: border-box;
		background-color: transparent !important;
		border: 10px solid var(--primary) !important;
		&::before {
			content: '';
			position: absolute;
			left: -10px;
			top: -10px;
			width: 90px;
			height: 90px;
			border-radius: 50%;
			background-color: white;
			animation: closeAnim 0.3s ease 0.1s forwards;
		}
		&:hover {
			transform: scale(0.96);
			transition: all 0.2s ease;
		}
		&>div {
			&>span {
				height: 10px !important;
				&:nth-child(1) {
					position: absolute;
					top: 100%;
					left: 100%;
					width: 40px !important;
					background-color: var(--primary);
					transform: translate(-50%, -50%) rotateZ(45deg);
					animation: moveUpwardsRight 0.4s ease 0.2s forwards;
				}
				&:nth-child(2) {
					display: none;
				}
				&:nth-child(3) {
					position: absolute;
					top: 100%;
					left: 0;
					width: 40px !important;
					background-color: var(--primary);
					transform: translate(-50%, -50%) rotateZ(-45deg);
					animation: moveUpwardsLeft 0.4s ease 0.2s forwards;
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

	@keyframes navText {
		from {
			margin-left: 50vw;
		}
		90% {
			margin-left: -5vw;
		}
		to {
			margin-left: 0;
		}
	}

	@keyframes navBarAnim {
		from {
			width: 0;
		}
		to {
			width: 100%;
		}
	}

	@keyframes overlayHeight {
		from {
			height: 0;
			border-bottom-left-radius: 25%;
			border-bottom-right-radius: 25%;
		}
		to {
			height: 100vh;
			border-radius: 0%;
		}
	}

	@keyframes closeAnim {
		from {
			height: 90px;
		}
		to {
			height: 0px;
		}
	}

	@keyframes moveUpwardsLeft {
		from {
			top: 100%;
			left: 0;
		}
		to {
			top: 50%;
			left: 50%;
		}
	}

	@keyframes moveUpwardsRight {
		from {
			top: 100%;
			left: 100%;
		}
		to {
			top: 50%;
			left: 50%;
		}
	}
	@media screen and (max-height: 560px) {
		.contactInfo {
			display: none !important;
		}
	}
	@media screen and (max-width: 1024px) {
		.contactInfo {
			display: none !important;
		}
		.links {
			width: 70vw !important;
		}
	}
	@media screen and (max-width: 912px) {
		.links {
			width: 85vw !important;
		}
	}	
	@media screen and (max-width: 345px) {
		.hamburger {
			width: 60px !important;
			height: 60px !important;
		}
		.close {
			border-width: 5px !important;
			&>div>span {
				height: 5px !important;
			}
		}
		.logo {
			height: 80px !important;
		}
	}
</style>

<script lang="ts">
	import StrikethroughText from "../../ui/StrikethroughText/StrikethroughText.svelte";
	import logo from "$lib/assets/logo.png";
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	let overlay: HTMLElement;
	let addClass = false;
	let links: HTMLElement;
	onMount(() => {
		Array.from(links.children).forEach((link: Element) => {
			link.addEventListener('click', () => {
				let goto: string | null = link.getAttribute('href');
				overlay.style.display = 'none';
				addClass = false;
				if (goto === $page.url.pathname) {
					overlay.style.display = 'none';
					addClass = false;
				}
			})
		})
	})
	const toggleNavBar = () => {
		if (overlay.style.display === 'none') {
			overlay.style.display = 'block';
			addClass = true;
		}
		else {
			overlay.style.display = 'none';
			addClass = false;
		}
	}
</script>

<section>
	<div class="logo">
		<img src={logo} alt="Apratim Logo">
	</div>
	<div class="hamburger {addClass ? 'close' : ''}" on:keypress={toggleNavBar} on:click={toggleNavBar}>
		<div>
			<span class="transition1"></span>
			<span class="transition2"></span>
			<span class="transition3"></span>
		</div>
	</div>
	<div class="overlay" style="display: none;" bind:this={overlay}>
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
				Chandigarh College of Engineering and Technology
				<br>
				Sector 26
				<br>
				Chandigarh
			</a>
		</div>
		<nav class="links" bind:this={links}>
			<a href="/">
				<StrikethroughText label="home" />
			</a>
			<a href="/events">
				<StrikethroughText label="events" />
			</a>
			<a href="/schedule">
				<StrikethroughText label="schedule" />
			</a>
			<a href="/clubs">
				<StrikethroughText label="clubs" />
			</a>
			<a href="/credits">
				<StrikethroughText label="organizers" />
			</a>
			<a href="/faq">
				<StrikethroughText label="faq" />
			</a>
			<a href="/contact">
				<StrikethroughText label="contact us" />
			</a>
		</nav>
	</div>
	<!-- 
		Home
		Events
		Clubs
		Sponsors
		Organizing team
		FAQ
		contact us
		schedule

		Signup button
		Login button
		isLoggedin == false | true
		if logged in, signup is removed and login changed to logout
	 -->
</section>
