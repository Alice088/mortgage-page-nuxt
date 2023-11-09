<script setup lang="ts">
const showFlag = ref(false);
const target = ref();

let observer: IntersectionObserver;

onMounted(() => {
	observer = new IntersectionObserver(
		([entry]) => {
			showFlag.value = entry.isIntersecting;
		},
		{
			threshold: 0.3,
			rootMargin: "0px",
		}
	);

	observer.observe(target.value);
});
</script>

<template>
	<div ref="target">
		<transition name="emergence" appear>
			<div v-show="showFlag" class="animated-component">
				<slot />
			</div>
		</transition>
	</div>
</template>

<style scoped lang="scss">
.animated-component.emergence-enter-from {
	transition: none;
}

.emergence-enter-active,
.emergence-leave-active {
	transition: 1s ease-in-out;
	transition-property: opacity, transform;
}
.emergence-enter-from,
 .emergence-leave-to {
	opacity: 0;
	transform: translateY(20px);
 }
</style>