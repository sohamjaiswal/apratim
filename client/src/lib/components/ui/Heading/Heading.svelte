<style lang="scss">
    section {
        width: inherit;
        height: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 6vh 0;
        &>svg {
            &>text {
                font-size: 6rem;
                @media screen and (max-width: 760px) {
                    font-size: 4rem !important;
                }
                @media screen and (max-width: 500px) {
                    font-size: 2rem !important;
                }
            }
        }
    }
    .text-line text {
        stroke-dasharray: 500;
        stroke-dashoffset: 500;
        animation: dash 5s linear 1s forwards, filling 4s ease-in 1s forwards;
    }
    text {
        font-family: var(--header-font);
    }
    @keyframes dash {
        to {
            stroke-dashoffset: 0;
        }
    }

    @keyframes filling {
        from{
            fill: var(--heading);
            fill-opacity: 0;
        }
        to {
            fill: var(--heading);
            fill-opacity: 1;
        }
    }
</style>

<script type="ts">
	import { onMount } from "svelte";


    export let title: string;
    let svgElem: SVGGraphicsElement;
    onMount(() => {
        let bbox = svgElem.getBBox();
        svgElem.setAttribute("width", `${bbox.x + bbox.width + bbox.x}`);
        svgElem.setAttribute("height", `${bbox.y + bbox.height + bbox.y}`);
    });
</script>

<section>
    <svg stroke="#fff" stroke-width="2" bind:this={svgElem} class="text-line">
        <text x="50" y="90" fill="none">{title}</text>
    </svg>
</section>