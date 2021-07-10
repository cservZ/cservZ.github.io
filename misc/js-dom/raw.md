# A JavaScript DOM-manipulációs lehetőségei

Ebben a jegyzetben áttekintjük a HTML DOM-mal kapcsolatos fontosabb tudnivalókat, majd egy gyakorlati példán keresztül megismerkedünk a JavaScript által biztosított fontosabb DOM-manipulációs lehetőségekkel.


## 1. HTML DOM

A webfejlesztésben a <span class="red">HTML</span> nyelvet használjuk weboldalak létrehozására. Ennek a nyelvnek a segítségével mondhatjuk meg, hogy mi az, amit egy weboldalon látni szeretnénk (pl. szövegek, képek, táblázatok, űrlapok, multimédia stb.). Emellett a HTML lehetőséget biztosít a weboldalon megjelenő tartalom strukturálására is, különféle szakaszok, tartalmi egységek kialakításával.

A HTML dokumentumok úgy épülnek fel, hogy HTML objektumokat (úgynevezett <span class="red">tagek</span>et) ágyazunk egymásba. Ezek az objektumok egy hierarchikus fastruktúrát alkotnak a dokumentumban.

Amikor egy weboldal betöltődik, akkor a böngésző a weboldalon található HTML objektumokból elkészíti az úgynevezett <span class="red">dokumentum-objektum modell</span>t, avagy röviden a <span class="red">DOM</span>-ot. A <span class="red">DOM-fa</span> (DOM tree) segítségével könnyen szemléltethetjük a weboldalon található HTML elemek hierarchikus viszonyait.

<span class="example">Példa:</span> Egy egyszerű HTML kód és az ahhoz tartozó DOM-fa

```html
<!DOCTYPE html>
<html lang="hu">
  <head>
    <title>DOM példa</title>
    <meta charset="UTF-8"/>
  </head>
  <body>
    <h1>Az oldal címe</h1>
    <img src="my-image.png" alt="Valami klassz kép"/>
    <p>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Valami klassz link</a>
    </p>
  </body>
</html>
```

![HTML DOM-fa](./img/html-dom.png)

> **Megjegyzés:** A `DOCTYPE` nem egy HTML tag, ezért a DOM-fában sem szerepel.


### 1.1. HTML elemek DOM-beli viszonyai

Ha egy HTML dokumentumban az A objektum (nem feltétlen közvetlenül) tartalmazza a B objektumot, akkor azt mondjuk, hogy az A objektum a B objektum <span class="red">ős</span>e, a B objektum pedig A-nak <span class="red">leszármazott</span>ja. Amennyiben ez a tartalmazás <span class="orange">közvetlen</span>, akkor A-t a B <span class="red">szülő</span>jének, B-t pedig az A <span class="red">gyerek</span>ének nevezzük.

Néhány példa a fenti kódból és az ahhoz tartozó DOM-fából:

* A `<body>` objektum leszármazottjai a `<h1>`, `<img>`, `<p>` és `<a>` objektumok, illetve a "Valami klassz link" és "Az oldal címe" szöveges csomópontok.
* A `<body>` objektum gyerekei a `<h1>`, `<img>` és `<p>` objektumok. Másképp mondva: a `<h1>`, `<img>` és `<p>` objektumok szülője a `<body>`.
* A `<body>` objektumnak az `<a>` objektum <span class="orange">nem</span> gyereke, csak leszármazottja, hiszen itt a tartalmazás nem közvetlen (van még a fában egy `<p>` elem is köztük).

Ha az A és B objektumok szülője megegyezik, akkor A és B egymás <span class="red">testvér</span>ei. Például a fenti kódban és az ahhoz tartozó DOM-fában a `<h1>`, `<img>` és `<p>` elemek egymás testvérei, hiszen mindhárom elem szülője a `<body>`.

A DOM-fa tetején lévő, szülővel nem rendelkező elemet a fa <span class="red">gyökérelem</span>ének nevezzük. A teljes HTML DOM-ban a gyökérelem mindig a `<html>` objektum lesz (ugyanis ebbe ágyazunk be minden további HTML elemet).


### 1.2. A DOM gyakorlati jelentősége

