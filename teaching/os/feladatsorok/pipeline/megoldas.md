# Operációs rendszerek gyakorlat

## Pipeline gyakorló feladatok - Egy lehetséges megoldás

A kedvenc zenéink adatait egy `playlist.csv` nevű állományban tároljuk ([letöltés](./inputs.zip)). A fájl egyes soraiban szereplő, pontosvesszővel elválasztott adatok sorban:

* a zene előadójának neve
* a zene címe
* a zene műfaja
* a zene hossza másodpercekben.

A bemeneti fájl első sora egy fejlécsor, amit nem kell feldolgozni (csupán tájékoztató jelleggel bír). Oldd meg az alábbi feladatokat **csővezeték (pipeline)** használatával!


### 1. A fejlécsor eltávolítása (2 pont)

A bemeneti fájl első sorában szereplő fejlécet nem szeretnénk feldolgozni. Egy alkalmas Linux parancs segítségével hozz létre egy `playlist2.csv` nevű állományt, amelybe írd bele a `playlist.csv` fájl tartalmát **az első sor nélkül**!


<div class="bordered-box border-black">
<span class="black">Megoldás:</span> Azoknál a pipeline-os feladatoknál, amelyekben egy bemeneti fájl feldolgozása a feladat, első lépésben célszerű lehet a feldolgozandó fájl tartalmát kiíratni a képernyőre a <code>cat</code> paranccsal.

<pre>
> cat playlist.csv
Eloado;Cim;Mufaj;Hossz (masodpercekben)
Rick Astley;Never Gonna Give You Up;pop;213
Imagine Dragons;Thunder;pop;204
Dragonforce;Through the Fire and Flames;metal;445
Boney M.;Rasputin;pop;284
Steppenwolf;Born To Be Wild;rock;216
...
</pre>

Az első sorban szereplő fejléc eltávolítása megoldható a gyakorlati anyagban is tárgyalt <code>tail -n <+szám></code> paranccsal, amely a <code>szám</code>-adik sortól kezdve írja ki a fájl tartalmát. Mivel most az első sortól szeretnénk megszabadulni, ezért a második sortól kezdődően fogjuk kiíratni a fájlban található tartalmat.

Egy pipeline segítségével fűzzük hozzá a <code>cat playlist.csv</code> parancshoz a <code>tail -n +2</code> parancsot (hiszen a <code>cat</code> parancs kimenetén (a fájl tartalmán) szeretnénk végrehajtani az első sor "eltávolítását" végző parancsot)!

<pre>
> cat playlist.csv | tail -n +2
Rick Astley;Never Gonna Give You Up;pop;213
Imagine Dragons;Thunder;pop;204
Dragonforce;Through the Fire and Flames;metal;445
Boney M.;Rasputin;pop;284
Steppenwolf;Born To Be Wild;rock;216
...
</pre>

Remek, most már megkaptuk a bemeneti fájl tartalmát az első sor nélkül! Már csak annyi a feladatunk, hogy az első sor "kidobása" után kapott tartalmat beleírjuk egy <code>playlist2.csv</code> fájlba.

A <code>></code> operátorral egyszerűen beleírhatjuk az elkészített pipeline kimenetét egy megadott nevű fájlba. Ha a kimeneti fájl nem létezik, akkor ez a konstrukció automatikusan létrehozza azt, és beleírja a kimenetet.

A feladat megoldása tehát (ellenőrzésképpen kiíratva a létrehozott fájl tartalmát):

<pre>
> cat playlist.csv | tail -n +2 > playlist2.csv

> cat playlist2.csv
Rick Astley;Never Gonna Give You Up;pop;213
Imagine Dragons;Thunder;pop;204
Dragonforce;Through the Fire and Flames;metal;445
Boney M.;Rasputin;pop;284
Steppenwolf;Born To Be Wild;rock;216
Powerwolf;Incense and Iron;metal;240
Smash Mouth;All Star;rock;237
Nirvana;Smells Like Teen Spirit;rock;279
Gloryhammer;The Unicorn Invasion of Dundee;metal;265
Powerwolf;We Are The Wild;metal;221
Imagine Dragons;Radioactive;rock;188
Dschinghis Khan;Moskau;pop;275
Dschinghis Khan;Dschinghis Khan;pop;185
Bonnie Tyler;Total Eclipse of the Heart;pop;334
Gopnik McBlyat;Snakes In Tracksuits;hardbass;261
John Farnham;Thunder In Your Heart;rock;234
Ismeretlen;Perfectly Cut Screamz;metal;20
</pre>
</div>


