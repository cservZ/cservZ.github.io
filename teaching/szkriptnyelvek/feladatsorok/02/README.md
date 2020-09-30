<style>
	h1:first-of-type { display: none; }
	img { display: block; margin: auto; height: 250px; }
</style>

# Szkriptnyelvek - 2. gyakorló feladatsor

## Python függvények, stringek

A feladatokhoz tartozó mintamegoldás letölthető [ide kattintva](./megoldasok.py)


### 1. feladat: Abszolútérték maximum

Írj Pythonban egy `abs_max` nevű függvényt, amely két egész számot vár paraméterül, és visszatér ezek abszolútérték-maximumával! Tehát vesszük mindkét szám abszolútértékét, és ezek közül visszaadjuk a nagyobbat.

**Példa:**

<pre>
<b>Input:</b> 12, -15
<b>Return:</b> 15
</pre>


### 2. feladat: Páros számok összege

Írj egy `paros_osszeg` nevű függvényt, amely egy egész számot vár paraméterül! A függvény adja össze a páros számokat 1-től a paraméterben kapott értékig (a paramétert is beleértve, amennyiben az páros)! A visszatérési érték az így kapott összeg.

**Példa:**

<pre>
<b>Input:</b> 200
<b>Return:</b> 10100                                                                          
</pre>


### 3. feladat: Felhasználónév generátor

Egy chat alkalmazásban a felhasználóneveket a felhasználók teljes nevéből (vezetéknév + keresztnév) és születési évéből generáljuk a következőképpen:

* a keresztnevet (több keresztnév esetén a legutolsó keresztnevet) csupa kisbetűssé alakítjuk
* a csupa kisbetűssé alakított keresztnévhez hozzáfűzzük a születési évet.

Írj egy `felhasznalonevet_general` függvényt, amely két paramétert vár: a felhasználó teljes nevét (szöveg) és születési évét (egész szám)! A függvény generálja le a paraméterekből a felhasználónevet a fenti leírás alapján, és térjen is vissza vele! A születési év paramétert ne legyen kötelező megadni, alapértéke legyen 1970!

**Példa:**

<pre>
<b>Input:</b> Zsiros Balint Odon, 2001
<b>Output:</b> odon2001

<b>Input:</b> Vincs Eszter
<b>Output:</b> eszter1970
</pre>


### 4. feladat: Kuba

Kuba egy online szerveren moderátor. A szabadidejét sokszor azzal tölti, hogy a szerver bizonyos felhasználóinak a nevét átírja a következőképpen:

* a felhasználónév végére egy `.` (pont) karaktert tesz, amennyiben az eredetileg nem végződött pontra
* ellenkező esetben, pont karakterre végződő felhasználónevek esetén eltávolítja a név végéről a pontot.

Írj egy függvényt `kuba` néven, amely egy felhasználónevet (szöveg) vár paraméterül, elvégzi a fenti szabályok alapján a név átalakítását, majd visszatér az így kapott eredménnyel!

**Példa:**

<pre>
<b>Input:</b> Dinnye23
<b>Return:</b> Dinnye23.

<b>Input:</b> Goethe.
<b>Return:</b> Goethe
</pre>


### 5. feladat: Kódfejtés

Robi és Misi jó barátok, sőt történetesen ugyanannál a cégnél munkatársak. Kitalálták, hogy azért, hogy a főnökük ne érthesse meg az egymásnak írt üzeneteiket, egy titkos kódot használnak. A küldő kódolja az üzenetet az elküldés előtt, a fogadó pedig visszafejti azt.

Írj egy `dekodol` nevű függvényt, amely egy kódolt szöveget és egy egész számot (n) kap paraméterül! A függvény első paraméterében érkező kódot úgy tudjuk visszafejteni, hogy a szöveg elejétől elindulva minden n-edik karaktert olvasunk össze. A függvény visszatérési értéke a dekódolt szöveg.

**Példa:**

<pre>
<b>Input:</b> pxxixxzxxzxxaxxdxxéxxlxxbxxexxnxx?x, 3
<b>Output:</b> pizzadélben?
</pre>


### 6. feladat: Jelszó-erősség mérő

Elliot egy kiberbiztonsági cégnél dolgozik. Egyik nap a felettese egy jelszó-erősség mérő szkript írásával bízta meg.

