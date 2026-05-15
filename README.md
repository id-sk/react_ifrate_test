# IDSK UI Library

Moderná knižnica UI komponentov pre digitálne služby štátu, založená na React, Tailwind CSS v4 a Radix UI. Projekt je spravovaný ako monorepo pomocou pnpm workspaces a Turborepo.

## 🚀 Technologický zásobník

- **Framework:** React 19
- **Stylovanie:** Tailwind CSS v4
- **Primitíva:** Radix UI
- **Ikony:** Lucide React
- **Nástroje:** Vite
- **Testovanie:** Vitest & Playwright
- **Kvalita kódu:** ESLint, Prettier, Stylelint
- **Dokumentácia:** Storybook 10

## 📂 Štruktúra projektu

- `packages/core`: Hlavná knižnica komponentov.
- `packages/docs`: Storybook dokumentácia a príklady použitia.

## 🛠️ Inštalácia

Pre lokálny vývoj a inštaláciu všetkých závislostí v monorepe spustite:

```bash
pnpm install
```

## 📜 Dostupné skripty

Tieto príkazy môžete spúšťať z koreňového adresára:

### Vývoj a zostavenie

- `pnpm dev`: Spustí Vite dev server pre `@idsk/core`.
- `pnpm dev:docs`: Spustí Storybook dokumentáciu na `http://localhost:6006` (alias: `pnpm storybook`).
- `pnpm build`: Spustí lint, typecheck a zostaví všetky balíky cez Turborepo.

### Testovanie a kvalita

- `pnpm test`: Spustí Vitest unit testy aj Playwright CT testy (všetky balíky).
- `pnpm test-ct`: Spustí Playwright component testy iba pre `@idsk/core`.
- `pnpm lint`: Skontroluje kód pomocou ESLint.
- `pnpm lint:style`: Skontroluje CSS súbory pomocou Stylelint.
- `pnpm lint:fix`: Automaticky opraví chyby v kóde pomocou ESLint.
- `pnpm format`: Sformátuje kód pomocou Prettier.
- `pnpm format:check`: Skontroluje formátovanie bez zmien.
- `pnpm typecheck`: Spustí kontrolu TypeScript typov.

## 📖 Dokumentácia

Podrobné informácie o jednotlivých balíkoch nájdete v ich príslušných adresároch:

- [Core Komponenty](./packages/core/README.md)
- [Dokumentácia a Storybook](./packages/docs/README.md)

## 📄 Licencia

Tento projekt je licencovaný pod MIT licenciou.
