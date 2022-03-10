import { computed } from 'vue';
import { useData } from 'vitepress';

/**
 * Helpers для получения вопросов
 *
 * @param {String} name
 */
export default function useThemeQuestions(name) {
    const { theme } = useData();
    const questions = computed(() => theme.value[name]);
    return { questions };
}