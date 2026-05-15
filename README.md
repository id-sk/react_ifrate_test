# IDSK UI Library

Moderná knižnica UI komponentov pre digitálne služby štátu, založená na React, Tailwind CSS v4 a Radix UI. Projekt je spravovaný ako monorepo pomocou npm workspaces.

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
npm install
```

## 📜 Dostupné skripty

Tieto príkazy môžete spúšťať z koreňového adresára:

### Vývoj a zostavenie

- `npm run dev`: Spustí vývojové prostredie pre core komponenty.
- `npm run build`: Zostaví všetky balíky v projekte (core aj docs).
- `npm run storybook`: Spustí Storybook dokumentáciu na `http://localhost:6006`.

### Testovanie a kvalita

- `npm run test`: Spustí unit a integračné testy (Vitest).
- `npm run test-ct`: Spustí testovanie komponentov v prehliadači (Playwright CT).
- `npm run lint`: Skontroluje kód pomocou ESLint.
- `npm run lint:style`: Skontroluje CSS súbory pomocou Stylelint.
- `npm run lint:fix`: Automaticky opraví chyby v kóde pomocou ESLint.
- `npm run format`: Sformátuje kód pomocou Prettier.
- `npm run typecheck`: Spustí kontrolu TypeScript typov.

## 📖 Dokumentácia

Podrobné informácie o jednotlivých balíkoch nájdete v ich príslušných adresároch:

- [Core Komponenty](./packages/core/README.md)
- [Dokumentácia a Storybook](./packages/docs/README.md)

## 📄 Licencia

Tento projekt je licencovaný pod MIT licenciou.
