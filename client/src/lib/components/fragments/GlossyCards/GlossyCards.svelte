<script>

    export let cards = Array(6)

    const handleContainerMouseMove = (/** @type {{ clientX: number; clientY: number; }} */ e) => {
        for(const card of document.getElementsByClassName('card')) {
            const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top

        card.style.setProperty("--mouse-x", `${x}px`)
        card.style.setProperty("--mouse-y", `${y}px`)
        }
    }

    // const handleCardMouseMove = (e: any) => {
    //     const {currentTarget: target} = e
    //     const rect = target.getBoundingClientRect(),
    //         x = e.clientX - rect.left,
    //         y = e.clientY - rect.top

    //     target.style.setProperty("--mouse-x", `${x}px`)
    //     target.style.setProperty("--mouse-y", `${y}px`)
    // }

</script>

<div class="cards" on:mousemove="{handleContainerMouseMove}">
    {#each cards as cardContent}
    <div class="card">
        <div class="card-border" />
        <div class="card-content">

        </div>
    </div>
    {/each}
</div>

<style lang="scss">

    .cards {

        display: flex;

        flex-wrap: wrap;

        width: 100%;
        gap: 8px;

        justify-content: center;

        .card {
            background-color: rgba(255, 255, 255, 0.1);
            height: 260px;
            width: 300px;
            border-radius: 8px;
            cursor: pointer;
            position: relative;

            &::before, .card-border {
                border-radius: inherit;
                content: "";
                height: 100%;
                position: absolute;
                left: 0px;
                top: 0px;
                opacity: 0;
                transition: opacity 500ms;
                width: 100%;
                z-index: 2;
            }

            &::before {
                background: radial-gradient(
                    800px circle at var(--mouse-x) var(--mouse-y),
                    rgba(255,255,255,0.06),
                    transparent 40%
                );
                z-index: 3;
            }

            .card-border {
                background: radial-gradient(
                    400px circle at var(--mouse-x) var(--mouse-y),
                    rgba(255,255,255,0.3),
                    transparent 40%
                );
                z-index: 1;
            }

            &:hover::before{
                opacity: 1;
            }

            > .card-content {
                height: calc(100% - 2px);
                width: calc(100% - 2px);
                background-color: var(--card-bg);
                border-radius: inherit;
                margin: 1px;
                position: relative;
                z-index: 2;
            }
        }
        &:hover > .card > .card-border {
            opacity: 1;
        }
    }

</style>