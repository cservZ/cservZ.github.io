# Szkriptnyelvek - 3. gyakorló feladatsor

## Python adatszerkezetek: lista, dictionary


### 1. feladat: Könyvespolc (2 pont)

Tünde szeret olvasni, így a polcán is számos könyv található. Egyik nap Tünde rendet rak a lakásában, és a könyveit is rendbe szeretné rakni.

Írj egy `konyveket_rendez` nevű függvényt, amely egy könyvcímekből álló listát kap paraméterül! A függvény rendezze a könyvek címét Z-től A-ig (tehát először rendezze a listaelemeket ábécé sorrendbe, majd fordítsa meg a rendezett listát)! A visszatérési érték az eredményül kapott lista.

<span class="example">Példa:</span>

<pre class="language-html">
<b>Input:</b> ['Vajak I', 'Allatfarm', 'Harry Potter es a bolcsek kove', 'A hobbit', 'Szamitogep Architekturak']
<b>Return:</b> ['Vajak I', 'Szamitogep Architekturak', 'Harry Potter es a bolcsek kove', 'Allatfarm', 'A hobbit']
</pre>


### 2. feladat: Kiárusítás (3 pont)

Balázs a zsebpénzéből egy új mikrofont szeretne venni. Szerencséjére a kedvenc webshopja épp kiárusítást tart, így minden szórakoztató elektronikai termék akciósan vásárolható meg.

Írj egy `akcios_ar` nevű függvényt, amely két paramétert vár: rendre a mikrofonok eredeti árát (egész számokat tartalmazó lista) és a leárazás mértékét százalékban (valós szám)! A függvény csökkentse a listában található árakat az adott százalékkal, és adja vissza az így kapott listát! Az árak továbbra is egész számok legyenek (ne tizedestörtek)! <span class="red">A feladatot úgy oldd meg, hogy az eredeti listát ne módosítsd (azaz a paraméterben kapott lista egy másolatával dolgozz a megoldás elkészítése során)!</span>

<span class="example">Példa:</span>

<pre class="language-html">
<b>Input:</b> [5000, 12000, 10000, 29000, 47000], 30.0
<b>Return:</b> [3500, 8400, 7000, 20300, 32900]
</pre>


### 3. feladat: Béla (2 pont)

Béla egy online játékkal játszik. A játékban talált egy bugot, amit kihasználva többször is be tud lépni a játékba ugyanazzal a felhasználónévvel. A játékostársai ezt nem tartják tisztességesnek, ezért úgy döntenek, hogy Bélát kirúgják a játékból.

Írj egy `belat_kirug` nevű függvényt, amely egy listát kap paraméterül! A lista a játékosok neveit tartalmazza (szöveges adatok). A függvény távolítsa el a listából az `EpicBela20` játékosnév összes előfordulását, majd térjen vissza az így kapott listával! <span class="red">A feladatot úgy oldd meg, hogy az eredeti listát ne módosítsd (azaz a paraméterben kapott lista egy másolatával dolgozz a megoldás elkészítése során)!</span>

<span class="example">Példa:</span>

<pre class="language-html">
<b>Input:</b> ['EpicBela20', 'python4life', 'EpicBela20', 'EpicBela20', 'kalkEasy', 'varj_ez_nem_is_csgo', 'sajt42']
<b>Return:</b> ['python4life', 'kalkEasy', 'varj_ez_nem_is_csgo', 'sajt42']
</pre>


### 4. feladat: Leghosszabb szó (3 pont)

Írj egy `leghosszabb_szo` nevű függvényt, amely egy szöveget kap paraméterül (a szöveg szóközzel elválasztott szavakat tartalmaz)! A függvény térjen vissza a szövegben található leghosszabb szóval! Amennyiben több szó is ugyanolyan hosszú, akkor közülük a szövegben korábban előfordulót adjuk vissza!

Ha a paraméterül kapott szöveg az üres string, akkor a visszatérési érték a `HIBA!` szöveg legyen!

<span class="example">Példa:</span>

