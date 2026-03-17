# 🚀 Deployment-Anleitung für GitHub Pages

## Schritt-für-Schritt Anleitung

### 1️⃣ Repository auf GitHub erstellen

1. Gehe zu [github.com](https://github.com) und logge dich ein
2. Klicke auf **"New Repository"** (oder das **+** Symbol oben rechts)
3. Wähle einen Repository-Namen, z.B. `tower-and-friends`
4. Setze es auf **Public** (wichtig für GitHub Pages)
5. Klicke **"Create repository"**

### 2️⃣ Code hochladen

**Option A - Mit Git (empfohlen):**

```bash
# Im Projekt-Ordner
git init
git add .
git commit -m "Initial commit - Tower & Friends Landing Page"
git branch -M main
git remote add origin https://github.com/DEIN-USERNAME/DEIN-REPO-NAME.git
git push -u origin main
```

**Option B - Ohne Git (über GitHub Web Interface):**

1. Gehe zu deinem neuen Repository auf GitHub
2. Klicke auf **"uploading an existing file"**
3. Ziehe alle Dateien in das Upload-Feld
4. Klicke **"Commit changes"**

### 3️⃣ Bilder und Videos hochladen

1. Erstelle im Repository folgende Ordnerstruktur:
   ```
   public/
   ├── bilder/
   │   └── slide/
   │       ├── team1.jpg
   │       ├── team2.jpg
   │       └── ... (weitere Bilder)
   └── video/
       └── team-video.mp4
   ```

2. Lade deine Bilder in `public/bilder/slide/` hoch
3. Lade dein Video in `public/video/` hoch

**Tipp:** Du kannst Dateien direkt auf GitHub hochladen:
- Navigiere zum entsprechenden Ordner
- Klicke **"Add file"** → **"Upload files"**
- Ziehe deine Dateien rein

### 4️⃣ GitHub Pages aktivieren

1. Gehe in deinem Repository zu **Settings** (Einstellungen)
2. Klicke links auf **"Pages"**
3. Unter **"Build and deployment"**:
   - **Source**: Wähle **"GitHub Actions"**
4. Speichern (wird automatisch gespeichert)

### 5️⃣ Vite Config anpassen (WICHTIG!)

Bearbeite die Datei `vite.config.ts` und füge die `base` URL hinzu:

```typescript
export default defineConfig({
  base: '/DEIN-REPO-NAME/',  // ← Ersetze mit deinem Repository-Namen!
  plugins: [
    react(),
    tailwindcss(),
  ],
  // ... rest bleibt gleich
})
```

**Beispiel:** Wenn dein Repository `tower-and-friends` heißt:
```typescript
base: '/tower-and-friends/',
```

### 6️⃣ Deployment starten

1. Pushe die Änderungen an `vite.config.ts`:
   ```bash
   git add vite.config.ts
   git commit -m "Add base URL for GitHub Pages"
   git push
   ```

2. Gehe zu **Actions** in deinem Repository
3. Du solltest sehen, dass der Workflow **"Deploy to GitHub Pages"** läuft
4. Warte bis der grüne Haken erscheint ✅

### 7️⃣ Seite aufrufen

Deine Seite ist jetzt live unter:
```
https://DEIN-USERNAME.github.io/DEIN-REPO-NAME/
```

**Beispiel:**
```
https://thomas-mueller.github.io/tower-and-friends/
```

---

## 🔧 Häufige Probleme

### Problem: Seite zeigt 404 Error

**Lösung:** 
- Überprüfe ob die `base` URL in `vite.config.ts` korrekt gesetzt ist
- Sie muss mit `/` beginnen und enden, z.B. `/tower-and-friends/`

### Problem: Bilder werden nicht angezeigt

**Lösung:**
- Stelle sicher, dass Bilder im `public/bilder/slide/` Ordner liegen
- Dateinamen müssen genau mit denen in `ImageSlideshow.tsx` übereinstimmen
- Achte auf Groß-/Kleinschreibung!

### Problem: Workflow schlägt fehl

**Lösung:**
1. Gehe zu **Settings** → **Actions** → **General**
2. Unter "Workflow permissions" wähle **"Read and write permissions"**
3. Speichern und Workflow erneut starten

### Problem: Video spielt nicht ab

**Lösung:**
- Verwende MP4 Format (H.264 Codec)
- Datei sollte nicht größer als 100MB sein
- Alternativ: Lade Video auf YouTube hoch und binde es ein

---

## 📝 Checkliste vor dem Deployment

- [ ] Repository auf GitHub erstellt
- [ ] Alle Dateien hochgeladen
- [ ] Bilder in `public/bilder/slide/` hochgeladen
- [ ] Video in `public/video/` hochgeladen
- [ ] `vite.config.ts` mit korrekter `base` URL aktualisiert
- [ ] GitHub Pages auf "GitHub Actions" gesetzt
- [ ] Workflow erfolgreich durchgelaufen
- [ ] Seite im Browser getestet

---

## 🎉 Fertig!

Deine Landing Page sollte jetzt live sein. Teile den Link mit deinem Team und social Media!

**Bei Fragen oder Problemen:** Überprüfe die GitHub Actions Logs unter dem "Actions" Tab.

Viel Erfolg beim Wings for Life World Run! 🏃‍♂️💪
