<script lang="ts">
	import type { IAvatar } from './Avatar.types';
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface $$Props extends IAvatar{};
    export let image: $$Props['image'];
    export let size: $$Props['size'];
</script>

<div class="avatar" style={`background-image: url(${image}); height: ${size}; width: ${size}`}>

</div>

<style lang="scss">
    .avatar {
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border-radius: 100%;
    }
</style>