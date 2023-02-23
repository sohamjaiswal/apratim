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
		}
		.up {
			z-index: 1;
		}
		.down {
			z-index: -1;
		}
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

	const characters: string[] = [];

	onMount(() => {
		for (var i = 0; i < label.length; i++) {
			characters.push(label[i]);
		}
		console.log(characters);
	});
</script>

<span>
	<!-- {#each characters as character, i}
    
    {#if i % 2 == 0}
        <div class="char up">
            {character}
        </div>
    {:else}
        <div class="char down">
            {character}
        </div>
    {/if}

    {/each} -->
	{label}
	<span></span>
</span>