Készíts egy `jelszo_erosseg` nevű függvényt, amely egy jelszót kap paraméterül, és eldönti, hogy az mennyire erős! A visszatérési érték a jelszó erőssége legyen.

Szabályok a jelszó erőséggének kiszámítására:

* Alapból minden jelszó 1 erős
* Legalább 5 karakter hosszú jelszó: +1 erősség
* Legalább 8 karakter hosszú jelszó: +2 erősség
* Ha a jelszóban van alulvonás, kötőjel vagy pont karakterek valamelyike: +3 erősség
* Ha a jelszó tartalmazza a `jelszo` vagy `123456` részstringet, akkor automatikusan 0 erős
* Ha a jelszó 0 karakter hosszú, akkor szintén automatikusan 0 erős.

**Példa:**

<pre>
<b>Input:</b> hazi_macska_9
<b>Return:</b> 7
</pre>

<pre>
<b>Input:</b> ez1feltorhetetlenjelszo
<b>Return:</b> 0
</pre>


### 7. feladat: Szavak száma

Írj egy `szavak_szama` függvényt, amely egy szöveget vár paraméterül, és visszaadja, hogy az mennyi szóból áll!

**Példa:**

<pre>
<b>Input:</b> Jaj, bocsánat! Be van kapcsolva? Ujujujujujuj!
<b>Return:</b> 6
</pre>


### 8. feladat: Magánhangzó eltávolítás

Dávid a szabadidejében sokat posztol Twitteren, viszont a tweet-ek hosszúságára vonatkozó 280-as karakterlimitbe gyakran nem fér bele. Egyik nap kitalálta, hogy ha a posztjaiból kiveszi a magánhangzókat, akkor a karakterlimittel már kevésbé gyűlik meg a baja.

Írj egy `maganhangzot_torol` függvényt, amely egy szöveget vár paraméterül! A függvény alakítsa csupa kisbetűssé a szöveget, távolítsa el a benne szereplő összes magánhangzót, majd térjen vissza a magánhangzók nélküli szöveggel! A szövegben ékezetes betűk garantáltan nem szerepelnek.

**Példa:**

<pre>
<b>Input:</b> Hali! Auchanos zsemlet cserelnek kedd esti Prog2 gyakra.
<b>Return:</b> hl! chns zsmlt csrlnk kdd st prg2 gykr. 
</pre>


### 9. feladat: Palindrom

A palindrom egy olyan szó vagy szókapcsolat, amely visszafelé olvasva is ugyanaz. Például a "görög" szó egy tipikus példája a palindromoknak.

Írj egy `palindrom` függvényt, amely egyetlen szót kap paraméterként! A függvény visszatérési értéke egy logikai érték (igaz vagy hamis) attól függően, hogy a paraméterül kapott szó palindrom-e vagy sem.

**Példa:**

<pre>
<b>Input:</b> gorog
<b>Return:</b> True

<b>Input:</b> magyar
<b>Return:</b> False
</pre>

#### Palindrom (deluxe edition)

Alakítsd át a fenti függvényt úgy, hogy ne csak szavakra, hanem akár mondatokra is működjön! 

* Először alakítsd csupa kisbetűssé a paraméterül kapott mondatot!
* Ezt követően távolítsd el a szövegből az összes szóközt és írásjelet!
* Végül vizsgáld meg, hogy az így kapott szöveg megegyezik-e a fordítottjával!

**Példa:**

<pre>
<b>Input:</b> Indul a gorog aludni.
<b>Return:</b> True
</pre>


### 10. feladat: SzÖvEg áTaLaKíTáS

Ki ne emlékezne az alábbi mémre és annak jellegzetes szövegformátumára?

![](./meme.png)

A feladat egy olyan függvény írása, amely egy megadott szöveget a képen látható formátumra alakít át.

Hozz létre egy `mocking_spongebob` függvényt, amely egyetlen szöveget kap paraméterül! A függvény alakítsa át a szöveget úgy, hogy a páros indexen lévő karakterek kisbetűvel, míg a páratlan indexen lévő karakterek nagybetűvel jelenjenek meg! A visszatérési érték az átalakított szöveg.

**Példa:**

<pre>
<b>Input:</b> A Szkriptnyelvek meg konnyu targynak szamit.
<b>Return:</b> a sZkRiPtNyElVeK MeG KoNnYu tArGyNaK SzAmIt.                                                                                                                       
</pre>