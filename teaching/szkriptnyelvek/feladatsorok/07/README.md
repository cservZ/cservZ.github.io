<style>
    h1:first-of-type { display: none; }
</style>

# Szkriptnyelvek - 7. gyakorló feladatsor

## A JavaScript fontosabb adatszerkezetei


### 1. feladat: Full stack

Jónás, a csokigyáros el akarja készíteni a vállalkozásának a weboldalát, ezért webfejlesztőket keres. A munkára beadott jelentkezések elbírálásakor Jónás előnyben részesíti azokat a fejlesztőket, akik a frontendhez és a backendhez egyaránt értenek ("full stack fejlesztők").

Írj egy `fullStack` nevű függvényt, amely két szöveget kap paraméterül! Az első szövegben a frontend, míg a második szövegben a backend fejlesztők nevei szerepelnek pontosvesszőkkel elválasztva. A függvény adja vissza egy tömbben azoknak a nevét, akik a frontend és backend fejlesztők között egyaránt szerepelnek!

**Példa:**

<pre>
<b>Input:</b> 'Zsiros B. Odon;Koaxk Abel;Heu Reka;Riz Otto', 'Riz Otto;Rabsz Olga;Ga Zora;Trab Antal;Koaxk Abel;Winch Eszter'
<b>Return:</b> ['Koaxk Abel', 'Riz Otto']

<b>Input:</b> 'Citad Ella;Techno Kolos', 'Git Aron;Teask Anna'
<b>Return:</b> []
</pre>


### 2. feladat: Tömbelemek hatványozása

Írj egy `hatvanyoz` nevű függvényt, amely két paramétert vár: egy számokat tároló tömböt és egy egész számot! A függvény emelje a tömbben lévő számokat a második paraméterben kapott szám által meghatározott hatványukra, majd térjen vissza a hatványozás után kapott tömbbel!

Ha valamelyik paraméter típusa nem megfelelő, akkor a függvény egy üres tömbbel térjen vissza!

**Példa:**

<pre>
<b>Input:</b> [1, 4, 7, 2, 5], 3
<b>Return:</b> [1, 64, 343, 8, 125]

<b>Input:</b> 'sajt', 5
<b>Return:</b> []
</pre>


### 3. feladat: Csak pozitívan

Írj egy `pozitivSzamok` nevű függvényt, amely egy tetszőleges típusú értékeket vegyesen tároló tömböt kap paraméterül! A függvény válogassa ki a paraméterben kapott tömbből a pozitív, szám típusú adatokat, és adja vissza őket egy tömbben!

Ha a függvényt nem tömb típusú paraméterrel hívjuk meg, akkor a visszatérési érték legyen `undefined`!

**Példa:**

<pre>
<b>Input:</b> [false, '42', 36, -50, 'sajt', 0, 3.14, true, NaN, undefined, 5000]
<b>Return:</b> [36, 3.14, 5000]

<b>Input:</b> 'macska'
<b>Return:</b> undefined
</pre>


### 4. feladat: Kahoot

A kedvenc tárgyunkból egy [Kahoot](https://kahoot.it/) játékban veszünk részt. A játék során minden kérdés után eltároljuk, hogy melyik játékos rendelkezik éppen a legtöbb ponttal.

Írj egy `leghosszabbNyeroszeria` nevű függvényt, amely egy tömböt kap paraméterként - ez a tömb rendre tartalmazza az egyes kérdések után az éppen legtöbb ponttal rendelkező játékos nevét. A függvény térjen vissza annak a játékosnak a nevével, aki a leghosszabb nyerőszériával rendelkezik (azaz ő nyerte meg a legtöbb **közvetlen egymás utáni** kört)!

Amennyiben két játékosnak ugyanannyi a leghosszabb nyerőszériája, akkor közülük a tömbben korábban előforduló játékos nevét adjuk vissza!

**Példa:**

<pre>
<b>Input:</b> ['NyanCat', 'sajt42', 'Laßlo', 'Laßlo', 'Laßlo', 'NyanCat', 'NyanCat', 'sajt42']
<b>Return:</b> 'Laßlo'

<b>Input:</b> ['meki', 'meki', 'NullPointerGoesBrr', 'n00bslay3r', 'n00bslay3r']
<b>Return:</b> 'meki'
</pre>


### 5. feladat: Egyedi szavak száma

Írj egy `egyediSzavakSzama` nevű függvényt, amely egy szöveget kap paraméterül, és visszaadja, hogy ebben a szövegben hány **különböző** szó található! A szavak vizsgálatakor a kis- és nagybetűket ne különböztessük meg (tehát pl. `alma` és `ALMA` ugyanaz a szó)!

**Példa:**

<pre>
<b>Input:</b> 'Never gonna give you up, never gonna let you down, never gonna run around and desert you'
<b>Return:</b> 11
</pre>


### 6. feladat: Ötöslottó

Erzsi néni minden héten játszik az ötöslottón. A játék során 90 számból húznak ki 5 darab számot véletlenszerűen, és ezek közül kell a játékosoknak minél többet eltalálniuk. Erzsi néni ezen a héten a véletlenre bízza az öt szám bejelölését a lottószelvényen.

Írj egy paraméter nélküli `otoslotto` nevű függvényt, amely generál 5 darab véletlenszámot 1 és 90 között, és visszaadja ezeket egy tömbben! Ügyelj arra, hogy a számok között ne legyen ismétlődés (minden számot csak egyszer jelölhetünk meg)!


### 7. feladat: Fájlok csoportosítása

Máté a számítógépén egy mappában tárolja a Szkriptnyelvek kurzushoz kapcsolódó fájljait. Egyik nap úgy döntött, hogy szeretné ennek a mappának a fájljait rendszerezni.

Írj egy `fajlokatCsoportosit` nevű függvényt, amely egy tömböt vár paraméterül! A tömb tartalmazza a mappában található fájlok neveit, kiterjesztéssel együtt! A függvény visszatérési értéke egy kétdimenziós tömb, amelynek...

* ...első eleme a `py` kiterjesztésű fájlok neveit tartalmazó tömb
* ...második eleme a `js` kiterjesztésű fájlok neveit tartalmazó tömb
* ...harmadik eleme a összes egyéb kiterjesztéssel rendelkező fájl nevét tároló tömb.

A kiterjesztés alatt a fájl nevében a legutolsó `.` (pont) karakter után szereplő szöveget értjük. A kiterjesztés vizsgálatakor nem különböztetjük meg a kis- és nagybetűket.

**Példa:**

<pre>
<b>Input:</b> ['gyak1.py', 'GYAKORLO.JS', 'feladat.pdf', 'elso.zh.py', 'riport.txt']
<b>Return:</b> [['gyak1.py', 'elso.zh.py'], ['GYAKORLO.JS'], ['feladat.pdf', 'riport.txt']]

<b>Input:</b> ['index.js', 'functions.strings.js', 'INDEX.HTML', 'test01.js']
<b>Return:</b> [[], ['index.js', 'functions.strings.js', 'test01.js'], ['INDEX.HTML']]
</pre>