### 2. A zenék száma (1 pont)

Írj csővezetéket, ami kiírja a konzolra, hogy hány zene adatait tartalmazza a bemeneti fájl! Tehát azt kell kiíratni, hogy az előző feladatban létrehozott `playlist2.csv` hány sorból áll!

<div class="bordered-box border-black">
<span class="black">Megoldás:</span> Ebben a feladatban (és egyébként a hátralévő feladatok mindegyikében) a <code>playlist2.csv</code> fájllal fogunk dolgozni. Első lépésként megint kiírathatjuk a fájl tartalmát, ezzel biztosan nem rontunk el semmit.

<pre>
> cat playlist2.csv
Rick Astley;Never Gonna Give You Up;pop;213
Imagine Dragons;Thunder;pop;204
Dragonforce;Through the Fire and Flames;metal;445
Boney M.;Rasputin;pop;284
Steppenwolf;Born To Be Wild;rock;216
...
</pre>

A feladatunk megszámolni, hogy hány sorból áll a fájl. Ha egy pipeline-os feladatban valamit számolni kell, akkor jusson eszünkbe a <code>wc</code> parancs! Ennek a fontosabb kapcsolói, amiket a gyakorlaton tárgyalunk:

<ul>
    <li><code>-l</code>: a sorok száma a fájlban</li>
    <li><code>-w</code>: a szavak száma a fájlban</li>
    <li><code>-c</code>: a bájtok száma a fájlban</li>.
</ul>

Mivel mi a sorok számára vagyunk kíváncsiak, ezért nekünk a <code>-l</code> kapcsoló fog kelleni. Egy pipeline segítségével fűzzük hozzá a <code>cat playlist2.csv</code> parancshoz a <code>wc -l</code> parancsot (hiszen a <code>cat</code> parancs kimenetén szeretnénk végrehajtani a sorok megszámolását)!

A feladat megoldása tehát:

<pre>
> cat playlist2.csv | wc -l
17
</pre>
</div>


### 3. Az előadók száma (4 pont)

Írj csővezetéket, ami kiírja a konzolra, hogy hány **különböző** előadó neve szerepel a bemeneti fájlban!

<div class="bordered-box border-black">
<span class="black">Megoldás:</span> Kiindulásképpen megint írassuk ki a <code>playlist2.csv</code> fájl tartalmát!

<pre>
> cat playlist2.csv
Rick Astley;Never Gonna Give You Up;pop;213
Imagine Dragons;Thunder;pop;204
Dragonforce;Through the Fire and Flames;metal;445
Boney M.;Rasputin;pop;284
Steppenwolf;Born To Be Wild;rock;216
...
</pre>

Az előadók nevei minden sorban a legelsők a pontosvesszővel elválasztott adatok közül. A <code>cut</code> paranccsal feldarabolhatjuk a fájl sorait oszlopokra adott karakterek mentén, és lekérhetjük egy (vagy több) oszlop tartalmát.

<ul>
    <li>A <code>-d</code> ("delimiter") kapcsolóval megadjuk, hogy milyen karakterek mentén szeretnénk darabolni. Ez most a pontosvessző lesz, hiszen a fájl soraiban szereplő adatok pontosvesszővel vannak elválasztva.</li>
    <li>A <code>-f</code> ("fields") kapcsolóval megadjuk, hogy a feldarabolás után hányadik oszlopot szeretnénk lekérni. Most az első oszlop fog kelleni, hiszen ez tartalmazza az előadók nevét.</li>
</ul>

A pipeline-unk eddig a következőképpen néz ki:
<pre>
> cat playlist2.csv | cut -d ';' -f 1
Rick Astley
Imagine Dragons
Dragonforce
Boney M.
Steppenwolf
Powerwolf
Smash Mouth
Nirvana
Gloryhammer
Powerwolf
Imagine Dragons
Dschinghis Khan
Dschinghis Khan
Bonnie Tyler
...
</pre>

Nagyszerű, megvannak az előadók nevei! Látható viszont, hogy a parancs kimenetében néhány előadó neve többször is szerepel (pl. "Imagine Dragons", "Powerwolf", "Dschinghis Khan"). Mivel a feladat szövege a <b>különböző</b> előadók számára kíváncsi, ezért jó lenne ezeket az ismétlődéseket megszüntetnünk. 

Az első gondolatunk a <code>uniq</code> parancs lehet:

