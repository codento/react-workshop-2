---
title: "Elinkaari"
order: 6
---

# Komponenttien elinkaari
Jokaisella React komponentilla on elinkaari, joka alkaa siitä hetkestä, kun komponentti ensimmäisen kerran ilmestyy näytölle eli "mountataan" ja päättyy siihen, kun komponentti katoaa näytöltä eli "dismountataan". Näiden välissä oleellisia elinkaaren vaiheita ovat komponentin tilanmuutokset, eli kun komponentti saa ulkopuolelta uusia propseja tai sitten sen sisäinen tila muuttuu. Lähtökohtaisesti aina kun komponenttiin kohdistuu tilanmuutos, se piirrettään, eli "renderöidään" näytölle uudelleen, jotta esimerkiksi propsina saadut muutokset näkyvät näytöllä.

![lifecycle](../images/component-lifecycle.png)

## useEffect
React tarjoaa `useEffect`-hookin, jonka avulla voimme suorittaa haluamaamme koodia komponentin eri elinkaaren vaiheissa. `useEffect` ottaa ensimmäiseksi parametrikseen funktion ja toiseksi listan, joka sisältää ne muuttujat joiden muutoksia haluamme pitää silmällä.     
          
Funktio importoidaan projektiin vastaavasti kuin useState. 
```js
import React, { useState, useEffect }  from 'react';
```

```js
useEffect(() => {
 console.log("Component mounted!")   
}, [])
```

Koska esimerkissämme hookin toinen parametri on tyhjä lista, niin funktiomme suoritetaan vain komponenttimme elinkaaren alussa kerran.

```js
useEffect(() => {
 console.log("Value changed!")   
}, [ value ])
````

Nyt funktiomme suoritetaan joka kerta kun kuvitteellinen muuttuja `value`, joka voisi olla esimerkiksi prop tai tilamuuttuja, muuttuu.

```js
useEffect(() => {
 console.log("Component rendered!")   
})
````

Voimme myös jättää toisen parametrin pois. Tällöin funktiomme kutsutaan joka kerta, kun komponentti renderöidään, eli kun jokin asia sen tilassa (props tai state) muuttuu.

```js
useEffect(() => {
 console.log("Component mounted!")
 return () => console.log("Component dismounted!")
}, [])
```

Tarvittaessa pääsemme myös komponentin elinkaaren viimeiseen vaiheeseen, eli kun komponentti dismountataan. Tämä onnistuu palauttamalla `useEffect`-hookista funktion, joka suoritetaan dismounttauksen yhteydessä. Nyt esimerkkimme tulostaa komponentin elinkaaren alussa __Component mounted!__ ja lopussa __Component dismounted!__.

**Tehtävä:** Lisää effekti, joka suoritetaan silloin, kun `App` renderöidään ensimmäisen kerran

[Nyt olemme valmiita vastaanottamaan dataa sovelluksemme ulkopuolelta.](https://codento.github.io/react-workshop-2/API/)