<style lang="scss">
	.lmao {
		height: 350px;
	}
</style>

<script lang="ts">
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import DrawerModal from "./DrawerModal.svelte";

	const args = {
		type: "success"
	};
</script>

<Meta title="DrawerModal" component="{DrawerModal}" />

<Template let:args>
	<DrawerModal {...args}>
		<div class="lmao"></div>
	</DrawerModal>
</Template>

<Story name="DrawerModal" args="{args}" />
