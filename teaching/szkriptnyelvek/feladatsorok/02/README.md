<style>
	h1:first-of-type { display: none; }
</style>

# Szkriptnyelvek - 2. gyakorló feladatsor

## Python függvények, stringek


### 1. feladat: Páros számok összege

Írj Pythonban egy `paros_osszeg` nevű függvényt, amely egy egész számot vár paraméterül! A függvény adja össze a páros számokat 1-től a paraméterben kapott értékig (a paramétert is beleértve, amennyiben az páros)! A visszatérési érték az így kapott összeg.

**Példa:**

<pre>
<b>Input:</b> 120
<b>Return:</b> 3660
</pre>

### 2. feladat: Felhasználónév generátor

Egy chatalkalmazásban a felhasználóneveket a felhasználók teljes nevéből (vezetéknév és keresztnév) és születési évéből generáljuk a következőképpen:

* a keresztnevet (több keresztnév esetén a legutolsó keresztnevet) csupa kisbetűssé alakítjuk
* a csupa kisbetűssé alakított keresztnévhez hozzáfűzzük a születési évet.

Írj egy `felhasznalonevet_general` függvényt, amely két paramétert vár: a felhasználó teljes nevét (szöveg) és születési évét (egész szám)! A függvény generálja le a felhasználónevet a paraméterekből a fenti leírás alapján, és térjen vissza az így kapott felhasználónévvel! A születési név paramétert ne legyen kötelező megadni, alapértéke legyen 1970!

**Példa:**

<pre>
<b>Input:</b> Zsiros Balint Odon, 2001
<b>Output:</b> odon2001

<b>Input:</b> Vincs Eszter
<b>Output:</b> eszter1970
</pre>


### 3. feladat: Kuba

Kuba egy online szerveren moderátor. A szabadidejét sokszor azzal tölti el, hogy a szerver bizonyos felhasználóinak a nevét átírja a következőképpen:

* A felhasználónév végére egy `.` (pont) karaktert tesz, amennyiben az eredetileg nem végződik pontra
* Ellenkező esetben, a pont karakterre végződő felhasználónevek esetén eltávolítja a név végéről a pontot.

Írj egy `kuba` függvényt, ami egy felhasználónevet vár paraméterül, elvégzi a fenti szabályok alapján a név átalakítását, majd visszatér az átalakított felhasználónévvel!

<pre>
<b>Input:</b> Korte98
<b>Return:</b> Korte98.

<b>Input:</b> Goethe.
<b>Return:</b> Goethe
</pre>


### 4. feladat: Kódfejtés

Írj egy `dekodol` nevű függvényt, amely egy szöveget (kód) és egy egész számot (n) kap paraméterül! A függvény első paramétere egy kód, amit úgy fejthetünk vissza, ha a szöveg elejétől elindulva minden n-edik karaktert összeolvasunk. A függvény visszatérési értéke a dekódolt szöveg.

**Példa:**

<pre>
<b>Input:</b> kxxexxcxxsxxkxxex, 3
<b>Output:</b> kecske
</pre>


### 5. feladat: Jelszó-erősség mérő

Elliot egy kiberbiztonsági cégnél dolgozik programozóként. Egyik nap a felettese egy jelszó-erősség mérő szkript írásával bízta meg.

Készíts egy `jelszo_erosseg` nevű függvényt, amely egy szöveges paramétert vár, és a paraméterben érkező jelszóról eldönti, hogy mennyire erős! A visszatérési érték a jelszó erőssége legyen.

Szabályok a jelszóerősség kiszámítására:

* Alapból minden jelszó 1 erős
* Legalább 5 karakter hosszú jelszó: +1 erősség
* Legalább 8 karakter hosszú jelszó: +2 erősség
* Ha van benne alulvonás, kötőjel vagy pont: +3 erősség
* Ha tartalmazza a `jelszo` vagy `123456` részstringet, akkor a jelszó automatikusan 0 erős
* Ha a jelszó 3 karakternél rövidebb, akkor szintén automatikusan 0 erős.

**Példa:**

<pre>
<b>Input:</b> hazi_macska_9
<b>Return:</b> 7
</pre>