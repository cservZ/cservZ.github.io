# Szkriptnyelvek - 4. gyakorló feladatsor

## Python - Objektumorientáltság, kivételkezelés


### Borospince (40 pont)

Egy borospincében szekrények vannak, amelyek polcain borokat tárolnak. Készítsd el a `BorospinceException`, `Bor` és `Szekreny` osztályokat a feladatleírás alapján! A feladatok megoldását egyetlen Python szkriptbe készítsd el!


#### 1. A `BorospinceException` osztály (2 pont)

Hozz létre egy `BorospinceException` nevű kivételosztályt, amely az `Exception` beépített kivételosztályból öröklődik! Készíts egy egyparaméteres konstruktort az osztályon belül, amely egy hibaüzenetet vár paraméterben! A konstruktorban hívd meg az ősosztály konstruktorát és add át neki paraméterben a hibaüzenetet!


#### 2. A `Bor` osztály (13 pont)

Hozz létre egy `Bor` osztályt, amely a `_fajta`, `_evjarat` és `_alkoholtartalom` adattagokkal rendelkezik!

* Az osztály konstruktora a bor fajtáját, évjáratát és alkoholtartalmát várja paraméterben (ebben a sorrendben)!
    * Az alkoholtartalom paraméter értékét ne legyen kötelező megadni, alapértéke legyen `12.5`!
    * Inicializáld a `_fajta`, `_evjarat` és `_alkoholtartalom` adattagokat a paraméterek alapján! **(3 pont)**

* Írj get és set property-t a `_fajta` adattaghoz, `fajta` néven! A getter adja vissza az adattag értékét, a setter pedig állítsa be azt a paraméterben kapott értékre! **(2 pont)**

* Írj get és set property-t az `_alkoholtartalom` adattaghoz is, `alkoholtartalom` néven! 
    * A setterben kezeld le, hogy csak 0 és 100 közötti valós szám lehessen az adattag értéke! 
    * Nem megfelelő típusú vagy értékű paraméter esetén dobj egy `BorospinceException` típusú kivételt, amit a `Nem megfelelo alkoholtartalom!` szöveggel inicializálj! **(2 pont)**

* Írj get és set property-t az `_evjarat` adattaghoz, `evjarat` néven! **(1 pont)**

* Írd át az osztály konstruktorát úgy, hogy az alkoholtartalom értéke itt is ellenőrizve legyen! **(1 pont)**

* Definiáld felül az osztályban az objektum szöveggé alakításáért felelő metódust úgy, hogy az a következő szöveggel térjen vissza: `{_fajta} (evjarat: {_evjarat}), melynek alkoholtartalma: {_alkoholtartalom}%` (a kapcsos zárójelek helyére értelemszerűen a megfelelő értékek legyenek behelyettesítve)! **(2 pont)**

* Definiáld felül az osztályban az `==` operátor működését! 
    * Ha az adott objektumot egy másik `Bor` objektummal szeretnénk összehasonlítani, akkor az operátor adja vissza, hogy a két bor fajtája, évjárata és alkoholtartalma rendre megegyezik-e! A fajták egyezésének vizsgálatakor a kis- és nagybetűket ne különböztesd meg (tehát pl. `aszu` és `Aszu` ugyanaz a fajtanév)! 
    * Amennyiben a függvény nem `Bor` típusú paramétert kap, akkor logikai hamis értékkel térjen vissza! **(2 pont)**


#### 3. A `Szekreny` osztály (25 pont)

Hozz létre egy `Szekreny` osztályt, amelynek egyetlen adattagja egy `borok` nevű lista! Ebben a listában tároljuk a szekrény polcain lévő borokat.

* Az osztály konstruktora nem vár paramétert, és a `borok` adattagot egy üres listával inicializálja! **(2 pont)**

* Írj egy `get_bor` metódust, amely paraméterül egy `n` egész számot kap! A metódus térjen vissza a `borok` lista `n`-edik indexű elemével! 
    * Az egyszerűség kedvéért csak a nemnegatív indexeket kezeljük, így ha a paraméterben érkező `n`-érték negatív vagy nagyobb, mint a lista utolsó elemének indexe, akkor dobj egy `BorospinceException` típusú kivételt, amit a `Nem letezo index!` szöveggel inicializálj! **(3 pont)**

