<script setup>
/**
 * Страница категорий вопросов
 */
import { computed } from 'vue';
import { useData } from 'vitepress';
import useThemeQuestions from '../helpers/index';
import QuestionsList from '../components/questions/QuestionsList.vue';

const { page } = useData();
const { questions } = useThemeQuestions('subCategories');
// Список вопросов в вопросе с категорией
const list = computed(() => questions.value[page.value.frontmatter.category]);
</script>

<template>
	<div class="page-category">
        <QuestionsList :list="list" />
	</div>
</template>