<pre>
> cat playlist2.csv | cut -d ';' -f 1 | uniq
Rick Astley
Imagine Dragons
Dragonforce
Boney M.
Steppenwolf
Powerwolf
Smash Mouth
Nirvana
Gloryhammer
Powerwolf
Imagine Dragons
Dschinghis Khan
Bonnie Tyler
...
</pre>

Hát, ez közel sem lett tökéletes, hiszen az "Imagine Dragons" és "Powerwolf" előadónevek még mindig előfordulnak többször is. Egyedül a "Dschinghis Khan" ismétlődését sikerült megszüntetnünk a <code>uniq</code> használatával.

Miért van ez így? A <span class="red"><code>uniq</code></span>-ról fontos tudni, hogy <span class="red">csak a közvetlenül egymás utáni ismétlődéséket szünteti meg</span>. Mivel a bemeneti fájlban az egyik "Dschinghis Khan" közvetlenül a másik "Dschinghis Khan" után szerepelt, ezért ezzel a <code>uniq</code> éppen el tudott bánni.

Hogyan lehetne vajon elérni, hogy ne csak az egymás utáni ismétlődéseket, hanem az összes ismétlődést megszüntessük? Erre a következő trükköt tudjuk használni: a <code>sort</code> paranccsal először ábécé sorrendbe rendezzük az előadók neveit (így az ismétlődő előadónevek garantáltan közvetlenül egymást fogják követni), majd csak ezután használjuk a <code>uniq</code>-ot.

<pre>
> cat playlist2.csv | cut -d ';' -f 1 | sort | uniq
Boney M.
Bonnie Tyler
Dragonforce
Dschinghis Khan
Gloryhammer
Gopnik McBlyat
Imagine Dragons
Ismeretlen
John Farnham
Nirvana
Powerwolf
Rick Astley
Smash Mouth
Steppenwolf
</pre>

Szuper, most már mindenki neve csak egyszer fordul elő! Már csak meg kell mondani, hogy hány előadót kaptunk így, tehát lényegében azt kell megszámolni, hogy az eddigi pipeline kimenete hány sorból áll. Erre a korábban tárgyalt <code>wc -l</code> parancsot használhatjuk.

A feladat megoldása tehát:

<pre>
> cat playlist2.csv | cut -d ';' -f 1 | sort | uniq | wc -l
14
</pre>
</div>


### 4. A tizedik zene (3 pont)

Írj csővezetéket, ami kiírja a konzolra a `playlist2.csv` fájl 10. sorában található zenének a címét!

<div class="bordered-box border-black">
<span class="black">Megoldás:</span> Ha egy fájl bizonyos sorát (vagy sorait) szeretnénk csak kiíratni, akkor emlékezzünk vissza a <code>head</code> és <code>tail</code> parancsokra:

<ul>
    <li><code>head -&lt;szám&gt;</code>: kiírja egy több sorból álló szöveg első <code>&lt;szám&gt;</code> darab sorát</li>
    <li><code>tail -&lt;szám&gt;</code>: kiírja egy több sorból álló szöveg utolsó <code>&lt;szám&gt;</code> darab sorát.</li>
</ul>

Induljunk ki abból, hogy kiíratjuk a fájl tartalmát a <code>cat</code> paranccsal, majd vesszük a fájl tartalmából az első 10 sort a <code>head -10</code> paranccsal!

<pre>
> cat playlist2.csv | head -10
Rick Astley;Never Gonna Give You Up;pop;213
Imagine Dragons;Thunder;pop;204
Dragonforce;Through the Fire and Flames;metal;445
Boney M.;Rasputin;pop;284
Steppenwolf;Born To Be Wild;rock;216
Powerwolf;Incense and Iron;metal;240
Smash Mouth;All Star;rock;237
Nirvana;Smells Like Teen Spirit;rock;279
Gloryhammer;The Unicorn Invasion of Dundee;metal;265
Powerwolf;We Are The Wild;metal;221
</pre>

Nekünk most viszont nem az első 10 sorra, hanem csupán a tizedik sorra van szükségünk. Egy kis gondolkodással rájöhetünk, hogy ha az első 10 sorból vesszük az utolsó sort, akkor pont a tizedik sort fogjuk megkapni. A <code>tail -1</code> paranccsal megkaphatjuk az előző pipeline kimenetének az utolsó sorát.

<pre>
> cat playlist2.csv | head -10 | tail -1
Powerwolf;We Are The Wild;metal;221
</pre>

