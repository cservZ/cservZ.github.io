<style>
    h1:first-of-type { display: none; }
</style>

# Szkriptnyelvek - 6. gyakorló feladatsor

## JavaScript vezérlés, függvények, stringek

A feladatok megoldása előtt telepítsük fel a [Node.js](https://nodejs.org/en/) futtatókörnyezetet, aminek segítségével parancssorból is tudjuk majd futtatni a JavaScript kódunkat!


### 1. feladat: Teve

A [TeveClub](https://teveclub.hu/) oldalon virtuálisan tudunk tevéket nevelni. Egy új teve igénylésekor meg kell adnunk a tevénk nevét és hívójelét (ez kb. egy jelszónak feleltethető meg).

Írj egy `tevetIgenyel` függvényt, amely két paramétert vár: a teve nevét és hívójelét! A függvényben ellenőrizzük, hogy a megadott hívójel megfelelő erősségű-e! Ezt a következőképpen tegyük meg:

* Ha a hívójel 6 karakternél rövidebb, akkor írjuk ki a `Tul rovid hivojel` szöveget a konzolra!
* Ha a hossz megfelelő, de a hívójel megegyezik a teve nevével, akkor jelenítsük meg a `Tul nyilvanvalo hivojel` szöveget!
* Ha a hossz megfelelő és a hívójel különbözik a teve nevétől, viszont a  hívójel tartalmazza a `teve` vagy `camel` szövegek valamelyikét, akkor írassuk ki a `Tiltott szoveg a hivojelben` szöveget!
* Minden egyéb esetben a `Sikeres teve igenyles` szöveget jelenítsük meg a képernyőn!

**Példa:**

<pre>
<b>Input:</b> 'MyEpicTeve', 'epic'
<b>Output:</b> 'Tul rovid hivojel'

<b>Input:</b> 'Leenhurbertindrund', 'sivatag4life'
<b>Output:</b> 'Sikeres teve igenyles'
</pre>


### 2. feladat: Köbösszeg

Írj egy `kobosszeg` nevű függvényt, amely két egész számot kap paraméterül: rendre egy zárt intervallum alsó és felső végpontját! A függvény adja vissza az intervallumba eső számok köbének az összegét! (A végpontok természetesen még beletartoznak az intervallumba.)

**Példa:**

<pre>
<b>Input:</b> 1, 3
<b>Return:</b> 36

<b>Input:</b> 10, 100
<b>Return:</b> 25500475
</pre>


### 3. feladat: Imposztor

Dani a népszerű [Among Us](http://www.innersloth.com/gameAmongUs.php) játékkal játszik. A játék egyes köreiben annak a százalékos valószínűsége, hogy Dani imposztor lesz, a következő képlettel kapható meg: `100 * (imposztorok száma / játékosok száma)`.

Írj egy `imposztor` nevű függvényt, amely rendre az imposztorok számát és a játékosok számát kapja paraméterül (mindkét érték garantáltan szám típusú)!

* Egy játékban 1-3 imposztor lehet, valamint a játékosok száma 2 és 10 között kell, hogy legyen. Ha a paraméterben kapott értékek nem felelnek meg ezeknek a megszorításoknak, akkor a függvény térjen vissza a `Hiba` szöveggel!
* Megfelelő paraméter értékek esetén a függvény visszatérési értéke a `Dani {N}% valoszinuseggel imposztor` szöveg legyen, ahol `{N}` a fenti képlet alapján kiszámolt százalékérték, egész számra kerekítve (a hagyományos matematikai kerekítést használjuk)!

**Példa:**

<pre>
<b>Input:</b> 4, 10
<b>Return:</b> 'Hiba'

<b>Input:</b> 2, 7
<b>Return:</b> 'Dani 29% valoszinuseggel imposztor'
</pre>


