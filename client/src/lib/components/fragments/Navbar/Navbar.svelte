<style lang="scss">
	section {
		width: 100%;
		min-height: 100vh;
		max-height: fit-content;
		cursor: pointer;
		& > .hamburger {
			width: 90px;
			height: 90px;
			border-radius: 50%;
			background-color: var(--primary);
			display: flex;
			justify-content: center;
			align-items: center;
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
			height: 100vh;
			width: 100vw;
			position: absolute;
			top: 0;
			left: 0;
			& > nav {
				position: absolute;
				float: right;
				right: 5vw;
				bottom: 4vh;
				&.links {
					display: flex;
					flex-direction: column;
					width: inherit;
					align-items: flex-end;
					& > a {
						text-decoration: none;
						color: #000;
						font-family: var(--nav-font);
						font-size: 5rem;
						font-weight: 800;
						width: fit-content;
						&:hover {
							position: relative;
							& > span {
								position: absolute;
								top: 50%;
								z-index: 2;
								transform: translateY(-50%);
								height: 20px;
								display: block;
								background-color: var(--primary);
								animation: navBarAnim 0.7s ease forwards;
							}
						}
					}
				}
			}
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
</style>

<script lang="ts">
	let links;
</script>

<section>
	<div class="hamburger">
		<div>
			<span></span>
			<span></span>
			<span></span>
		</div>
	</div>
	<div class="overlay">
		<nav class="links" bind:this="{links}">
			<a href="/">
				Home
				<span></span>
			</a>
			<a href="/events">
				Events
				<span></span>
			</a>
			<a href="/schedule">
				Schedule
				<span></span>
			</a>
			<a href="/clubs">
				Clubs
				<span></span>
			</a>
			<a href="/organizingTeam">
				Organizing Team
				<span></span>
			</a>
			<a href="/faq">
				FAQ
				<span></span>
			</a>
			<a href="/contact">
				Contact Us
				<span></span>
			</a>
		</nav>
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
	</div>
</section>
