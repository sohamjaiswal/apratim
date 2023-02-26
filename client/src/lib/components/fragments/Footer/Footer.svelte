<style lang="scss">
	footer {
		height: 65vh;
		width: 100vw;
		background-color: var(--primary);
		z-index: 1;
		color: #fff;
		&>.content {
			width: inherit;
			height: 50vh;
			padding: 10vh 12vw;
			padding-top: 0;
			display: flex;
			justify-content: space-between;
			position: relative;
			&::before {
				content: '';
				position: absolute;
				top: -20vh;
				left: 0;
				height: 20vh;
				width: 100vw;
				background-color: var(--primary);
				border-top-left-radius: 50%;
				border-top-right-radius: 50%;
				z-index: -1;
			}
			&>.maps {
				user-select: none;
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
						display: inline-block;
  						position: relative;
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
</style>

<script lang="ts">
</script>

<footer>
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
				Chandigarh College of Engineering and Technology
				<br>
				Sector 26
				<br>
				Chandigarh
			</a>
		</div>
	</div>
</footer>
