import { defineConfig } from 'vitepress';
import { getPostList } from 'vitepress-blog-util/scripts';
import config from '../kolesa/config.json';

const subCategories = {};
const categories = getQuestionsFolders(config.baseDir);

/**
 * Получаем список вопросов для категории
 *
 * @param folder
 */
function getQuestions(folder) {
    try {
        return getPostList(folder).map(post => {
            const { frontmatter: props } = post;
            const dataQuestions = {
                ...props,
                path: post.path,
            };

            if (props.category) {
                subCategories[props.category] = getQuestions(`${config.baseDir}/${props.category}`)
            }

            return dataQuestions;
        })
    } catch (e) {
        console.log(e.message, e.stack);

        return [];
    }
}

/**
 * Получаем и формируем список вопросов с папок
 *
 * @param folder
 */
function getQuestionsFolders(folder) {
    // Получаем вопросы с папок у которых совпадает название папки и название категории
    const dataQuestionCategory = config.categories.map((item) => {
        return {
            ...item,
            data: getQuestions(`${folder}/${item.id}`),
        }
    })

    // Получаем список вопросов для - "Самых частых вопросов"
    const commonQuestions = {
        ...config.top,
        data: dataQuestionCategory.reduce((acc, item) => {
            const commonQuestionsArray = item.data.filter(entry => {
                return entry[config.top.attach]
            });

            return acc.concat(commonQuestionsArray);
        }, []),
    }

    return [commonQuestions, ...dataQuestionCategory];
}

/**
 * Конфигурации приложения
 */
export default defineConfig({
    title: 'Справочный центр',
    themeConfig: {
        docsDir: 'docs',
        sidebar: false,
        categories,
        subCategories,
    },
});