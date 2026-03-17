# Public Assets Ordner

Hier kommen alle Bilder und Videos rein, die auf der Webseite angezeigt werden.

## 📂 Ordnerstruktur

```
public/
├── bilder/
│   └── slide/          ← Team-Bilder für die Slideshow
│       ├── team1.jpg
│       ├── team2.jpg
│       ├── team3.jpg
│       ├── team4.jpg
│       └── team5.jpg
│
└── video/              ← Team-Video
    ├── team-video.mp4
    └── thumbnail.jpg   (optional)
```

## 🖼️ Bilder hochladen

### Empfohlene Spezifikationen:

**Slideshow-Bilder:**
- **Format:** JPG oder PNG
- **Größe:** 1920x1080px (Full HD, Querformat)
- **Dateigröße:** < 2MB pro Bild
- **Anzahl:** 3-10 Bilder

**Beispiel gute Bilder:**
- Team beim gemeinsamen Start
- Läufer in Action
- Gruppe am Treffpunkt
- After-Run Celebration
- Team-Gruppenfoto

### Dateinamen:
```
team1.jpg
team2.jpg
team3.jpg
...
```

💡 **Tipp:** Komprimiere große Bilder mit [TinyPNG.com](https://tinypng.com)

---

## 🎥 Video hochladen

### Empfohlene Spezifikationen:

**Team-Video:**
- **Format:** MP4 (H.264 Codec)
- **Größe:** 1920x1080px oder 1280x720px
- **Dateigröße:** < 100MB
- **Länge:** 30 Sekunden - 2 Minuten

**Dateiname:**
```
team-video.mp4
```

### Alternative: YouTube

Wenn dein Video zu groß ist:
1. Lade es auf YouTube hoch
2. Kopiere den Embed-Code
3. Ersetze in `VideoSection.tsx` das `<video>` Tag mit dem YouTube iframe

---

## 📝 Mehr Bilder hinzufügen?

1. Lade neue Bilder in `public/bilder/slide/` hoch
2. Öffne `src/app/components/ImageSlideshow.tsx`
3. Füge den Dateinamen zur Liste hinzu:

```typescript
const SLIDESHOW_IMAGES = [
  "/bilder/slide/team1.jpg",
  "/bilder/slide/team2.jpg",
  "/bilder/slide/team3.jpg",
  "/bilder/slide/team4.jpg",
  "/bilder/slide/team5.jpg",
  "/bilder/slide/team6.jpg",  // ← Neu hinzugefügt
];
```

---

## ⚠️ Wichtig

- **Keine persönlichen Daten** in Dateinamen (Namen werden in der URL sichtbar)
- **Copyright beachten** - nur eigene Bilder verwenden
- **Komprimieren** - Große Dateien verlangsamen die Webseite
- **Testen** - Lokal mit `pnpm dev` prüfen ob alles funktioniert

---

## ✅ Checkliste

- [ ] Mindestens 3 Team-Bilder hochgeladen
- [ ] Bilder sind komprimiert (< 2MB)
- [ ] Dateinamen korrekt (team1.jpg, team2.jpg, ...)
- [ ] Optional: Video hochgeladen (< 100MB)
- [ ] Lokal getestet mit `pnpm dev`

---

**Bereit zum Deployen? Siehe [SCHNELLSTART.md](../SCHNELLSTART.md)**
