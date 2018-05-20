# web-frontend
Frontend nového webu je hostovaný na Google Cloudu a běží na tomto [linku](https://gug-web-public.appspot.com/).

### Instalace ###
Nejprve je potřeba nainstalovat si nodejs [podle návodu](https://nodejs.org/en/download/package-manager/).

Pokud se chcete zapojit do vývoje naklonujte si repozitář, spuštěním příkazu ve složce projektu.

```
git clone https://github.com/gugcz/web-frontend.git
```
Potom v adresáři s projektem spusťte instalaci balíčků

```
cd web-frontend
npm install
```

a pro vývoj použijte příkaz
```
npm run watch
```
Když vše projde, projekt bude dostupný na adrese [localhost:3001](http://localhost:3001)


Pro spuštění bez watcherů a browser-sync stačí
```
npm start:prod
```

### Deploy

#### Setup

Nainstalujte si [Google Cloud SDK](https://cloud.google.com/sdk/#Quick_Start)

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
