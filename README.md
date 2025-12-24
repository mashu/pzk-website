# 📡 Strona PZK - Polski Związek Krótkofalowców

Profesjonalna strona internetowa dla Polskiego Związku Krótkofalowców zbudowana z użyciem **Next.js** i **TinaCMS** z hostingiem na **GitHub Pages**.

![PZK Website](https://img.shields.io/badge/PZK-Website-00ff88?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge)
![TinaCMS](https://img.shields.io/badge/TinaCMS-2.x-blue?style=for-the-badge)

## ✨ Funkcjonalności

- 🎨 **Profesjonalny design** - ciemny motyw inspirowany sprzętem radiowym
- 📱 **Responsywność** - działa na wszystkich urządzeniach
- ✏️ **Edytor WYSIWYG** - łatwa edycja treści przez TinaCMS
- 📰 **System aktualności** - publikowanie wiadomości z kategoriami
- 📄 **Strony statyczne** - pełna kontrola nad treścią
- 🚀 **GitHub Pages** - darmowy hosting z automatycznym deployem
- ⚡ **Szybkość** - statyczny export = błyskawiczne ładowanie

## 🚀 Szybki start

### Wymagania

- Node.js 18+ 
- Konto GitHub
- Konto na [Tina Cloud](https://app.tina.io/) (darmowe)

### 1. Sklonuj repozytorium

```bash
git clone https://github.com/twoje-konto/pzk-website.git
cd pzk-website
```

### 2. Zainstaluj zależności

```bash
npm install
```

### 3. Skonfiguruj TinaCMS

1. Wejdź na [app.tina.io](https://app.tina.io/)
2. Zaloguj się przez GitHub
3. Utwórz nowy projekt i połącz go z repozytorium
4. Skopiuj **Client ID** i **Token**

### 4. Utwórz plik `.env.local`

```bash
cp .env.example .env.local
```

Wypełnij danymi z Tina Cloud:

```env
NEXT_PUBLIC_TINA_CLIENT_ID=twoj_client_id
TINA_TOKEN=twoj_token
```

### 5. Uruchom lokalnie

```bash
npm run dev
```

Strona będzie dostępna na `http://localhost:3000`
Panel edycji TinaCMS: `http://localhost:3000/admin`

## 📝 Jak edytować treść

### Przez panel TinaCMS (zalecane)

1. Wejdź na `/admin` (lokalnie lub na produkcji)
2. Zaloguj się kontem GitHub
3. Edytuj treści w wizualnym edytorze
4. Zmiany są automatycznie zapisywane do repozytorium

### Bezpośrednio w plikach

Pliki treści znajdują się w katalogu `content/`:

```
content/
├── homepage.json      # Ustawienia strony głównej
├── settings.json      # Ustawienia globalne
├── posts/             # Aktualności (pliki .mdx)
└── pages/             # Strony statyczne (pliki .mdx)
```

## 🌐 Deploy na GitHub Pages

### Automatyczny (zalecany)

1. **Włącz GitHub Pages** w ustawieniach repozytorium:
   - Settings → Pages → Source: **GitHub Actions**

2. **Dodaj sekrety** w repozytorium:
   - Settings → Secrets and variables → Actions
   - Dodaj: `TINA_CLIENT_ID` i `TINA_TOKEN`

3. **Push do main** - strona zostanie automatycznie zdeployowana

### Ręczny

```bash
npm run export
```

Pliki statyczne będą w katalogu `out/`.

## 🔧 Konfiguracja

### Zmiana domeny

Jeśli strona jest hostowana w podkatalogu (np. `username.github.io/pzk-website`), odkomentuj w `next.config.js`:

```js
basePath: '/pzk-website',
assetPrefix: '/pzk-website/',
```

### Dodawanie nowych stron

1. Utwórz plik w `pages/` (np. `pages/nowa-strona.tsx`)
2. Lub dodaj plik `.mdx` w `content/pages/` i edytuj przez TinaCMS

### Modyfikacja schematu treści

Schemat TinaCMS znajduje się w `tina/config.ts`. Możesz:
- Dodawać nowe kolekcje
- Modyfikować pola
- Dodawać komponenty do edytora rich-text

## 📁 Struktura projektu

```
pzk-website/
├── components/          # Komponenty React
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── NewsCard.tsx
│   └── QuickLinks.tsx
├── content/            # Treści (edytowane przez TinaCMS)
│   ├── homepage.json
│   ├── settings.json
│   ├── posts/
│   └── pages/
├── pages/              # Strony Next.js
│   ├── index.tsx
│   ├── aktualnosci/
│   ├── o-nas.tsx
│   └── kontakt.tsx
├── styles/             # Style CSS
│   └── globals.css
├── tina/               # Konfiguracja TinaCMS
│   └── config.ts
├── public/             # Pliki statyczne
│   └── images/
└── .github/workflows/  # GitHub Actions
    └── deploy.yml
```

## 🎨 Personalizacja designu

### Kolory

Zmień zmienne CSS w `styles/globals.css`:

```css
:root {
  --color-accent-green: #00ff88;  /* Główny akcent */
  --color-accent-blue: #00d4ff;   /* Drugi akcent */
  --color-bg-primary: #0a0e14;    /* Tło główne */
}
```

### Fonty

Projekt używa:
- **Orbitron** - dla nagłówków (styl techno/radiowy)
- **Inter** - dla tekstu
- **JetBrains Mono** - dla kodu i znaków wywoławczych

## 🆘 Rozwiązywanie problemów

### "TinaCMS nie generuje plików"

```bash
rm -rf tina/__generated__
npm run dev
```

### "Strona nie buduje się na GitHub"

1. Sprawdź czy sekrety są poprawnie dodane
2. Sprawdź logi w zakładce Actions

### "Style się nie ładują"

Upewnij się, że `basePath` w `next.config.js` jest poprawny dla twojej domeny.

## 📞 Kontakt

- **Email**: sekretariat@pzk.org.pl
- **Strona**: [pzk.org.pl](https://pzk.org.pl)

## 📄 Licencja

MIT License - możesz swobodnie używać i modyfikować.

---

**73 de PZK** 📡
