# Nike Cypress + TypeScript – projekt zaliczeniowy

Projekt automatycznych testów end-to-end przygotowany w Cypress + TypeScript dla oficjalnej strony Nike.

Testowana strona:

https://www.nike.com/pl/

> Uwaga: oficjalna strona Nike jest aplikacją produkcyjną, dlatego jej struktura DOM, popupy cookies, produkty i zabezpieczenia mogą się zmieniać. Z tego powodu testy zostały napisane możliwie elastycznie, ale mogą wymagać aktualizacji selektorów, jeżeli Nike zmieni frontend.

---

## Cel projektu

Celem projektu było przygotowanie zestawu testów automatycznych zgodnych z wymaganiami zaliczeniowymi:

- 5–10+ scenariuszy testowych,
- testy napisane w TypeScript,
- użycie metod Cypress, np. `get`, `contains`, `find`, `should`, `click`, `type`, `then`,
- minimum 2 własne komendy,
- wykorzystanie interfejsów TypeScript,
- zapisanie selektorów w osobnych plikach,
- skrypt do uruchamiania testów w trybie headless.

---

## Wykorzystane technologie

- Cypress
- TypeScript
- Node.js
- npm
- Chrome / Edge

---

## Struktura projektu

```text
cypress/
├── e2e/
│   ├── home.cy.ts
│   ├── products.cy.ts
│   ├── product-details.cy.ts
│   └── store.cy.ts
│
├── selectors/
│   ├── common.selectors.ts
│   ├── product.selectors.ts
│   └── store.selectors.ts
│
├── support/
│   ├── commands.ts
│   ├── e2e.ts
│   └── types.ts
│
└── fixtures/

cypress.config.ts
package.json
tsconfig.json
```

---

## Zaimplementowane scenariusze testowe

### Strona główna i nawigacja

1. Otwarcie strony głównej Nike PL.
2. Sprawdzenie widoczności głównej nawigacji.
3. Sprawdzenie dostępności linku do koszyka.

### Produkty i wyszukiwarka

4. Wyszukanie produktu „Air Force 1” przez własną komendę.
5. Otwarcie strony z produktami i sprawdzenie kart produktów.
6. Sprawdzenie, czy produkt posiada nazwę i cenę.

### Szczegóły produktu

7. Otwarcie szczegółów produktu przez własną komendę.
8. Sprawdzenie ceny na stronie szczegółów produktu.
9. Sprawdzenie sekcji wyboru rozmiaru albo przycisku dodania do koszyka.

### Wyszukiwarka sklepów

10. Otwarcie strony wyszukiwarki sklepów Nike.
11. Sprawdzenie pola wyszukiwania lokalizacji.

---

## Własne komendy Cypress

Projekt zawiera własne komendy zapisane w pliku:

```text
cypress/support/commands.ts
```

### `acceptNikeCookies()`

Komenda wykrywa i akceptuje popup cookies, jeżeli pojawi się na stronie.

### `searchNikeProduct(data)`

Komenda wyszukuje produkt Nike na podstawie danych przekazanych jako obiekt.

### `openNikeProduct(product)`

Komenda otwiera szczegóły produktu na podstawie nazwy przekazanej w obiekcie.

---

## Interfejsy TypeScript

Interfejsy znajdują się w pliku:

```text
cypress/support/types.ts
```

### `NikeSearchData`

```ts
export interface NikeSearchData {
  phrase: string
  expectedText: string
}
```

### `NikeProductData`

```ts
export interface NikeProductData {
  name: string
  category?: string
  priceContains?: string
  size?: string
}
```

### `NikeStoreSearchData`

```ts
export interface NikeStoreSearchData {
  city: string
  expectedCountryCode: string
}
```

Interfejsy są wykorzystywane do typowania parametrów własnych komend i danych testowych.

---

## Selektory

Selektory zostały wydzielone do osobnych plików:

```text
cypress/selectors/common.selectors.ts
cypress/selectors/product.selectors.ts
cypress/selectors/store.selectors.ts
```

Dzięki temu testy są bardziej czytelne, a ewentualne zmiany w strukturze strony można poprawić w jednym miejscu.

---

## Instalacja projektu

Po pobraniu projektu należy zainstalować zależności:

```bash
npm install
```

Folder `node_modules` nie powinien być dodawany do repozytorium ani do pliku `.zip`.

---

## Uruchamianie testów

### Cypress GUI

```bash
npm run cy:open
```

Jeżeli pojawią się problemy z Electronem, można uruchomić GUI w Chrome:

```bash
npm run cy:open:chrome
```

### Tryb headless

```bash
npm run cy:run
```

albo:

```bash
npm run test:headless
```

---

## Skrypty npm

```json
{
  "cy:open": "cypress open",
  "cy:open:chrome": "cypress open --browser chrome:stable",
  "cy:run": "cypress run",
  "cy:run:chrome": "cypress run --browser chrome:stable",
  "test:headless": "cypress run --browser chrome:stable --headless"
}
```

---

## Autorzy

Projekt wykonany w ramach przedmiotu:

**Testowanie i Kontrola Jakości Oprogramowania**

Akademia Nauk Stosowanych WSEI