Oké, a nehezén túlvagyunk, már csak az eredményül kapott sorból kellene lekérnünk a zene címét. Ez már viszonylag egyszerű: a <code>cut</code> paranccsal feldaraboljuk a sort pontosvesszők mentén, és vesszük a zenecímet tartalmazó 2. oszlopot.

A feladat megoldása tehát:

<pre>
> cat playlist2.csv | head -10 | tail -1 | cut -d ';' -f 2
We Are The Wild
</pre>
</div>


### 5. A leghosszabb zene (3 pont)

Írj csővezetéket, ami kiírja a konzolra a bemeneti fájlban található leghosszabb zene hosszát (másodpercekben)!

<div class="bordered-box border-black">
<span class="black">Megoldás:</span> Haladjunk ismét kisebb lépésekben! Mivel ismét a <code>playlist2.csv</code>-ből szeretnénk kiíratni valamit (a leghosszabb zene hosszát), ezért kiindulásképpen kiírathatjuk a teljes fájl tartalmát.

<pre>
> cat playlist2.csv
Rick Astley;Never Gonna Give You Up;pop;213
Imagine Dragons;Thunder;pop;204
Dragonforce;Through the Fire and Flames;metal;445
Boney M.;Rasputin;pop;284
Steppenwolf;Born To Be Wild;rock;216
...
</pre>

Mivel minden sorból csak a zene hossza érdekel minket, ezért a <code>cut</code> paranccsal ismételten feldarabolhatjuk a sorok tartalmát pontosvesszők mentén. A zene hosszát a 4. oszlop tartalmazza, ezért ezt fogjuk lekérni.

<pre>
> cat playlist2.csv | cut -d ';' -f 4
213
204
445
284
216
...
</pre>

Oké, megkaptuk a zenék hosszát másodpercekben. Ahhoz, hogy meg tudjuk állapítani, hogy hány másodperc hosszú a leghosszabb zene, rendeznünk kell a zenék hosszát. Ha rendezni szeretnénk valamit, akkor az első gondolatunk a <code>sort</code> parancs lehet.

<pre>
> cat playlist2.csv | cut -d ';' -f 4 | sort
185
188
20
204
213
216
221
...
</pre>

Ha megfigyeljük a fenti pipeline kimentét, akkor egy érdekes jelenséget láthatunk: a <code>sort</code> a 20-as értéket a 188 és a 204 közé rendezte. Ennek az az oka, hogy a <span class="red"><code>sort</code> parancs alapértelmezés szerint szövegekként kezeli a rendezendő elemeket, ezért ábécé sorrendbe rendezi azokat</span> (ha belegondolunk, akkor a furcsaság, amit fentebb kaptunk, egy érvényes ábécé sorrend).

A szám típusú adatokat viszont természetesen nem ábécé sorrendbe, hanem növekvő sorrendbe szeretnénk rendezni. Ebben az esetben (ha számokat rendezünk) használjuk a <code>sort</code> parancs <code>-n</code> ("numeric sort") kapcsolóját!

<pre>
> cat playlist2.csv | cut -d ';' -f 4 | sort -n
20
185
188
204
213
216
221
234
237
240
261
265
275
279
284
334
445
</pre>

Remek, így már ténylegesen növekvő sorrendbe raktuk a zenék hosszát! Már csak a leghosszabb zene hosszát kell lekérnünk, ami a növekvő sorrendben szereplő számok közül az utolsó lesz. Az utolsó szám lekéréséhez használjuk a korábban tárgyalt <code>tail -1</code> parancsot!

A feladat megoldása tehát:

<pre>
> cat playlist2.csv | cut -d ';' -f 4 | sort -n | tail -1
445
</pre>
</div>


### 6. Pop zenék száma (2 pont)

Írj csővezetéket, ami kiírja a konzolra, hogy hány olyan zene van a bemeneti fájlban, amelynek műfaja `pop`! Feltehetjük, hogy a bemeneti fájl egyes soraiban a `pop` szöveg csak a műfajok oszlopában fordul elő.

<div class="bordered-box border-black">
<span class="black">Megoldás:</span> Világos, hogy ebben a feladatban a <code>playlist2.csv</code> fájlból csak azokra a sorokra van szükségünk, amelyek tartalmazzák a <code>pop</code> szöveget (hiszen csak a popzenék érdekelnek minket).

