# Aszinkron programozás JavaScriptben

Ebben a jegyzetben meghatározzuk a szinkron, illetve az aszinkron programkód fogalmát, majd ezután megnézzük, hogy a JavaScript milyen lehetőségeket biztosít aszinkron adatok feldolgozására. Részletesen áttekintjük a callback függvényeket, a Promise-okat, illetve az `async` és `await` kulcsszavak használatát.


## 1. Szinkron és aszinkron kódrészek

A programjainkban a <span class="red">szinkron kódrészek</span> esetén <span class="orange">az egyes utasítások sorban, egymás után hajtódnak végre</span>. Tehát ebben az esetben először mindig megvárjuk, hogy az aktuális utasításunk végrehajtása befejeződjön, még mielőtt rátérnénk a következő utasítás végrehajtására.

<span class="example">Példa:</span> Ha a JavaScript kódunkban több `console.log` szerepel egymás után, akkor ezek szinkron módon kerülnek végrehajtásra: mindig megvárjuk az aktuális kiíratás végrehajtását, még mielőtt rátérnénk a következő kiíratásra.

```js
console.log("Első kiíratás");
console.log("Második kiíratás");
console.log("Harmadik kiíratás");
```

<div class="bordered-box border-black">
<span class="black">A fenti kód kimenete a konzolon:</span><br>
<img src="./img/sync-code-output.png" alt="Szinkron programkód kimenete">
</div>

Ezzel szemben az <span class="red">aszinkron kódrészek</span> esetén <span class="orange">az egyes utasítások egymástól függetlenül hajtódnak végre</span>. Tehát itt nem várunk arra, amíg az egyes utasítások végrehajtása befejeződik, hanem egyszerre hajtunk végre több, egymástól független utasítást.

JavaScriptben a `setTimeout` függvény egy tipikus példája az aszinkron utasításoknak. Ezzel a függvénnyel egy megadott hosszúságú "szünetet" rakhatunk a programunkba. Miután ez a "szünet" letelt, végrehajtunk egy utasítássorozatot (amit egy callback függvényként adunk meg).

<span class="example">Példa:</span> Mivel a `setTimeout` aszinkron módon működik, ezért az alábbi példában az utolsó `console.log` nem fogja megvárni, amíg a `setTimeout` a 2 másodperces "szünet" után kiíratja a "Hosszabb ideig tartó kiíratás" szöveget, hanem még ezelőtt lefut.

```js
console.log("Rövid ideig tartó kiíratás");
// 2 másodperc (2000 milliszekundum) "szünet" után kiíratunk valamit a konzolra
setTimeout(() => console.log("Hosszabb ideig tartó kiíratás"), 2000);
console.log("Egy másik rövid ideig tartó kiíratás");
```

<div class="bordered-box border-black">
<span class="black">A fenti kód kimenete a konzolon:</span><br>
<img src="./img/async-code-output.png" alt="Aszinkron programkód kimenete">
</div>

Az aszinkron programozás egyik fő motivációja a felhasználói élmény (user experience) javítása. Ha például van egy webes alkalmazásunk, amely valamilyen adatlekérést végez (pl. adatbázisból tölt be adatokat), akkor az adatlekérés aszinkron módon történő kezelésével elérhetjük, hogy a felhasználó továbbra is gond nélkül használhassa az alkalmazásunkat, amíg az adatlekérés fut a háttérben (így nem "fagy le" az alkalmazás az adat megérkezéséig).


## 2. Aszinkron JavaScript

Ebben a fejezetben egy példán keresztül nézzük meg, hogy hogyan lehet JavaScript segítségével aszinkron módon adatot lekérdezni egy webszervertől.

A webes szolgáltatás, amit használni fogunk a példáinkban a **[https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/)**. Ennek az úgynevezett API-nak a segítségével különféle, JSON formátumú mintaadatok (pl. felhasználók, felhasználók posztjai, a posztokra érkező kommentek stb.) iránt indíthatunk HTTP kéréseket.

Ha valaki számára az imént említett fogalmak (HTTP üzenet, API, JSON formátum) ismeretlenek lennének, akkor a 2.1. és 2.2. fejezetekben ezek röviden bemutatásra kerülnek.


### 2.1. HTTP üzenetek, API-k

Ha az alkalmazásunkban szeretnénk egy webszervertől elkérni valamilyen adatot (pl. egy képet, egy HTML fájlt, JSON formátumú adatot stb.), akkor a böngészőnkkel egy <span class="red">HTTP kérés</span>t indítunk a webszerver felé az adott erőforrás iránt.

A szerver a megkapott HTTP kérést feldolgozza, és arra egy <span class="red">HTTP válasz</span>t küld vissza. Amennyiben "minden rendben volt", akkor a szerver visszaküldi a böngészőnknek a kért erőforrást a válaszüzenetben. Ekkor a HTTP válaszban szereplő <span class="red">státuszkód</span> a `200 OK`. Ha valamilyen hiba történt a kliens-szerver kommunikáció során, akkor a HTTP válaszban egy `200 OK`-tól eltérő státuszkód szerepel (pl. `404 Not Found`, ha a kért erőforrás nem található a szerveren).

