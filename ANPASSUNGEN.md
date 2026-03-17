# 🎨 Anpassungen vornehmen

Diese Anleitung zeigt dir, wie du die Seite nach deinen Wünschen anpassen kannst.

---

## 📝 Text ändern

### Thomas' Geschichte bearbeiten

**Datei:** `src/app/components/StorySection.tsx`

```typescript
<p className="text-xl leading-relaxed text-gray-700 mb-6">
  <strong className="text-red-600">Hallo, ich bin Thomas</strong> – seit 2015 durch einen Motorradunfall querschnittgelähmt. 
  Aber das hat mich nicht gestoppt, sondern zu einer neuen Mission geführt.
</p>
```

→ Ändere den Text zwischen den `<p>` Tags

### Treffpunkt ändern

**Datei:** `src/app/components/StorySection.tsx`

```typescript
<p className="text-lg leading-relaxed mb-6">
  Jedes Jahr treffen wir uns in <strong>Simmern (Hunsrück)</strong> auf dem Schinderhannesradweg.
</p>
```

→ Ersetze "Simmern (Hunsrück)" und "Schinderhannesradweg" mit deinem Ort

### After-Party Details

**Datei:** `src/app/components/StorySection.tsx`

```typescript
<p className="text-lg leading-relaxed text-gray-700 mb-6">
  Dieses Jahr wird's besonders cool: Nach dem Lauf treffen wir uns am <strong className="text-red-600">Simmersee</strong> 
  zum gemeinsamen Grillen, Feiern und Genießen!
</p>
```

→ Ändere "Simmersee" und weitere Details

---

## 🖼️ Bilder anpassen

### Anzahl der Slideshow-Bilder ändern

**Datei:** `src/app/components/ImageSlideshow.tsx`

```typescript
const SLIDESHOW_IMAGES = [
  "/bilder/slide/team1.jpg",
  "/bilder/slide/team2.jpg",
  "/bilder/slide/team3.jpg",
  "/bilder/slide/team4.jpg",
  "/bilder/slide/team5.jpg",
];
```

**Mehr Bilder hinzufügen:**
```typescript
const SLIDESHOW_IMAGES = [
  "/bilder/slide/team1.jpg",
  "/bilder/slide/team2.jpg",
  "/bilder/slide/team3.jpg",
  "/bilder/slide/team4.jpg",
  "/bilder/slide/team5.jpg",
  "/bilder/slide/team6.jpg",  // ← Neu
  "/bilder/slide/team7.jpg",  // ← Neu
];
```

**Weniger Bilder:**
```typescript
const SLIDESHOW_IMAGES = [
  "/bilder/slide/team1.jpg",
  "/bilder/slide/team2.jpg",
  "/bilder/slide/team3.jpg",
];
```

### Slideshow-Geschwindigkeit ändern

**Datei:** `src/app/components/ImageSlideshow.tsx`

```typescript
const settings = {
  autoplaySpeed: 4000,  // ← Zeit in Millisekunden (4000 = 4 Sekunden)
  speed: 1000,          // ← Übergangsgeschwindigkeit
};
```

---

## 🎥 Video anpassen

### Video-Pfad ändern

**Datei:** `src/app/components/VideoSection.tsx`

```typescript
<source src="/video/team-video.mp4" type="video/mp4" />
```

→ Ändere "team-video.mp4" zu deinem Dateinamen

### YouTube Video einbinden

**Datei:** `src/app/components/VideoSection.tsx`

Ersetze das `<video>` Element mit:

```typescript
<div className="aspect-video">
  <iframe
    width="100%"
    height="100%"
    src="https://www.youtube.com/embed/DEIN-VIDEO-ID"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    className="w-full h-full"
  ></iframe>
</div>
```

---

## 📊 Statistiken aktualisieren

### Team-Zahlen ändern

**Datei:** `src/app/components/StorySection.tsx`

```typescript
<p className="text-lg font-semibold text-gray-900">
  2025: 55 aktive Läufer · Über 2.000 € Spenden · 100% für die Forschung
</p>
```

→ Aktualisiere die Zahlen für dein Jahr

**Datei:** `src/app/components/FactsSection.tsx`

