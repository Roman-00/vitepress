<script setup>
/**
 * Главная страница
 */
import { computed, ref } from 'vue';
import { useData } from 'vitepress';
import Search from '../components/Search.vue';
import Categories from '../components/Categories.vue';

const searchQuery = ref('');
const { theme } = useData();
const categories = computed(() => theme.value.categories);
</script>

<template>
	<div class="index">
		<Search
			v-model="searchQuery"
		/>

		<Categories
            :category="categories"
            :query="searchQuery"
        />
	</div>
</template>

<style lang="scss">
.index {
	position: relative;
}
</style>