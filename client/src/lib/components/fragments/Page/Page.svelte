<script lang="ts">

    

</script>


<main>
    <slot />
</main>

<style lang="scss">

    main {
        width: 100%;
		height: fit-content;
		display: flex;
		flex-direction: column;
		scroll-snap-type: y mandatory;
		color: #fff;
    }
    
</style>