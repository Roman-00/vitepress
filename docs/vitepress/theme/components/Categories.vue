<script setup>
/**
 *  Категории с вопросами на главной странице
 */
import { computed } from 'vue';
import QuestionsList from './questions/QuestionsList.vue';

const props = defineProps({
    query: String,
    category: {
        type: Array,
        default: () => [],
    }
});

// Фильтруем и показываем категории с вопросами
const filtered = computed(() => {
    if (!props.query) return props.category;

    const queryIsString = props.query.toLowerCase();

    return props.category.reduce((acc, item) => {
        const filterQuestions = item.data.filter((page) => page.title.toLowerCase().includes(queryIsString));

        if (filterQuestions.length) {
            acc.push({ ...item, data: filterQuestions })
        }

        return acc;
    }, [])
});
</script>

<template>
    <div class="questions-category">
        <transition-group name="questions-category-animation">
            <div
                v-for="category in filtered"
                :id="category.id"
                :key="category.id"
                class="questions-category-block"
            >
                <h3 class="questions-category-block__title">
                    {{ category.title }}
                </h3>

                <QuestionsList :list="category.data" />
            </div>
        </transition-group>
    </div>
</template>

<style lang="scss">
@import '../style/variables.scss';

.questions-category {
    position: relative;
}

.questions-category-block {
    padding: 8px 0;
    margin-bottom: 32px;

    &__title {
        padding: 4px 0 8px;
        font-family: 'Open Sans', sans-serif;
        font-size: 1.125rem;
        font-weight: $font-semi;
        line-height: 28px;
        color: $black-primary;
    }
}

.questions-category-animation-enter-active,
.questions-category-animation-leave-active {
    transition: all .5s ease;
}

.questions-category-animationn-enter-from,
.questions-category-animation-leave-to {
    opacity: 0;
    transform: translateY(30px)
}

.questions-category-animation-move {
    transition: transform .4s ease;
}
</style>