```typescript
{
  icon: TrendingUp,
  title: "Unser Impact 2025",
  description: "55 aktive Läufer und über 2.000 € Spenden - gemeinsam sind wir stark!",
},
```

---

## 🎨 Farben ändern

### Wings for Life Rot beibehalten (empfohlen)

Aktuell verwendet die Seite das offizielle Wings for Life Rot (`#dc2626`).

### Farbe komplett ändern

Suche und ersetze in allen Dateien:
- `red-600` → `blue-600` (für Blau)
- `red-700` → `blue-700`
- `red-100` → `blue-100`
- `red-50` → `blue-50`

**Tipp:** Nutze die Suchen & Ersetzen Funktion deines Editors

---

## 🔗 Team-Link ändern

### Wenn du einen neuen Team-Link hast

Suche in allen Dateien nach:
```
https://www.wingsforlifeworldrun.com/de/teams/5dpLP5?join=1
```

Ersetze mit deinem neuen Link.

**Betroffen sind:**
- `src/app/components/Hero.tsx`
- `src/app/components/CTASection.tsx`
- `src/app/components/Footer.tsx`

---

## ⚙️ Technische Anpassungen

### Mehr Facts hinzufügen

**Datei:** `src/app/components/FactsSection.tsx`

```typescript
const facts = [
  {
    icon: Heart,  // Icon von lucide-react
    title: "Dein Titel",
    description: "Deine Beschreibung",
  },
  // ... weitere Facts
];
```

Verfügbare Icons siehe: [Lucide Icons](https://lucide.dev/icons/)

### Scroll-Animationen anpassen

**Datei:** Jede Component mit `motion.`

```typescript
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}  // ← Geschwindigkeit
>
```

**Parameter:**
- `duration`: Animationsdauer in Sekunden
- `delay`: Verzögerung vor Start
- `y`: Vertikale Bewegung in Pixel

---

## 🚫 Section entfernen

Du möchtest eine Section nicht haben? Auskommentieren oder löschen in `App.tsx`:

```typescript
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ImageSlideshow />
      {/* <CTASection variant="secondary" /> */}  ← Auskommentiert
      <FactsSection />
      // ... rest
    </div>
  );
}
```

---

## ➕ Section hinzufügen

### Neue Komponente erstellen

1. Erstelle Datei: `src/app/components/MeineSection.tsx`

```typescript
export function MeineSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">
          Meine Überschrift
        </h2>
        <p className="text-lg text-center">
          Mein Inhalt
        </p>
      </div>
    </section>
  );
}
```

2. In `App.tsx` importieren und einfügen:

```typescript
import { MeineSection } from "./components/MeineSection";

export default function App() {
  return (
    <div>
      {/* ... andere Sections */}
      <MeineSection />  {/* ← Neu hinzugefügt */}
      {/* ... */}
    </div>
  );
}
```

---

## 💾 Änderungen speichern

Nach jeder Änderung:

1. **Lokal testen:**
   ```bash
   pnpm dev
   ```
   Öffne `http://localhost:5173`

2. **Commiten & Pushen:**
   ```bash
   git add .
   git commit -m "Beschreibung der Änderung"
   git push
   ```

3. **Warten auf Deployment:**
   - Gehe zu GitHub → Actions Tab
   - Warte auf grünen Haken ✅
   - Seite neu laden (evtl. Cache leeren: Strg+F5)

---

## 🆘 Hilfe bei Fehlern

**Seite wird nicht aktualisiert?**
- Cache leeren: Strg+F5 (Windows) / Cmd+Shift+R (Mac)
- Im Inkognito-Modus öffnen

**Build schlägt fehl?**
- Prüfe GitHub Actions Logs
- Syntax-Fehler in den geänderten Dateien?
- Fehlende Import-Statements?

**Lokale Vorschau funktioniert nicht?**
```bash
# Dependencies neu installieren
pnpm install

# Dev-Server neu starten
pnpm dev
```

---

## ✅ Best Practices

- ✅ Immer lokal testen vor dem Pushen
- ✅ Kleine, inkrementelle Änderungen
- ✅ Aussagekräftige Commit-Messages
- ✅ Backup vor großen Änderungen
- ✅ Wings for Life Branding respektieren

---

**Viel Spaß beim Anpassen! 🎨**
