# 🚀 Schnellstart-Anleitung

## In 5 Minuten live auf GitHub Pages!

### ✅ Was du brauchst:
- GitHub Account (kostenlos auf github.com)
- Deine Team-Bilder (JPG oder PNG)
- Optional: Ein Team-Video

---

## 📋 Schritt 1: Repository erstellen

1. Gehe zu [github.com](https://github.com) → **New Repository**
2. Name: z.B. `tower-and-friends` oder `wings-for-life-team`
3. Setze auf **Public** ✓
4. Klicke **Create repository**

---

## 📤 Schritt 2: Code hochladen

### Variante A: Mit Git (empfohlen wenn installiert)
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/DEIN-USERNAME/DEIN-REPO.git
git push -u origin main
```

### Variante B: Ohne Git (einfach)
1. Alle Projektdateien in eine ZIP-Datei packen
2. Auf GitHub: **Add file** → **Upload files**
3. ZIP hochladen und entpacken

---

## 🖼️ Schritt 3: Bilder hochladen

1. Erstelle in GitHub den Ordner: `public/bilder/slide/`
2. Lade 3-5 Team-Bilder hoch
3. Benenne sie: `team1.jpg`, `team2.jpg`, etc.

**Tipp:** Bilder sollten Querformat haben (z.B. 1920x1080px)

---

## 🎥 Schritt 4: Video hochladen (optional)

1. Erstelle den Ordner: `public/video/`
2. Lade dein Video hoch: `team-video.mp4`
3. Maximale Größe: 100MB

**Alternative:** Video auf YouTube hochladen und später einbinden

---

## ⚙️ Schritt 5: Vite Config anpassen

Öffne die Datei `vite.config.ts` und füge diese Zeile hinzu:

```typescript
export default defineConfig({
  base: '/DEIN-REPO-NAME/',  // ← Trage hier deinen Repository-Namen ein!
  plugins: [
    // ...rest bleibt gleich
```

**Beispiel:** Wenn dein Repo `tower-and-friends` heißt:
```typescript
base: '/tower-and-friends/',
```

⚠️ **Wichtig:** Die Slashes `/` am Anfang und Ende nicht vergessen!

---

## 🌐 Schritt 6: GitHub Pages aktivieren

1. In deinem Repository: **Settings** → **Pages**
2. Unter "Build and deployment":
   - Source: **GitHub Actions** auswählen
3. Fertig! (wird automatisch gespeichert)

---

## 🎬 Schritt 7: Deployment starten

1. Pushe deine Änderung an `vite.config.ts`:
   ```bash
   git add vite.config.ts
   git commit -m "Set base URL"
   git push
   ```
   
   **ODER** über GitHub Web: Datei bearbeiten → Commit changes

2. Gehe zu **Actions** Tab
3. Warte bis der grüne Haken ✅ erscheint (ca. 2-3 Minuten)

---

## 🎉 Fertig!

Deine Seite ist jetzt live unter:
```
https://DEIN-USERNAME.github.io/DEIN-REPO-NAME/
```

---

## 🔧 Anpassungen vornehmen

### Text ändern
- Öffne `src/app/components/StorySection.tsx`
- Ändere Thomas' Geschichte
- Speichern & pushen → automatisches Re-Deployment

### Mehr/weniger Bilder
- Öffne `src/app/components/ImageSlideshow.tsx`
- Passe die Bilderliste an
- Speichern & pushen

### Farben ändern
- Standard ist Rot (Wings for Life Farbe)
- Änderbar in den einzelnen Komponenten-Dateien

---

## 💡 Tipps

- **Änderungen testen:** Nutze `pnpm dev` für lokale Vorschau
- **Probleme?** Schau in **Actions** → Failed Workflow → Logs
- **Bilder zu groß?** Komprimiere sie mit tinypng.com
- **Video zu groß?** Nutze handbrake.fr zum Komprimieren

---

## 📞 Häufige Fragen

**Q: Warum sehe ich nur "Bild 1", "Bild 2" usw.?**  
A: Bilder sind noch nicht hochgeladen oder falsch benannt.

**Q: Seite zeigt 404 Error**  
A: `base` URL in `vite.config.ts` nicht korrekt gesetzt.

**Q: Änderungen werden nicht angezeigt**  
A: Cache leeren (Strg+F5) oder im Inkognito-Modus öffnen.

**Q: Video spielt nicht ab**  
A: Nutze MP4 Format oder binde YouTube-Video ein.

---

## ✨ Viel Erfolg!

Bei weiteren Fragen: Siehe **DEPLOYMENT.md** für detaillierte Infos.

**Jetzt teile den Link mit deinem Team! 🏃‍♂️💪**
