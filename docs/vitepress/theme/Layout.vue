<script setup>
/**
 * Главный layout компонент
 */
import { computed, ref } from 'vue';
import { useData } from 'vitepress';
import Header from './components/Header.vue';

const { page } = useData();
const title = computed(() => page.value.frontmatter.title);
const isActive = ref(false);
</script>

<template>
	<div id="app-page">
		<Header
			:title="title"
			:active="isActive"
		/>

		<main>
			<div class="container">
				<Content />
			</div>
		</main>
	</div>
</template>