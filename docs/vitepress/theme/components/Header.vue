<script setup>
/**
 * Шапка сайта
 */
import { computed } from 'vue';

const props = defineProps({
	title: String,
	active: Boolean,
});

const goBack = () => {
	if (window.location) {
		window.history.back();
	}
}
</script>

<template>
	<header
		class="header"
		:class="{ 'header--active' : active }"
	>
		<div class="container">
			<div class="header-wrapper">
				<button class="header-go-back" @click="goBack"/>

				<h3 class="header-title">
					{{ title ? title : 'Справочный центр' }}
				</h3>
			</div>
		</div>
	</header>
</template>

<style lang="scss">
@import '../style/variables.scss';

.header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
	background: $white;
	z-index: 1;

	&--active {
		box-shadow: 0px 2px 4px rgba($black-primary, 0.1);
	}
}

.header-wrapper {
	position: relative;
	display: flex;
	align-items: center;
	padding: 10px 0;
}

.header-go-back {
	flex: none;
	width: 24px;
	height: 24px;
	background: url('/icons/icon-arrow-small-left.svg') no-repeat center center / contain;
}

.header-title {
	flex: 1 1 auto;
	min-width: 0;
    max-width: 200px;
	margin: 0 auto;
	font-size: 1.125rem;
	font-weight: $font-semi;
	line-height: 28px;
	text-align: center;
	color: $black-primary;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
</style>