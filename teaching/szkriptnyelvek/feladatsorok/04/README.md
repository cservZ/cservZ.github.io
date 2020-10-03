<style>
	h1:first-of-type { display: none; }
</style>

# Szkriptnyelvek - 4. gyakorló feladatsor

## Python - Objektumorientáltság, kivételkezelés, fájlkezelés


### 1. Borospince

A borospincénkben szekrények vannak, amelyek polcain borokat tárolunk. Készítsd el `Bor` és `Szekreny` osztályokat a feladatleírás alapján! A feladatok megoldását egyetlen Python szkriptbe készítsd el!


#### A `Bor` osztály

Hozz létre egy `Bor` nevű osztályt, amely a következő 3 adattaggal rendelkezik: `_fajta`, `_evjarat` és `_alkoholtartalom`!

* A konstruktor paraméterül kapja a `fajta`, `evjarat` és `alkoholtartalom` paramétereket (ebben a sorrendben), és ezekkel inicializálja a megfelelő adattagokat. Az `alkoholtartalom` értékét ne legyen kötelező megadni, alapértéke legyen `12.5`!
* Készíts hagyományos getter és setter metódusokat a `_fajta` adattaghoz, `get_fajta` és `set_fajta` néven!
* Írj get és set property-t az `_alkoholtartalom` adattaghoz, `alkoholtartalom` néven. A setterben kezeld le, hogy csak nemnegatív valós szám lehessen az adattag értéke! Nem megfelelő paraméter esetén a setter ne módosítsa az adattag értékét!
* Definiáld felül az osztályban az objektum szöveggé alakításáért felelő metódust úgy, hogy az a következő szöveggel térjen vissza: `{_fajta} (evjarat: {_evjarat}), melynek alkoholtartalma: {_alkoholtartalom}.` (értelemszerűen a megfelelő adattog értéke kerüljön mindenhol behelyettesítésre)!
* Definiáld felül az osztályban az `==` operátor működését! Ha az adott objektumot egy másik `Bor` objektummal szeretnénk összehasonlítani, akkor az operátor adja vissza, hogy a két bor fajtája, évjárata és alkoholtartalma rendre megegyezik-e! Nem `Bor` típusú paraméter esetén az operátor logikai hamis értékkel térjen vissza!


#### A `Szekreny` osztály

Írj egy `Szekreny` osztályt, amelynek egyetlen adattagja egy lista, `borok` néven! Ebben a listában tároljuk a szekrény polcain található borokat.

* Készítsd el az osztály konstruktorát, amely nem vár paramétert, és a `borok` adattagot egy üres listával inicializálja!
* Írj egy `get_bor` metódust, amely paraméterül egy egész számot kap! A metódus térjen vissza a `borok` lista adott indexén lévő elemével! Az egyszerűség kedvéért csak a pozitív indexeket kezeljük, így ha a paraméterben kapott szám negatív vagy nagyobb, mint a lista utolsó elemének az indexe, dobj egy `Exception` típusú kivételt, amit a `Nem letezo index!` szöveggel inicializálj!
* Definiáld felül a `+` operátort az osztályban úgy, hogy ha az egy `Bor` objektumot kap paraméterül, akkor szúrja be azt a `borok` lista végére!
* Bővítsd ki az előző operator overload metódust úgy, hogy az egy másik `Szekreny` típusú paramétert is tudjon fogadni! A függvény térjen vissza egy új `Szekreny` objektummal, amelynek a `borok` listája az eredeti és a paraméterben érkező objektum `borok` listájának az összefűzése legyen!
* Írj egy `ossz_alkoholtartalom` metódust, amely adja össze a szekrényen lévő borok alkoholtartalmát, és térjen vissza az összeggel!
* Készíts egy paraméter nélküli metódust, `statisztika` néven! A metódus számolja össze, hogy az egyes borfajtákból mennyi található a szekrényen, és adja vissza az eredményt egy dictionary-ben!
	* Ha a szekrényen nincs egyetlen bor sem, akkor a visszatérési érték egy üres dictionary.
	* Ha a szekrényen van bor, számítsuk ki az egyes borfajták darabszámát! A borfajták nevében nem különböztetjük meg a kis- és nagybetűket, tehát például az `aszu` és `Aszu` fajtanevek megegyeznek.

Példa a metódus működésére:

<pre>
<b>A szekrény tartalma:</b>

Bor("tokaji aszu", 2017, 13.5),
Bor("egri bikaver", 2013, 12),
Bor("tOkAjI aSzU", 2015, 13.8)

<b>A statisztika függvény visszatérési értéke:</b>

{ 'tokaji aszu': 2, 'egri bikaver': 1 }
</pre>

* Készíts egy `megisszak` metódust, amely egyetlen `Bor` objektumot vár paraméterül! A metódus törölja az adott bort a `borok` listából, amennyiben az szerepel a listában! Ha a metódus nem `Bor` típusú paramétert kap, dobj egy `TypeError` típusú kivételt, amit a `Nem bor!` szöveggel inicializálj!
* Definiáld felül az objektum szöveggé alakításáért felelő metódust az osztályban! Amennyiben a `borok` lista nem üres, a metódus térjen vissza a `Borok: {borok_neve}` szöveggel, ahol `borok_neve` a `borok` listában szereplő különböző borok fajtáinak neve, pontosvesszővel elválasztva! Ha a `borok` lista üres, akkor a metódus visszatérési értéke az `A szekreny ures.` szöveg legyen!

Példa a metódus működésére:

<pre>
<b>A szekrény tartalma:</b>

Bor("tokaji aszu", 2017, 13.5),
Bor("egri bikaver", 2013, 12),
Bor("tOkAjI aSzU", 2015, 13.8)

<b>A statisztika függvény visszatérési értéke:</b>

Borok: tokaji aszu;egri bikaver
</pre>