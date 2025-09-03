# Příjem reklamací – statická webová aplikace

Jednoduchá statická aplikace, která načte data z JSONu (převedeného z Excelu) a po výběru kategorie zobrazí položky ze stejného sloupce.

## Struktura
```
/
├─ index.html
├─ style.css
├─ script.js
└─ prijem_reklamaci.json
```

## Nasazení na GitHub Pages (krok za krokem)

1. **Vytvoř nový veřejný repozitář** na GitHubu (např. `prijem-reklamaci-app`).
2. Nahraj do něj **všechny čtyři soubory** z této složky (`index.html`, `style.css`, `script.js`, `prijem_reklamaci.json`).
   - Na GitHubu klikni na **Add file → Upload files** a potvrď commit do větve `main`.
3. Otevři **Settings → Pages**.
   - V sekci **Build and deployment** nastav **Source: Deploy from a branch**.
   - **Branch:** `main` a **Folder:** `/ (root)` → **Save**.
4. GitHub Pages připraví stránku a zobrazí ti **odkaz** na vrchu sekce Pages.
   - URL bude ve tvaru `https://<tvoje-uživatelské-jméno>.github.io/<název-repa>/`.

> Tip: Chceš-li sdílet odkaz rovnou s vybranou kategorií, připoj ji jako **hash** do URL, např. `.../index.html#iPhone`.

## Lokální spuštění (volitelné)
Stačí otevřít `index.html` dvojklikem v prohlížeči.
