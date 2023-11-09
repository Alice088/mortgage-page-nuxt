<script setup>

</script>

<template>
	<button class="theButton">
		<slot/>
	</button>
</template>

<style scoped lang="scss">
	.theButton {
		&:hover, &:active {
			background-color: $n4-activated-green-color;
			color: $white;
		}

		width: fit-content;
		padding: 20px 25px 20px 25px;
		border-radius: 100px;

		font-size: 16px;
		font-style: normal;
		line-height: 100%;

		background-color: $n2-green-color;
		color: $white;
		cursor: pointer;
		transition: 200ms ease-in-out;
		transition-property: box-shadow, background-color, color;
		border: none;

		&-outline {
			background-color: transparent;
			color: $n2-green-color;
			border: 1px $n2-green-color solid;
		}

		&-weakBorder {
			border-radius: 0;
		}

		&-middleBorder {
			border-radius: 10px;
		}
	}

</style>