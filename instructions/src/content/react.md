---
title: React
order: 2
---

## Mikä on React.js

React.js on yksi maailman suosituimmista työkaluista modernien web-käyttöliittymien kehittämiseen. React on ns. JavaScript-kirjasto, eli kokoelma työkaluja, jotka helpottavat selainpohjaisten sovellusten kehittämistä.
                                               
Reactin suosioon on edesauttanut sen komponenttipohjainen lähestymistapa, jolla monimutkaisetkin web-palvelut voidaan rakentaa yksinkertaisemmista palasista. React-sovellusta kannattaakin ajatella eräänlaisena Lego-linnana, jota rakennetaan pieni pala kerrallaan.

React sisältää myös erilaisia työkaluja tilanhallintaa varten. Jokaisella React-komponentilla on oma sisäinen tilansa, jonka muuttuessa sivulla näytettävä tieto päivittyy automaattisesti ilman sivun uudelleenlatausta, jolloin sivustosta tulee ns. dynaaminen.

Alkujaan React on Facebookin omaan käyttöönsä kehittämä, mutta se julkaistiin kaikkien käytettäväksi vuonna 2013.  Nykyään Reactin ympärille on kehittynyt laaja kirjo lisäosia ja oppimateriaalia, joka on toistaiseksi sementoinut Reactin aseman alati muuttuvassa web-devauksen maailmassa.

## Alkuaskeleet
Miten Reactin kanssa sitten oikein pääsee alkuun? Uuden React-sovelluksen voi aloittaa joko täysin tyhjästä, tai käyttää valmista pohjaa. Tyhjästä aloittaminen antaa paremmat valmiudet hallita sovelluksen jokaista yksityiskohtaa, ja ymmärryksen syventämiseksi on kenties suositeltavaa kokeilla pystyttää pieni sovellus alusta alkaen itse sitten kun React alkaa olla tuttu. Useimmiten on kuitenkin perusteltua käyttää valmista pohjaa, esimerkiksi _create-react-app_:in avulla.

### create-react-app
_create-react-app_ on ohjelma, joka luo standardipohjan React-sovellusten kehitykseen. Se luo uuden hakemiston, asentaa Reactin välttämättömät riippuvuudet ja luo esimerkkisovelluksen, jonka voi käynnistää heti. _create-react-app_:iin viitataan usein kirjainyhdistelmällä _CRA_. _CRA_:ta käytetään usein myös oikeissa asiakasprojekteissa.

### Ensimmäinen sovellus
Luo uusi React-sovellus _CRA_:n avulla. Avaa komentorivi, ja anna komento:
```bash
npx create-react-app karvakuonot
```
> Komennon viimeinen osa _karvakuonot_ on luotavan sovelluksen nimi; voit itse päättää mikä sovelluksesi nimi on, mutta jos muutat sen, muista korvata _karvakuonot_ päättämälläsi nimellä myös myöhemmin materiaalissa.

Komennon suoritus kestää hetken, kun React ladataan ja sovellus alustetaan. Kun komento on valmis, siirry komentorivillä sovelluksen hakemistoon `karvakuonot` komennolla:
```bash
cd karvakuonot
```

Joissakin CRA:n versioissa projektihakemistoon luodaan automaattisesti tiedosto `yarn.lock`. `yarn` ja `npm` ovat ns. paketinhallintatyökaluja, joilla projekteihin asennetaan erilaisia kirjastoja. Käytetään tällä kertaa `npm`:ää, koska se tulee Node.js:än mukana valmiina. Näin ollen, mikäli hakemistossasi on tiedosto `yarn.lock`, niin poista se välttääksesi mahdolliset konfliktit eri paketinhallintatyökalujen välillä.

Viimeiseksi vielä ennen sovelluksen käynnistämistä asennetaan projektin tarvitsemat kirjastot komennolla ajamalla terminaalissa
```bash
npm install
```
Tätä komentoa ei tarvitse kirjoittaa jokaisella käynnistyskerralla. Vain silloin, jos projektiin on lisätty ulkoisia kirjastoja lisää. Komento lisää automaattisesti tiedoston `package-lock.json`, jota ei tarvitse poistaa.

