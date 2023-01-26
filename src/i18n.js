import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'ua',
        interpolation: {
            escapeValue: false
        },
        resources: {
            'ua': {
                translation: {
                    hero: {
                        title: 'Ательє сценічного костюму',
                        about: 'Ми з 2007 року - на ринку пошиття сценічних костюмів. Успішно працюємо, збагачуємо досвід та удосконалюємо свою майстерність.',
                        propose: 'Ми пропонуємо: ',
                        p1: 'Завдяки професіоналізму колективу ми швидко і якісно виконуємо замовлення!',
                        p2: 'Порядність відносин гарантуємо!',
                        orderTitle: 'Як здійснити замовлення?',
                        orderP1: `У розділі "Продукція" оберіть категорію костюмів. Далі - костюм, що
                        сподобався. На картці товару є номер. Назва категорії і номер картки
                        визначає ідентифікацію моделі костюму (наприклад, "Центральна Україна
                        - 001" або "Гуцульщина - 007").`,
                        orderP2: 'У період перемовин узгоджується колористика уже створеної або розробка цілком нової моделі.',
                        orderP3: 'Після виконання замовлення надається повний пакет бухгалтерських документів згідно чинного Законодавства.'
                    },
                    menu: {
                        main: 'Головна',
                        products: 'Продукція',
                        saved: 'Збережене',
                        works: 'Наші роботи',
                        contacts: 'Контакти'
                    },
                    buttons: {
                        search: 'Пошук за номером',
                        saved: 'Збережене',
                        catalog: 'Каталог продукції'
                    },
                    navigation: {
                        title: 'КАТАЛОГ ПРОДУКЦІЇ',
                        ukrainian: 'Українські народні костюми',
                        kozhukh: 'Кожухи',
                        head: 'Головні убори',
                        shoes: 'Сценічне взуття',
                        rushnyk: 'Рушники',
                        world: 'Костюми народів світу',
                        rizne: 'Різні сценічні костюми',
                        adults: 'для дорослих',
                        children: 'для дітей'
                    },
                    search: {
                        number: 'Введіть номер продукту, який шукаєте:',
                        section: 'У якому розділі шукати?',
                        example: 'наприклад, 001',
                        button: 'Пошук',
                        category: {
                            all: 'У всіх',
                            kozhuhy: 'Кожухи',
                            golovniUbory: 'Головні убори',
                            vzuttya: 'Сценічне взуття',
                            rushnyky: 'Рушники',
                            svit: 'Костюми народів світу',
                            rizne: 'Різні сценічні костюми'
                        },
                        notFound: 'Виробу з таким номером не знайдено'
                    },
                    footer: {
                        rights: 'Уся продукція захищена авторським правом'
                    },
                    contacts: {
                        address: 'вул.М.Хвильового 12, Львів, Україна',
                        end: 'є'
                    }
                }
            },
            'en': {
                translation: {
                    hero: {
                        title: 'Stage costumes atelier',
                        about: 'We create costumes since 2007 and continue working with passion. We enrich our experience and improve our skills.',
                        propose: 'We create: ',
                        p1: 'Our professional team completes all the orders fast and qualitatively!',
                        p2: 'We guarantee the decency of our business relations!',
                        orderTitle: 'How to make the order?',
                        orderP1: `First of all choose the costume in "Products" section. 
                        Note the number written on the product photo and the category title 
                        in the Product Catalog (for example, - "Central Ukraine - 001").`,
                        orderP2: 'We can change the colors of the selected model OR create the completely new sketch.',
                        orderP3: 'We can prepare all the necessary documents for You after completing the order.'
                    },
                    menu: {
                        main: 'Home',
                        products: 'Products',
                        saved: 'Saved',
                        works: 'Our works',
                        contacts: 'Contacts'
                    },
                    buttons: {
                        search: 'Search by number',
                        saved: 'Saved',
                        catalog: 'Product catalog'
                    },
                    navigation: {
                        title: 'PRODUCT CATALOG',
                        ukrainian: 'Ukrainian folk costumes',
                        kozhukh: 'Kozhukhs',
                        head: 'Head dress',
                        shoes: 'Dancing shoes',
                        rushnyk: 'Rushnyks',
                        world: 'World folk costumes',
                        rizne: 'Various stage costumes',
                        adults: 'for adults',
                        children: 'for children'
                    },
                    search: {
                        number: 'Enter the product number you are looking for:',
                        section: 'Choose the section:',
                        example: 'for example, 001',
                        button: 'Search',
                        category: {
                            all: 'In all sections',
                            kozhuhy: 'Kozhukhs',
                            golovniUbory: 'Head dress',
                            vzuttya: 'Dancing shoes',
                            rushnyky: 'Rushnyks',
                            svit: 'World folk costumes',
                            rizne: 'Various stage costumes'
                        },
                        notFound: 'Product with this number was not found'
                    },
                    footer: {
                        rights: 'All rights reserved'
                    },
                    contacts: {
                        address: 'Khvylovoho 12 str., Lviv, Ukraine',
                        end: '+'
                    }
                }
            }
        }
    });

    export default i18n;