<pre class="language-html">
<b>Input:</b> 'Szia uram! Mondd mar meg, hogy hany ora van!'
<b>Return:</b> 'uram!'

<b>Input:</b> ''
<b>Return:</b> 'HIBA!'
</pre>


### 5. feladat: Gyenge jelszavak (4 pont)

Mivel Elliot felettesét nagyon lenyűgözte az 1 feladatsorral korábban megírt jelszó-erősség mérő szkript, ezért egy új feladattal bízza meg alkalmazottját. Elliotnak ki kell válogatnia a vállalat által használt jelszavak közül azokat, amelyek gyengének minősülnek.

Írj egy `gyenge_jelszavak` nevű függvényt, amely egy jelszavakat tartalmazó listát kap paraméterül! A függvény adja vissza a gyenge jelszavakat egy listában! Egy jelszót gyengének tekintünk, ha az alábbi feltételek közül legalább 1 érvényes rá:

* A jelszó rövidebb, mint 5 karakter
* A jelszó nem tartalmaz számjegy karaktert
* A jelszó tartalmazza a `jelszo` vagy `123` szövegek valamelyikét bármilyen formában (a kis- és nagybetűket nem megkülönböztetve).

<span class="example">Példa:</span>

<pre class="language-html">
<b>Input:</b> ['Root', 'Kekw2000', 'H0sszuJelszoG0esBrrr', 'Admin123456', 'sub2Pewdiepie', 'asdqwe', 'K1L0']
<b>Return:</b> ['Root', 'H0sszuJelszoG0esBrrr', 'Admin123456', 'asdqwe']
</pre>



### 6. feladat: Egyedi szavak (5 pont)

Írj egy `egyedi_szavak` függvényt, amely egy szöveget kap paraméterül (a szöveg szóközzel elválasztott szavakat tartalmaz)! A függvény adja vissza, hogy hány <span class="red">különböző</span> szó található a szövegben! 

* A kis- és nagybetűket ne különböztesd meg (tehát pl. `alma` és `ALMA` ugyanaz a szó)!
* A szavak végén lévő pontoktól, felkiáltójelektől, kérdőjelektől és vesszőktől szabadulj meg (tehát például `Alma?` és `alma` ugyanaz a szó)! Feltehetjük, hogy ezek az írásjelek csak szavak végén fordulnak elő a szövegben.

<span class="example">Példa:</span>

<pre class="language-html">
<b>Input:</b> 'A macska, vagy mas neven a hazi macska kisebb termetu husevo emlos, amely a macskafelek csaladjaba tartozik.'
<b>Return:</b> 14
</pre>


### 7. feladat: Felváltva (5 pont)

Írj egy `felvaltva` nevű függvényt, amely egy több szóból álló szöveget vár paraméterben! A függvény alakítsa át a szöveget úgy, hogy az egymás utáni szavak felváltva legyenek csupa nagybetűsek és csupa kisbetűsek (lásd: első példa)! A szöveg első szava legyen csupa nagybetűs! A visszatérési érték az átalakított szöveg.

Kezeld le azt az esetet, amikor a függvény egy 2-nél kevesebb szóból álló szöveget kap paraméterül! Ekkor a visszatérési érték a `HIBA!` szöveg legyen!

<span class="example">Példa:</span>

<pre class="language-html">
<b>Input:</b> 'Tajekoztatjuk utasainkat, hogy a Szeged felol erkezo szemelyvonat varhatoan otven percet kesik.'
<b>Return:</b> 'TAJEKOZTATJUK utasainkat, HOGY a SZEGED felol ERKEZO szemelyvonat VARHATOAN otven PERCET kesik.'

<b>Input:</b> 'Sajt'
<b>Return:</b> 'HIBA!'
</pre>


### 8. feladat: Sorozatok (6 pont)

Ricsi nagyon szereti a sorozatokat... mármint a matematikai sorozatokat. Kedvencei a számtani és mértani sorozatok. Írj egy `sorozatok` nevű függvényt, amely egy számokból álló listát kap paraméterül! A függvény döntse el, hogy a listában szereplő számok számtani, illetve mértani sorozatot alkotnak-e!

