import { defineConfig } from "tinacms";

// Konfiguracja dla hostowania na GitHub Pages
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

// Konfiguracja lokalna bez TinaCloud
const isLocal = !process.env.NEXT_PUBLIC_TINA_CLIENT_ID;

export default defineConfig({
  branch,

  // Dla lokalnego buildu bez TinaCloud
  // Aby używać TinaCloud, ustaw zmienne środowiskowe:
  // NEXT_PUBLIC_TINA_CLIENT_ID i TINA_TOKEN
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  // Definicja schematów treści
  schema: {
    collections: [
      // Kolekcja aktualności/wiadomości
      {
        name: "post",
        label: "Aktualności",
        path: "content/posts",
        format: "mdx",
        ui: {
          filename: {
            readonly: false,
            slugify: (values) => {
              return `${values?.title
                ?.toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^\w-]/g, "")}`;
            },
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Tytuł",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Data publikacji",
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Autor",
          },
          {
            type: "string",
            name: "category",
            label: "Kategoria",
            options: [
              "Zawody",
              "Spotkania",
              "Techniczne",
              "Łączności",
              "Dyplomy",
              "Szkolenia",
              "Inne",
            ],
          },
          {
            type: "image",
            name: "heroImage",
            label: "Zdjęcie główne",
          },
          {
            type: "string",
            name: "excerpt",
            label: "Krótki opis",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "boolean",
            name: "featured",
            label: "Wyróżniony na stronie głównej",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Treść",
            isBody: true,
            templates: [
              {
                name: "Callout",
                label: "Ważna informacja",
                fields: [
                  {
                    name: "type",
                    label: "Typ",
                    type: "string",
                    options: ["info", "warning", "success"],
                  },
                  {
                    name: "text",
                    label: "Treść",
                    type: "string",
                    ui: {
                      component: "textarea",
                    },
                  },
                ],
              },
              {
                name: "QSOTable",
                label: "Tabela QSO",
                fields: [
                  {
                    name: "title",
                    label: "Tytuł tabeli",
                    type: "string",
                  },
                  {
                    name: "data",
                    label: "Dane QSO (JSON)",
                    type: "string",
                    ui: {
                      component: "textarea",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      // Kolekcja stron statycznych
      {
        name: "page",
        label: "Strony",
        path: "content/pages",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Tytuł strony",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Opis SEO",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "heroImage",
            label: "Zdjęcie nagłówka",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Treść strony",
            isBody: true,
          },
        ],
      },
      // Ustawienia strony głównej
      {
        name: "homepage",
        label: "Strona główna",
        path: "content",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "homepage",
        },
        fields: [
          {
            type: "string",
            name: "heroTitle",
            label: "Tytuł główny",
          },
          {
            type: "string",
            name: "heroSubtitle",
            label: "Podtytuł",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "callsign",
            label: "Znak wywoławczy (do animacji)",
          },
          {
            type: "object",
            name: "quickLinks",
            label: "Szybkie linki",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Tytuł",
              },
              {
                type: "string",
                name: "url",
                label: "URL",
              },
              {
                type: "string",
                name: "icon",
                label: "Ikona (emoji)",
              },
            ],
          },
          {
            type: "object",
            name: "stats",
            label: "Statystyki",
            fields: [
              {
                type: "string",
                name: "members",
                label: "Liczba członków",
              },
              {
                type: "string",
                name: "clubs",
                label: "Liczba klubów",
              },
              {
                type: "string",
                name: "qsos",
                label: "Liczba QSO rocznie",
              },
            ],
          },
        ],
      },
      // Ustawienia globalne
      {
        name: "settings",
        label: "Ustawienia",
        path: "content",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "settings",
        },
        fields: [
          {
            type: "string",
            name: "siteName",
            label: "Nazwa strony",
          },
          {
            type: "string",
            name: "siteDescription",
            label: "Opis strony (SEO)",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "contact",
            label: "Dane kontaktowe",
            fields: [
              {
                type: "string",
                name: "address",
                label: "Adres",
              },
              {
                type: "string",
                name: "email",
                label: "Email",
              },
              {
                type: "string",
                name: "phone",
                label: "Telefon",
              },
            ],
          },
          {
            type: "object",
            name: "social",
            label: "Media społecznościowe",
            fields: [
              {
                type: "string",
                name: "facebook",
                label: "Facebook URL",
              },
              {
                type: "string",
                name: "youtube",
                label: "YouTube URL",
              },
              {
                type: "string",
                name: "twitter",
                label: "Twitter/X URL",
              },
            ],
          },
          {
            type: "object",
            name: "navigation",
            label: "Menu nawigacji",
            list: true,
            fields: [
              {
                type: "string",
                name: "label",
                label: "Etykieta",
              },
              {
                type: "string",
                name: "url",
                label: "URL",
              },
            ],
          },
        ],
      },
    ],
  },
});
