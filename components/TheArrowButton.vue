<script setup lang="ts">

</script>

<template>
	<button class="theArrowButton">
		<svg class="theArrowButton__bodySVG" width="60" height="60" viewBox="0 0 62.7 60" fill="white" xmlns="http://www.w3.org/2000/svg">
			<path class="theArrowButton__circle" d="M61 30.8125C61 47.381 47.5685 60.8125 31 60.8125C14.4315 60.8125 1 47.381 1 30.8125C1 14.244 14.4315 0.8125 31 0.8125C47.5685 0.8125 61 14.244 61 30.8125Z" stroke="#083E4C"/>
			<path class="theArrowButton__arrow" d="M35.5 29.9465C36.1667 30.3314 36.1667 31.2936 35.5 31.6785L29.5 35.1426C28.8333 35.5275 28 35.0464 28 34.2766L28 27.3484C28 26.5786 28.8333 26.0975 29.5 26.4824L35.5 29.9465Z" fill="#083E4C"/>
		</svg>
	</button>
</template>

<style scoped lang="scss">
	.theArrowButton {
		border: none;
		width: 60px;
		height: 62px;

		outline: none;
		background: none;
		cursor: pointer;

		&:disabled {
			cursor: not-allowed;

			.theArrowButton__bodySVG {
				opacity: 0.3;

				&:hover{
					transform: rotate(0deg);
					fill: $white;

					.theArrowButton__arrow {
						fill: $n2-green-color;
					}
				}
			}
		}

		.theArrowButton__bodySVG {
			&:hover {
				transform: rotate(-30deg);
				fill: $n4-activated-green-color;

				.theArrowButton__arrow {
					fill: $white;
				}

				.theArrowButton__circle {
					stroke: $n4-activated-green-color;
				}
			}

			.theArrowButton__arrow {
				transition: all 300ms ease-in-out;
			}

			.theArrowButton__circle {
				transition: all 300ms ease-in-out;
			}

			transition: all 300ms ease-in-out;
		}



		&-arrowLeft {
			.theArrowButton__bodySVG {
				transform: rotate(180deg);
			}

			.theArrowButton__bodySVG:hover {
				transform: rotate(210deg);
			}
		}

		&-arrowLeft:disabled {
			.theArrowButton__bodySVG {
				&:hover {
					transform: rotate(180deg);
				}
			}
		}
	}
</style>