Amikor a weboldalunk tartalmát CSS-ben formázzuk, akkor használhatunk olyan szelektorokat (kijelölőket) is, amelyek a DOM-beli viszonyaik alapján jelölnek ki HTML objektumokat. Néhány példa <span class="red">DOM-alapú CSS szelektorok</span>ra, a teljesség igénye nélkül:

* `div p`: kijelöl minden olyan `<p>`-t, amely egy `<div>` leszármazottja
* `div > p`: kijelöl minden olyan `<p>`-t, amely egy `<div>` gyereke
* `div ~ p`: kijelöl minden olyan `<p>`-t, amely egy `<div>` testvére és ezen `<div>` után szerepel
* `p:nth-child(n)`: kijelöl minden olyan `<p>`-t, amely szülőjének `n`-edik gyereke
* `p:nth-of-type(n)`: kijelöl minden olyan `<p>`-t, amely `<p>` típusú testvérei közül az `n`-edik.

A webes világban gyakran előfordul, hogy dinamikusan szeretnénk manipulálni a DOM-fát, <span class="orange">miután már a weboldal betöltődött</span> (pl. szeretnénk egy objektumot módosítani vagy törölni, esetleg egy új objektumot akarunk a fába beszúrni). Erre biztosítanak lehetőséget a <span class="red">JavaScript DOM-manipulációs műveletei</span>.

A DOM tulajdonképpen nem más, mint egy objektumorientált reprezentációja a weboldalnak. A weboldalon szereplő elemek <span class="red">Node</span>-ok (csomópontok) a DOM-fában, amelyek számos <span class="red">property</span>-vel (adattaggal) és <span class="red">metódus</span>sal rendelkeznek. Ezeket JavaScriptből egyszerűen el tudjuk érni.

A következő fejezetben megismerkedünk a JavaScript néhány fontosabb DOM-manipulációs lehetőségével. Fogjuk párszor használni a `document` objektumot, ami lényegében a böngésző által megnyitott HTML dokumentumot reprezentálja és hozzáférést biztosít a DOM-fához.

> **Oké, de ennek mi értelme van? Miért nem lehet simán csak a HTML-t átírogatni?**
>
> A hangsúly itt azon van, hogy azután szeretnénk a weboldal tartalmát dinamikusan módosítani, <span class="orange">miután az oldal már betöltődött</span>. Nézzünk néhány gyakorlati példát, amikor DOM-műveleteket használunk:
>
> * Lekérdezünk adatokat egy szervertől, és meg szeretnénk jeleníteni azokat a weboldalunkon. Mivel a HTML oldal már betöltődött addigra, amire az adatok megérkeztek, ezért azokat úgy tudjuk megjeleníteni a weboldalon, hogy utólag szúrogatjuk be őket a DOM-fába.
> * Szeretnénk elérni, hogy egy gombra kattintva a felhasználó válthasson világos és sötét téma között. Itt is az a helyzet, hogy a weboldal már be van töltve, csupán annak a megjelenítését manipuláljuk dinamikusan, DOM-műveletek segítségével.
> * Egy HTML űrlap kitöltését követően kliensoldalon ellenőrizzük az űrlapon megadott adatok helyességét (pl. helyes e-mail cím formátum, a kötelezően bejelölendő jelölőnégyzeteket kipipálták stb.). Ekkor egy eseménykezelő segítségével figyeljük, hogy mikor nyomja meg a felhasználó az "Elküldés" gombot, majd a "klikk" esemény hatására DOM-műveletekkel lekérjük a beírt űrlapadatokat és ellenőrizzük őket.
>
> Könnyen belátható, hogy a HTML önmagában nem elég robusztus ahhoz, hogy "utólag" módosítsuk a weboldalaink szerkezetét. Ezért kell nekünk a DOM és a DOM-műveletek.


## 2. JavaScript DOM-műveletek, egy példán keresztül

A jegyzet hátralévő részében egy végletekig leegyszerűsített feladatlista alkalmazást fogunk készíteni. A weboldalon megjelennek a napi teendőink, amelyeket lehetőségünk van törölni, ha teljesítettük őket. Emellett új feladatot is bármikor létrehozhatunk.

A példaprojekt elkészítéséhez szükséges <span class="red">kiinduló fájlok</span> letölthetők egy ZIP-ben, [ide kattintva](./files/dom-starter-files.zip).

