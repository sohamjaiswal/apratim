<script lang="ts">
	import { CupertinoPane } from "cupertino-pane";
	import { onMount } from "svelte";

	export let type: "normal" | "success" | "failure" = "normal";

	// modal will render when component is loaded on the page
	onMount(async () => {
		var myPane = new CupertinoPane(
			".cupertino-pane", // Pane container selector
			{
				parentElement: "body", // Parent container
				breaks: {
					middle: { enabled: true, height: 300, bounce: true },
					bottom: { enabled: true, height: 80 }
				},
				events: {
					onDrag: () => console.log("Drag event")
				}
			}
		);
		await myPane.present({ animate: true });
	});
</script>

<div class="{`cupertino-pane ${type}`}">
	<slot />
</div>
