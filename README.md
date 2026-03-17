# Tower & Friends - Wings for Life World Run Landing Page

Eine moderne, scrollbare Landing Page für das Team "Tower & Friends" beim Wings for Life World Run.

## 🚀 Live auf GitHub Pages deployen

### 1. Vorbereitung

Erstelle folgende Ordnerstruktur in deinem GitHub Repository im `public` Ordner:

```
public/
├── bilder/
│   └── slide/
│       ├── team1.jpg
│       ├── team2.jpg
│       ├── team3.jpg
│       ├── team4.jpg
│       └── team5.jpg
└── video/
    ├── team-video.mp4
    └── thumbnail.jpg (optional)
```

### 2. Bilder hochladen

1. Lade deine Team-Bilder in den Ordner `public/bilder/slide/` hoch
2. Benenne sie `team1.jpg`, `team2.jpg`, etc. (oder passe die Namen in `ImageSlideshow.tsx` an)
3. Lade dein Team-Video in den Ordner `public/video/` hoch

### 3. GitHub Pages aktivieren

1. Gehe zu deinem GitHub Repository
2. Klicke auf **Settings** → **Pages**
3. Unter "Build and deployment" wähle:
   - **Source**: GitHub Actions
4. Erstelle eine Datei `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8
          
      - name: Install dependencies
        run: pnpm install
        
      - name: Build
        run: pnpm build
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{steps.deployment.outputs.page_url}}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 4. Vite Config anpassen

Die `vite.config.ts` sollte bereits korrekt konfiguriert sein. Falls nicht, stelle sicher dass die `base` URL richtig gesetzt ist:

```typescript
export default defineConfig({
  base: '/DEIN-REPO-NAME/',
  // ... rest der config
});
```

### 5. Deploy

1. Pushe alle Änderungen zu GitHub:
   ```bash
   git add .
   git commit -m "Initial deployment"
   git push origin main
   ```

2. GitHub Actions wird automatisch die Seite bauen und deployen

3. Deine Seite ist dann erreichbar unter:
   ```
   https://DEIN-USERNAME.github.io/DEIN-REPO-NAME/
   ```

## 📁 Projektstruktur

```
src/
├── app/
│   ├── components/
│   │   ├── Hero.tsx              # Header mit Logo & Team Name
│   │   ├── ImageSlideshow.tsx    # Bild-Slideshow
│   │   ├── FactsSection.tsx      # Wings for Life Fakten
│   │   ├── VideoSection.tsx      # Video-Einbindung
│   │   ├── StorySection.tsx      # Thomas' Geschichte
│   │   ├── CTASection.tsx        # Call-to-Action Buttons
│   │   └── Footer.tsx            # Footer
│   └── App.tsx                   # Haupt-Komponente
└── styles/                       # CSS & Tailwind
```

## 🎨 Anpassungen

### Slideshow-Bilder ändern

Bearbeite `src/app/components/ImageSlideshow.tsx`:

```typescript
const SLIDESHOW_IMAGES = [
  "/bilder/slide/dein-bild-1.jpg",
  "/bilder/slide/dein-bild-2.jpg",
  // ... mehr Bilder
];
```

### Video-Pfad ändern

Bearbeite `src/app/components/VideoSection.tsx`:

```typescript
<source src="/video/dein-video.mp4" type="video/mp4" />
```

### Team-Link aktualisieren

Der Link ist bereits in mehreren Komponenten eingebaut. Falls du ihn ändern möchtest, suche nach:
```
https://www.wingsforlifeworldrun.com/de/teams/5dpLP5?join=1
```

## 🛠️ Lokale Entwicklung

```bash
# Dependencies installieren
pnpm install

# Dev-Server starten
pnpm dev

# Build für Produktion
pnpm build
```

## 📱 Features

- ✅ Vollständig responsive (Mobile & Desktop)
- ✅ Moderne Scroll-Animationen mit Motion
- ✅ Automatische Bild-Slideshow
- ✅ Video-Integration
- ✅ Mehrere Call-to-Action Buttons beim Scrollen
- ✅ Optimierte Performance
- ✅ SEO-freundlich

## 🎯 Verwendete Technologien

- React 18
- Tailwind CSS v4
- Motion (Framer Motion)
- React Slick (Slideshow)
- Lucide React (Icons)
- Vite (Build Tool)

## 📝 Lizenz

Erstellt für Tower & Friends - Wings for Life World Run Team

---

**Viel Erfolg beim Wings for Life World Run! 🏃‍♂️💪**
