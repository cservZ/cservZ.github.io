<style>
    h1:first-of-type { display: none; }
</style>

# Szkriptnyelvek - 7. gyakorló feladatsor

## A JavaScript fontosabb adatszerkezetei - Tömbök és objectek


### 1. feladat: Full stack

Jónás, a csokigyáros el akarja készíteni a vállalkozásának a weboldalát, ezért webfejlesztőket keres. A munkára való jelentkezések elbírálásakor Jónás előnyben részesíti azokat a fejlesztőket, akik a frontendhez és a backendhez egyaránt értenek (full stack fejlesztők).

Írj egy `fullStack` nevű függvényt, amely két szöveget kap paraméterül: az első szövegben a frontend, míg a második szövegben a backend fejlesztők nevei szereplnek pontosvesszőkkel elválasztva! A függvény válogassa ki egy tömbbe azoknak a nevét, akik a frontend és a backend fejlesztők között is szerepelnek! Az így kapott tömb legyen a függvény visszatérési értéke!

**Példa:**

<pre>
<b>Input:</b> 'Zsiros B. Odon;Koaxk Abel;Heu Reka;Riz Otto', 'Riz Otto;Rabsz Olga;Ga Zora;Trab Antal;Koaxk Abel;Winch Eszter'
<b>Return:</b> ['Koaxk Abel', 'Riz Otto']

<b>Input:</b> 'Citad Ella;Techno Kolos', 'Git Aron;Teask Anna'
<b>Return:</b> []
</pre>


### 2. feladat: Tömbelemek hatványozása

Írj egy `hatvanyoz` nevű függvényt, amely két paramétert vár: egy számtömböt és egy egész számot! A függvény emelje a tömbben található összes számot a második paraméterben kapott szám által meghatározott hatványára, majd adja vissza a hatványozás után kapott tömböt!

Ha valamelyik paraméter nem megfelelő típusú, akkor a függvény egy üres tömbbel térjen vissza!

**Példa:**

<pre>
<b>Input:</b> [7, 4, 1, 2, 5], 2
<b>Return:</b> [49, 16, 1, 4, 25]

<b>Input:</b> 'sajt', 5
<b>Return:</b> []
</pre>


### 3. feladat: Kahoot

A kedvenc tárgyunkból a [Kahoot](https://kahoot.it/) kvízjátékkal játszunk éppen. A játék során minden kérdés után eltároljuk, hogy melyik játékos rendelkezik éppen a legtöbb ponttal.

Írj egy `leghosszabbNyeroszeria` nevű függvényt, amely egy tömböt kap paraméterként! A tömb rendre tartalmazza az egyes kérdések után az éppen legtöbb ponttal rendelkező játékos nevét. A függvény térjen vissza annak a játékosnak a nevével, aki a leghosszabb nyerőszériával rendelkezik (azaz ő nyerte meg a legtöbb közvetlen egymás utáni kört)!

Ha két játkosnak ugyanannyi a leghosszabb nyerőszériájuk, akkor közülük a tömbben korábban szereplő játékos nevét válasszuk!

**Példa:**

<pre>
<b>Input:</b> ['NyanCat', 'sajt42', 'Laßlo', 'Laßlo', 'Laßlo', 'NyanCat', 'NyanCat', 'sajt42', 'NyanCat', 'sajt42']
<b>Return:</b> 'Laßlo'

<b>Input:</b> ['meki', 'meki', '¯\_(ツ)_/¯', 'n00bsl4y3r', 'n00bsl4y3r']
<b>Return:</b> 'meki'
</pre>


### 4. feladat: Csak pozitívan

Írj egy `pozitivSzamok` nevű függvényt, amely egy mindenféle típusú értékeket vegyesen tartalmazó tömböt kap paraméterül! A függvény válogassa ki a paraméterben érkező tömbből a pozitív, szám típusú adatokat, és adja vissza őket egy tömbben!

**Példa:**

<pre>
<b>Input:</b> [false, '42', 36, -50, 'sajt', 0, 3.14, true, NaN, undefined, 5000]
<b>Return:</b> [36, 3.14, 5000]
</pre>


### 5. feladat: Fájlok csoportosítása

Máté a számítógépén egy mappában tárolja a Szkriptnyelvek kurzushoz kapcsolódó fájljait. Egyik nap úgy döntött, hogy szeretné ennek a mappának a tartalmát rendszerezni.

Írj egy `fajlokatCsoportosit` függvényt, amely egy tömböt vár paraméterül! A tömb tartalmazza a mappában található fájlok nevét, kiterjesztéssel együtt! A függvény visszatérési értéke egy kétdimenziós tömb, amelynek...

* ...első eleme a `py` kiterjesztésű fájlok neveit tartalmazó tömb
* ...második eleme a `js` kiterjesztésű fájlok neveit tartalmazó tömb
* ...harmadik eleme az összes egyéb kiterjesztéssel rendelkező fájl nevét tároló tömb.

A kiterjesztés alatt a legutolsó `.` (pont) karakter után szereplő szöveget értjük a fájl nevében. A kiterjesztés vizsgálatakor nem különböztetjük meg a kis- és nagybetűket.

**Példa:**

<pre>
<b>Input:</b> ['gyak1.py', 'GYAKORLO.JS', 'feladat.pdf', 'elso.zh.py', 'riport.txt']
<b>Return:</b> [['gyak1.py', 'elso.zh.py'], ['GYAKORLO.JS'], ['feladat.pdf', 'riport.txt']]
</pre>
