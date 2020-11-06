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