Kezeld le azt az esetet, amikor a függvény paraméterében érkező lista 3-nál kevesebb elemet tartalmaz! Ekkor a visszatérési érték a `HIBA!` szöveg legyen!

<div class="bordered-box border-green">
    <span class="green">Emlékeztető:</span>
    <ul>
    <li>Egy sorozatot akkor nevezünk számtani sorozatnak, ha a szomszédos elemek különbsége állandó (pl. 1, 3, 5, 7, 9 számtani sorozat, hiszen a szomszédos elemek különbsége mindenhol 2).</li>
    <li>Egy sorozatot akkor nevezünk mértani sorozatnak, ha a szomszédos elemek hányadosa állandó (pl. 1, 2, 4, 8, 16 mértani sorozat, hiszen a szomszédos elemek hányadosa mindenhol 2)</li>
    </ul>
</div>

<span class="example">Példa:</span>

<pre class="language-html">
<b>Input:</b> [10, 20]
<b>Return:</b> 'HIBA!'

<b>Input:</b> [2, 3, 5, 7, 11, 13]
<b>Return:</b> 'A sorozat se nem szamtani, se nem mertani sorozat.'

<b>Input:</b> [42, 42, 42]
<b>Return:</b> 'A sorozat szamtani es mertani sorozat is egyben.'

<b>Input:</b> [20, 15, 10, 5, 0, -5]
<b>Return:</b> 'A sorozat szamtani sorozat.'

<b>Input:</b> [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]
<b>Return:</b> 'A sorozat mertani sorozat.'
</pre>


### 9. feladat: Gyorsétterem (4 pont)

A kedvenc gyorséttermünkben a vásárlók belépés után sorszámot húznak, amely alapján leadhatják a rendelésüket. Az étteremben két kassza üzemel: egyiknél a páros, másiknál pedig a páratlan sorszámú rendeléseket szolgálják ki.

Írj egy `kasszahoz_rendel` nevű függvény, amely egy olyan szöveget kap paraméterül, amely pontosvesszővel elválasztott (egész) számokat tartalmaz! A függvény visszatérése egy 2 dimenziós lista, amely 2 részlistából áll: az első részlistába a páros, a második részlistába pedig a páratlan sorszámok kerülnek <span class="red">növekvő sorrendben</span>.

<span class="example">Példa:</span>

<pre class="language-html">
<b>Input:</b> '42;38;45;40;41;39;44;43;46'
<b>Return:</b> [[38, 40, 42, 44, 46], [39, 41, 43, 45]]
</pre>


### 10. feladat: Mátrixok összeadása (6 pont)

Írj egy `matrix_osszead` nevű függvényt, amely két mátrixot (kétdimenziós listát) vár paraméterül, és kiszámítja ezen két mátrix összegét! A feladat megoldása során ne használj semmilyen beépített vagy külső Python csomagot!

Fontos, hogy az összeadásnál mindkét mátrix dimenziószáma megegyezzen (pl. mindkét mátrix `n x m`-es, azaz `n` sorból és `m` oszlopból álljon). Ha a két mátrix dimenziószáma eltér, akkor a függvény térjen vissza egy üres listával! Ha a dimenziószámok megegyeznek, akkor a visszatérési érték a két mátrix összege legyen (ami szintén egy mátrix)!

<div class="bordered-box border-green">
    <span class="green">Segítség:</span> Két mátrix összegét úgy kapjuk, hogy az azonos indexeken lévő elemeket sorban összeadogatjuk. Például:
    <img src="./matrix_addition.png" alt="Mátrix összeadás"/>
</div>

<span class="example">Példa:</span>

<pre class="language-html">
<b>Input:</b> [[7, 1, 3], [4, 0, 2]], [[2, 5, 5], [8, 6, 0]]
<b>Return:</b> [[9, 6, 8], [12, 6, 2]]

<b>Input:</b> [[5, 1], [3, 2], [8, 6]], [[4, 8], [2, 7]]
<b>Return:</b> []
</pre>