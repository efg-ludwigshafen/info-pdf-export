english | [german](LIESMICH.md)

# info-pdf-export

Exports PDFs for infos and birthdays in church services.

## getting started

First clone this repository:

```bash
git clone git@github.com:efg-ludwigshafen/info-pdf-export.git
```

Then go into the new directory and install all dependencies:

```bash
cd info-pdf-export && npm install
```

## developing locally

As the app is fully client-side you can simply open the `index.html` in your browser:

```bash
open index.html
```

You could also choose to use the included [http-server](https://github.com/indexzero/http-server)
to share the root folder:

```bash
npm run serve
open http://localhost:8080
```