Ha egy fájl bizonyos sorairól szeretnénk eldönteni, hogy illeszkednek-e egy megadott mintára, akkor az <code>egrep</code> parancsot használjuk. A parancs első paramétere a minta, amire illesztünk (amilyen szöveget keresünk a fájl soraiban), a második paraméter pedig a vizsgált fájl neve.

<pre>
> egrep 'pop' playlist2.csv
Rick Astley;Never Gonna Give You Up;pop;213
Imagine Dragons;Thunder;pop;204
Boney M.;Rasputin;pop;284
Dschinghis Khan;Moskau;pop;275
Dschinghis Khan;Dschinghis Khan;pop;185
Bonnie Tyler;Total Eclipse of the Heart;pop;334
</pre>

Látható, hogy a parancs hatására már csak a pop zenék adatai jelennek meg a konzolon. Már csak meg kell számolnunk, hogy hány zenét kaptunk eredményül. Ezt a szokásos módon, a <code>wc -l</code> paranccsal tehetjük meg (megszámoljuk, hogy az előző pipeline hány soros kimenetet adott eredményül):

<pre>
> egrep 'pop' playlist2.csv | wc -l
6
</pre>

<span class="black">Megjegyzés:</span> Az <code>egrep</code> parancsnak van egy <code>-c</code> ("count") kapcsolója is, ami megmondja, hogy hány sort válogatott ki a parancs. Ennek a használatával a fenti megoldás egy picit egyszerűsíthető.

<pre>
> egrep -c 'pop' playlist2.csv
6
</pre>
</div>


### 7. A leghosszabb rockzene (3 pont)

Írj csővezetéket, ami kiírja a konzolra, hogy hány másodperc hosszú a leghosszabb olyan zene, amelynek műfaja `rock`! Feltehetjük, hogy a bemeneti fájl egyes soraiban a `rock` szöveg csak a műfajok oszlopában fordul elő.

<div class="bordered-box border-black">
<span class="black">Megoldás:</span> Ez a feladat nagyon hasonlít az 5. feladatra, csupán annyi a különbség, hogy most nem az összes zene közül akarjuk megkeresni a leghosszabbat, hanem csak a rockzenék közül.

Először is válogassuk ki a <code>playlist2.csv</code>-ből a rockzenéket! Ehhez az <code>egrep</code> paranccsal keressük meg az összes olyan sort a fájlban, amely tartalmazza a <code>rock</code> szöveget!

<pre>
> egrep 'rock' playlist2.csv
Steppenwolf;Born To Be Wild;rock;216
Smash Mouth;All Star;rock;237
Nirvana;Smells Like Teen Spirit;rock;279
Imagine Dragons;Radioactive;rock;188
John Farnham;Thunder In Your Heart;rock;234
</pre>

Rendben, most már kiválogattuk az összes rockzenét. Már csak meg kell határoznunk ezek közül a leghosszabb zenének a hosszát. Az 5. feladat megoldása alapján ezt a következőképpen tehetjük meg:

<ol>
    <li>Lekérdezzük az egyes rockzenék hosszát, ami a pontosvesszőkkel elválasztott adatok közül a 4. lesz minden sorban (<code>cut -d ';' -f 4</code>).</li>
    <li>Növekvő sorrendbe rendezzük a zenék hosszát (<code>sort -n</code>).</li>
    <li>Vesszük a növekvő sorrendbe rendezett értékek közül az utolsót (<code>tail -1</code>).</li>
</ol>

A feladat megoldása tehát:

<pre>
> egrep 'rock' playlist2.csv | cut -d ';' -f 4 | sort -n | tail -1
279
</pre>
</div>


### 8. Thunder, Heart (7 pont)

Írj csővezetéket, ami kiírja egy `out.txt` nevű fájlba azoknak a zenéknek a címét **csupa nagybetűkkel**, **ábécé sorrendben**, amelyek tartalmazzák a `Thunder` vagy `Heart` szövegek legalább egyikét! Feltehetjük, hogy a bemeneti fájl egyes soraiban ez a két szöveg csak a zenék címében fordul elő. **(5 pont)**

<div class="bordered-box border-black">
<span class="black">Megoldás:</span> Itt már elég sok mindent kell csinálni. Az egyszerűség kedvéért egyelőre még nem foglalkozunk a fájlba írással, csupán a pipeline-t próbáljuk megírni.

Mivel ismét csak a fájl bizonyos sorai kellenek nekünk, ezért továbbra is az <code>egrep</code> parancs lesz a barátunk. Ha egy feladatban nem csak 1 mintára illesztünk (most kapásból 2 szöveget is keresünk a fájl soraiban: a "Thunder" és a "Heart" szövegeket), akkor érdemes használni az <code>egrep</code> parancs <code>-e</code> kapcsolóját ezek megadásakor.

