import Layout from './Layout.vue';
import Index from './views/Index.vue';
import Category from './views/Category.vue';

// Подключаем главный файл со стилями
import './style/main.scss';

/**
 * Настройки для созданной нами темы
 */
const Theme = {
    Layout,
    NotFound: () => 'custom 404',
    enhanceApp({ app }) {
        app.component('Index', Index);
        app.component('Category', Category);
    }
};

export default Theme;