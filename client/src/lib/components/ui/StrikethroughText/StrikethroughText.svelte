<style lang="scss">
	span {
		text-decoration: none;
		color: #000;
		font-family: var(--nav-font);
		font-size: 12vh;
		font-weight: 800;
		line-height: 0.9;
		width: fit-content;
		.char {
			display: inline;
			position: relative;
		}
		.up {
			z-index: 3;
		}
		.down {
			z-index: 0;
		}
		&:hover {
			position: relative;
			& > span {
				position: absolute;
				top: 50%;
				z-index: 2;
				transform: translateY(-25%);
				height: 15px;
				display: block;
				&.sp1 {
					background-color: var(--primary);
					animation: navBarAnim 0.7s ease forwards;
				}
				&.sp2 {
					background-color: var(--highlight);
					animation: navBarAnim 0.6s ease forwards;
				}
				&.sp3 {
					background-color: var(--alternate-color);
					animation: navBarAnim 0.575s ease forwards;
				}
				&.sp4 {
					background-color: var(--highlight-hover);
					animation: navBarAnim 0.5s ease forwards;
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

	@media screen and (max-width: 880px) {
		span {
			font-size: 11vh;
		}
	}
	@media screen and (max-width: 560px) {
		span {
			font-size: 8vh;
		}
	}
</style>

<script lang="ts">
	import { onMount } from "svelte";

	export let label: string;
</script>

<span>
	{#each Array(label.length) as _, i}
		{#if i % 2 === 0}
			<div class="char up">
				{label[i]}
			</div>
		{:else}
			<div class="char down">
				{label[i]}
			</div>
		{/if}
	{/each}
	<span class="sp4"></span>
	<span class="sp3"></span>
	<span class="sp2"></span>
	<span class="sp1"></span>
</span>
