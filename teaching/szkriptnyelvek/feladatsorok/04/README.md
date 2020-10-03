<style>
	h1:first-of-type { display: none; }
</style>

# Szkriptnyelvek - 4. gyakorló feladatsor

## Python - Objektumorientáltság, kivételkezelés, fájlkezelés


### 1. Receptkönyv

A feladat egy egyszerű receptkönyv alkalmazás elkészítése Python nyelven. Hozd létre az alábbi osztályokat, és írd meg azok törzsét a feladatleírás alapján! A feladatok megoldását egyetlen Python szkriptbe készítsd el!


#### A `Hozzavalo` osztály

Hozz létre egy `Hozzavalo` osztályt, amely a következő 2 adattaggal rendelkezik: `_nev` és `_mennyiseg`!

* A konstruktor 2 paramétert kap (ezek rendre: `nev`, `mennyiseg`), amelyekkel inicializálja a megfelelő adattagokat. A `mennyiseg` paraméter értékét ne legyen kötelező megadni, alapértéke legyen 1!
* Készíts hagyományos getter és setter metódusokat a `_nev` adattaghoz `get_nev`, illetve `set_nev` néven!
* Írj get és set property-t a `_mennyiseg` adattaghoz, `mennyiseg` néven! A setterben kezeld le, hogy csak pozitív egész szám lehessen az adattag értéke! Ettől eltérő paraméter esetén a setter ne csináljon semmit!
* Definiáld felül az objektum szöveggé alakításáért felelő metódust úgy, hogy az a következő szöveggel térjen vissza: `{_mennyiseg} db {_nev}` (értelmeszerűen a megfelelő adatok értéke kerüljön behelyettesítésre)!
* Definiáld felül az osztályban az `==` operátor működését! Ha az adott objektumot egy másik `Hozzavalo` objektummal szeretnénk összehasonlítani, akkor az operátor adja vissza, hogy a két objektum neve és mennyisége megegyezik-e! Nem `Hozzavalo` típusú paraméter esetén az operátor logikai hamis értékkel térjen vissza!


#### A `Recept` osztály

Írj egy `Recept` nevű osztályt, amely két adattaggal rendelkezik: `_etelnev` (az étel neve, amelyet a receptet követve elkészíthetünk) és `hozzavalok`! A `hozzavalok` adattag egy lista lesz, amely a recepthez szükséges hozzávalókat fogja tárolni.

* Készítsd el a konstruktort, amely az étel nevét várja paraméterül, és ezzel inicializálja az `_etelnev` adattagot! A konstruktorban inicializáljuk a `hozzavalok` adattagot egy üres listával!
* Készíts get és set property-t az `_etelnev` adattaghoz, `etelnev` néven! A setterben kezeld le, hogy csak szöveges típusú adatot lehessen értékül adni az adattagnak! Nem megfelelő adattípus esetén a setter ne módosítsa az adattag értékét!
* Készíts egy `get_hozzavalo` metódust, amely paraméterül egy egész számot vár! A metódus térjen vissza a `hozzavalok` lista adott indexén lévő elemével! Az egyszerűség kedvéért csak a nemnegatív indexeket kezeljük, tehát amennyiben a paraméterben kapott szám negatív vagy nagyobb, mint a lista mérete, dobj egy `Exception` típusú kivételt, amit a `Nem letezo index!` szöveggel inicializálj!
* Definiáld felül az osztályban a `+` operátort úgy, hogy ha az egy `Hozzavalo` objektumot kap paraméterül, akkor a metódus szúrja be a paraméterben érkező hozzávalót a `hozzavalok` lista végére!
* Bővítsd ki az előző operator overload függvényt úgy, hogy az egy másik `Recept`típusú paramétert is tudjon fogadni! A függvény térjen vissza egy új `Recept` objektummal! Az új objektum `_etelnev` adattagjának értéke `Bonyolult etel` legyen! A `hozzavalok` lista legyen az eredi és a paraméterben kapott objektum `hozzavalok` listájának összefűzése!
* Írj egy `ossz_hozzavaloszam` metódust, amely visszaadja, hogy összesen hány hozzávaló szükséges a recept elkészítéséhez! Az összes hozzávaló számát úgy kapjuk, ha összeadjuk, hogy az egyes hozzávalókból külön-külön mennyi kell. 
* Írj egy `legtobb_kell` metódust, amely visszaadja annak a hozzávalónak a nevét, amelyből a legtöbbet kell beletenni a receptbe (`_mennyiseg` adattag)! Ha a `hozzavalok` lista üres, akkor dobj egy `Exception` típusú kivételt, amit a `Nincsenek hozzavalok!` szöveggel incializálj!
* Készíts egy `kell_bele` metódust, amely egy hozzávaló nevét (szöveg) kapja paraméterül, és eldönti, hogy szükséges-e a recepthez az adott hozzávaló (azaz szerepel-e a `hozzavalok` listában az adott nevű hozzávaló, legalább 1 `_mennyiseg` értékkel)! 
* Definiáld felül az objektum szöveggé alakításáért felelő metódust! Amennnyiben a `hozzavalok` lista üres, akkor a metódus térjen vissza a `Nincs megjelenitheto hozzavalo!` szöveggel! Ellenkező esetben a metódus írja ki a recepthez szükséges hozzávalók nevét és mennyiségét, pontosvesszővel elválasztva (tipp: a név és mennyiség lekéréséhez elég meghívni az adott hozzávaló szöveggé alakító metódusát)!