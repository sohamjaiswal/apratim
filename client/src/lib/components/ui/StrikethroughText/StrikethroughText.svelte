<style lang="scss">
	span {
		text-decoration: none;
		color: #000;
		font-family: var(--nav-font);
		font-size: 8.5rem;
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
				background-color: var(--primary);
				animation: navBarAnim 0.7s ease forwards;
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

	@media screen and (max-height: 950px) {
		span {
			font-size: 7rem;
		}	
	}
	@media screen and (max-height: 790px) {
		span {
			font-size: 6rem;
		}
	}
	@media screen and (max-height: 680px) {
		span {
			font-size: 5rem;
		}
	}
	@media screen and (max-height: 575px) {
		span {
			font-size: 4rem;
		}
	}
	@media screen and (max-height: 466px) {
		span {
			font-size: 3rem;
		}
	}

	@media screen and (max-width: 768px) {
		span {
			font-size: 6rem !important;
		}
	}
	@media screen and (max-width: 605px) {
		span {
			font-size: 5rem !important;
		}
	}
	@media screen and (max-width: 430px) {
		span {
			font-size: 4rem !important;
		}
	}
	@media screen and (max-width: 345px) {
		span {
			font-size: 3rem !important;
		}
	}
	@media screen and (max-width: 820px) and (max-height: 1180px) {
		span {
			font-size: 6rem !important;
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
	<span></span>
</span>
