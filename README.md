# web-frontend
Frontend for new GUG.cz web

### Instalace ###

naklonujte si repozitář a v root složce projektu spusťte

```
npm install
```

pro vývoj použijte příkaz, projekt bude dostupný na adrese localhost:8080
```
npm run devel
```

pro spuštění bez watcherů a livereloadu stačí
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

Spusťte deploy
```
npm run deploy
```

_příkaz provede nastavení projektu a deploy, tedy nahrazuje následující dva příkazy:_

Nastavení projektu

```
gcloud config set project gug-web-frontend
```
Deploy

```
gcloud preview app deploy app.yaml --promote
```


