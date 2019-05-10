---
title: "Julkaiseminen"
order: 8
---

## Ohjeet

### Git 

Git on versionhallintaohjelmisto, josta voit lukea lisää [täältä](https://git-scm.com/). 

Tee seuraavat komennot terminaalissa projektikansiossa:
```bash
git add .
git commit -m "Initial commit"
```

### Github

GitHub on verkkosivusto, joka tarjoaa paikan Git-versionhallintaa käyttäville ohjelmakehitysprojekteille. Git itsessään on komentoriviohjelma, jolle Github tarjoaa erään graafisen käyttöliittymän. Gitin lisäksi GitHub tarjoaa projekteille toimintoja kuten bugienseurannan, kehitystoiveet, tehtävien hallinta ja wiki. Lähde:  [Wikipedia](https://fi.wikipedia.org/wiki/GitHub)

Jos sinulla ei vielä ole tunnuksia [Githubiin](https://github.com), luo ne. 

Luo uusi projekti:

1. Mene [Githubiin](https://github.com)
2. Vasemmassa reunassa on otsikko "Repositories", jonka vieressä on vihreä painike "New". Klikkaa sitä.
3. Seuraavaksi aukeaa tällainen näkymä:
 
   ![New repository](https://raw.githubusercontent.com/codento/react-workshop/master/images/new_repository.png)

    - *Repository name* kohtaan täytä nimi projektille. Tämä voi olla sama, kuin tekemäsi React-projektin nimi
    - *Description*in voi jättää tyhjäksi
    - *Public* / *Private* -valinnasta valitaan, onko projekti näkyvissä kaikille, vai vain omistajalleen
    - *Initialize this repository with a README* jätä tämä valitsematta
4. Klikkaa "Create repository"


Tämän jälkeen aukeaa ohjeistus, jonka avulla saat koodisi koneeltasi GitHubiin. Teemme kohdan kaksi, "…or push an existing repository from the command line" mukaisesti, eli kopioi terminaaliin komennot, jotka kyseisen otsikon alta löytyvät.

Päivitä tämän jälkeen sivu. Nyt koodin koneeltasi pitäisi näkyä tällä sivulla. Pidä sivu auki, palaamme tähän hetken kuluttua.

## Github Pages

Avaa editorissa tiedosto `package.json`. Lisää kohdan 
```json
"browserslist": [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all"
]
```
jälkeen
```json
"browserslist": [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all"
],
"homepage": "https://myusername.github.io/my-app"
```
jossa korvaat **myusername**n omalla Github-tunnuksellasi, sekä **my-app**n Github-kohdassa antamallasi projektin nimellä. 

Asenna `gh-pages` ajamalla terminaalissa
```bash
npm install gh-pages
```

Muuta `package.json`in kohtaa
```json
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
},
```

muotoon:
```json
"scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
},
```

Aja terminaalissa komento

```bash
npm run deploy
```

Avaa sivu, joka jätettiin auki kohdan "Github" lopussa. Mene välilehdelle "Settings", ja scrollaa kohtaan "GitHub Pages". Varmista, että Sources-kohdassa on valittuna "gh-pages"-branch. 

Mene osoitteeseen, jonka määrittelit aikaisemmin kotisivuksi (muotoa "https://myusername.github.io/my-app"). Nauti kättesi jäljestä!

Onneksi olkoon, pääsit materiaalimme loppuun! 