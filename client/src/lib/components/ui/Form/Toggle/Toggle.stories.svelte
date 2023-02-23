<script lang="ts">
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import Toggle from "./Toggle.svelte";

	const args = {
		value: true
	};
</script>

<Meta title="Toggle" component="{Toggle}" />

<Template let:args>
	<Toggle {...args} />
</Template>

<Story name="Toggle" args="{args}" />