A HTTP kéréseknek két fő fajtáját különböztetjük meg:

* A <span class="red">`GET`-kérések</span> segítségével jellemzően egy erőforrást kérünk el a szervertől (ebben a jegyzetben csak ilyen típusú HTTP kérésekre fogunk példát nézni).
* A <span class="red">`POST`-kérések</span> segítségével jellemzően adatot továbbítunk a szerver felé (pl. egy kitöltött űrlap adatait).

Manapság az interneten elérhető rengeteg különféle <span class="red">API</span> (Application Programming Interface = alkalmazásprogramozási felület), amik bárki által felhasználható, nyilvános adatokat tesznek elérhetővé a fejlesztők számára. Mi most egy mintaadatokat rendelkezésünkre bocsátó API-t fogunk használni, de ezen kívül természetesen rengeteg hasznos API megtalálható a weben (pl. aktuális időjárással kapcsolatos adatok, menetrendekkel kapcsolatos információk, véletlenszerű macskás/kutyás képek stb.).


### 2.2. A JSON formátum

A webes kommunikáció során gyakran használjuk a <span class="red">JSON</span> (JavaScript Object Notation) formátumot adatok továbbítására. Ez egy emberek számára is könnyen olvasható, szöveges formátum.

A JSON formátum által támogatott alapvető adattípusok:

* szám
* szöveg (idézőjelek között adhatjuk meg)
* logikai típus (`true` vagy `false` értéke lehet)
* tömb
* objektum.

<span class="example">Példa:</span> Az alábbi JSON objektum egy felhasználót reprezentál

```json
{
  "id": 1,
  "username": "cservZ",
  "male": true,
  "roles": ["Web Developer", "Professional Procrastinator"]
}
```

A JSON formátum típusai és a JavaScript típusai között az alábbi függvényekkel végezhetünk átalakításokat:

* <span class="red">`JSON.stringify()`</span>: egy JavaScript object-ből készít egy JSON formátumú szöveget
* <span class="red">`JSON.parse()`</span>: egy JSON formátumú szövegből készít egy JavaScript object-et.

<span class="example">Példa:</span> JavaScript és JSON formátum közötti átalakítások

```js
const user = {id: 1, username: "cservZ", male: true, roles: ["Web Developer", "Professional Procrastinator"]};

const jsonString = JSON.stringify(user);            // object -> JSON
console.log(jsonString);
const retrievedUser = JSON.parse(jsonString);       // JSON -> object
console.log(retrievedUser);
```

<div class="bordered-box border-black">
<span class="black">A fenti kód kimenete a konzolon:</span> Az első kiíratás eredménye egy JSON formátumú szöveg, a másodiké pedig egy hagyományos JavaScript object.<br><br>
<img src="./img/json-example.png" alt="JSON példa">
</div>


### 2.3. A JavaScript lehetőségei aszinkron adatlekérésre

Legyen az a feladatunk, hogy kérdezzük le aszinkron módon a **[https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)** URL-en található felhasználói adatokat a böngészőben, JavaScript segítségével!

Az alábbiakban megnézünk 3 módszert, aminek segítségével lehetőségünk van aszinkron adatlekérésre JavaScriptben. Ezek közül a Promise-ok és az `async`/`await` kulcsszavak a mai napig gyakran használatosak (a callback függvények kevésbé - hamarosan látni fogjuk, hogy miért).


#### 2.3.1. Callback függvények

A <span class="red">callback függvények</span>et már jól ismerjük a korábbi JavaScriptes tanulmányainkból. Ezek <span class="orange">olyan függvények, amelyeket egy másik függvénynek adunk paraméterül</span>. Természetesen a callback függvényt meg is tudjuk hívni abban a függvényben, amely paraméterül kapja azt.

Ebben a jegyzetben a callback függvények megadására az ECMAScript6 (ES6) szabványban bevezetett <span class="red">arrow function</span>-öket fogjuk használni. Ha esetlegesen valakinek ez a fogalom idegen, akkor érdemes lehet elolvasni a gyakorlati jegyzet ide vonatkozó részét ([link](https://okt.sed.hu/szkriptnyelvek/gyakorlat/gyak9/#javascript-fuggvenyek-egyeb-megadasi-modjai)).

<span class="example">Példa:</span> A korábban látott `setTimeout` függvény első paraméterében egy callback függvényt adtunk meg, ami a megadott idő lejárta után került meghívásra.

```js
setTimeout(() => {
  // Ez egy callback függvény, amely 2 másodperc eltelte után fog meghívódni...
  console.log("Lejárt a 2 másodperces szünet!");
}, 2000);
```

A callback függvényeket aszinkron adatok (pl. egy webszervertől lekérdezett adatok) feldolgozására is használhatjuk. Intuitív módon az aszinkron adatok feldolgozását kiszervezzük egy callback függvénybe, amit akkor fogunk majd meghívni, miután az adatok megérkeztek.


#### 2.3.2. Promise-ok

TODO


#### 2.3.3. Az `async` és `await` kulcsszavak

TODO
