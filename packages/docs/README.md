# @idsk/docs

Dokumentácia a Storybook pre knižnicu UI komponentov IDSK. Tento balík slúži na vývoj, testovanie prístupnosti a vizuálnu prezentáciu komponentov.

## 🚀 Technológie

- **Nástroj:** Storybook 10
- **Zostavenie:** Vite
- **Doplnky:** Accessibility (a11y), Docs, HTML snippet support
- **Stylovanie:** Tailwind CSS v4

## 🛠️ Vývoj a skripty

Tieto príkazy spúšťajte v adresári `packages/docs` (alebo pomocou `-w packages/docs` z koreňa):

- `npm run storybook`: Spustí lokálny Storybook server na `http://localhost:6006`.
- `npm run build`: Zostaví statickú verziu Storybooku do adresára `dist`.

## 📂 Štruktúra projektu

- `.storybook`: Konfigurácia Storybooku, témy a doplnkov.
- `src/stories`: Definície príbehov (stories) pre jednotlivé komponenty.
- `src/docs`: Dokumentačné stránky a návody.

## 📖 Práca s komponentmi

Každý komponent v `@idsk/core` by mal mať svoj zodpovedajúci súbor v tomto balíku (napr. `Button.stories.tsx`), ktorý demonštruje:

- Rôzne stavy komponentu (Primary, Secondary, Disabled, atď.).
- Varianty veľkostí a farieb.
- Správanie pri rôznych interakciách.
- Testy prístupnosti priamo v paneli Storybooku.

## 🔗 Prepojenie s Core

Tento balík závisí priamo od `@idsk/core`. Pri vývoji nových komponentov v core balíku sa zmeny automaticky prejavia v Storybooku vďaka Vite HMR (Hot Module Replacement).
