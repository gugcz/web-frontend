# web-frontend
Frontend for new GUG.cz web

### Instalace ###

naklonujte si repozitář a v root složce projektu spusťte

```
npm install
```

pro vývoj pak
```
npm start
```

### Deploy

#### Setup

Nainstalujte [Google Cloud SDK](https://cloud.google.com/sdk/#Quick_Start)

Nalogujte se do vašeho Google účtu (musíte mít přístup k webu)

```
gcloud auth login
```

Nainstalujte nutné komponenty:

```
gcloud components update app
```

Nastavte projekt

```
gcloud config set project gug-web-frontend
```

#### Deploy

```
gcloud preview app deploy app.yaml --promote
```