> **Megjegyzés:** Mivel csak a DOM-műveletek bemutatása a cél, ezért az alkalmazás elég "buta" lesz: a feladatokat nem mentjük el sehova, így az oldal frissítésekor a dinamikusan hozzáadott adatok elvesznek. Emellett lesznek beégetett adataink is. Ha valaki ennél egy fokkal realisztikusabb weboldalt szeretne készíteni, akkor a 2.6. fejezetben talál tippeket a példaprojekt "felokosítására".


### 2.1. Objektumok megkeresése a DOM-fában

Egy egyszerű feladattal fogunk indítani: keressük meg JavaScriptben az alábbi `<h1>`-es címsort a DOM-fában, és írassuk ki azt a konzolra!

```html
<h1 id="page-title" class="text-center">Feladataim</h1>
```

HTML objektumok DOM-fában történő megkeresésére többféle lehetőségünk is van:

* `document.getElementById(id)`: visszaadja az adott `id` értékkel rendelkező elemet (egyetlen elemet ad vissza, hiszen az `id` attribútum értéke szabályosan egyedi a HTML dokumentumon belül)
* `document.getElementsByTagName(tag)`: visszaadja az adott tagnévvel rendelkező elemeket (minden esetben egy kollekciót ad vissza, amit 0-tól kezdődően indexelünk)
* `document.getElementsByClassName(class)`: visszaadja az adott `class` értékkel rendelkező elemeket (minden esetben egy kollekciót ad vissza, amit 0-tól kezdődően indexelünk)
* `document.querySelector(s)`: visszaadja az `s` CSS szelektor által kijelölt <span class="orange">legelső</span> elemet
* `document.querySelectorAll(s)`: visszaadja az `s` CSS szelektor által kijelölt <span class="orange">összes</span> elemet (minden esetben egy kollekciót ad vissza, amit 0-tól kezdődően indexelünk).

<span class="example">Példa:</span> A fentiek közül bármelyik szelektorral megkereshetjük a kérdéses címsort. Az alábbi utasítások mindegyikének hatására a címsor fog kiíródni a konzolra.

```html
<script>
  console.log(document.getElementById("page-title"));
  console.log(document.getElementsByTagName("h1")[0]);                 // kollekciót ad vissza, indexeljük!
  console.log(document.getElementsByClassName("text-center")[0]);      // kollekciót ad vissza, indexeljük!
  console.log(document.querySelector("header h1.text-center"));
  console.log(document.querySelectorAll("header h1.text-center")[0]);  // kollekciót ad vissza, indexeljük!
</script>
```


### 2.2. Eseménykezelés

Miközben a felhasználó böngészi a weboldalunkat, történhetnek különféle <span class="red">események</span> - pl. a felhasználó rákattint egy oldalelemre, egy elem fölé viszi a kurzort, egy HTML elem betöltődik vagy megváltozik. Ezekhez az eseményekhez társíthatunk <span class="red">eseménykezelő függvények</span>et, amelyek akkor hívódnak meg, ha az adott esemény bekövetkezik.

Az eseménykezelés egyik módja, hogy az elemeknek adott attribútumokkal szabályozzuk az események működését. A kérdéses HTML elemet ellátjuk az alábbi, eseménykezeléssel kapcsolatos attribútumok valamelyikével, és az attribútum értékeként megadjuk az eseménykezelést végző függvényt.

* `onclick`: a felhasználó rákattint az elemre
* `onload`: az elem betöltődik
* `onunload`: az oldalt bezárjuk vagy frissítjük (előfordulhat, hogy nem működik megfelelően!)
* `onmouseover`: a felhasználó az elem fölé viszi a kurzort
* `onmouseout`: a felhasználó elviszi az elemről a kurzort
* `onchange`: az elem megváltozik

