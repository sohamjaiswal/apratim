import type { StorybookConfig } from "@storybook/sveltekit";
const config: StorybookConfig = {
	// stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	stories: [
		"../src/**/*.mdx",
		"../src/**/*.stories.@(js|jsx|ts|tsx)",
		"../src/lib/components/**/**/*.stories.@(ts)"
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions"
	],
	framework: {
		name: "@storybook/sveltekit",
		options: {}
	},
	docs: {
		autodocs: "tag"
	}
};
export default config;
