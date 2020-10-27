<style>
    h1:first-of-type { display: none; }
</style>

# Szkriptnyelvek - 6. gyakorló feladatsor

## JavaScript vezérlés, függvények, stringek

A feladatok megoldása előtt telepítsük a [Node.js](https://nodejs.org/en/) futtatókörnyezetet, aminek segítségével parancssorból is tudjuk majd futtatni a JavaScript kódunkat!


### 1. feladat: Imposztor

Dani a népszerű Among Us játékkal játszik. A játék egyes köreiben annak a százalékos valószínűsége, hogy Dani imposztor lesz, a következő képlettel kapható meg: `100 * (imposztorok száma / játékosok száma)`.

Írj egy `imposztor` nevű függvényt, amely rendre az imposztorok számát és a játékosok számát kapja paraméterül (mindkét érték garantáltan szám típusú)!

* Egy játékban 1-3 imposztor lehet. Amennyiben az első paraméterben érkező szám ettől eltérő, a függvény térjen vissza a `Nem megfelelo szamu imposztor` szöveggel!
* Egy játékban 2-10 játékos lehet. Amennyiben a második paraméterben érkező szám ettől eltérő, a függvény térjen vissza a `Nem megfelelo szamu jatekos` szöveggel!
* Minden egyéb esetben a függvény visszatérési értéke a `Dani {N}% valoszinuseggel imposztor` szöveg, ahol `{N}` a fenti képlet alapján kiszámolt százalékérték, egész számra kerekítve!

**Példa:**

<pre>
<b>Input:</b> 4, 10
<b>Return:</b> 'Nem megfelelo szamu imposztor'

<b>Input:</b> 2, 0
<b>Return:</b> 'Nem megfelelo szamu jatekos'

<b>Input:</b> 2, 7
<b>Return:</b> 'Dani 29% valoszinuseggel imposztor'
</pre>


### 2. feladat: Számjegyek átlaga

Írj egy `szamjegyAtlag` nevű függvényt, amely garantáltan egy egész számot vár paraméterül, és visszaadja ennek a számjegyeinek az átlagát! Ha a függvényt nem szám típusú paraméterrel hívjuk meg, akkor a visszatérési érték legyen `-1`!

**Példa:**

<pre>
<b>Input:</b> 741258
<b>Return:</b> 4.5

<b>Input:</b> -420
<b>Return:</b> 2

<b>Input:</b> 'kecske'
<b>Return:</b> -1
</pre>


### 3. feladat: Karakterek többszörözése

Írj egy `tobbszoroz` nevű függvényt, amely két paramétert vár: egy szöveget és egy egész számot! A függvény visszatérési értéke egy szöveg, amit úgy kapunk, hogy az első paraméterben érkező szöveg minden karakterét vesszük annyiszor, mint amennyi a második paraméterben kapott szám.

A függvény visszatérési értéke legyen a `Hiba` szöveg, amennyiben...

* ...az első paraméter nem szöveges típusú vagy a második paraméter nem szám
* ...az első paraméterben érkező szöveg az üres string
* ...a második paraméterben érkező szám 1-nél kisebb!

**Példa:**

<pre>
<b>Input:</b> 'Alma', 4
<b>Return:</b> 'AAAAllllmmmmaaaaa'

<b>Input:</b> 'Korte', -1
<b>Return:</b> 'Hiba'
</pre>


