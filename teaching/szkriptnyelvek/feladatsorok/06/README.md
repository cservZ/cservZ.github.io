<style>
    h1:first-of-type { display: none; }
</style>

# Szkriptnyelvek - 6. gyakorló feladatsor

## JavaScript vezérlés, függvények, stringek

A feladatok megoldása előtt telepítsük a [Node.js](https://nodejs.org/en/) futtatókörnyezetet, aminek segítségével parancssorból is tudjuk majd futtatni a JavaScript kódunkat!


### 1. feladat: Imposztor

Dani a népszerű [Among Us](http://www.innersloth.com/gameAmongUs.php) játékkal játszik. A játék egyes köreiben annak a százalékos valószínűsége, hogy Dani imposztor lesz, a következő képlettel kapható meg: `100 * (imposztorok száma / játékosok száma)`.

Írj egy `imposztor` nevű függvényt, amely rendre az imposztorok számát és a játékosok számát kapja paraméterül (mindkét érték garantáltan szám típusú)!

* Egy játékban 1-3 imposztor lehet. Amennyiben az első paraméterben érkező szám ettől eltérő, a függvény térjen vissza a `Nem megfelelo szamu imposztor` szöveggel!
* Egy játékban 2-10 játékos lehet. Amennyiben a második paraméterben érkező szám ettől eltérő, a függvény térjen vissza a `Nem megfelelo szamu jatekos` szöveggel!
* Minden egyéb esetben a függvény visszatérési értéke a `Dani {N}% valoszinuseggel imposztor` szöveg, ahol `{N}` a fenti képlet alapján kiszámolt százalékérték, egész számra kerekítve!

**Példa:**

<pre>
<b>Input:</b> 4, 10
<b>Return:</b> 'Nem megfelelo szamu imposztor'

<b>Input:</b> 2, 0
<b>Return:</b> 'Nem megfelelo szamu jatekos'

<b>Input:</b> 2, 7
<b>Return:</b> 'Dani 29% valoszinuseggel imposztor'
</pre>


### 2. feladat: Számjegyek átlaga

Írj egy `szamjegyAtlag` nevű függvényt, amely egy egész számot vár paraméterül, és visszaadja annak a számjegyeinek az átlagát! Ha a függvényt nem szám típusú paraméterrel hívjuk meg, akkor a visszatérési érték legyen `-1`!

**Példa:**

<pre>
<b>Input:</b> 741258
<b>Return:</b> 4.5

<b>Input:</b> -420
<b>Return:</b> 2

<b>Input:</b> 'kecske'
<b>Return:</b> -1
</pre>


### 3. feladat: Karakterek többszörözése

Írj egy `tobbszoroz` nevű függvényt, amely két paramétert vár: egy szöveget és egy egész számot! A függvény visszatérési értéke egy szöveg, amit úgy kapunk, hogy az első paraméterben érkező szöveg minden karakterét vesszük annyiszor, mint amennyi a második paraméterben kapott szám.

A függvény visszatérési értéke legyen a `Hiba` szöveg, amennyiben...

* ...az első paraméter nem szöveges típusú vagy a második paraméter nem szám
* ...az első paraméterben érkező szöveg az üres string
* ...a második paraméterben érkező szám 1-nél kisebb!

**Példa:**

<pre>
<b>Input:</b> 'Alma', 4
<b>Return:</b> 'AAAAllllmmmmaaaaa'

<b>Input:</b> 'Korte', -1
<b>Return:</b> 'Hiba'
</pre>


### 4. feladat: E-mail cím generátor

A Flying Duck Travels légitársaság levelező szolgáltatásával saját e-mail fiókot hozhatunk létre. A regisztráció során meg kell adnunk a teljes nevünket és a születési évet, majd ezekből az adatokból a rendszer generál egy javasolt felhasználónevet a következőképpen:

* vesszük a teljes névben szereplő összes névnek az első 3 betűjét, csupa kisbetűvel
* ezután vesszük a születési év utolsó számjegyét
* végül az így kapott azonosítóhoz hozzáfűzzük a `@duck.com` szöveget.

Írj egy `emailtGeneral` nevű függvényt, amely két paramétert kap: a teljes nevet, valamint a születési évet, és visszaadja a felhasználó fenti szabályok alapján kigenerált e-mail címét! Hibakezeléssel nem kell foglalkoznod, feltesszük, hogy a beérkező paraméterek helyesek.

**Példa:**

<pre>
<b>Input:</b> 'Citad Ella', 2002
<b>Return:</b> 'citell2@duck.com'

<b>Input:</b> 'Richard Paul Astley', 1966
<b>Return:</b> 'ricpauast6@duck.com'
</pre>


### 5. feladat: Cenzúra

Tamás az egyik Discord szerveren az indokolatlan tagelgetéseivel sikeresen magára haragította az egyik admint. Emiatt azt a büntetést kapta, hogy most már az üzenetei cenzúrázva jelennek meg.

Írj egy `cenzura` függvényt, amely Tamás egy üzenetét várja paraméterül, és ezt átalakítja úgy, hogy az összes magánhangzót lecseréli a `*` (csillag) karakterre! A magánhangzók vizsgálata során a kis- és nagybetűket ne különböztessük meg! A paraméterben érkező szöveg garantáltan nem tartalmaz ékezetes betűket.

**Példa:**

<pre>
<b>Input:</b> 'He, miert igy jelennek meg az uzeneteim?'
<b>Return:</b> 'H*, m**rt *gy j*l*nn*k m*g *z *z*n*t**m?'

<b>Input:</b> 'Elhagyom ezt a csoportot, mert serto az elmult tobb mint 10 eves Discordos tapasztalatom es multammal szemben.'
<b>Return:</b> '*lh*gy*m *zt * cs*p*rt*t, m*rt s*rt* *z *lm*lt t*bb m*nt 10 *v*s D*sc*rd*s t*p*szt*l*t*m *s m*lt*mm*l sz*mb*n.'
</pre>