# info-pdf-export
PDF Export für die Infos im Gottesdienst und Geburtstage

## Installation

Zunächst dieses Repository clonen:

```bash
git clone git@github.com:efg-ludwigshafen/info-pdf-export.git
```

Dann in den Ordner begeben und Dependencies installieren:

```bash
cd info-pdf-export && npm install
```

## Lokal ausführen

Die app ist rein client-seitig, kann also einfach im Browser geöffnet werden.
Dazu wahlweise die `index.html` mit dem Browser öffnen:

```bash
open index.html
```

oder mit dem als Dependency heruntergeladenen [http-server](https://github.com/indexzero/http-server)
den Root-Ordner sharen:

```bash
npm run serve
open http://localhost:8080
```