Nyt voimme käynnistää sovelluksen komennolla
```bash
npm start
```

Komento käynnistää sovelluksen, ja hetken kuluttua sovelluksen voi avata osoitteessa http://localhost:3000 (huom: selain saattaa myös avata sivun automaattisesti komennon yhteydessä).

Sammuta sovellus komentoriviltä painamalla Ctrl-C näppäinyhdistelmää (Macilla paina Cmd-C).

### Sovelluspohja
CRA:n luoma sovelluspohja sisältää muutamia tiedostoja ja hakemistoja. Emme käsittele tässä yhteydessä tiedostoja `README.md`, `package.json`, tai `yarn.lock`. Myös `node_modules`-hakemiston voi jättää huomiotta tässä vaiheessa.
> Mitä nämä tiedostot oikein ovat? `package.json`, `yarn.lock` ja `node_modules` sisältävät tietoa sovelluksen riippuvuuksista. `README.md` on osa sovelluksesi dokumentaatiota, jonne voi vapaasti kirjoittaa esimerkiksi mikä sovellus on ja miten sen saa käynnistettyä.

Tärkeimmät tiedostot sovelluksen kannalta sijaitsevat `public`- ja erityisesti `src`-hakemistossa. `public`-hakemisto sisältää "perinteisen" HTML-sivun, jonka ainoa tehtävä on käytännössä ladata sovellus selaimeen. `src`-hakemisto sisältää itse sovelluksen koodin. Tutustumme `src`-hakemiston sisältöön tarkemmin seuraavaksi.

### Sovelluspohjan siistiminen
Koska CRA pyrkii luomaan standardimallin React-sovelluksesta, se luo muutamia tiedostoja joita ei kurssilla käytetä ja jotka selkeyden vuoksi voi yksinkertaisesti poistaa.

Poista sovelluksen hakemistosta `src/` tiedostot `serviceWorker.js`, `logo.svg` ja `App.css`.
> Miksi nämä tiedostot poistetaan? Tiedostot `logo.svg` ja `App.css` liittyvät CRA:n luomaan esimerkkisovellukseen, eikä niille ole meidän sovelluksessa tarvetta. `serviceWorker.js` on apuväline edistyneempien toiminnallisuuksien tarjoamiseen jota ei usein tarvita.
>

Kun olet poistanut tiedostot, kokeile käynnistää sovellus uudestaan komennolla `npm start`. Huomaat, että sovellus ei enää toimikaan vaan selaimessa näkyy virhe _Failed to compile_. Tämä johtuu siitä, että React on melko tarkka virheiden suhteen, ja poistamalla tiedostoja jokin sovelluksessa on mennyt rikki.

### Sovelluksen korjaaminen
Toistaiseksi sovellus ei toimi, sillä tiedostoja joita Reactin esimerkkisovellus haluaisi käyttää on poistettu. Sovelluksen voi korjata muokkaamalla esimerkkisovellusta. Aloitamme siis koodauksen!

Avaa hakemisto `karvakuonot` valitsemaasi tekstieditoriin ja avaa sieltä tiedosto `src/index.js`. Tiedosto näyttää tältä:
```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```

Ensimmäiset kaksi riviä tuovat `React`in ja `ReactDOM`in tiedostoon, joita tarvitaan Reactia varten. Seuraava rivi tuo tyylitiedoston `index.css`, jonka sisältö liitetään osaksi sovellusta. Seuraavaksi, rivillä 4, tuodaan `App` tiedostosta `'./App'`. Katsomme kohta mikä `App` on, mutta tässä vaiheessa riittää tietää että se on React-sovelluksemme juurikomponentti, eli aloituspiste sovellukselle.