<pre>
> egrep -e 'Thunder' -e 'Heart' playlist2.csv
Imagine Dragons;Thunder;pop;204
Bonnie Tyler;Total Eclipse of the Heart;pop;334
John Farnham;Thunder In Your Heart;rock;234
</pre>

Látható, hogy ténylegesen csak azokat a zenéket kaptuk meg, amelyek címe tartalmazza a "Thunder" és a "Heart" szövegek legalább egyikét. A feladat a zenék címeire kíváncsi, ezért a zenék címét a <code>cut</code> paranccsal lekérdezzük (a zenecím a pontosvesszőkkel elválasztott adatok közül minden sorban a második).

<pre>
> egrep -e 'Thunder' -e 'Heart' playlist2.csv | cut -d ';' -f 2
Thunder
Total Eclipse of the Heart
Thunder In Your Heart
</pre>

A következő feladatunk az lenne, hogy az így kapott kimenetet csupa nagybetűssé alakítsuk. Ezt a <code>tr a-z A-Z</code> paranccsal tehetjük meg, ami átalakítja a szövegben szereplő összes kibetűt (a-z) nagybetűvé (A-Z).

<pre>
> egrep -e 'Thunder' -e 'Heart' playlist2.csv | cut -d ';' -f 2 | tr a-z A-Z
THUNDER
TOTAL ECLIPSE OF THE HEART
THUNDER IN YOUR HEART
</pre>

Végezetül, ábécé sorrendbe kell rendeznünk az így kapott, nagybetűsített zenecímeket. Ezt a korábban látott <code>sort</code> paranccsal tudjuk megtenni.

<pre>
> egrep -e 'Thunder' -e 'Heart' playlist2.csv | cut -d ';' -f 2 | tr a-z A-Z | sort
THUNDER
THUNDER IN YOUR HEART
TOTAL ECLIPSE OF THE HEART
</pre>

Remek, most már a pipeline-nal készen vagyunk, kiírattuk a megfelelő zenék címét csupa nagybetűkkel, ábécé sorrendben a konzolra. Már csak annyi a dolgunk, hogy a kapott kimenetet beleirányítsuk egy <code>out.txt</code> nevű fájlba a korábban látott <code>></code> operátorral.

A feladat megoldása tehát (ellenőrzésképpen kiíratva a létrehozott fájl tartalmát):

<pre>
> egrep -e 'Thunder' -e 'Heart' playlist2.csv | cut -d ';' -f 2 | tr a-z A-Z | sort > out.txt

> cat out.txt
THUNDER
THUNDER IN YOUR HEART
TOTAL ECLIPSE OF THE HEART
</pre>
</div>

Az `out.txt` fájlra vonatkozó jogosultságokat állítsd be a következők szerint:

* A tulajdonosnak csak olvasási és írási joga legyen a fájlra!
* A csoportnak szintén csak olvasási és írási joga legyen a fájlra!
* A "többiek" ne rendelkezzenek semmilyen jogosultsággal a fájlra vonatkozóan! **(2 pont)**

<div class="bordered-box border-black">
<span class="black">Megoldás:</span> Ez a feladatrész tulajdonképpen már nem is a pipeline-okhoz kapcsolódik, hanem a jogosultságok kezeléséhez. Listázzuk ki az imént létrehozott <code>out.txt</code> adatait részletesen, az <code>ls -l</code> paranccsal!

<pre>
> ls -l out.txt
-rw-r--r-- 1 cservz cservz 57 Dec 23 13:40 out.txt
</pre>

A listázás első oszlopában található <code>-rw-r--r--</code> szöveg fog minket érdekelni, ez kódolja el a különböző felhasználói csoportok jogosultságait a fájlra vonatkozóan:

<ul>
    <li>A legelső kötőjel azt jelenti, hogy ez egy közönséges fájl (ha itt kötőjel helyett <code>d</code> betű szerepelne, akkor egy könyvtárral lenne dolgunk).</li>
    <li>A következő 3 karakter a fájl tulajdonosának a jogosultságait kódolja.</li>
    <li>A következő 3 karakter a csoport a jogosultságait jelenti.</li>
    <li>Az utolsó 3 karakter mindenki más jogosultságait írja le a fájlra vonatkozóan.</li>
</ul>

