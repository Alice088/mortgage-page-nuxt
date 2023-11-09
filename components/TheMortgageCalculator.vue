<script setup lang="ts">

</script>

<template>
	<div class="theMortgageCalculator">
		<svg width="420" height="520" viewBox="0 0 420 520" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="0.5" y="1.3125" width="419" height="518" rx="39.5" stroke="url(#paint0_linear_1_710)"/>
			<defs>
				<linearGradient id="paint0_linear_1_710" x1="210" y1="0.812476" x2="553.995" y2="95.5178" gradientUnits="userSpaceOnUse">
					<stop offset="0" stop-color="#083E4C"/>
					<stop offset="1" stop-color="#083E4C" stop-opacity="0"/>
				</linearGradient>
			</defs>
		</svg>

		<div class="heMortgageCalculator__body">
			<p class="theMortgageCalculator__header  specialText">
				Ипотечный калькулятор
			</p>

			<!--ALERT many crutches-->
			<!--это мой первый опыт делать такие сложные инпуты-->
			<div class="theMortgageCalculator__input theMortgageCalculator__input-doubleInput">
				<label for="price"> Стоимость, млн ₽ </label>

				<div class="theMortgageCalculator__doubleInputContainer">
					<input type="text" placeholder="5,6">
					<input type="text" placeholder="5,6">

					<div class="theMortgageCalculator__doubleRangeContainer">
						<input type="range">
						<input type="range">
					</div>
				</div>
			</div>
			<!--ALERT many crutches-->

			<div class="theMortgageCalculator__input">
				<label for="price"> Первоначальный взнос, ₽ </label>

				<div>
					<input type="text" placeholder="1 000 000">
					<input type="range">
				</div>
			</div>

			<div class="theMortgageCalculator__input">
				<label for="price"> Срок выплат </label>

				<div>
					<input type="text" placeholder="5 лет">
					<input type="range">
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.theMortgageCalculator {
	cursor: help;
	position: relative;
	width: 420px;
	height: 520px;

	&:hover {
		.theMortgageCalculator__header {
			background-color: $n2-green-color;
		}
	}

	svg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -9999;
	}
}

.heMortgageCalculator__body {
	display: flex;
	flex-direction: column;
	padding: 25px 35px 25px 35px;
	row-gap: 34px;
}

.theMortgageCalculator__header {
	background-color: $n3-halfColor50-green-color;
	transition: background-color 300ms ease-in-out;
	margin: 0 0 -4px 0;
}

.theMortgageCalculator__input {
	display: flex;
	position: relative;
	flex-direction: column;
	gap: 13px;

	transition: all 300ms ease-in-out;

	label {
		color: $vb1-dark-color;
		font-size: 14px;
		font-style: normal;
		font-weight: 500;
		line-height: 100%;
	}

	input[type=text] {
		width: 350px;
		height: 58px;
		padding: 20px 20px 22px 20px;
		border-radius: 100px;
		cursor: pointer;
		transition: background-color 300ms ease-in-out;

		border: none;
		background-color: $n5-label-white-gray-color;

		&:hover {
			outline: 1px solid $green-range-color;
			background: $white;
		}

		&:focus {
			outline: 1px solid $green-range-color;
			background: $white;
			cursor: text;
		}
	}

	input[type=range] {
		position: absolute;
		cursor: grab;
		height: 3px;
		width: 305px;
		background: transparent;

		&::-webkit-slider-thumb,
		&::-moz-range-thumb{
			background-color: $green-range-color;
			border-radius: 50%;
			border: 3px solid $vb2-light-gray-color;
		}

		&::-moz-range-progress{
			background-color: $green-range-color;
			height: 2px;
		}
	}

	div {
		position: relative;

		input {
			bottom: -2px;
			left: 28px;
		}
	}

	&:nth-child(3) {
		&:before {
			position: absolute;
			content: "30%";
			bottom: 23.8%;
			right: 6%;
			z-index: 99999;
			color: $n2-green-color;
		}
	}

	&-doubleInput .theMortgageCalculator__doubleInputContainer {
		display: flex;

		&:hover {
			input[type=text]:nth-child(1) {
				border: 1px solid $green-range-color;
				border-right: none;
			}

			input[type=text]:nth-child(2) {
				border: 1px solid $green-range-color;
				border-left: none;
			}
		}

		&:before {
			content: url("/images/icons-etc/icon-1.svg");
			position: absolute;
			z-index: 9999999;

			left: 173.7px;
			top: 20px;
		}

		input[type=text] {
			width: 50%;
			border: 1px solid transparent;

			&:hover {
				outline: none;
				background: $n5-label-white-gray-color;
			}

			&:focus {
				outline: none;
				background: $n5-label-white-gray-color;
			}
		}

		input[type=text]:nth-child(1) {
			border-radius: 100px 0  0 100px;
		}

		input[type=text]:nth-child(2) {
			border-radius: 0 100px 100px 0;
			direction: rtl;
		}

		.theMortgageCalculator__doubleRangeContainer {
			position: absolute;
			display: flex;
			flex-direction: row-reverse;
			bottom: 1px;
			width: 83%;
			height: 20px;

			input {
				width: 50%;
			}

			input:nth-child(1) {
				direction: rtl;
				left: 10%;
			}

			input:nth-child(2) {
				position: absolute;
				left: 60%;
			}
		}
	}
}
</style>