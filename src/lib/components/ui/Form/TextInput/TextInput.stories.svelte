<script lang="ts">
	import TextInput from "./TextInput.svelte";
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

	const args = {
		placeholder: "Lorem Ipsum",
		// fetch from local store or smthing?
		value: "",
		isDisabled: false,
		validator: (stuff: string) => (stuff === "lol" ? false : true),
		type: "text"
	};
</script>

<Meta title="TextInput" component="{TextInput}" />

<Template let:args>
	<TextInput {...args} />
</Template>

<Story name="TextInput" args="{args}" />
