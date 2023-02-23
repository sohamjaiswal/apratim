<style lang="scss">
	.first {
		background: red;
	}

	.second {
		background: blue;
	}

	.third {
		background: green;
	}
</style>

<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import Section from "./Section.svelte";
</script>

<Meta title="Section" component="{Section}" />

<Template>
	<div class="first">
		<Section />
	</div>
	<div class="second">
		<Section />
	</div>
	<div class="third">
		<Section />
	</div>
</Template>

<Story name="Section" />
