<script lang="ts">
	import type { ICarouselProps } from "$lib/types/carousel.types";


    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface $$Props extends ICarouselProps{}

    export let images: $$Props['images']
    
    const updateCarousel = () => {
        const carouselImages = document.getElementsByTagName('img')
        Array.from(carouselImages).forEach((image, i) => {
            console.log(`image ${i}`, image.getBoundingClientRect())
        })
    }
</script>

<div class="carousel-container" on:scroll="{updateCarousel}">

    {#each images as image, index}
    
    <img src={image} alt="ccet" />
    
    {/each}

</div>

<style lang="scss">

    .carousel-container {
        position: absolute;
        left: -32px;
        display: flex;
        gap: 32px;
        height: 65vh;
        width: 110vw;
        // background-color: red;
        transform: rotate3d(1, 1, 1, 5deg) translate3d(0, 0, 0);
        overflow-x: scroll;
        scrollbar-width: none;  /* Firefox */
        -ms-overflow-style: none;  /* IE and Edge */
        &::-webkit-scrollbar {
            display: none;
        }
        scroll-behavior: smooth;
        scroll-snap-type: mandatory;

        img {
            image-rendering: optimizeSpeed;
            object-fit: cover;
            height: 100%;
            width: 50%;
            border-radius: 16px;
        }
        scroll-snap-align: center;
    }

</style>
