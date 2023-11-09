<script setup lang="ts"></script>

<template>
	<section class="purchaseOptions">
		<animated-component>
			<header class="purchaseOptions__header">
				<h2>Варианты покупки</h2>

				<nav>
					<a href="//link">
						<TheButton class="theButton-outline">Подробнее </TheButton>
					</a>

					<TheArrowButton class="theArrowButton-arrowLeft"  disabled />
					<TheArrowButton />
				</nav>
			</header>
		</animated-component>

		<animated-component>
			<section class="purchaseOptions__cards">
				<TheCard img-link="/images/backgrounds/bg-1.jpg">
					<template v-slot:header> Ипотека от 4,3% </template>
					<template v-slot:text>
						Выгодные условия при оформлении у банков-партнеров
					</template>
				</TheCard>

				<TheCard img-link="/images/backgrounds/bg-2.jpg">
					<template v-slot:header> Рассрочка 0% </template>
					<template v-slot:text>
						Гибкие условия по размеру первоначального взноса, платежам и срокам
					</template>
				</TheCard>

				<TheCard img-link="/images/backgrounds/bg-3.jpg">
					<template v-slot:header> Покупка в Trade-in </template>
					<template v-slot:text>
						Выгодный обмен старой квартиры на новую квартиру или апартаменты
					</template>
				</TheCard>
			</section>
		</animated-component>

		<animated-component>
			<section class="purchaseOptions__finance">
				<TheMortgageCalculator />

				<div class="purchaseOptions__mortgageBannerContainer">
					<div class="banner">
						<img src="/images/icons-etc/Rectangle%20142.svg" alt="зелая форма">

						<strong class="specialText specialText-white">
							Ипотека 0.1%
						</strong>

						<div class="banner__mortgageDescription">
							<div>
								<ul>
									<li> Ежемесячный платёж <span>12 591 ₽</span> </li>
									<li>Ставка <span>0.1%</span> </li>
									<li>Сумма кредита <span>4 465 050 ₽</span> </li>
									<li>Срок кредита <span>5 лет</span> </li>
								</ul>
							</div>
						</div>

						<div class="banner__interestingOffers">
							Узнайте о других <a href="//link">интересных предложениях</a>
						</div>
					</div>

					<p class="purchaseOptions__description">
						Приведенные расчеты носят предварительный характер. Окончательный расчет суммы кредита
						и размер ежемесячного платежа производится банком после предоставления оценки платежеспособности клиента.
					</p>

					<theButton>
						Подать заявку на точный расчёт
					</theButton>
				</div>
			</section>
		</animated-component>
	</section>
</template>

<style scoped lang="scss">
.purchaseOptions {
	display: flex;
	flex-direction: column;

	height: 100svh;
	min-height: 100vh;
	padding: 56px;
}

.purchaseOptions__header {
	display: flex;
	height: max-content;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 43px;

	h2 {
		color: $vb1-dark-color;
		font-size: 42px;
		font-style: normal;
		font-weight: 500;
		line-height: 120%;
		margin: 0;
	}

	nav {
		display: flex;
		justify-content: center;
		gap: 12px;

		a {
			display: flex;
			margin-right: 8px;
			text-decoration: none;
		}
	}
}

.purchaseOptions__cards {
	display: flex;
	height: fit-content;
	justify-content: space-between;
	margin-bottom: 75px;
}

.purchaseOptions__finance {
	display: flex;
	column-gap: 39px;
	height: fit-content;
}

.purchaseOptions__mortgageBannerContainer {
	display: flex;
	flex-direction: column;
}

.banner__interestingOffers {
	position: absolute;
	top: 5px;
	right: 0;

	color: $vb1-dark-color;
	font-size: 14px;
	line-height: 100%;

	a {
		color: $n2-green-color;
		text-decoration: none;

		&:hover {
			color: $n4-activated-green-color;
		}
	}
}

.banner {
	position: relative;
	width: fit-content;
	margin-bottom: 25px;

	strong {
		position: absolute;
		width: 482px;
		height: 103px;
		top: 60px;
		left: 40px;

		font-weight: 500;
		font-size: 74px;
		line-height: 110%;
	}
}

.banner__mortgageDescription {
	position: absolute;
	bottom: 26px;
	left: 40px;

	ul {
		display: flex;
		list-style-type:  none;
		padding: 0;
		column-gap: 72px;

		li {
			display: flex;
			flex-direction: column;
			row-gap: 14px;
			color: $vb3-halfColor70-light-gray-color;
			font-size: 14px;
			line-height: 100%;
		}

		span {
			color: $white;
			font-size: 30px;
			line-height: 120%;
		}
	}
}

.purchaseOptions__description {
	max-width: 871px;
	margin: 0 0 40px 0;

	color: $vb4-textLight-gray-color;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: 140%;
}
</style>