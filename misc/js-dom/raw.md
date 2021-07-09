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