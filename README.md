# web-frontend
Frontend nového webu je hostovaný na Google Cloudu a běží na tomto [linku](https://gug-web-public.appspot.com/).

### Instalace ###

Pokud se chcete zapojit do vývoje naklonujte si repozitář, spuštěním příkazu ve složce projektu.

```
git clone https://github.com/gugcz/web-frontend.git
```
Potom v root složce projektu spusťte

```
npm install
```

a pro vývoj použijte příkaz
```
npm run devel
```
Když vše projde, projekt bude dostupný na adrese [localhost:8080](http://localhost:8080)


Pro spuštění bez watcherů a livereloadu stačí
```
npm start
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
