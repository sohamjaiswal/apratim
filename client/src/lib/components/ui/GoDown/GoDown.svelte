<style lang="scss">
    section {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        bottom: -5vh;
        left: -3.5vw;
        width: 20vw;
        height: 20vw;
        border-radius: 50%;
        cursor: pointer;
        &:hover .container {
            width: 40%;
            height: 40%;
            background-color: var(--primary);
        }
        &>.container {
            width: 100%;
            height: 100%;
            border-radius: inherit;
            border: 2px solid var(--primary);
            transition: all 0.8s ease;
            display: flex;
            justify-content: center;
            align-items: center;
            &>img {
                filter: invert(1);
            }
        }
    }
</style>

<script lang="ts">
    import down from '$lib/assets/down.svg';
</script>

<section>
    <div class="container">
        <img src="{down}" alt="Down">
    </div>
</section>