# web-frontend
Frontend nového webu je hostovaný na Google Cloudu a běží na tomto [linku](https://gug-web-public.appspot.com/).

### Instalace
Nejprve je potřeba nainstalovat si Node [podle návodu](https://nodejs.org/en/download/package-manager/) nebo případně [Yarn](https://yarnpkg.com/en/).

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

Repozitář obsahuje Docker kontejner s PM2

```
yarn install
yarn run build

docker build -t gug-web-public .  

docker run -p 3000:3000 gug-web-public
```

Je zde nastavené CI/CD (externí pomocí webhook), které nejnovější verzi v `master` nasadí. 