> **Megjegyzés:** Ezeken kívül vannak még további attribútumok is, amiket használhatunk. A teljes listát megtalálhatjuk [ezen a linken](https://www.w3schools.com/jsref/dom_obj_event.asp).

<span class="example">Példa:</span> A példaprojektben található "Hozzáadás" gombra kattintva az `addTask()` függvény hívódik meg

```html
<button type="button" class="add-btn" onclick="addTask()">Hozzáadás</button>
```

A példaprojektben kizárólag az attribútumokkal történő eseménykezelést nézzük meg. Egy másik módszer az eseménykezelésre, ha egy DOM-beli elem `addEventListener()` metódusát használjuk, ezzel rendeljük hozzá az elemhez az eseménykezelő függvényt (ekkor az elemnek nem kell semmilyen attribútumot adni). Egy HTML elemhez több eseménykezelő is hozzárendelhető ily módon.

Az `addEventListener()` metódus paraméterei sorban:

* az esemény neve - ezt `on` előtag nélkül adjuk meg (pl. `click`, `load`, `unload` stb.)
* eseménykezelő függvény, amely az esemény bekövetkezésekor hívódik meg
* elhagyható, logikai típusú paraméter, amely az eseménykezelő lefutásának időpontját szabályozza (bővebben lásd: "Capturing és bubbling").

<span class="example">Példa:</span> Eseménykezelő hozzárendelése egy gombhoz az `addEventListener()` metódussal

```html
<body>
  <button type="button" id="my-btn">Kattints rám!</button>
  <script>
    const button = document.getElementById("my-btn");

    button.addEventListener("click", function() { 
      alert("Hurrá, működik az eseménykezelő!");
    });
  </script>
</body>
```

> **Caputring és bubbling**
>
> Tegyük fel, hogy van egy HTML elemünk, ami egy másik HTML elembe van beágyazva! Mind a beágyazó elem, mind a beágyazott elemhez hozzárendelünk egy-egy eseménykezelőt ugyanarra az eseménytípusra - mondjuk a kattintásra. Ha a belső elemre kattintunk, akkor mindkét elem eseménykezelője meghívódik. Az `addEventHandler()` metódus harmadik paraméterével szabályozhatjuk, hogy milyen sorrendben legyenek ezek meghívva.
>
> Ha `true`-ra állítjuk a harmadik paramétert, akkor <span class="red">capturing</span> történik. Ekkor az eseményt először a legkülső elem kezeli le, majd ezután mindig az eggyel "beljebb" található elem eseménykezelő függvénye hívódik meg.
>
> Ha `false`-ra állítjuk a harmadik paramétert, akkor <span class="red">bubbling</span> történik. Ekkor az eseményt először a legbelső elem kezeli le, majd ezután mindig az eggyel "kijjebb" található elem eseménykezelő függvénye hívódik meg. Ha nem adjuk meg expliciten a 3. paraméter értékét, akkor alapértelmezett módon mindig bubbling történik.
>
> Nézzünk egy példát! Figyeljük meg a konzolon, hogy az "eseménykezelők" feliratra kattintva, capturing esetén "kívülről befelé", míg bubbling esetén "belülről kifelé" sorrendben hívódnak meg az elemek eseménykezelői!
>
> ```html
> <body>
>   <p id="my-paragraph">
>     Ez egy példa <strong id="my-strong">eseménykezelők</strong> használatára.
>   </p>
>   <script>
>     // Két függvény, amely kiírja annak a HTML elemnek a nevét, amelyen az esemény bekövetkezett
>     // A capture()-t majd capturing, a bubble()-t pedig majd bubbling módban fogjuk használni
>     function capture() { console.log("Capturing: " + this.tagName); }   
>     function bubble() { console.log("Bubbling: " + this.tagName); }
>  
>     // Kattintás eseményre vonatkozó eseménykezelők hozzárendelése a <p> és <strong> elemekhez
>     document.getElementById("my-paragraph").addEventListener("click", capture, true);     // capturing
>     document.getElementById("my-strong").addEventListener("click", capture, true);        // capturing
>     document.getElementById("my-paragraph").addEventListener("click", bubble, false);     // bubbling
>     document.getElementById("my-strong").addEventListener("click", bubble, false);        // bubbling
>   </script>
> </body>
> ```
>
> A kód kimenete a konzolon: `Capturing: P`, `Capturing: STRONG`, `Bubbling: STRONG`, `Bubbling: P`.


### 2.3. Elemek beszúrása és módosítása

Egy <span class="orange">új elem DOM-fába való beszúrása</span> esetén a következő lépéseket kell követnünk:

1. A `document.createElement(tagname)` metódussal létrehozzuk a beszúrandó HTML elemet
1. Beállítjuk az újonnan létrehozott elem tartalmát, attribútumait és stílusát
1. Beszúrjuk az elemet a DOM-fába a szülő objektum `append()` vagy `appendChild()` metódusával.

Az `append()` és `appendChild()` metódusok mindketten arra szolgálnak, hogy egy DOM-beli objektumhoz gyerekobjektumokat fűzzünk hozzá. Két fontos különbség a két metódus között:

* Az `append()` több gyereket is hozzáfűzhet egy objektumhoz, míg az `appendChild()` csak egyet.
* Az `append()` Node-okat és stringeket egyaránt hozzáfűzhet egy objektumhoz gyerekként, míg az `appendChild()` kizárólag Node-okkal működik.

<span class="example">Példa:</span> Tegyük működőképessé az "új feladat hozzáadása" funkciót a példaprojektben!

A feladat hozzáadását végző űrlap HTML kódja a következő:

```html
<form>
  <input type="text" id="task-text" class="form-input"/>
  <button type="button" class="add-btn" onclick="addTask()">Hozzáadás</button>
</form>
```

Látható, hogy a "Hozzáadás" gombhoz hozzárendeltük az `onclick` attribútummal az `addTask()` nevű eseménykezelő függvényt. Ez fog meghívódni, amikor a felhasználó a gombra kattint, így ennek a függvénynek a törzsét kell megírnunk.

Azt szeretnénk, hogy a függvény kérdezze le a beírt feladat szövegét és szúrja be azt (és egy "Törlés" gombot) a weboldalon található táblázatba. Valahogy így:

```html
<table>
  <!-- A táblázat fejléce... -->
  <tbody>
    <!-- Néhány korábbi feladat... -->
    <tr>
      <td>Az újonnan beszúrt feladat szövege...</td>
      <td><button type="button" class="delete-btn" onclick="deleteTask(this)">X</button></td>
    </tr>
  </tbody>
</table>
```

A feladat megoldásához a következő lépéseken kell végigmennünk:

1. Keressük meg a `<tbody>` objektumot, hiszen ennek a gyerekeként fogjuk az új teendőt beszúrni!
1. Hozzunk létre a beszúrni kívánt feladatnak egy új sort a táblázatban (`<tr>`)! A sorban helyezzünk el két táblázatcellát (`<td>`)!
1. Az első táblázatcellába írjuk bele a feladat szövegét, vagyis az űrlapon található beviteli mezőbe írt értéket!
1. A második táblázatcellába helyezzünk el egy "Törlés" gombot, a fenti kódban található mintának megfelelően!
1. Szúrjuk be a két `<td>` objektumot a `<tr>` gyerekeiként a DOM-fába! A `<tr>` objektum pedig legyen a `<tbody>` objektum gyereke!

Keressük meg a `<tbody>` objektumot!

```js
function addTask() {
  const tbody = document.getElementsByTagName("tbody")[0];
}
```

Hozzunk létre egy táblázatsort és két táblázatcellát! A cellákat a sor gyerekeként, a sort pedig a `<tbody>` gyerekeként szúrjuk be a DOM-fába!

```js
function addTask() {
  const tbody = document.getElementsByTagName("tbody")[0];

  const row = document.createElement("tr");
  const column1 = document.createElement("td");
  // Itt majd kialakítjuk az első cella tartalmát...
  const column2 = document.createElement("td");
  // Itt majd kialakítjuk a második cella tartalmát...

  row.append(column1, column2);
  tbody.append(row);
}
```

Írjuk bele az első táblázatcellába az `id="task-text"` attribútummal rendelkező beviteli mezőbe írt szöveget!

* Egy beviteli mezőbe írt értéket a mező `value` property-jével kérhetünk le.
* Egy HTML objektum <span class="orange">szöveges tartalmának beállítása</span> az `innerText` vagy `innerHTML` property-vel lehetséges.. A különbség a két property között, hogy az `innerHTML` értékeként megadott szöveg HTML-ként lesz értelmezve (ezért itt használhatók a szokásos HTML tagek), míg az `innerText` értéke minden esetben egyszerű szövegként jelenik meg (nem lesz HTML-ként értelmezve).

```js
function addTask() {
  const tbody = document.getElementsByTagName("tbody")[0];

  const row = document.createElement("tr");
  const column1 = document.createElement("td");
  column1.innerText = document.getElementById("task-text").value;
  const column2 = document.createElement("td");
  // Itt majd kialakítjuk a második cella tartalmát...

  row.append(column1, column2);
  tbody.append(row);
}
```

Már csak a második táblázatcella tartalmát kell kialakítanunk. Ebbe egy törlés gombot fogunk elhelyezni, tehát a `document.createElement()` metódussal létrehozunk egy új `<button>` objektumot, amit a második táblázatcella gyerekeként szúrunk be a DOM-fába. A gomb szöveges tartalma legyen `X`!

Ahhoz, hogy a létrehozott gomb megfelelően működjön, hozzáadunk néhány attribútum-érték párt. Egy HTML elem egy <span class="orange">attribútumának beállítása</span> a `setAttribute()` metódussal történik. Ennek első paramétereként megadjuk az attribútum nevét, második paraméterként pedig az attribútum értékét.

* A `setAttribute()` segítségével adjunk a gombnak egy `type="button"` attribútum-érték párt!
* A `setAttribute()` segítségével adjunk a gombnak egy `onclick="deleteTask(this)"` attribútum-érték párt, amivel hozzárendeljük a gombhoz a `deleteTask()` eseménykezelő függvényt!

Végezetül, rendeljük hozzá a gombhoz a `class="delete-btn"` attribútumot, hogy ugyanúgy legyen formázva az elem, mint a többi "Törlés" gomb! Ehhez használjuk az elem `classList` property-jét, amivel lekérhetjük az összes olyan class nevét, amivel az elem rendelkezik. A `classList`-nek az `add()` metódusával hozzáadjuk a gombhoz a `delete-btn` class értéket. 

Tehát az `addTask()` függvény <span class="green">végleges verziója</span> a következőképpen néz ki:

```js
function addTask() {
  const tbody = document.getElementsByTagName("tbody")[0];
  const row = document.createElement("tr");

  const column1 = document.createElement("td");
  column1.innerText = document.getElementById("task-text").value;

  const column2 = document.createElement("td");
  const deleteBtn = document.createElement("button");   // "törlés" gomb létrehozása
  deleteBtn.innerText = "X";                            // gomb szöveges tartalmának beállítása
  deleteBtn.setAttribute("type", "button");             // gomb attribútumainak beállítása
  deleteBtn.setAttribute("onclick", "deleteTask(this)");
  deleteBtn.classList.add("delete-btn");    // a class="delete-btn" attribútum hozzáadása a gombhoz
  column2.append(deleteBtn);                // gomb beszúrása a DOM-fába a 2. táblázatcella gyerekeként

  row.append(column1, column2);
  tbody.append(row);
  document.getElementById("task-text").value = "";  // űrlapmező tartalmának kiürítése
}
```

> **Megjegyzés 1:** A `classList` egyéb metódusai a class-hozzáadásra szolgáló `add()`-on kívül:
>
> * `remove()`: meglévő class eltávolítása az elemről
> * `contains(c)`: szerepel-e a `c` class az elemen
> * `toggle(c)`: ha a `c` class még nem szerepel az elemen, akkor hozzáadja azt az elemhez; ha pedig már szerepel, akkor eltávolítja azt az elemről.
>
> **Megjegyzés 2:** Ha egy elem <span class="orange">stílusát szeretnénk módosítani</span>, akkor ezt az elemek `style` property-jével tehetjük meg. Ez lényegében a `style` attribútum értékének módosításával állítja be a HTML elem stílusát (ezt inline CSS-nek is nevezzük).
>
> ```html
> <body>
>   <p id="my-paragraph">I'm blue da ba dee da ba die...</p>
>   <script>
>     // A bekezdés kék betűszínűvé tétele JavaScript segítségével
>     document.getElementById("my-paragraph").style.color = "blue";
>   </script>
> </body>
> ```
>
> A `style` property-ről (ami tulajdonképpen egy objektum) szóló részletes referencia elérhető [itt](https://www.w3schools.com/jsref/dom_obj_style.asp).


### 2.4. Objektumok törlése

Végezetül elkészítjük az "egy adott feladat törlése", illetve "összes feladat törlése" funkciót.


#### 2.4.1. Egy adott gyerekobjektum törlése

A weboldalon található táblázat soraiban megjelenő feladatokhoz tartozik egy-egy törlés gomb, aminek a HTML kódja a következőképpen néz ki:

```html
<button type="button" class="delete-btn" onclick="deleteTask(this)">X</button>
```

Ha a gombra kattintunk, akkor a `deleteTask()` eseménykezelő függvényít hívjuk meg, amely paraméterben megkapja az aktuális objektumot (`this`), azaz a gombot, amire rákattintottunk.

Írjuk meg a `deleteTask()` függvény törzsét, amely az adott feladat DOM-fából való kitörlését végzi!

Lényegében a feladatot tartalmazó táblázatsort kell kitörölnünk. Szükségünk lesz a törlendő sor szülőjére, ami ismételten a `<tbody>` objektum lesz.

```js
function deleteTask(btn) {
  const tbody = document.getElementsByTagName("tbody")[0];
}
```

A függvény paramétereként megkapjuk a törlendő sorhoz tartozó gombot. Ahhoz, hogy ebből megkapjuk a törlendő sort, végig kell gondolnunk a gomb és az őt tartalmazó táblázatsor viszonyát. A "Törlés" gombok szülője egy `<td>` (cella), amelynek szülője lesz a törlendő `<tr>` (sor). Tehát két szülővel kell "feljebb lépnünk" a DOM-ban.

Egy DOM-beli elem szülőjét lekérdezhetjük a `parentNode` property-vel. Ezt most kétszer fogjuk egymás után alkalmazni, hiszen kettővel lépünk feljebb a DOM-fában.

```js
function deleteTask(btn) {
  const tbody = document.getElementsByTagName("tbody")[0];
  const row = btn.parentNode.parentNode;
}
```

Végül, ha megvan a törlendő elem (a táblázatsor), akkor csupán meg kell hívnunk a szülőjének (a tbody-nak) a `removeChild()` metódusát, amelynek paramétereként átadjuk a törlendő objektumot.

Tehát a `deleteTask()` függvény <span class="green">végleges verziója</span> a következőképpen néz ki:

```js
function deleteTask(btn) {
  const tbody = document.getElementsByTagName("tbody")[0];
  const row = btn.parentNode.parentNode;
  tbody.removeChild(row);
}
```


#### 2.4.2. Összes gyerekobjektum törlése

A weboldalon szerepel egy "Összes feladat törlése" feliratú gomb, amelynek a HTML forráskódja a következő:

```html
<button type="button" id="delete-all-tasks-btn" class="delete-btn" onclick="deleteAllTasks()">
  Összes feladat törlése
</button>
```

Tehát most a `deleteAllTasks()` függvény törzsét kell megírnunk, amely kitörli az összes feladatot a weboldalon található táblázatból. Nem meglepő módon ismét kelleni fog nekünk a `<tbody>`, hiszen ennek a gyerekeit (a feladatokat tartalmazó táblázatsorokat) szeretnénk eltávolítani.

```js
function deleteAllTasks() {
  const tbody = document.getElementsByTagName("tbody")[0];
}
```

JavaScriptben nincs olyan explicit DOM-metódusunk, amely egy objektum összes gyerekét kitörölné, ezért egy kicsit másképp oldjuk meg a dolgokat:

* A szülő objektumnak (aminek a gyerek objektumait törölni akarjuk) a `hasChildNodes()` metódusával lekérdezzük, hogy vannak-e gyerekei.
* Amíg vannak a szülőnek gyerekei, addig a `removeChild()` metódussal mindig kitörölünk egy gyereket.

Teljesen mindegy, hogy mikor melyik gyereket töröljük ki, hiszen végül minden gyereket kitörlünk. A példánkban én mindig a `<tbody>` legelső gyerekét törlöm, amit a szülő `firstChild` property-jével tudunk elérni.

Tehát a `deleteAllTasks()` függvény <span class="green">végleges verziója</span> a következőképpen néz ki:

```js
function deleteAllTasks() {
  const tbody = document.getElementsByTagName("tbody")[0];

  while (tbody.hasChildNodes()) {
    tbody.removeChild(tbody.firstChild);
  }
}
```


### 2.5. A kész forráskód letöltése

A teljes, kikommentezett megoldás letölthető [ide kattintva](./files/dom-solution.zip).


### 2.6. Az alkalmazás "okosabbá" tétele

TODO