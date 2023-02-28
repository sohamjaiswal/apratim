<script type="ts">
    import downArrow from '$lib/assets/angle-down-solid.svg';

    let acc: HTMLElement;

    const expand = () => {
        acc.classList.toggle("activeAccordian");
        const panel = acc.nextElementSibling as HTMLElement;
        if (!panel) return;
        if (panel.style.maxHeight !== '0px') {
            panel.style.maxHeight = '0px';
        } else {
            panel.style.maxHeight = `${panel.scrollHeight}px`;
        }
    }

    export let title: string;
    export let desc: string;
</script>

<div class="container">
    <div class="accordian" bind:this={acc} on:keypress={expand} on:click={expand}>
        <div class="title">
            {title}
        </div>
        <div class="arrow">
            <img src={downArrow} alt="Expand">
        </div>
    </div>
    <div class="panel" style="max-height: 0px;">
        <p>
            {desc}
        </p>
    </div>
</div>

<style lang="scss">
    :global(.activeAccordian) {
        background-color: rgba(255, 255, 255, 0.5) !important;
    }
    .container {
        display: block;
        width: 100%;
        &>.accordian {
            background-color: rgba(255, 255, 255, 0.3);
            backdrop-filter: blur(100px);
            padding: 2vh 2vw;
            font-weight: 500;
            transition: 0.4s;
            display: flex;
            border-radius: 18px;
            justify-content: space-between;
            align-items: center;
            height: fit-content;
            user-select: none;
            &:hover {
                background-color: rgba(255, 255, 255, 0.5);
            }
            &>.arrow {
                width: 20px;
                height: 20px;
                &>img {
                    width: 20px;
                    height: 20px;
                    object-fit: cover;
                    object-position: center;
                    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(228deg) brightness(108%) contrast(101%);
                }
            }
        }
        &>.panel {
            background-color: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(100px);
            border-radius: 18px;
            max-height: 0;
            padding: 0 2vw;
            overflow: hidden;
            transition: max-height 0.2s ease-out;
        }
    }
</style>