Az egyes felhasználói csoportoknak a jogosultságait az <code>rwx</code> karakterhármas jelzi. Ezek rendre az olvasási (<code>read</code>), írási (<code>write</code>) és futtatási (<code>execute</code>) jogosultságokat jelölik a fájlra vonatkozóan. Ha valamelyik karakter helyén kötőjel szerepel, akkor az azt jelenti, hogy olyan jogosultsága nincs az adott felhasználói csoportnak az állományra.

A <code>chmod</code> paranccsal megváltoztathatjuk a fájlra vonatkozó jogosultságokat:

<ul>
    <li>Először megadjuk, hogy melyik felhasználói csoport jogosultságait szeretnénk módosítani: <code>u</code> ("user", a tulajdonos), <code>g</code> ("group", a csoport), <code>o</code> ("others", a többiek), <code>a</code> ("all", mindenki).</li>
    <li>Ezután megmondjuk, hogy adni (<code>+</code>) vagy elvenni (<code>-</code>) szeretnénk jogosultságot.</li>
    <li>Végül megadjuk az odaadni/elvenni kívánt jogosultságot jelölő karaktert (<code>r</code>, <code>w</code>, <code>x</code>).</li>
</ul>

A fájl tulajdonosának csak olvasási és írási jogot kell adnunk a feladatleírás alapján. Ha megnézzük az <code>ls -l</code> kimenetét, akkor látható, hogy ezzel már készen is vagyunk, hiszen a tulajdonos jogosultságai: <code>rw-</code> (olvasási és írási joga van, de futtatási joga nincs).

A csoportnak szintén csak olvasási és írási joga kell, hogy legyen a fájlra. A csoport jogosultságai: <code>r--</code>, tehát csak az olvasási jog van meg. Adjunk írási jogot (<code>w</code>) a csoportnak (<code>g</code>) a fájlra!

<pre>
> chmod g+w out.txt
</pre>

A többiek jogosultsága a fájlra vonatkozóan: <code>r--</code>, ami olvasási jogosultságot jelent. Mivel a feladat azt kérte, hogy a többiek ne rendelkezzenek semmilyen jogosultsággal, ezért az olvasási jogot (<code>r</code>) el kell vennünk a többiektől (mivel jogot veszünk el, itt pluszjel helyett mínuszjelet használunk).

<pre>
> chmod o-r out.txt
</pre>

A fájlra vonatkozó jogosultságok most már megfelelnek a feladatleírásnak.

<pre>
> ls -l out.txt
-rw-rw---- 1 cservz cservz 57 Dec 23 13:40 out.txt
</pre>
</div>


### 9. Napóleon-kódolás (3 pont)

Írj csővezetéket, ami a `playlist2.csv` fájlban található előadóneveket és zenecímeket Napóleon-kódolással titkosítja, és a titkosított adatokat beleírja egy `napoleon_encoded.csv` nevű állományba!

A Napóleon-kódolás minden egyes kis- és nagybetűt megváltoztat úgy, hogy helyettesíti az ábécében utána következő betűvel. Tehát az `a` betűből `b` betű lesz, a `g`-ből `h`, a `z` után pedig ismét `a` betű következik. A kódolás csak a betűket módosítja, az egyéb karaktereket (pl. szóköz, pontosvessző, számjegyek, speciális írásjelek) nem. Feltehetjük, hogy az inputban szereplő betűkben nem szerepelnek ékezetek.

<div class="bordered-box border-black">
<span class="black">Megoldás:</span> Most csak az előadónevek és a zenecímek érdekelnek minket, tehát először lekérjük az első két oszlopot a fájlból a <code>cut</code> parancs segítségével.

<pre>
> cat playlist2.csv | cut -d ';' -f 1-2
Rick Astley;Never Gonna Give You Up
Imagine Dragons;Thunder
Dragonforce;Through the Fire and Flames
Boney M.;Rasputin
Steppenwolf;Born To Be Wild
...
</pre>

Ha egy-egy karaktert szeretnénk lecserélni valamilyen másik karakterre, akkor a <code>tr</code> ("transform") parancsot használjuk. Vele már találkoztunk az előző feladatban, ott a kisbetűket alakítottuk át nagybetűkké.

Most az összes betűt le szeretnénk cserélni az ábécében utána következőre. 

