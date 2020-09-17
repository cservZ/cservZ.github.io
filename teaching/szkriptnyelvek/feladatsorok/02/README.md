<style>
	h1:first-of-type { display: none; }
</style>

# Szkriptnyelvek - 2. gyakorló feladatsor

## Python függvények, stringek


### 1. feladat: Felhasználónév generátor

Írj Pythonban egy `felhasznalonevet_general` függvényt, amely két paramétert vár: egy felhasználó teljes nevét (vezetéknév és keresztnév), illetve születési évét! A függvény a kapott paraméterekből generál egy felhasználónevet úgy, hogy a felhasználó keresztnevét (több keresztnév esetén a legutolsó keresztnevet) csupa kisbetűssé alakítja, majd ehhez hozzáfűzi a születési évet. Az így kapott felhasználónév legyen a visszatérési érték! A születési év paramétert ne legyen kötelező megadni, alapértéke legyen 1970!

**Input:**

```
Zsíros Bálint Ödön, 2000
```

**Return:**

```
odon2000
```


### 2. feladat: Kuba

Kuba egy online szerveren moderátor. A szabadidejét sokszor azzal tölti el, hogy a szerver bizonyos felhasználóinak a nevét átírja a következőképpen:

* A felhasználónév végére egy `.` (pont) karaktert tesz, amennyiben az eredetileg nem végződik pontra
* Ellenkező esetben, a pont karakterre végződő felhasználónevek esetén eltávolítja a név végéről a pontot.

Írj egy `kuba` függvényt, ami egy felhasználónevet vár paraméterül, elvégzi a fenti szabályok alapján a név átalakítását, majd visszatér az átalakított felhasználónévvel!

**Input:**

```
korte98
```

**Return:**

```
korte98.
```


### 3. feladat: Kódfejtés

Írj egy `dekodol` nevű függvényt, amely egy szöveget (kód) és egy egész számot (n) kap paraméterül! A függvény első paramétere egy kód, amit úgy fejthetünk vissza, ha a szöveg elejétől elindulva minden n-edik karaktert összeolvasunk. A függvény visszatérési értéke a dekódolt szöveg.

**Input:**

```
kxxexxcxxsxxkxxex, 3
```

**Return:**

```
kecske
```


### 4. feladat: Jelszó-erősség mérő

Elliot egy kiberbiztonsági cégnél dolgozik programozóként. Egyik nap a felettese egy jelszó-erősség mérő szkript írásával bízta meg.

Készíts egy `jelszo_erosseg` nevű függvényt, amely egy szöveges paramétert vár, és a paraméterben érkező jelszóról eldönti, hogy mennyire erős! A visszatérési érték a jelszó erőssége legyen.

Szabályok a jelszóerősség kiszámítására:

* Alapból minden jelszó 1 erős
* Legalább 5 karakter hosszú jelszó: +1 erősség
* Legalább 8 karakter hosszú jelszó: +2 erősség
* Ha van benne alulvonás, kötőjel vagy pont: +3 erősség
* Ha tartalmazza a `jelszo` vagy `123456` részstringet, akkor a jelszó automatikusan 0 erős
* Ha a jelszó 3 karakternél rövidebb, akkor szintén automatikusan 0 erős.

**Input:**

```
hazi_macska_9
```

**Return:**

```
7
```