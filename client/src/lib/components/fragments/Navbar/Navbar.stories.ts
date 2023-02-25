// <script>
// 	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
// 	import Navbar from "./Navbar.svelte";
// </script>

// <Meta title="Navbar" component="{Navbar}" />

// <Template>
// 	<Navbar />
// </Template>

// <Story name="Section" />

import Navbar from "./Navbar.svelte";

export default {
	component: Navbar,
	title: "fragments/navbar"
};

export const Primary = {
	args: {}
};
