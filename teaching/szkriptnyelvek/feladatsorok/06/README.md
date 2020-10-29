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


### 3. feladat: Callback

Használjuk fel az előző feladatban megírt `kobosszeg` függvényt, miután meggyőződtünk arról, hogy helyes paraméterekkel fogjuk meghívni!

Írj egy `kobosszegetMeghiv` függvényt, amely 3 paramétert vár: két számot és egy callback függvényt (ez most a `kobosszeg` lesz)! Amennyiben minden paraméter megfelelő típusú, hívjuk meg a paraméterben kapott callback függvényt úgy, hogy az első paramétere az a két szám közül a kisebbik, míg a második paramétere a két szám közül a nagyobbik legyen! Ha valamelyik paraméter típusa nem megfelelő, írassunk ki hibaüzenetet!

**Példa:**

<pre>
<b>Input:</b> 100, 10, kobosszeg
<b>Return:</b> 25500475
</pre>



### 4. feladat: Imposztor

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


### 5. feladat: Számjegyek átlaga

Írj egy `szamjegyAtlag` nevű függvényt, amely egy egész számot vár paraméterül, és visszaadja a számban található számjegyek átlagát! Ha a függvény nem szám típusú paramétert kap, akkor a visszatérési érték legyen `-1`!

**Példa:**

<pre>
<b>Input:</b> 741258
<b>Return:</b> 4.5

<b>Input:</b> -97968
<b>Return:</b> 7.8

<b>Input:</b> 'kecske'
<b>Return:</b> -1
</pre>


### 6. feladat: Karakterek többszörözése

Írj egy `karakterTobbszoroz` nevű függvényt, amely két paramétert vár: egy szöveget és egy egész számot! A függvény visszatérési értéke egy szöveg, amit úgy kapunk, hogy az első paraméterben érkező szöveg minden karakterét vesszük annyiszor, mint amennyi a második paraméterben kapott szám.

A függvény visszatérési értéke legyen a `Hiba` szöveg, amennyiben...

* ...valamelyik paraméter típusú nem megfelelő
* ...az első paraméterben érkező szöveg az üres string
* ...a második paraméterben érkező szám 1-nél kisebb!

**Példa:**

<pre>
<b>Input:</b> 'Sanyi', 4
<b>Return:</b> 'SSSSaaaannnnyyyyiiii'

<b>Input:</b> 'Bela', -1
<b>Return:</b> 'Hiba'
</pre>


### 7. feladat: E-mail cím generátor

A Flying Duck Travels légitársaság levelező szolgáltatásával saját e-mail fiókot hozhatunk létre. A fiók létrehozásakor megadjuk a teljes nevünket és a születési évet, majd ezekből a rendszer generál egy javasolt e-mail címet a következőképpen:

* vesszük a teljes névben szereplő összes névnek az első 3 betűjét, csupa kisbetűvel
* ezután vesszük a születési év utolsó számjegyét
* végül az így kapott azonosítóhoz hozzáfűzzük a `@duck.com` szöveget.

Írj egy `emailCimetGeneral` nevű függvényt, amely két paramétert vár: a teljes nevet és a születési évet, és visszatér a fenti szabályok alapján legenerált e-mail címmel! A születési évet ne legyen kötelező megadni, alapértéke legyen 1970! Hibakezeléssel nem kell foglalkoznod, feltesszük, hogy a paraméterek helyesek.

**Példa:**

<pre>
<b>Input:</b> 'Richard Paul Astley', 1966
<b>Return:</b> 'ricpauast6@duck.com'

<b>Input:</b> 'Citad Ella'
<b>Return:</b> 'citell0@duck.com'
</pre>


### 8. feladat: Cenzúra

Tamás az egyik Discord szerveren az indokolatlan tagelgetéseivel sikeresen magára haragította az egyik admint. Emiatt azt a büntetést kapta, hogy most már az üzenetei cenzúrázva jelennek meg.

Írj egy `cenzura` függvényt, amely Tamás egy üzenetét kapja paraméterül, és ezt átalakítja úgy, hogy az összes magánhangzót lecseréli a `*` (csillag) karakterre! A magánhangzók vizsgálata során a kis- és nagybetűket nem különböztetjük meg. A paraméterben érkező szöveg garantáltan nem tartalmaz ékezetes betűket.

**Példa:**

<pre>
<b>Input:</b> 'He, miert igy jelennek meg az uzeneteim?'
<b>Return:</b> 'H*, m**rt *gy j*l*nn*k m*g *z *z*n*t**m?'

<b>Input:</b> 'Elhagyom ezt a csoportot, mert serto az elmult tobb mint 10 eves Discordos tapasztalatom es multammal szemben.'
<b>Return:</b> '*lh*gy*m *zt * cs*p*rt*t, m*rt s*rt* *z *lm*lt t*bb m*nt 10 *v*s D*sc*rd*s t*p*szt*l*t*m *s m*lt*mm*l sz*mb*n.'
</pre>


### 9. feladat: Discord emote-ok

Discordon lehetőségünk van különböző emote-okkal reagálni üzenetekre. Az emote-ok között megtalálhatóak például az angol ábécé betűi A-tól Z-ig. Márk ezeknek az emote-oknak a használatával szeretne kirakni egy szót, viszont fontos tudni, hogy a Discord minden emote-ot csak egyszer enged felhasználni.

Írj egy `kirakhato` nevű függvényt, amely egy szót kap paraméterül, és visszaadja, hogy az kirakható-e a Discord betű emote-jaiból úgy, hogy minden emote-ot csak egyszer használhatunk fel!

**Példa:**

<pre>
<b>Input:</b> 'pikachu'
<b>Return:</b> true

<b>Input:</b> 'pokemon'
<b>Return:</b> false
</pre>


### 10. feladat: Valaki éppen gépel

Jani egy chatalkalmazást fejleszt JavaScriptben. Az alkalmazásban, amikor egy vagy több felhasználó éppen gépel, akkor erről kiírunk egy üzenetet.

Írj egy `gepeles` nevű függvényt, amely egy szöveget kap paraméterül. Ez a szöveg pontosvesszőkkel elválasztva tartalmazza azoknak a felhasználóknak a nevét, akik éppen gépelnek. Figyelj arra, hogy néhány név elé és/vagy után néhány fölösleges whitespace karakter került!

* Amennyiben a paraméter típusa nem megfelelő vagy a paraméterben az üres string érkezik, akkor a függvény térjen vissza a `Hiba` szöveggel!
* Ha pontosan 1 ember gépel, akkor térjünk vissza a `{username} eppen gepel` szöveggel, ahol `{username}` a gépelő felhasználó neve!
* Ha pontosan 2 ember gépel, akkor térjünk vissza a `{username1} es {username2} eppen gepel` szöveggel, ahol `{username1}` az első, míg `{username2}` a második felhasználó neve a pontosvesszőkkel elválasztott adatok közül!
* Ha 2-nél több ember gépel, akkor térjünk vissza a `{username1}, {username2} es {N} tovabbi felhasznalo eppen gepel` szöveggel, ahol `{username1}` és `{username2}` ugyanaz, mint az előző vázlatpontban, `{N}` pedig a többi gépelő felhasználónak a száma!
**Példa:**

<pre>
<b>Input:</b> 'catman6'
<b>Return:</b> 'catman6 eppen gepel'

<b>Input:</b> 'szte2k;lactose     ;    Sziklas ;         ErikaAkiEppenHegyrolCsuszikLeVagyNemtom'
<b>Return:</b> 'szte2k, lactose es 2 tovabbi felhasznalo eppen gepel'
</pre>