* Definiáld felül a `+=` operátort az osztályban úgy, hogy ha az egy `Bor` objektumot kap paraméterül, akkor szúrja be azt a `borok` lista végére! Egyéb típusú paraméter esetén dobj egy `TypeError` típusú kivételt, amit a `Nem bor!` szöveggel inicializálj! **(3 pont)**

* Definiáld felül a `+` operátort az osztályban, amely egy másik `Szekreny` objektumot várjon paraméterben! Az operátor térjen vissza egy új `Szekreny` objektummal, amelynek a `borok` listája az aktuális és a paraméterben érkező objektum `borok` listáinak összefűzése legyen! Nem megfelelő típusú paraméter esetén dobj egy `TypeError` típusú kivételt, amit a `Nem szekreny!` szöveggel inicializálj! **(3 pont)**

* Írj egy `atlag_alkoholtartalom` metódust, amely térjen vissza a szekrényen lévő borok (`borok` adattag) alkoholtartalmának átlagával! Amennyiben nincs egyetlen bor sem a szekrényen, akkor dobj egy `BorospinceException` típusú kivételt, amit az `Ures a szekreny!` szöveggel inicializálj! **(3 pont)**

* Készíts egy paraméter nélküli `statisztika` metódust! A metódus számolja össze, hogy a különféle borfajtákból mennyi található a szekrényen, és az eredményt adja vissza egy dictionary-ben! **(5 pont)**
    * Ha a szekrényen nincs egyetlen bor sem, akkor a visszatérési érték egy üres dictionary.
    * Ha a szekrényen van bor, akkor számold össze az egyes borfajták darabszámát! A borfajták nevében ne különböztesd meg a kis- és nagybetűket (tehát pl. `aszu` és `Aszu` ugyanaz a fajtanév)!

<div class="bordered-box border-blue indented">
<span class="blue">Példa a metódus működésére:</span><br><br>

<pre class="language-html">
<b>A szekrény tartalma:</b>
Bor('tokaji aszu', 2017, 13.5),
Bor('egri bikaver', 2013, 12.0),
Bor('TOKAJI ASZU', 2015, 13.8)

<b>A statisztika metódus visszatérési értéke:</b>
{'tokaji aszu': 2, 'egri bikaver': 1}
</pre>
</div>

* Írj egy `megisszak` metódust, amely egy `Bor` típusú objektumot vár paraméterben! A metódus törölje az adott bort a `borok` listából, amennyiben az szerepel a listában! Feltehetjük, hogy minden bor objektum egyszer fordul elő a szekrényen.
    * Ha a bor nem szerepel a listában, akkor dobj egy `BorospinceException` típusú kivételt, amit a `Bor nem talalhato!` szöveggel inicializálj! 
    * Ha a metódus nem `Bor` típusú paramétert kap, akkor dobj egy `TypeError` típusú kivételt, amit a `Nem bor!` szöveggel inicializálj! **(3 pont)**

* Definiáld felül az objektum szöveggé alakításáért felelő metódust az osztályban! 
    * Amennyiben a `borok` lista üres, akkor a metódus térjen vissza az `Ez egy ures szekreny.` szöveggel!
    * Ellenkező esetben a metódus térjen vissza egy olyan szöveggel, amely 1 vesszővel és 1 szóközzel elválasztva tartalmazza a szekrényen lévő borfajták nevét és az azokból meglévő mennyiséget, `{darab} {fajta}` formátumban! A szöveg végén ne legyen se vessző, se szóköz! **(3 pont)**

<div class="bordered-box border-green indented">
<span class="green">Tipp:</span> Használd fel a <code>statisztika</code> metódus visszatérési értékét!
</pre>
</div>

<div class="bordered-box border-blue indented">
<span class="blue">Példa a metódus működésére:</span><br><br>

<pre class="language-html">
<b>A szekrény tartalma:</b>
Bor('tokaji aszu', 2017, 13.5),
Bor('egri bikaver', 2013, 12.0),
Bor('TOKAJI ASZU', 2015, 13.8),
Bor('chardonnay', 2019, 13.0)

<b>Az __str__ metódus visszatérési értéke:</b>
'2 tokaji aszu, 1 egri bikaver, 1 chardonnay'
</pre>
</div>