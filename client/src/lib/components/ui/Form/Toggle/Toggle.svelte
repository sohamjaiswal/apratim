<style lang="scss">
	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #5b5b5b;
		transition: 0.25s;
		border-radius: 13px;

		&:before {
			position: absolute;
			content: "";
			height: 22px;
			width: 22px;
			left: 7.5%;
			top: 5.95%;
			background-color: #ffffff;
			-webkit-transition: 0.4s;
			transition: 0.4s;
			border-radius: 50%;
		}
	}

	.switch {
		position: relative;
		display: inline-block;
		width: 40px;
		height: 25px;

		input {
			opacity: 0;
			width: 0;
			height: 0;

			&:checked + .slider {
				background-color: rgb(177, 112, 223);
				&:before {
					transform: translateX(60%);
				}
			}
		}
	}
</style>

<script lang="ts">
	export let value: boolean;
</script>

<label class="switch">
	<input type="checkbox" checked="{value}" />
	<span class="slider"></span>
</label>
