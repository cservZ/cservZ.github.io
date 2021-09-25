# Szkriptnyelvek - 7. gyakorló feladatsor

## JavaScript vezérlési szerkezetek, függvények, stringek

### 1. feladat: Kézfogás (2 pont)

Egy több tagú baráti társaságban mindenki mindenkivel kezet fog (nyilván önmagával senki sem fog kezet, ennyire kétségbeesettek azért nem vagyunk). Írj egy `kezfogas` nevű függvényt, amely a társaságban lévő emberek számát kapja paraméterül, és visszaadja, hogy összesen hány kézfogás történt!

<span class="example">Példa:</span>

<pre class="language-html">
<b>Input:</b> 10
<b>Return:</b> 45
</pre>


### 2. feladat: Egyezés (2 pont)

Írj egy `megegyezik` nevű függvényt, amely két tetszőleges paramétert vár! A függvény adja vissza, hogy a két paraméter típusra és értékre is megegyezik-e!

<span class="example">Példa:</span>

<pre class="language-html">
<b>Input:</b> 0, false
<b>Return:</b> false

<b>Input:</b> 42, 42
<b>Return:</b> true
</pre>


### 3. feladat: Város (2 pont)

Amikor egy városba látogatunk, egy üdvözlő tábla fogad minket. Írj egy `udvozol` nevű függvényt, amely egy város nevét várja paraméterül, és visszatér egy `Udvozoljuk {varosNeve} varosaban!` alakú szöveggel (a kapcsos zárójelek közé a paraméterben kapott városnév legyen behelyettesítve)!

Érd el, hogy a függvény paraméterének ne legyen kötelező értéket adni a függvényhíváskor! Abban az esetben, ha nem adjuk meg a paraméter értékét, akkor a város neve legyen alapból `Szeged`!

<span class="example">Példa:</span>

<pre class="language-html">
<b>Input:</b> 'Mucsarocsoge'
<b>Return:</b> 'Udvozoljuk Mucsarocsoge varosaban!'

<b>Input:</b>
<b>Return:</b> 'Udvozoljuk Szeged varosaban!'
</pre>


### 4. feladat: Kedves Ferenc (3 pont)

Egy tudományos kutatás megállapította, hogy a Ferenc nevű emberek kedvesek. Írj egy `kedves` nevű függvényt, amely egy nevet kap paraméterül! Ha a név `Ferenc`, akkor a függvény térjen vissza igaz, egyéb név esetén pedig hamis értékkel! Ha a függvényhíváskor nem adunk át paramétert a függvénynek, akkor a visszatérési érték legyen `null`!

<span class="red">A feladat megoldása során NE használj default paraméter értéket! Ehelyett a gyakorlati jegyzetben tárgyalt módon ellenőrizd, hogy megadták-e a függvény paraméterének értékét!</span>

<span class="example">Példa:</span>

<pre class="language-html">
<b>Input:</b> 'Ferenc'
<b>Return:</b> true

<b>Input:</b> 'Bela'
<b>Return:</b> false

<b>Input:</b> 
<b>Return:</b> null
</pre>


### 5. feladat: Köbösszeg (3 pont)

Írj egy `kobosszeg` nevű függvényt, amely két egész számot kap paraméterül: rendre egy zárt intervallum alsó és felső végpontját! A függvény adja vissza az intervallumba eső számok köbének az összegét! (A végpontok természetesen még beletartoznak az intervallumba.)

<span class="example">Példa:</span>

<pre class="language-html">
<b>Input:</b> 1, 3
<b>Return:</b> 36

<b>Input:</b> 10, 100
<b>Return:</b> 25500475
</pre>


### 6. feladat: Callback függvény (4 pont)

Használjuk fel az előző feladatban megírt `kobosszeg` függvényt, miután meggyőződtünk arról, hogy helyes paraméterekkel hívjuk meg azt!

Írj egy `kobosszegetMeghiv` függvényt, amely 3 paramétert vár: két egész számot és egy callback függvényt (ez most a `kobosszeg` függvény lesz)! Amennyiben minden paraméter megfelelő típusú (két szám és egy függvény), hívd meg a paraméterben kapott callback függvényt úgy, hogy az első paramétere a két szám közül a kisebbik, míg a második paramétere a két szám közül a nagyobbik legyen! A callback függvény visszatérési értékével térj vissza!

<span class="example">Példa:</span>

<pre class="language-html">
<b>Input:</b> 100, 10, kobosszeg
<b>Return:</b> 25500475
</pre>


### 7. feladat: Teve (5 pont)

