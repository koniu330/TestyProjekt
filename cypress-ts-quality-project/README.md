# Projekt zaliczeniowy — Testy i kontrola jakości oprogramowania - Szymon Koń 15931

Testowana aplikacja: [Automation Exercise](https://www.automationexercise.com/)

# Co zawiera projekt?
Projekt spełnia wymagania zaliczeniowe:
- testy napisane w Cypress + TypeScript,
- 11 scenariuszy testowych e2e,
- minimum 2 własne komendy Cypress,
- interfejsy TypeScript opisujące strukturę danych,
- selektory zapisane w osobnych plikach,
- skrypt do uruchamiania testów w trybie headless

# Scenariusze:
1. Rejestracja nowego użytkownika.
2. Logowanie poprawnymi danymi po wcześniejszej rejestracji.
3. Próba logowania błędnymi danymi.
4. Próba rejestracji na istniejący adres e-mail.
5. Sprawdzenie listy produktów.
6. Wyszukiwanie produktu.
7. Sprawdzenie szczegółów produktu.
8. Dodanie produktu do koszyka przez własną komendę.
9. Dodanie produktu z wybraną ilością.
10. Usunięcie produktu z koszyka.
11. Wysłanie formularza Contact Us.

# Struktura katalogów
```txt
cypress/
 ├── e2e/
 │   ├── auth.cy.ts
 │   ├── products.cy.ts
 │   ├── cart.cy.ts
 │   └── contact.cy.ts
 ├── selectors/
 │   ├── auth.selectors.ts
 │   ├── cart.selectors.ts
 │   ├── contact.selectors.ts
 │   ├── navigation.selectors.ts
 │   └── product.selectors.ts
 ├── support/
 │   ├── commands.ts
 │   ├── e2e.ts
 │   └── types.ts
 └── fixtures/
     └── testData.json
```

# Własne komendy
W pliku `cypress/support/commands.ts` znajdują się własne komendy:

```ts
cy.loginUser(user) - logowanie użytkownika na podstawie obiektu typu `User`,
cy.registerUser(user)
cy.addProductToCart(product) - dodanie produktu na podstawie obiektu typu `Product`.
cy.submitContactForm(message)
cy.clearCartIfNeeded()
```

# Interfejsy TypeScript
Interfejsy znajdują się w pliku:
```txt
cypress/support/types.ts
```

Przykłady:
```ts
export interface User {
  name: string
  email: string
  password: string
}

export interface Product {
  id: number
  name: string
  quantity: number
}
```

# Instalacja
Po rozpakowaniu projektu należy uruchomić:

```bash
npm install
```
następnie:

```bash
npx cypress install
npx cypress open
```

Tryb interaktywny:

```bash
npm run cy:open
```

Tryb headless:

```bash
npm run test:headless
```

Alternatywnie można uruchomić skrypt:

Windows:

```bash
scripts/run-headless.bat
```

Linux/macOS:

```bash
./scripts/run-headless.sh
```

# Informacja dla prowadzącego

Projekt nie zawiera folderu `node_modules`. Zależności należy pobrać komendą `npm install`.
