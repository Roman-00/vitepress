<script setup>
/**
 * Элемент вопроса в списке
 */
defineProps({ data: Object });

/**
 * Обрезем не нужные данные в ссылке
 *
 * @param path {String}
 */
function cutLink(path) {
    return path.replace(/^docs/, '');
}
</script>

<template>
    <li class="questions-list-item">
        <a :href="cutLink(data.path)" class="questions-list-item__link">
            <span class="questions-list-item__link-title">
                {{ data.title }}
            </span>
        </a>
    </li>
</template>

<style lang="scss">
@import '../../style/variables.scss';

.questions-list-item {
    position: relative;
    padding: 10px 0;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: -100%;
        right: -100%;
        height: 1px;
        background: $border-color;
    }

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        right: -8px;
        width: 24px;
        height: 24px;
        background: url('/icons/icon-arrow-small-right.svg') center center;
        transform: translateY(-50%);
    }

    &__link {
        display: inline-block;
        width: 100%;
        color: $black-primary;
    }

    &__link-title {
        display: inline-block;
        max-width: 308px;
    }
}
</style>