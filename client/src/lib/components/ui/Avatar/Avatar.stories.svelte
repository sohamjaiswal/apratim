<script lang="ts">
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import Avatar from "./Avatar.svelte";
    import type {IAvatar} from "./Avatar.types";
	const args: IAvatar = {
		image: 'https://i.pinimg.com/originals/1b/ce/fe/1bcefe9201469c9fbbd932e4c5ab971d.gif',
        size: '10rem'
	};
</script>

<Meta title="Avatar" component={Avatar} />

<Template let:args>
	<Avatar {...args} />
</Template>

<Story name="Primary" {args} />