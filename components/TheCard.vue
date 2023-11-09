<script setup lang="ts">
const props = defineProps<{
	imgLink: string
}>();
</script>

<template>
	<div class="TheCard">
		<svg width="420" height="303" viewBox="0 0 420 303" fill="none" xmlns="http://www.w3.org/2000/svg" overflow="hidden">
			<defs>
				<linearGradient id="paint0_linear_1_1852" x1="172" y1="294.812" x2="172" y2="121.813" gradientUnits="userSpaceOnUse">
					<stop offset="0.500753"/>
					<stop offset="1" stop-opacity="0"/>
				</linearGradient>

				<clipPath id="pictureClip" >
					<path d="M0.458642 27.1687C0.481522 13.4179 11.6053 2.26692 25.356 2.21049L366 0.8125L395.694 1.63734C409.226 2.01322 420 13.0909 420 26.6277V39.3125V204.312C420 218.12 408.807 229.312 395 229.312H385C364.013 229.312 347 246.326 347 267.312V277.812C347 291.62 335.807 302.812 322 302.812H25.0416C11.2183 302.812 0.018666 291.594 0.0416665 277.771L0.458642 27.1687Z" fill="#D9D9D9" />
				</clipPath>
			</defs>

			<image :xlink:href="props.imgLink" x="0" y="0" width="100%" height="100%" clip-path="url(#pictureClip)"  preserveAspectRatio="xMidYMid slice" />
			<path d="M0.458642 27.1687C0.481522 13.4179 11.6053 2.26692 25.356 2.21049L366 0.8125L395.694 1.63734C409.226 2.01322 420 13.0909 420 26.6277V39.3125V204.312C420 218.12 408.807 229.312 395 229.312H385C364.013 229.312 347 246.326 347 267.312V277.812C347 291.62 335.807 302.812 322 302.812H25.0416C11.2183 302.812 0.018666 291.594 0.0416665 277.771L0.458642 27.1687Z" fill="url(#paint0_linear_1_1852)" fill-opacity="0.7"/>
		</svg>

		<svg class="TheCard__circle" width="65" height="66" viewBox="0 0 65 66" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="32.5" cy="33.3125" r="32.5" fill="#083E4C"/>
			<path d="M40.3889 33.1687C41.0556 33.5536 41.0556 34.5158 40.3889 34.9007L30.3889 40.6742C29.7222 41.0591 28.8889 40.578 28.8889 39.8082L28.8889 28.2612C28.8889 27.4914 29.7222 27.0103 30.3889 27.3952L40.3889 33.1687Z" fill="white"/>
		</svg>

		<h3 class="TheCard__header specialText specialText-white"> <slot name="header"/> </h3>
		<svg class="TheCard__divider" width="316" height="2" viewBox="0 0 316 2" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M0 0.8125H316" stroke="white"/>
		</svg>
		<p class="TheCard__text"> <slot name="text"/> </p>
	</div>
</template>

<style scoped lang="scss">
.TheCard {
	position: relative;
	width: 420px;
	height: 303px;
	cursor: pointer;

	&:hover {
		.TheCard__circle {
			transform: rotate(-30deg);

			circle {
				fill: $n4-activated-green-color;
			}
		}

		.TheCard__header {
			color: $white;
			background-color: $n4-activated-green-color;
		}

		image {
			width: 105%;
			height: 105%;
		}
	}

	image {
		transition: all 300ms ease-in-out;
	}
}

.TheCard__header {
	position: absolute;
	transition: all 300ms ease-in-out;

	color: $n1-gray-color;
	font-size: 26px;
	font-style: normal;
	font-weight: 500;
	line-height: 130%;


	bottom: 205px;
	left: 4%;
}

.TheCard__divider {
	position: absolute;
	bottom: 103px;
	right: 87px;
	max-width: 316px;
}

.TheCard__text {
	position: absolute;
	max-width: 282px;
	word-break: break-all;

	color: $white;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: 140%;

	bottom: 30px;
	left: 4%;
}

.TheCard__circle {
	position: absolute;
	bottom: 0;
	right: -1px;
	transition: transform 300ms ease-in-out;

	circle {
		transition: fill 300ms ease-in-out;
	}
}
</style>