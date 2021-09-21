# Szkriptnyelvek - 7. gyakorló feladatsor

## JavaScript vezérlési szerkezetek, függvények, stringek

<div class="bordered-box border-red">
    <span class="red">Figyelem!</span> Mindig jól olvassuk el a feladat szövegét! Ha azt kéri a feladat, hogy írasson ki valamit a függvény a konzolra, akkor használjuk a <code>console.log()</code>-ot, ha pedig vissza kell adnia a függvénynek valamit, akkor a <code>return</code> kulcsszót használjuk!
</div>


### 1. feladat: Kézfogás (2 pont)

Egy több tagú baráti társaságban mindenki mindenkivel kezet fog (nyilván önmagával senki sem fog kezet, ennyire kétségbeesettek azért nem vagyunk). Írj egy `kezfogas` nevű függvényt, amely a társaságban lévő emberek számát kapja paraméterül, és visszaadja, hogy összesen hány kézfogás történt!

<span class="example">Példa:</span>

<pre class="language-html">
<b>Input:</b> 10
<b>Return:</b> 45
</pre>


### 2. feladat: Város (2 pont)

Amikor egy városba látogatunk, egy üdvözlő tábla fogad minket. Írj egy `udvozol` nevű függvényt, amely egy város nevét várja paraméterül, és kiírja a konzolra az `Udvozoljuk {varosNeve} varosaban!` szöveget (a kapcsos zárójelek közé a paraméterben kapott városnév legyen behelyettesítve)!

Érd el, hogy a függvény paraméterének ne legyen kötelező értéket adni a függvényhíváskor! Abban az esetben, ha nem adjuk meg a paraméter értékét, akkor a város neve legyen alapból `Szeged`!

<span class="example">Példa:</span>

<pre class="language-html">
<b>Input:</b> 'Mucsarocsoge'
<b>Output:</b> 'Udvozoljuk Mucsarocsoge varosaban!'

<b>Input:</b>
<b>Output:</b> 'Udvozoljuk Szeged varosaban!'
</pre>


### 3. feladat: Kedves Ferenc (3 pont)

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


### 4. feladat: Köbösszeg (3 pont)

Írj egy `kobosszeg` nevű függvényt, amely két egész számot kap paraméterül: rendre egy zárt intervallum alsó és felső végpontját! A függvény adja vissza az intervallumba eső számok köbének az összegét! (A végpontok természetesen még beletartoznak az intervallumba.)

<span class="example">Példa:</span>

<pre class="language-html">
<b>Input:</b> 1, 3
<b>Return:</b> 36

<b>Input:</b> 10, 100
<b>Return:</b> 25500475
</pre>


### 5. feladat: Callback függvény (4 pont)

Használjuk fel az előző feladatban megírt `kobosszeg` függvényt, miután meggyőződtünk arról, hogy helyes paraméterekkel hívjuk meg azt!

Írj egy `kobosszegetMeghiv` függvényt, amely 3 paramétert vár: két egész számot és egy callback függvényt (ez most a `kobosszeg` függvény lesz)! Amennyiben minden paraméter megfelelő típusú (két szám és egy függvény), hívd meg a paraméterben kapott callback függvényt úgy, hogy az első paramétere a két szám közül a kisebbik, míg a második paramétere a két szám közül a nagyobbik legyen! A callback függvény visszatérési értékével térj vissza!

<span class="example">Példa:</span>

<pre class="language-html">
<b>Input:</b> 100, 10, kobosszeg
<b>Return:</b> 25500475
</pre>


### 6. feladat: Teve (5 pont)

