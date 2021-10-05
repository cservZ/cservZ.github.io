# Szkriptnyelvek - 8. gyakorló feladatsor

## A JavaScript fontosabb adatszerkezetei

### 1. feladat: Számok kiválogatása (2 pont)

Írj egy `szamokatKivalogat` nevű függvényt, amely egy olyan tömböt kap paraméterül, amely vegyesen tárol eltérő típusú elemeket! A függvény válogassa ki a paraméterben kapott tömb szám típusú elemeit egy új tömbbe, és térjen vissza a számokat tartalmazó tömbbel!

<span class="example">Példa:</span>

<pre class="language-html">
<b>Input:</b> ['kecske', true, '42', 32, -1, undefined, 3.14, ['alma', 'banan']]
<b>Return:</b> [32, -1, 3.14]
</pre>


### 2. feladat: Stringek összefűzése (3 pont)

Írj egy `stringeketOsszefuz` nevű függvényt, amely egy olyan tömböt kap paraméterül, amely vegyesen tárol eltérő típusú elemeket! A függvény fűzze össze a tömbben található stringeket, és térjen vissza az összefűzés eredményével!

<span class="example">Példa:</span>

<pre class="language-html">
<b>Input:</b> ['Java', null, [], 'Script', 123, '4', 'life', undefined]
<b>Return:</b> 'JavaScript4life'
</pre>


### 3. feladat: "Szép tömb" (4 pont)

Egy tömböt akkor mondunk szépnek, ha csak azonos típusú elemeket tartalmaz. Írj egy `szepTomb` nevű függvényt, amely egy tömböt vár paraméterben, és visszaadja, hogy ez a tömb azonos típusú elemeket tárol-e! Ha a paraméterben kapott érték nem tömb típusú, akkor hamissal térjen vissza a függvény!

<span class="example">Példa:</span>

<pre class="language-html">
<b>Input:</b> ['alma', 'korte', 'szilva', 'barack', 'palinka']
<b>Return:</b> true

<b>Input:</b> [10, 20, 30, 40, '50', 60, 70]
<b>Return:</b> false

<b>Input:</b> []
<b>Return:</b> true

<b>Input:</b> 'YEE HAW!'
<b>Return:</b> false
</pre>


### 4. feladat: Tömbelemek hatványozása (3 pont)

Írj egy `hatvanyoz` nevű függvényt, amely két paramétert vár: egy számokat tároló tömböt és egy számot! A függvény emelje a tömbben lévő számokat a második paraméterben kapott szám által meghatározott hatványukra, majd térjen vissza a hatványozás után kapott tömbbel!

Ha valamelyik paraméter típusa nem megfelelő, akkor a függvény egy üres tömbbel térjen vissza!

<span class="example">Példa:</span>

<pre class="language-html">
<b>Input:</b> [1, 4, 7, 2, 5], 3
<b>Return:</b> [1, 64, 343, 8, 125]

<b>Input:</b> 'buvarszivattyu', 5
<b>Return:</b> []
</pre>


### 5. feladat: Full stack (4 pont)

Jónás, a csokigyáros el szeretné készíteni a vállalkozásának a weboldalát, ezért webfejlesztőket keres. A munkára beadott jelentkezések elbírálásakor Jónás előnyben részesíti azokat a fejlesztőket, akik a front-endhez és a back-endhez is értenek ("full stack fejlesztők").

Írj egy `fullStack` nevű függvényt, amely két szöveget kap paraméterül: az első szövegben a front-end, míg a második szövegben a back-end fejlesztők nevei szerepelnek pontosvesszőkkel elválasztva! A függvény adja vissza egy tömbben azoknak a nevét, akik a front-end és back-end fejlesztők között is szerepelnek!

<span class="example">Példa:</span>

<pre class="language-html">
<b>Input:</b> 'Zsiros B. Odon;Koaxk Abel;Heu Reka;Riz Otto', 'Riz Otto;Rabsz Olga;Trab Antal;Koaxk Abel;Winch Eszter'
<b>Return:</b> ['Koaxk Abel', 'Riz Otto']

<b>Input:</b> 'Citad Ella;Techno Kolos', 'Git Aron;Teask Anna'
<b>Return:</b> []
</pre>


### 6. feladat: Valaki éppen gépel... (4 pont)

Jani egy chatalkalmazást fejleszt JavaScriptben. A chatben, amikor egy vagy több felhasználó éppen gépel, akkor erről kiírunk egy üzenetet.

