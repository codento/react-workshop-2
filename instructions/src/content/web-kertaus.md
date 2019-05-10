---
title: Web-kertaus
order: 1
---

## HTML
HTML on ns. merkintäkieli, joka koostuu elementeistä joilla on tyypillisesti alku- ja lopputägi:
```
<elementti>
  <toinenElementti />
</elementti>
```
Elementeillä voi olla toisia elementtejä tai merkkijonoja (tekstiä) sisältönään.  Sisällötön elementti voidaan sulkea ilman lopputägiä.  HTML:llä määritellään rakenteisia dokumentteja, eli dokumentteja joita voidaan lukea ohjelmallisesti.

HTML-elementeillä voi olla myös attribuutteja eli lisätietokenttiä elementtiin liittyen.  Esimerkiksi CSS-tyylit usein löytävät muotoiltavat elementit juuri attribuuttien avulla.
```
<elementti class="asiallinen">
  Olen asiallinen elementti
</elementti>
<elementti class="hassuttelu">
  🤡
</elementti>
```
Harjoituksessamme tarvitsemme ainakin seuraavia HTML-kielen vakioelementtejä:
```
<div class="">
  <p> Div on sivua jäsentävä semantiikaton osio.  Tekstikappaletta tarkoittava p tulee englannin sanasta paragraph.</p>
  <a href="https://rekkurescue.com">Tämä on linkki</a>
  <img src="http://www.kodinvaihtajat.com/wp-content/uploads/2015/06/Noppa3.jpg" alt="Kuva kissasta laatikossa" />
</div>
```

React käyttää HTML:n syntaksia tuottaakseen selaimen ymmärtämiä HTML-dokumentteja.


## CSS

CSS, joka on akronyymi sanoista **C**ascading **S**tyle **S**heets, on sääntöjä, joilla voidaan määritellä esimerkiksi webbisivun tyylejä. Sen avulla voidaan muokata sivun fontteja, värejä ja asettelua, mutta myös paljon muuta. Emme käy tällä kurssilla tarkemmin CSSää lävitse, vaan keskitymme Reactin opetteluun, ja tyylejä tarvittaessa annamme ne valmiiksi. Jos haluat tutustua lähemmin CSSn, esimerkiksi [Free Code Camp tarjoaa kurssin CSSn perusteista.](https://learn.freecodecamp.org/responsive-web-design/basic-css)

## JavaScript

Javascript on ohjelmointikieli, jota webbiselaimet suorittavat.  Sitä käytetään sivuilla, joille halutaan dynaamisia sisältöjä — joka nykyään tarkoittaa melkeinpä kaikkia sivuja.

### Asioiden nimeäminen

Voimme nimetä erilaisia asioita, kuten merkkijonoja, lukuja tai tietorakenteita, kuten listoja, myöhempää viittaamista varten käyttämällä ilmaisua const, joka on lyhennys sanasta constant.

```javascript
const merkkijono = "Hello world!"
const vastausKaikkeen = 42
const listaNumeroita = [1, 2, 3, vastausKaikkeen]
```

Voimme viitata listan jäseniin indeksillä.

```javascript
listaNumeroita[0] // 1
listaNumeroita[3] // 42
```
Huomaa että ensimmäiseen jäseniin viitataan numerolla 0!  (Kaksi kauttaviivaa // on yksi javascriptin tavoista merkitä kommenttia.  Kommentti on tekstiä, jonka ohjelmointikielen kääntäjä tai tulkki jättää täysin huomiotta, eli kommentit ovat vain muistiinpanoja tai selvennyksiä.  Tässä kommenttina on se, mitä kyseinen ilmaus tai lauseke palauttaa, eli miten kääntäjä tai tulkki tulkitsee sen.)

Lista voi olla myös tyhjä.  Tyhjää listaa merkitään pelkillä hakasulkeilla: 

```javascript
const tyhjaLista = []
```

### Objektit

Yksi erittäin hyödyllinen tietotyyppi on objekti.  Objekti on kokoelma avaimia joilla on jonkinlainen arvo. Voimme esimerkiksi määritellä (ja nimetä const:ia käyttäen) objektin seuraavasti:

```javascript
const kissa = {“nimi”: “Noppa”, “ikä”: 5, “rotu”: ”abessinialainen”}
```
Tämän jälkeen voimme viitata objektin avaimiin suoraan, esimerkiksi:

``` javascript
kissa.nimi // "Noppa"
kissa.ikä // 5
```
Objektit ovat *melkein* sama asia kuin myöhemmin tutuksi tuleva JSON, joka on keskeinen web-sovellusten välisen tiedonvaihdon formaatti.  Jos tunnet jo objektit käsitteenä esimerkiksi Javasta tai jostain muusta olio-ohjelmointikielestä, kannattanee javascriptin objekteja ajatella eri asiana, vaikka niissä jotain samaakin on.

Objektikin voi olla tyhjä:

```javascript
const tyhjaObjekti = {}
```

### Funktiot

Funktiot ovat uudelleenkäytettävää toiminallisuutta.  Funktiot ottavat sisään argumentteja tai parametreja syötteenään ja palauttavat jotain.  Funktioille annetaan sulkeiden sisälle merkityt asiat, ja se toteuttaa kaiken kaarisulkeiden sisään merkityn, palauttaen sen mitä return kuvaa funktion palauttavan.  Alla funktio, joka ottaa kaksi asiaa, a:n ja b:n, ja palauttaa niiden summan.

```javascript
const omaSummaFunktio = (a, b) => { return a + b }
omaSummaFunktio(1, 2) // 3
```

Funktiot ovat lähtökohtaisesti hyvin yksinkertaisia, mutta niillä voi yksinään tehdä mitä tahansa mikä on tietokoneella tehtävissä!

### Vertailu

Ohjelmoinnissa on usein verrattoman hyödyllistä vertailla asioita keskenään.  Vertailu palauttaa George Boolen mukaan nimetyn boolean -tyypin – joko true tai false.

```javascript
1 === 2 // false
2 !== 3 // true
false === !true // true
1 < 2 // true
2 >= 2 // true
5 >= 3 // false
```

Voimme myös esittää ehdollisia lauseita ohjelmoidessa, esimerkiksi sanoen: 
```javascript
const tarkistaLista = (lista) => {
  if (lista.length === 0) {
    console.log("Tyhjä!")
  } else {
    console.log(`Taulukossa on ${lista.length} asiaa!`)
  }
}
```
Eli jos on totta, että lista -niminen lista on tyhjä, tulostetaan selaimen konsoliin ilmoitus tyhjyydestä.  Muutoin tulostetaan nk. template literal, eli erityinen merkkijono johon voidaan helposti liittää ohjelmallisesti tuotettuja katkelmia.  

### Destrukturointi

On usein käytännöllistä purkaa listoja osiin tai napata objektista käyttöön vain tietyt avaimet.  Listojen osalta tämä onnistuu esimerkiksi seuraavasti:

```javascript
const luvut = ["yksi", "kaksi", "kolme", "neljä"]
const [yksi, kaksi, kolme] = luvut
console.log(yksi) // "yksi"
console.log(neljä) // undefined
```

Objektien kanssa destrukturointia käytetään Reactissa paljon.

```javascript
const kissa = {"nimi": "Noppa", "rotu": "abessinialainen", "ikä": 5, "ominaisuudet": ["hieno", "kaunis", "älykäs"]}
const { nimi } = kissa
console.log(nimi) // "Noppa"
```

[Sukelletaan seuraavaksi Reactiin](https://codento.github.io/react-workshop-2/react/)