<ul>
    <li>A <code>tr</code> parancs első paraméterében megadjuk a lecserélendő betűket, ami az összes kisbetű és összes nagybetű lesz: <code>a-zA-Z</code>.</li>
    <li>A második paraméterben megadjuk, hogy az előző paraméterben megadott betűket rendre milyen más betűkre cseréljük le. Itt a következőt adjuk meg: <code>b-zaB-ZA</code> (hiszen "a" helyett "b" lesz, "b" helyett "c", "y" helyett "z", "z" helyett pedig "a" - ugyanezt felírjuk a nagybetűkre is).</li>
</ul>

Az előadóneveket és zenecímeket Napóleon-kódolással titkosító pipeline tehát:
<pre>
> cat playlist2.csv | cut -d ';' -f 1-2 | tr a-zA-Z b-zaB-ZA
Sjdl Btumfz;Ofwfs Hpoob Hjwf Zpv Vq
Jnbhjof Esbhpot;Uivoefs
Esbhpogpsdf;Uispvhi uif Gjsf boe Gmbnft
Cpofz N.;Sbtqvujo
Tufqqfoxpmg;Cpso Up Cf Xjme
...
</pre>

Az így kapott kimenetet már csak bele kell írnunk egy <code>napoleon_encoded.csv</code> fájlba. A feladat megoldása tehát:

<pre>
> cat playlist2.csv | cut -d ';' -f 1-2 | tr a-zA-Z b-zaB-ZA > napoleon_encoded.csv

> cat napoleon_encoded.csv
Sjdl Btumfz;Ofwfs Hpoob Hjwf Zpv Vq
Jnbhjof Esbhpot;Uivoefs
Esbhpogpsdf;Uispvhi uif Gjsf boe Gmbnft
Cpofz N.;Sbtqvujo
Tufqqfoxpmg;Cpso Up Cf Xjme
Qpxfsxpmg;Jodfotf boe Jspo
Tnbti Npvui;Bmm Tubs
Ojswbob;Tnfmmt Mjlf Uffo Tqjsju
Hmpszibnnfs;Uif Vojdpso Jowbtjpo pg Evoeff
Qpxfsxpmg;Xf Bsf Uif Xjme
Jnbhjof Esbhpot;Sbejpbdujwf
Etdijohijt Libo;Nptlbv
Etdijohijt Libo;Etdijohijt Libo
Cpoojf Uzmfs;Upubm Fdmjqtf pg uif Ifbsu
Hpqojl NdCmzbu;Toblft Jo Usbdltvjut
Kpio Gbsoibn;Uivoefs Jo Zpvs Ifbsu
Jtnfsfumfo;Qfsgfdumz Dvu Tdsfbna
</pre>
</div>


### 10. Napóleon-kódolás visszafejtése (2 pont)

Írj csővezetéket, ami az előző feladatban létrehozott `napoleon_encoded.csv` fájl adatait visszafejti (dekódolja a Napóleon-kódolást), és a visszafejtett adatokat beleírja a `napoleon_decoded.csv` nevű állományba!

<div class="bordered-box border-black">
<span class="black">Megoldás:</span> Itt lényegében csak annyi a feladatunk, hogy a korábban létrehozott <code>napoleon_encoded.csv</code> fájl tartalmát visszafejtsük, és a "dekódolt" tartalmat beletegyük egy <code>napoleon_decoded.csv</code> nevű fájlba.

A Napóleon-kódolás visszafejtése úgy történik, hogy a <code>tr</code> paranccsal az ábécé összes kis- és nagybetűjét lecseréljük az őt megelőző betűre ("a" helyett "z"-t írunk, "b" helyett "a"-t, "z" helyett "y"-t): <code>tr a-zA-Z za-yZA-Y</code>.

A feladat megoldása tehát:

<pre>
> cat napoleon_encoded.csv | tr a-zA-Z za-yZA-Y > napoleon_decoded.csv

> cat napoleon_decoded.csv
Rick Astley;Never Gonna Give You Up
Imagine Dragons;Thunder
Dragonforce;Through the Fire and Flames
Boney M.;Rasputin
Steppenwolf;Born To Be Wild
Powerwolf;Incense and Iron
Smash Mouth;All Star
Nirvana;Smells Like Teen Spirit
Gloryhammer;The Unicorn Invasion of Dundee
Powerwolf;We Are The Wild
Imagine Dragons;Radioactive
Dschinghis Khan;Moskau
Dschinghis Khan;Dschinghis Khan
Bonnie Tyler;Total Eclipse of the Heart
Gopnik McBlyat;Snakes In Tracksuits
John Farnham;Thunder In Your Heart
Ismeretlen;Perfectly Cut Screamz
</pre>
</div>