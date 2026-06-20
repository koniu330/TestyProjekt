# Cypress + TypeScript – Automation Exercise

Projekt zaliczeniowy z przedmiotu **Testowanie i Kontrola Jakości Oprogramowania**.

## Cel projektu

Celem projektu było przygotowanie automatycznych testów end-to-end dla aplikacji webowej z wykorzystaniem:

* Cypress
* TypeScript
* Custom Commands
* Interfejsów TypeScript
* Dobrych praktyk Cypress (oddzielenie selektorów od testów)

Testowana aplikacja:

https://www.automationexercise.com/

---

## Wykorzystane technologie

* Cypress
* TypeScript
* Node.js
* npm

---

## Struktura projektu

```text
cypress/
├── e2e/
│   ├── auth.cy.ts
│   ├── products.cy.ts
│   ├── cart.cy.ts
│   └── contact.cy.ts
│
├── selectors/
│   ├── auth.selectors.ts
│   ├── product.selectors.ts
│   ├── cart.selectors.ts
│   └── contact.selectors.ts
│
├── support/
│   ├── commands.ts
│   ├── types.ts
│   └── e2e.ts
│
├── fixtures/
│
cypress.config.ts
package.json
tsconfig.json
```

---

## Zaimplementowane scenariusze testowe

### Autoryzacja użytkownika

1. Rejestracja nowego użytkownika
2. Logowanie poprawnymi danymi
3. Logowanie błędnymi danymi
4. Próba rejestracji istniejącego użytkownika

### Produkty

5. Wyświetlenie listy produktów
6. Wyszukiwanie produktu
7. Wyświetlenie szczegółów produktu

### Koszyk

8. Dodanie produktu do koszyka
9. Dodanie produktu z określoną ilością
10. Usunięcie produktu z koszyka

### Formularz kontaktowy

11. Wysłanie formularza Contact Us

---

## Własne komendy

Projekt wykorzystuje własne komendy Cypress:

### loginUser()

Logowanie użytkownika przy użyciu danych przekazanych jako obiekt.

### addProductToCart()

Dodawanie produktu do koszyka.

---

## Interfejsy TypeScript

### User

```ts
export interface User {
  name: string
  email: string
  password: string
}
```

### Product

```ts
export interface Product {
  name: string
  quantity: number
}
```

Interfejsy zostały wykorzystane do typowania parametrów własnych komend.

---

## Uruchomienie projektu

### Instalacja zależności

```bash
npm install
```

### Uruchomienie Cypress GUI

```bash
npx cypress open
```

### Uruchomienie testów w trybie headless

```bash
npm run cy:run
```

lub

```bash
npm run test:headless
```

---

## Wyniki

Projekt zawiera 11 przechodzących testów automatycznych.

Przykładowy wynik:

```text
11 passing
0 failing
```

---

## Autorzy

Projekt wykonany w ramach przedmiotu:

**Testowanie i Kontrola Jakości Oprogramowania**

Akademia Nauk Stosowanych WSEI
