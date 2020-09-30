<style>
	h1:first-of-type { display: none; }
</style>

# Szkriptnyelvek - 4. gyakorló feladatsor

## Python - Objektumorientáltság, kivételkezelés


A feladat egy egyszerű "receptkönyv" alkalmazás elkészítése Python nyelven. Hozd létre az alábbi osztályokat, és írd meg azok törzsét a feladatok leírása alapján! A feladatok megoldását egyetlen Python szkriptbe készítsd el!


### 1. Hozzávaló

Hozz létre egy `Hozzavalo` osztályt, amely a következő 2 adattaggal rendelkezik: `_nev` és `_mennyiseg`!

* A konstruktor 2 paramétert kap (rendre: `nev`, `mennyiseg`), és ezek alapján inicializálja az adattagokat. A `mennyiseg` paraméter értékét ne legyen kötelező megadni, alapértéke legyen 1!
* Készíts hagyományos getter és setter metódusokat a `_nev` adattaghoz `get_nev`, illetve `set_nev` néven!
* Írj get és set property-t a `_mennyiseg` adattaghoz `mennyiseg` néven! A setterben kezeld le, hogy csak pozitív egész szám lehessen az adattag értéke! Nem megfelelő paraméter esetén a setter ne csináljon semmit!
* Definiáld felül az objektum szöveggé alakításáért felelő metódust úgy, hogy az a következő szöveggel térjen vissza: `{_mennyiseg} db {_nev}` (értelemszerűen a megfelelő adattagok értéke legyen behelyettesítve)!
* Definiáld felül az osztályban az `==` operátor működését! Ha az adott objektumot egy másik `Hozzavalo` objektummal szeretnénk összehasonlítani, az operátor adja vissza, hogy a két objektum neve és mennyisége megegyezik-e! Nem `Hozzavalo` típusú paraméter esetén az operátor ne csináljon semmit!


### 2. Recept

Írj egy `Recept` nevű osztályt, amely két adattaggal rendelkezik: `_etelnev` (az étel neve, amit a recepttel elkészíthetünk) és `hozzavalok`! A `hozzavalok` paraméter egy lista, amely a recepthez szükséges hozzávalókat fogja tárolni.

* Készítsd el a konstruktort, amely az étel nevét várja paraméterül, és ezzel inicializálja az `_etelnev` adattagot! A konstruktorban inicializáljuk a `hozzavalok` adattagot egy üres listával!
* ...

