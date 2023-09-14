<style lang="scss">
	.TextInput {
		width: calc(100% - 16px);
		height: 48px;
		display: flex;
		border-radius: 8px;
		overflow: hidden;
		// padding: 0rem 0.75rem;
		padding: 0 10px;
		background: var(--input-bg);
		outline: var(--input-border) solid 2px;

		transition: all ease-in 0.25s;

		input {
			width: 100%;
			outline: none;
			border: none;
			background: var(--input-bg);
			transition: all ease-in 0.25s;
			&:focus {
				outline: none;
			}
		}

		&.errored {
			outline: var(--input-error) solid 2px !important;

			input {
				color: var(--input-error) !important;
			}
		}

		&:focus-within {
			outline: var(--input-focus) solid 2px;
		}

		&.disabled {
			outline: var(--input-disabled) solid 2px;
			opacity: 0.8;
			input {
				color: var(--input-disabled);
			}
		}
	}
</style>

<script lang="ts">
	export let validator: (value: string) => boolean;
	export let placeholder: string;
	export let value: string;
	export let isDisabled: boolean;
	export let type: "text" | "password" = "text";

	let isValid = true;

	const checkError = (val: string) => {
		let isValid = true;
		if (validator) {
			isValid = validator(val);
		}
		return isValid;
	};

	const inputObserver = (event: InputEvent) => {
		console.log(event);

		// ignore the error here, it exists, it's ts being dumb
		value = event.target?.value;
		isValid = checkError(value);
	};

	// required if loading saved data from prev session e.g form reload
	isValid = checkError(value);
</script>

<div class="TextInput" class:errored="{!isValid}" class:disabled="{isDisabled}">
	<!-- Can't bind here or use on change as, https://github.com/sveltejs/svelte/issues/3921 -->

	<input
		type="{type}"
		value="{value}"
		on:input="{inputObserver}"
		placeholder="{placeholder}"
		disabled="{isDisabled}"
	/>
</div>
