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
						cursor: pointer;
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
	import StrikethroughText from "../../ui/StrikethroughText/StrikethroughText.svelte";

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
				<StrikethroughText label="Home" />
			</a>
			<a href="/events">
				<StrikethroughText label="Events" />
			</a>
			<a href="/schedule">
				<StrikethroughText label="Schedule" />
			</a>
			<a href="/clubs">
				<StrikethroughText label="Clubs" />
			</a>
			<a href="/organizingTeams">
				<StrikethroughText label="Organizing Teams" />
			</a>
			<a href="/faq">
				<StrikethroughText label="FAQ" />
			</a>
			<a href="/contact">
				<StrikethroughText label="Contact Us" />
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
