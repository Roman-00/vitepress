<script setup>
/**
 * Поиск вопросов
 */
import { ref } from 'vue';

const props = defineProps({
	modelValue: String,
});

const isHidden = ref(false);
const emit = defineEmits(['update:modelValue']);

// Слушаем событие инпут если что-то есть, показываем кнопку отчистить
function handleInput(e) {
    emit('update:modelValue', e.target.value);
    isHidden.value = e.target.value.length > 0;
}

/**
 * При клики на кнопку отчещаем значения инпута
 *
 * @param element
 */
function clearInputValue(element) {
    element.value = '';
    emit('update:modelValue', '');
    isHidden.value = false;
}
</script>

<template>
	<div class="search">
		<input
            ref="searchInput"
			type="text"
            :value="modelValue"
			class="search-input"
			placeholder="Напишите,коротко вопрос"
            @input="handleInput"
		>

        <button
            v-if="isHidden"
            class="search-button-clear"
            @click="clearInputValue(this.$refs.searchInput)"
        />
	</div>
</template>

<style lang="scss">
@import '../style/variables.scss';

.search {
	position: relative;
	width: 100%;
	margin-bottom: 32px;
}

.search-input {
    position: relative;
	width: 100%;
	min-height: 42px;
	padding: 0 8px 0 16px;
	font-size: 1rem;
	font-weight: $font-normal;
	line-height: 24px;
	border: 1px solid rgba($black-primary, 0.2);
	background: $white url('/icons/icon-search-dark.svg') no-repeat center;
    background-position-x:  96%;
	border-radius: $radius-small;
	color: $black-primary;

	&:placeholder {
		color: $gray;
	}
}

.search-button-clear {
    position: absolute;
    top: 50%;
    right: 12px;
    width: 24px;
    height: 24px;
    background: url('/icons/icon-search-reset.svg') no-repeat center center;
    transform: translateY(-50%);
}
</style>