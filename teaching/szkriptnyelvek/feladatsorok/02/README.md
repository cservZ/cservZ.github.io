<style>
	h1:first-of-type { display: none; }
</style>

# Szkriptnyelvek - 2. gyakorló feladatsor

## Python függvények, stringek


### 1. feladat: Páros számok összege

Írj Pythonban egy `paros_osszeg` nevű függvényt, amely egy egész számot vár paraméterül! A függvény adja össze a páros számokat 1-től a paraméterben kapott értékig (a paramétert is beleértve, amennyiben az páros)! A visszatérési érték az így kapott összeg.

<pre>
<b>Input:</b> 120
<b>Return:</b> 3660
</pre>


### 2. feladat: Felhasználónév generátor

Egy chatalkalmazásban a felhasználóneveket a felhasználók teljes nevéből (vezetéknév + keresztév) és születési évéből generáljuk a következőképpen:

* a keresztnevet (több keresztnév esetén a legutolsó keresztnevet) csupa kisbetűssé alakítjuk
* a csupa kisbetűssé alakított keresztnévhez hozzáfűzzük a születési évet.

Írj egy `felhasznalonevet_general` függvényt, amely két paramétert vár: a felhasználó teljes nevét (szöveg) és születési évét (egész szám)! A függvény generálja le a paraméterekből a felhasználónevet a fenti leírás alapján, és térjen is vissza vele! A születési év paramétert ne legyen kötelező megadni, alapértéke legyen 1970!

**Példa:**

<pre>
<b>Input:</b> Zsiros Balint Odon, 2001
<b>Output:</b> odon2001

<b>Input:</b> Vincs Eszter
<b>Output:</b> eszter1970
</pre>

