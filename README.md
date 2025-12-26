**# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
**# 🛒 TECCOD Test Task

Тестовое задание — простой интернет-магазин с корзиной и страницей оплаты.

Проект реализован на **React + TypeScript**, с акцентом на чистую архитектуру, типизацию и аккуратный UI.

---

## 🚀 Функциональность

-   📦 Загрузка списка товаров с API
-   ➕ Добавление товаров в корзину
-   🔁 Увеличение количества одинаковых товаров
-   🧮 Автоматический подсчёт общей суммы
-   🛒 Отображение корзины в сайдбаре
-   💳 Страница оплаты с QR-кодом
-   💰 Передача реальной суммы на страницу оплаты
-   🎨 Адаптивный и аккуратный UI

---

## 🧠 Особенности реализации

-   Асинхронная загрузка данных (`fetch`)
-   Управление состоянием через `useState`
-   Навигация через `react-router-dom`
-   Передача данных между страницами через `location.state`
-   Корректная работа с денежными значениями  
    (округление **только при отображении**)
-   Строгая типизация с TypeScript
-   Чистый CSS без UI-библиотек

---

## 🛠️ Технологии

-   **React**
-   **TypeScript**
-   **React Router v6**
-   **CSS**
-   **Vite**

---

## 👤 Автор

Mircocosov
Telegram: @mircocosov