A [TeveClub](https://teveclub.hu/) oldalon virtuálisan nevelhetünk tevéket. Egy új teve igénylésekor meg kell adnunk a teve nevét és hívójelét (ez kb. egy jelszónak feleltethető meg).

Írj egy `tevetIgenyel` függvényt, amely két paramétert vár: rendre a teve nevét és hívójelét (szöveges adatok)! A függvényben ellenőrizd, hogy a megadott hívójel megfelelő erősségű-e! Ezt a következőképpen tedd meg:

* Ha a hívójel 6 karakternél rövidebb, akkor a függvény térjen vissza a `Tul rovid hivojel!` hibaüzenettel!
* Ha a hossz megfelelő, de a hívójel megegyezik a teve nevével, akkor a függvény térjen vissza a `Tul nyilvanvalo hivojel!` hibaüzenettel!
* Ha eddig nem volt hiba, viszont a hívójel tartalmazza a `teve` szöveget bármilyen formában (kis- és nagybetűket nem megkülönböztetve), akkor a függvény térjen vissza a `Tiltott szoveg a hivojelben!` hibaüzenettel!
* Minden egyéb esetben a `Sikeres teveigenyles!` szöveg legyen a visszatérési érték!

<span class="example">Példa:</span>

<pre class="language-html">
<b>Input:</b> 'MyEpicCamel', 'epicTeve20'
<b>Return:</b> 'Tiltott szoveg a hivojelben!'

<b>Input:</b> 'Leenhurbertindrund', 'sivatag4life'
<b>Return:</b> 'Sikeres teveigenyles!'
</pre>


### 8. feladat: Számjegyek átlaga (5 pont)

Írj egy `szamjegyAtlag` nevű függvényt, amely egy egész számot vár paraméterül (akár negatív paraméter is lehet), és visszaadja a számban található számjegyek átlagát (tehát osszuk el a számjegyek összegét a számjegyek darabszámával)! Ha a függvény nem szám típusú paramétert kap, akkor a visszatérési érték legyen `-1`! 

<span class="example">Példa:</span>

<pre class="language-html">
<b>Input:</b> 741258
<b>Return:</b> 4.5

<b>Input:</b> -97968
<b>Return:</b> 7.8

<b>Input:</b> 'kecske'
<b>Return:</b> -1
</pre>


### 9. feladat: Cenzúra (3 pont)

Ninja az egyik Discord szerveren az indokolatlan tagelgetéseivel sikeresen magára haragította az egyik admint. Emiatt azt a büntetést kapta, hogy mostantól az üzenetei cenzúrázva jelennek meg.

Írj egy `cenzura` függvényt, amely Ninja egy üzenetét kapja paraméterül, és ezt átalakítja úgy, hogy az összes magánhangzót lecseréli a `*` (csillag) karakterre! A magánhangzók vizsgálata során a kis- és nagybetűket ne különböztesd meg! A paraméterben érkező szöveg garantáltan nem tartalmaz ékezetes betűket.

<span class="example">Példa:</span>

<pre class="language-html">
<b>Input:</b> 'He, miert igy jelennek meg az uzeneteim?'
<b>Return:</b> 'H*, m**rt *gy j*l*nn*k m*g *z *z*n*t**m?'

<b>Input:</b> 'Elhagyom ezt a csoportot, mert serto az elmult tobb mint 10 eves Discordos tapasztalatom es multammal szemben.'
<b>Return:</b> '*lh*gy*m *zt * cs*p*rt*t, m*rt s*rt* *z *lm*lt t*bb m*nt 10 *v*s D*sc*rd*s t*p*szt*l*t*m *s m*lt*mm*l sz*mb*n.'
</pre>


### 10. feladat: Színkód (3 pont)

Ági a NASA-nál dolgozik webfejlesztőként. Egyik napon a NASA úgy döntött, hogy a CSS kódjaikban található összes hexadecimális színkódot át szeretnék írni decimális RGB-formátumra. Írj egy `konvertal` nevű függvényt, amely egy hexadecimális színkódot (string) vár paraméterben, és visszaadja a színnek megfelelő decimális RGB-kódot `rgb({vörös szín mennyisége}, {zöld szín mennyisége}, {kék szín mennyisége})` formátumban!

<div class="bordered-box border-blue">
    <span class="blue">A feladat megoldásához szükséges ismeretek:</span><br><br>
    Egy hexadecimális színkód úgy néz ki, hogy <code>#</code> (kettőskereszt) karakter után szerepel 6 darab, 16-os számrendszerbeli számjegy - például <code>#FF0077</code> (az input mindig ilyen formátumú lesz, a hexadecimális színkódok tömörebb megadási módjával nem foglalkozunk).<br><br>
    Egy hexadecimális színkód a következőképpen váltható át decimális RGB-formátumra:<br>
    <ol>
        <li>Átváltjuk a kettőskereszt után lévő 2 számjegyet 10-es számrendszerbe, ezzel megkapjuk a vörös szín mennyiségét.</li>
        <li>Az ezután lévő 2 számjegyet is átváltjuk 10-es számrendszerbe, ezzel megkapjuk a zöld szín mennyiségét.</li>
        <li>Az utolsó 2 számjegyet is átváltjuk 10-es számrendszerbe, ezzel megkapjuk a kék szín mennyiségét.</li>
    </ol><br>
    Például <code>#FF0077</code> decimális RGB-alakban: <code>rgb(255, 0, 119)</code>.
</div>

<div class="bordered-box border-green">
    <span class="green">Tipp:</span> Keress rá az interneten, hogy hogyan lehet JavaScriptben egyszerűen átváltani egy hexadecimális (16-os számrendszerbeli) számot decimálisba (10-es számrendszerbe)!
</div>

<span class="example">Példa:</span>

<pre class="language-html">
<b>Input:</b> '#FF0077'
<b>Return:</b> 'rgb(255, 0, 119)'

<b>Input:</b> '#06C2E9'
<b>Return:</b> 'rgb(6, 194, 233)'
</pre>


### 11. feladat: Betűcsere (3 pont)

Írj egy `betucsere` nevű függvényt, amely egy szöveget kap paraméterül! A függvény visszatérési értéke egy szöveg, amit úgy kapunk, hogy a paraméterben kapott szövegben felcseréljük a kis- és nagybetűket (tehát ami az eredeti szövegben kisbetű volt, az a visszatérési értékben nagybetű lesz és fordítva).

<span class="example">Példa:</span>

<pre class="language-html">
<b>Input:</b> 'SegITsEg! elROMloTt A cAPs LocK!'
<b>Return:</b> 'sEGitSeG! ELromLOtT a CapS lOCk!'
</pre>


### 12. feladat: Python (3 pont)

Tomi kedvenc programozási nyelve a Python. Amikor JavaScriptet kezdett el tanulni, akkor Tomi nagyon hiányolta a nyelvből a Pythonból ismerős negatív string-indexelést, ezért úgy döntött, hogy ír erre egy függvényt.

Írj egy `python` nevű függvényt, amely rendre egy szöveget és egy (garantáltan egész) indexet kap paraméterül! A függvény adja vissza a string adott indexű karakterét úgy, hogy a Pythonból ismerős negatív indexelés is működjön (ekkor a string végétől kezdünk el számolni)! Amennyiben túl- vagy alulindexeljük a stringet, akkor a visszatérési érték `undefined` legyen!

<span class="example">Példa:</span>

<pre class="language-html">
<b>Input:</b> 'Lehet-e a Pythonos indexelest JavaScriptben szimulalni?', 0
<b>Return:</b> 'L'

<b>Input:</b> 'Lehet-e a Pythonos indexelest JavaScriptben szimulalni?', -1
<b>Return:</b> '?'

<b>Input:</b> 'Lehet-e a Pythonos indexelest JavaScriptben szimulalni?', -2000
<b>Return:</b> undefined
</pre>


### 13. feladat: Karakterek többszörözése (5 pont)

Írj egy `karakterTobbszoroz` nevű függvényt, amely egy szöveget vár paraméterül! A függvény visszatérési értéke egy szöveg, amit úgy kapunk, hogy a paraméterben kapott szöveg minden karakterét leírjuk annyiszor, mint ahányadik a karakter a szövegben (tehát az 1. karaktert 1-szer, a 2. karaktert 2-szer, a 3. karaktert 3-szor és így tovább).

Amennyiben a függvény paramétere nem string típusú vagy a paraméterben kapott érték az üres string, akkor a függvény térjen vissza a `HIBA!` szöveggel!

<span class="example">Példa:</span>

<pre class="language-html">
<b>Input:</b> 'sajt'
<b>Return:</b> 'saajjjtttt'

<b>Input:</b> true
<b>Return:</b> 'HIBA!'
</pre>


### 14. feladat: Háromszög (6 pont)

Írj egy `haromszog` nevű függvényt, amely egy háromszög 3 oldalának hosszát kapja paraméterül centiméterben (mindhárom oldalhossz garantáltan szám típusú)!

* Ha valamelyik paraméter negatív, akkor a függvény térjen vissza a `HIBA! Nem letezo haromszog!` szöveggel!
* Ha az oldalhosszak alapján a háromszög nem megszerkeszthető (bővebben lásd: kék doboz), akkor szintén térjen vissza a függvény a `HIBA! Nem letezo haromszog!` szöveggel!
* Minden egyéb esetben a függvény számítsa ki a paraméterben kapott oldalhosszakkal rendelkező háromszög kerületét és területét **2 tizedesjegy pontossággal**, és adja vissza ezeket az adatokat egy `Kerulet: {kerulet} cm, terulet: {terulet} cm2` formátumú szövegben!

<div class="bordered-box border-blue">
    <span class="blue">A feladat megoldásához szükséges összefüggések:</span><br><br>
    Egy háromszög megszerkeszthető, ha bármely oldalának hossza kisebb a másik két oldal hosszának összegénél. Tehát: <img src="https://latex.codecogs.com/gif.latex?a < b + c" class="inline"> és <img src="https://latex.codecogs.com/gif.latex?b < a + c" class="inline"> és <img src="https://latex.codecogs.com/gif.latex?c < a + b" class="inline">. <br><br>
    Háromszög kerülete: <img src="https://latex.codecogs.com/gif.latex?K = a + b + c" class="inline">. <br><br>
    Háromszög területe (Hérón-képlet): <img src="https://latex.codecogs.com/gif.latex?\sqrt{s(s - a)(s - b)(s - c)}" class="inline">, ahol <img src="https://latex.codecogs.com/gif.latex?s = \frac{a + b + c}{2}" class="inline">.
</div>

<div class="bordered-box border-green">
    <span class="green">Tipp:</span> Négyzetgyökvonást a <code>Math.sqrt()</code> függvénnyel végezhetünk, míg 2 tizedesjegyre kerekítésre használhatjuk a <code>toFixed()</code> metódust (<a href="https://www.w3schools.com/jsref/jsref_tofixed.asp" target="_blank">leírás és példa a metódussal kapcsolatban</a>).
</div>

<span class="example">Példa:</span>

<pre class="language-html">
<b>Input:</b> 3, -1, 3
<b>Return:</b> 'HIBA! Nem letezo haromszog!'

<b>Input:</b> 7, 4, 2
<b>Return:</b> 'HIBA! Nem letezo haromszog!'

<b>Input:</b> 5, 4, 7
<b>Return:</b> 'Kerulet: 16.00 cm, terulet: 9.80 cm2'
</pre>


### 15. feladat: Leghosszabb nyerőszéria (5 pont)

Gábor a szabadidejében egy online csapatjátékkal játszik. A játék során feljegyzi, hogy a játék egyes köreiben a csapata győzött-e vagy veszített-e.

Írj egy `leghosszabbNyeroszeria` nevű függvényt, amely a játék egyes köreinek eredményét elkódoló szöveget kap paraméterül! A paraméterben kapott szöveg csak `0` és `1` karaktereket tartalmaz: a `0` azt jelenti, hogy Gábor csapata az adott kört elveszítette, az `1` pedig azt, hogy megnyerte. A függvény adja vissza, hogy mennyi volt Gábor csapatának leghosszabb nyerőszériája a játékban (azaz milyen hosszú a paraméterben kapott szövegben a leghosszabb, **közvetlenül egymás utáni** `1`-esekből álló sorozat)!

<span class="example">Példa:</span>

<pre class="language-html">
<b>Input:</b> '0000100111000000110000101'
<b>Return:</b> 3

<b>Input:</b> '1101001111010000011110011'
<b>Return:</b> 4

<b>Input:</b> '0000000000000000000000000'
<b>Return:</b> 0
</pre>


### 16. feladat: Tömörített szöveg kibontása (6 pont)

Írj egy `kibont` nevű függvényt, amely egy tömörített szöveget kap paraméterül, amit "kibont"! A függvény lépkedjen végig a paraméterben kapott szöveg karakterein, és ha számjegy jön, akkor vegye a következő karaktert annyiszor, mint amennyi a számjegy értéke, és az azt követő karakterrel folytassa a műveletet! A kibontott szöveg legyen a függvény visszatérési értéke!

<span class="example">Példa:</span>

<pre class="language-html">
<b>Input:</b> 'Hah5o! Van i2t valaki3?'
<b>Return:</b> 'Hahooooo! Van itt valaki???'
</pre>