A [TeveClub](https://teveclub.hu/) oldalon virtuálisan nevelhetünk tevéket. Egy új teve igénylésekor meg kell adnunk a teve nevét és hívójelét (ez kb. egy jelszónak feleltethető meg).

Írj egy `tevetIgenyel` függvényt, amely két paramétert vár: rendre a teve nevét és hívójelét (szöveges adatok)! A függvényben ellenőrizzük, hogy a megadott hívójel megfelelő erősségű-e! Ezt a következőképpen tegyük meg:

* Ha a hívójel 6 karakternél rövidebb, akkor írassuk ki a `Tul rovid hivojel!` hibaüzenetet a konzolra!
* Ha a hossz megfelelő, de a hívójel megegyezik a teve nevével, akkor jelenítsük meg a `Tul nyilvanvalo hivojel!` hibaüzenetet a konzolon!
* Ha eddig nem volt hiba, viszont a hívójel tartalmazza a `teve` szöveget bármilyen formában (kis- és nagybetűket nem megkülönböztetve), akkor írassuk ki a `Tiltott szoveg a hivojelben!` hibaüzenetet!
* Minden egyéb esetben a `Sikeres teveigenyles!` szöveget jelenítsük meg a képernyőn!

<span class="example">Példa:</span>

<pre class="language-html">
<b>Input:</b> 'MyEpicCamel', 'epicTeve20'
<b>Output:</b> 'Tiltott szoveg a hivojelben!'

<b>Input:</b> 'Leenhurbertindrund', 'sivatag4life'
<b>Output:</b> 'Sikeres teveigenyles!'
</pre>


### 7. feladat: Számjegyek átlaga (5 pont)

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


### 8. feladat: Cenzúra (3 pont)

Ninja az egyik Discord szerveren az indokolatlan tagelgetéseivel sikeresen magára haragította az egyik admint. Emiatt azt a büntetést kapta, hogy mostantól az üzenetei cenzúrázva jelennek meg.

Írj egy `cenzura` függvényt, amely Ninja egy üzenetét kapja paraméterül, és ezt átalakítja úgy, hogy az összes magánhangzót lecseréli a `*` (csillag) karakterre! A magánhangzók vizsgálata során a kis- és nagybetűket ne különböztesd meg! A paraméterben érkező szöveg garantáltan nem tartalmaz ékezetes betűket.

<span class="example">Példa:</span>

<pre class="language-html">
<b>Input:</b> 'He, miert igy jelennek meg az uzeneteim?'
<b>Return:</b> 'H*, m**rt *gy j*l*nn*k m*g *z *z*n*t**m?'

<b>Input:</b> 'Elhagyom ezt a csoportot, mert serto az elmult tobb mint 10 eves Discordos tapasztalatom es multammal szemben.'
<b>Return:</b> '*lh*gy*m *zt * cs*p*rt*t, m*rt s*rt* *z *lm*lt t*bb m*nt 10 *v*s D*sc*rd*s t*p*szt*l*t*m *s m*lt*mm*l sz*mb*n.'
</pre>


### 9. feladat: Betűcsere (3 pont)

Írj egy `betucsere` nevű függvényt, amely egy szöveget kap paraméterül! A függvény visszatérési értéke egy szöveg, amit úgy kapunk, hogy a paraméterben kapott szövegben felcseréljük a kis- és nagybetűket (tehát ami az eredeti szövegben kisbetű volt, az a visszatérési értékben nagybetű lesz és fordítva).

<span class="example">Példa:</span>

<pre class="language-html">
<b>Input:</b> 'SegITsEg! elROMloTt A cAPs LocK!'
<b>Return:</b> 'sEGitSeG! ELromLOtT a CapS lOCk!'
</pre>


### 10. feladat: Python (3 pont)

Tomi kedvenc programozási nyelve a Python. Amikor JavaScriptet kezdett el tanulni, akkor Tomi nagyon hiányolta a nyelvből a Pythonból ismerős negatív stringindexelést, ezért úgy döntött, hogy ír erre egy függvényt.

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


### 11. feladat: Karakterek többszörözése (5 pont)

Írj egy `karakterTobbszoroz` nevű függvényt, amely egy szöveget vár paraméterül! A függvény visszatérési értéke egy szöveg, amit úgy kapunk, hogy a paraméterben kapott szöveg minden karakterét leírjuk annyiszor, mint ahányadik a karakter a szövegben (tehát az 1. karaktert 1-szer, a 2. karaktert 2-szer, a 3. karaktert 3-szor és így tovább).

Amennyiben a függvény paramétere nem string típusú vagy a paraméterben kapott érték az üres string, akkor a függvény térjen vissza a `HIBA!` szöveggel!

<span class="example">Példa:</span>

<pre class="language-html">
<b>Input:</b> 'sajt'
<b>Return:</b> 'saajjjtttt'

<b>Input:</b> true
<b>Return:</b> 'HIBA!'
</pre>


### 12. feladat: Háromszög (6 pont)

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
    <span class="green">Tipp:</span> A feladat megoldásához hasznos lehet a <code>Math</code> objektum (<a href="https://www.w3schools.com/js/js_math.asp" target="_blank">link</a>) és a <code>toFixed()</code> metódus (<a href="https://www.w3schools.com/jsref/jsref_tofixed.asp" target="_blank">link</a>).
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