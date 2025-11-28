This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Brief:

Twoim wyzwaniem jest zbudowanie aplikacji z fiszkami i dopracowanie jej wyglądu tak, aby jak najbardziej odpowiadała projektowi.

Możesz użyć dowolnych narzędzi, które pomogą Ci ukończyć wyzwanie. Jeśli więc masz coś, co chciałbyś przećwiczyć, śmiało spróbuj.

Dostarczamy dane w data.json pliku lokalnym, co pozwala na uzupełnienie zawartości przy pierwszym załadowaniu. Jeśli chcesz pójść o krok dalej, możesz rozwinąć to jako aplikację full-stack.

Twoi użytkownicy powinni mieć możliwość:

Zarządzanie fiszkami
Utwórz nowe fiszki z pytaniem, odpowiedzią i kategorią
Edytuj istniejące fiszki, aby zaktualizować ich szczegóły
Usuń fiszki, których już nie potrzebujesz
Wyświetl komunikaty dotyczące walidacji formularza podczas próby przesłania karty bez wypełnienia wszystkich pól
Wyświetl wszystkie fiszki w układzie siatki
Zobacz szczegóły fiszki, w tym pytanie, odpowiedź, kategorię i postęp w opanowaniu materiału
Tryb nauki
Ucz się fiszek pojedynczo w trybie nauki
Kliknij na fiszkę, aby wyświetlić odpowiedź
Oznacz fiszkę jako znaną, klikając „Wiem to”, aby śledzić postępy w opanowaniu materiału
Poruszaj się między fiszkami za pomocą przycisków Poprzedni i Następny
Zobacz, którą kartę aktualnie przeglądają (np. „Karta 1 z 40”)
Śledź postępy w opanowaniu każdej karty w skali od 0 do 5
Zresetuj postęp na fiszce, aby zacząć uczyć się od nowa
Filtrowanie i organizacja
Filtruj fiszki, wybierając jedną lub wiele kategorii
Zobacz liczbę kart w każdej kategorii w rozwijanym menu filtrów
Ukryj karty, które opanowałeś, aby skupić się na kartach, które wciąż wymagają przećwiczenia
Przetasuj fiszki, aby ustalić losową kolejność nauki
Statystyki i postęp
Wyświetl statystyki nauki, pokazujące całkowitą liczbę kart, kart opanowanych, w trakcie nauki i kart nierozpoczętych
Interfejs użytkownika i nawigacja
Przełączaj się między trybem nauki a widokiem wszystkich kart
Załaduj więcej fiszek podczas przeglądania pełnej listy kart zawierającej więcej niż 12 kart
Zobacz wiadomość typu toast, gdy karta zostanie utworzona, zaktualizowana lub usunięta
Zobacz optymalny układ interfejsu w zależności od rozmiaru ekranu swojego urządzenia
Zobacz stany najechania kursorem i skupienia dla wszystkich interaktywnych elementów na stronie
Poruszaj się po całej aplikacji, używając wyłącznie klawiatury