Írj egy `gepeles` nevű függvényt, amely egy szöveget kap paraméterül. Ez a szöveg pontosvesszőkkel elválasztva tartalmazza azoknak a felhasználóknak a nevét, akik éppen gépelnek. Figyelj arra, hogy néhány név elé és/vagy után néhány fölösleges whitespace karakter került!

* Amennyiben a paraméter típusa nem megfelelő vagy a paraméterben az üres string érkezik, akkor a függvény térjen vissza a `HIBA!` szöveggel!
* Ha pontosan 1 ember gépel, akkor térjünk vissza a `{username} eppen gepel...` szöveggel, ahol `{username}` a gépelő felhasználó neve!
* Ha pontosan 2 ember gépel, akkor térjünk vissza a `{username1} es {username2} eppen gepel...` szöveggel, ahol `{username1}` az első, míg `{username2}` a második felhasználó neve a pontosvesszőkkel elválasztott adatok közül!
* Ha 2-nél több ember gépel, akkor térjünk vissza a `{username1}, {username2} es {N} tovabbi felhasznalo eppen gepel...` szöveggel, ahol `{username1}` és `{username2}` ugyanaz, mint az előző vázlatpontban, `{N}` pedig a többi gépelő felhasználónak a száma!

<span class="example">Példa:</span>

<pre class="language-html">
<b>Input:</b> 'SuTi'
<b>Return:</b> 'SuTi eppen gepel...'

<b>Input:</b> 'szte4k;catman6     ;    Sziklas  ;          Aerosol;cservZenberg'
<b>Return:</b> 'szte4k, catman6 es 3 tovabbi felhasznalo eppen gepel...'
</pre>


### 7. feladat: Ötöslottó (4 pont)

Erzsi néni minden héten játszik az ötöslottón. A játék során 90 számból húznak ki 5 darab számot véletlenszerűen, és ezek közül kell a játékosoknak minél többet eltalálniuk. Erzsi néni ezen a héten a véletlenre bízza az öt szám bejelölését a lottószelvényen.

Írj egy paraméter nélküli `otoslotto` függvényt, amely generál 5 darab véletlenszámot 1 és 90 között, és visszaadja ezeket egy tömbben, **növekvő sorrendben**! Ügyelj arra, hogy a számok között ne legyen ismétlődés (minden számot csak egyszer jelölhetünk meg)!

<div class="bordered-box border-green">
    <span class="green">Tippek:</span>
    <ul>
        <li>Véletlenszámok generálására <a href="https://www.w3schools.com/js/js_random.asp" target="_blank">itt</a> láthatunk példát.</li>
        <li>JavaScriptben érdekes módon a tömbök <code>sort()</code> metódusa alapból stringekre van megvalósítva. Ha számokat szeretnénk növekvő sorrendbe rendezni, akkor ehhez <a href="https://www.w3schools.com/js/js_array_sort.asp" target="_blank">itt</a> találunk segítséget ("numeric sort" rész).</li>
    </ul>
</div>


### 8. feladat: E-mail cím generátor (5 pont)

A Flying Duck Travels légitársaság levelező szolgáltatásával saját e-mail fiókot hozhatunk létre. A fiók létrehozásakor megadjuk a teljes nevünket és a születési évet, majd ezekből a rendszer generál egy javasolt e-mail címet a következőképpen:

* vesszük a teljes névben szereplő összes névnek az első 3 betűjét, csupa kisbetűvel (ha egy ilyen név rövidebb 3 betűnél, akkor a teljes nevet vesszük)
* ezután vesszük a születési év utolsó számjegyét
* végül az így kapott azonosítóhoz hozzáfűzzük a `@duck.com` szöveget.

Írj egy `emailCimetGeneral` nevű függvényt, amely két paramétert vár: a teljes nevet és a születési évet, és visszatér a fenti szabályok alapján legenerált e-mail címmel! A születési évet ne legyen kötelező megadni, alapértéke legyen 1970! Hibakezeléssel nem kell foglalkoznod, feltesszük, hogy a paraméterek helyesek.

<span class="example">Példa:</span>

<pre class="language-html">
<b>Input:</b> 'Richard Paul Astley', 1966
<b>Return:</b> 'ricpauast6@duck.com'

<b>Input:</b> 'Citad Ella'
<b>Return:</b> 'citell0@duck.com'

<b>Input:</b> 'Pablo Diego Jose Francisco de Paula Juan Nepomuceno Maria de los Remedios Cipriano de la Santisima Trinidad Ruiz y Picasso', 1881
<b>Return:</b> 'pabdiejosfradepaujuanepmardelosremcipdelasantriruiypic1@duck.com'
</pre>