Rivillä 5 yritetään tuoda `serviceWorker` tiedostosta `'./serviceWorker'`, mutta kyseinen tiedosto on juuri poistettu. Tilanne korjantuu poistamalla rivi 5 kokonaan, sillä `serviceWorker`iahan ei voi tuoda jos sitä ei ole olemassa. Tämän lisäksi poistetaan viimeisen rivin `serviceWorker.unregister();` ja kommenttirivit sitä ennen, samasta syystä että `serviceWorker`ia ei ole enää olemassa. Tiedosto näyttää nyt siis tältä:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

> `ReactDOM.render` on Reactin tarjoama JavaScript-funktio, joka liittää sovelluksen osaksi web-sivua. Se on välttämätön osa React-sovellusta, mutta siitä riittää tietää että sen on oltava olemassa. Tässä tapauksessa React-komponentti `App` liitetään HTML-elementtiin jolla on id _root_. Tämä HTML-elementti löytyy tiedostosta `public/index.html`.

Avaa seuraavaksi tiedosto `src/App.js` tekstieditoriin. Tiedosto näyttää tältä:
```js
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
```

Tiedosto näyttää alkuun melko vaikeaselkoiselta, mutta pääosa tiedostosta on esimerkkisovelluksen sisältöön liittyvää. React-komponenttien rakenne käydään läpi vasta seuraavassa osiossa, joten tässä vaiheessa vain muokkaa tiedosto näyttämään tältä:

```js
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hei maailma!
      </div>
    );
  }
}

export default App;
```

Poista siis rivit 9-22 kokonaisuudessaan, ja lisää jäljelle jääneen `<div>`-elementin sisälle teksti _Hei maailma!_. Koska aiemmin poistettiin tiedostot `logo.svg`ja `App.css`, niitä ei tarvitse tuoda komponenttiin joten poista myös rivit 2 ja 3.

Nyt komponentin rakenne on selkeämpi. Ensimmäisellä rivillä tuodaan `React` ja `Component` tiedoston käyttöön jotta ylipäätään voidaan luoda React-komponentti. Tiedoston viimeisellä rivillä (`export default App;`) App-komponentti annetaan muun sovelluksen käytettäväksi. Ilman tätä riviä App-komponenttia ei voisi käyttää muualta sovelluksesta, eikä sovellus toimisi. Ensimmäisen ja viimeisen rivin välissä luodaan `App`-komponentti ja tuodaan sen tarvitsemat riippuvuudet.

Nyt sovellus taas toimii. Aikaisempi virhe oli se, ettei React löytänyt poistettuja tiedostoja, joita yritettiin tuoda `App`-komponenttiin. Mikäli sovellus on käynnissä, niin selainikkunasi pitäisi päivittyä automaattisesti ja näyttää nyt pelkästään teksti _Hei maailma!_ (muussa tapauksessa käynnistä sovellus taas komennolla `npm start`; voit jättää sovelluksen päälle jolloin selain päivittyy jatkossa automaattisesti kun teet muutoksia).

Selaimessa pitäisi näkyä vain teksti _Hei maailma!_:

![hello_app](../images/hello_app.png)

> Tarkkasilmäinen saattoi huomata, että React itse asiassa kertoi meille aiemmin missä virhe on: selainikkunasa näkyi viesti: `src/App.js: Module not found: Can't resolve './App.css' in 'karvakuonot/src/'`.  Viestissä siis lukee, että tiedostossa `src/App.js`on virhe, ja että se liittyy jotenkin tiedostoon `App.css`. Tässä tapauksessa tiedosto oli poistettu, eikä React löytänyt sitä. Tämä johti virheeseen `Module not found: Can't resolve`. Jos sovelluksesi ei vastaisuudessa jostain syystä toimi, kannattaa selaimen virheviesti lukea tarkkaan!

**Tehtävä:** Mikäli et vielä luonut projektia ja siistinyt sitä, niin tee se nyt.

[Tutustutaan seuraavaksi tarkemmin Reactin komponentteihin.](https://codento.github.io/react-workshop-2/komponentit/)