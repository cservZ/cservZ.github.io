<style>
	h1:first-of-type { display: none; }
</style>

# Szkriptnyelvek - 2. gyakorló feladatsor

## Python függvények, stringek


### 1. feladat: Abszolútérték-maximum

Írj Pythonban egy `abs_max` nevű függvényt, amely két egész számot vár paraméterül, és visszatér ennek a két számnak az abszolútérték-maximumával! Tehát vesszük mindkét szám abszolútértékét, és ezek közül visszaadjuk a nagyobbikat.

**Példa:**

<pre>
<b>Input:</b> 12, -15
<b>Return:</b> 15
</pre>


### 2. feladat: Páros számok összege

Írj egy `paros_osszeg` nevű függvényt, amely egy egész számot vár paraméterül! A függvény adja össze a páros számokat 1-től a paraméterben kapott értékig (a paramétert is beleértve, amennyiben az páros)! A visszatérési érték az így kapott összeg.

<pre>
<b>Input:</b> 120
<b>Return:</b> 3660
</pre>


### 3. feladat: Felhasználónév generátor

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


### 4. feladat: Kuba

Kuba egy online szerveren moderátor. A szabadidejét sokszor azzal tölti, hogy a szerver bizonyos felhasználóinak a nevét átírja a következőképpen:

* a felhasználónév végére egy `.` (pont) karaktert tesz, amennyiben az eredetileg nem végződött pontra
* ellenkező esetben, pont karakterre végződő felhasználónevek esetén eltávolítja a név végéről a pontot.

Írj egy függvényt `kuba` néven, amely egy felhasználónevet (szöveg) vár paraméterül, elvégzi a fenti szabályok alapján a név átalakítását, majd visszatér az így kapott eredménnyel!

**Példa:**

<pre>
<b>Input:</b> Korte98
<b>Return:</b> Korte98.

<b>Input:</b> Goethe.
<b>Return:</b> Goethe
</pre>


### 5. feladat: Kódfejtés

TODO


### 6. feladat: Jelszó-erősség mérő

TODO


### 7. feladat: Szavak száma

TODO


### 8. feladat: Mássalhangzó eltávolítás

TODO


### 9. feladat: Palindrom

TODO


### 10. feladat: sZöVeG áTaLaKíTáS

TODO