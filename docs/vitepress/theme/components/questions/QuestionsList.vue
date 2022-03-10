<script setup>
/**
 * Список вопросов
 */
import QuestionsListItem from './QuestionsListItem.vue';

const props = defineProps({
    list: {
        type: Array,
        default: () => [],
    }
});

</script>

<template>
    <ul class="questions-list">
        <QuestionsListItem
            v-for="data in list"
            :data="data"
            :key="data.title"
        />
    </ul>
</template>

<style lang="scss">
@import '../../style/variables.scss';

.questions-list {
    position: relative;
}
</style>