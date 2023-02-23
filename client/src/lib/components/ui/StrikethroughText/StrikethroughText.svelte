<style lang="scss">
	span {
		text-decoration: none;
		color: #000;
		font-family: var(--nav-font);
		font-size: 5rem;
		font-weight: 800;
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
				transform: translateY(-50%);
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
