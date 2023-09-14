<script lang="ts">
    import type { IButton } from '$lib/types/Button.types';
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface $$Props extends IButton{};
    export let variant: $$Props['variant'];
    export let label: $$Props['label'];
    export let onClick: $$Props['onClick'];
    export let size: $$Props['size'];
</script>

<button
	class={`button ${variant} ${size}`}
	on:click="{onClick}">
    {label}
</button>

<style lang="scss">
    .button {
        padding: 15px 30px;
        border-radius: 50px;
        font-size: 1.2rem;
        background-color: transparent;
        color: #fff;
        border: 0;
        border: 5px solid var(--primary);
        cursor: pointer;
        backdrop-filter: blur(50px);
        font-weight: 800;
        transition: all 0.2s ease;
        &:hover {
            color: var(--primary);
            box-shadow: 0 0 5px var(--primary), 0 0 20px var(--primary), 0 0 40px var(--primary);
        }
        &.primary {
            background-color: var(--primary);
            &:hover {
                color: #fff;
            }
        }
        &.medium {
            font-size: 1.1rem;
            padding: 13px 25px;
        }
        &.small {
            font-size: 1rem;
            padding: 10px 20px;
        }
    }
</style>