# Szkriptnyelvek - 1. gyakorló feladatsor

## Python nyelvi alapok, vezérlési szerkezetek

> **Megoldás:** A feladatsor egy lehetséges megoldása letölthető <a href="./megoldas.zip" target="_blank">ide kattintva</a>.


### 1. feladat: Összefűzés (2 pont)

Írj Python szkriptet, amely beolvas a standard bemenetről két szöveget és rendre összefűzi azokat! Az összefűzés eredményeképpen kapott szöveget írasd ki a konzolra!

<span class="example">Példa:</span>

```html
Az egyik szoveg: kecske
A masik szoveg: sajt

A ket szoveg osszefuzve: kecskesajt
```


### 2. feladat: Áremelés (3 pont)

Dávid, a kereskedő számítógép alkatrészeket ad el. Mivel mostanság megnőtt a vásárlói igény az alkatrészekre, ezért Dávid úgy dönt, hogy felemeli az árait.

Írj Python szkriptet, amely beolvassa a standard bemenetről egy adott alkatrész jelenlegi árát (egész szám), valamint az áremelés mértékét százalékban (valós szám)! Írasd ki a konzolra, hogy mennyi lesz az alkatrész ára, miután azt az adott százalékkal megnöveljük! A végeredményt egész számmá alakítva írasd ki!

<span class="example">Példa:</span>

```html
Az alkatresz jelenlegi ara: 17500
Aremeles (szazalekban): 8.7

Az alkatresz uj ara: 19022
```


### 3. feladat: Laci (2 pont)

A gimnazista Laci informatikaórán odafigyelés helyett mémeket nézegetett, ezért az informatikatanártól azt a régimódi büntetést kapta, hogy le kell írnia a nevét 100-szor. Írj Python szkriptet, amely kiírja a konzolra a `Laci` szöveget 100 alkalommal! Az egyes kiíratások után szerepeljen sortörés is!

<div class="bordered-box border-blue">
    <span class="blue">Megjegyzés:</span> A feladat akár egyetlen <code>print()</code> utasítással is megoldható.
</div>


### 4. feladat: Négyzetgyök (3 pont)

Írj Python szkriptet, amely beolvas a standard bemenetről egy egész számot, és kiírja annak a négyzetgyökét! Amennyiben a beolvasott szám negatív, akkor a `Negativ szambol nem vonunk negyzetgyokot!` szöveget írasd ki!

<div class="bordered-box border-green">
    <span class="green">Tipp:</span>
    <img src="https://latex.codecogs.com/gif.latex?\sqrt{n}" class="inline"> értéke megegyezik <img src="https://latex.codecogs.com/gif.latex?n^{1/2}" class="inline"> értékével.
</div>

<span class="example">Példa:</span>

```html
Adj meg egy szamot: 2
A beirt szam negyzetgyoke: 1.4142135623730951
```

```html
Adj meg egy szamot: -1
Negativ szambol nem vonunk negyzetgyokot!
```


### 5. feladat: Páros számok összege (3 pont)

Írj Python szkriptet, amely beolvas a standard bemenetről két egész számot: rendre egy zárt intervallum alsó és felső végpontját! A program írja ki a konzolra az intervallumban található páros számok összegét! A beolvasott alsó és felső végpontok még részei az intervallumnak. Hibakezeléssel nem kell foglalkoznod.

<span class="example">Példa:</span>

```html
Az intervallum also vegpontja: 42
Az intervallum felso vegpontja: 100

A(z) [42; 100] intervallumba eso paros szamok osszege: 2130
```


### 6. feladat: Szóbeli vizsga (3 pont)

A kedvenc tantárgyunkból a szóbeli vizsga a következőképpen zajlik: egyszerre bemegy valamennyi hallgató egy terembe, és sorban helyet foglalnak a teremben lévő, 1-től kezdődően sorszámozott székeken. **A teremben pontosan annyi szék van, mint ahány hallgató vizsgázik.** Az oktató a vizsgán kiválaszt egy adott sorszámú széken ülő hallgatót, feltesz neki egy kérdést, majd ezután az 1-gyel nagyobb sorszámú széken ülő hallgatótól kérdez. A legutolsó széken ülő hallgató után az első széken ülő hallgatóval folytatódik a sor. Az oktató utolsó kérdése mindig egy egyszerűbb "bónusz kérdés".

Írj Python szkriptet, amely beolvas 3 egész számot: rendre a vizsgázó hallgatók számát, az oktató által feltett kérdések számát és azon hallgató székének sorszámát, aki az első kérdést kapja! A szkript írja ki a konzolra, hogy hányas széken ülő hallgató fogja kapni az utolsó, "bónusz" kérdést! Hibakezeléssel nem kell foglalkoznod, feltesszük, hogy az input minden esetben helyes.

<span class="example">Példa:</span>

```html
Vizsgazok szama: 5
Feltett kerdesek szama: 8
Az elso kerdest kapo hallgato szekszama: 2

A(z) 4. szeken ulo hallgato kapja a bonusz kerdest.
```

```html
Vizsgazok szama: 10
Feltett kerdesek szama: 22
Az elso kerdest kapo hallgato szekszama: 5

A(z) 6. szeken ulo hallgato kapja a bonusz kerdest.
```


### 7. feladat: Príma nyereményjáték (5 pont)

Jónás, a csokigyáros úgy döntött, hogy nyereményjátékot hirdet: néhány legyártott csokoládéba egy aranyszelvényt helyez, és a szelvények szerencsés megtalálói egy különleges látogatást tehetnek a csokigyárban. Minden csokihoz tartozik egy gyártási sorszám, és Jónás azokba a csokikba tesz aranyszelvényt, amelyek gyártási sorszáma prímszám.

Írj Python szkriptet, amely beolvassa a konzolról egy csoki gyártási sorszámát (egész szám)! Ha a beolvasott szám prímszám, akkor írasd ki a `Gratulalok, nyertel!`, ellenkező esetben pedig a `Sajnos nem nyert!` szöveget a konzolra!

<div class="bordered-box border-green">
    <span class="green">Emlékeztető:</span> Egy számot akkor nevezünk prímszámnak, ha csak 1-gyel és önmagával osztható.
</div>

<span class="example">Példa:</span>

```html
Add meg a csoki gyartasi sorszamat: 47
Gratulalok, nyertel!
```

```html
Add meg a csoki gyartasi sorszamat: 49
Sajnos nem nyert!
```


### 8. feladat: Gyakorlati jegy (3 pont)

A Szkriptnyelvek gyakorlat osztályozása a következő ponthatárok alapján történik:

|  Ponthatárok  |   Érdemjegy   |
|:-------------:|:-------------:|
| 89 - 100 pont | Jeles (5)     |
|  76 - 88 pont | Jó (4)        |
|  63 - 75 pont | Közepes (3)   |
|  50 - 62 pont | Elégséges (2) |
|  0 - 49 pont  | Elégtelen (1) |

Írj Python szkriptet, amely beolvassa egy hallgató gyakorlaton elért pontszámát (egész szám), és kiírja a pontszámnak megfelelő érdemjegyet! Amennyiben a pontszám 0-nál kisebb vagy 100-nál nagyobb, írasd ki az `Ervenytelen ertek!` hibaüzenetet a konzolra! (Eltekintünk a gyakorlaton szerezhető plusz pontoktól.)

<span class="example">Példa:</span>

```html
A pontszamod: 89
Az erdemjegyed: Jeles (5).
```

```html
A pontszamod: -1
Ervenytelen ertek!
```


### 9. feladat: Szorzótábla (3 pont)

Írj Python szkriptet, amely kiírja a konzolra a szorzótáblát 1-től 10-ig, ciklusok használatával!

<span class="example">Példa:</span>

```html
1 2 3 4 5 6 7 8 9 10 
2 4 6 8 10 12 14 16 18 20 
3 6 9 12 15 18 21 24 27 30 
4 8 12 16 20 24 28 32 36 40 
5 10 15 20 25 30 35 40 45 50 
6 12 18 24 30 36 42 48 54 60 
7 14 21 28 35 42 49 56 63 70 
8 16 24 32 40 48 56 64 72 80 
9 18 27 36 45 54 63 72 81 90 
10 20 30 40 50 60 70 80 90 100 
```


### 10. feladat: Piramis (5 pont)

Noémi, a Flying Duck Travels légitársaság utaskísérője munkájából kifolyólag sokat utazik a világban. Egyik kedvenc látnivalója az egyiptomi piramisok.

Írj Python szkriptet, amely beolvas egy magasság értéket (egész szám), majd kirajzol a konzolra egy ilyen magas piramist `*` (csillag) karakterekből, a példában látható formátumban! Hibakezeléssel nem kell foglalkoznod.

<span class="example">Példa:</span>

```html
Add meg, hogy milyen magas legyen a piramis: 5

    *
   ***
  *****
 *******
*********
```


### 11. feladat: Számológép (5 pont)

Pomeló Zoltán egy zöldségesboltot üzemeltet. Ahhoz, hogy az árakat könnyebben tudja számolni, szüksége van egy számológépre. Írj Pythonban egy egyszerű számológépet, amely a négy alapműveletet (összeadás, kivonás, szorzás, osztás) tudja értelmezni!

* Olvass be a standard bemenetről két valós számot és egy műveleti jelet (string)!
* Ha a műveleti jel helyes (tehát a `+`, `-`, `*`, `/` szimbólumok valamelyike), akkor végezd el a műveletet és írasd ki az eredményt a konzolra!
* A felsorolt 4 jeltől eltérő műveleti jel esetén írasd ki a `Hibas muveleti jel!` üzenetet a konzolra!
* Kezeld le a nullával való osztás esetét is: ha nullával szeretnénk osztani, akkor írasd ki a konzolra az `Ejnye, nullaval nem osztunk!` hibaüzenetet!

<div class="bordered-box border-red">
    <span class="red">Figyelem!</span> A Python a valós számokat nem pontosan ábrázolja, ezért a rajtuk végzett aritmetikai műveletek "különös" eredményeket produkálhatnak (pl. <code>0.1 + 0.2</code> eredménye <code>0.30000000000000004</code>). Ennek kiküszöböléséhez kerekítsük 2 tizedesjegyre a kiszámolt eredményt: <code>round(szám, 2)</code> !
</div>

<span class="example">Példa:</span>

```html
Elso szam: 3.8
Masodik szam: 4.2
Muvelet: *

Az eredmeny: 15.96
```

```html
Elso szam: 5.0
Masodik szam: 0.0
Muvelet: /

Ejnye, nullaval nem osztunk!
```


### 12. feladat: Ösztöndíj (4 pont)

Egy kisváros ösztöndíjat hirdet azoknak az egyetemi hallgatóknak, akiknek a tanulmányi átlaguk legalább négyes. Írj Python szkriptet, amely először beolvassa, hogy hány jegyet kapott az adott egyetemi hallgató a félévben (egész szám), majd ezt követően beolvas ennyi darab érdemjegyet (egész számok)! A szkript számítsa ki a jegyek átlagát, és döntse el, hogy a hallgató jogosult-e az ösztöndíjra vagy sem (tehát legalább 4.0 az átlaga vagy sem)!

<div class="bordered-box border-green">
    <span class="green">Emlékeztető:</span> Az átlagot a jegyek összegének és darabszámának hányadosaként kapjuk meg.
</div>

<span class="example">Példa:</span>

```html
Hallgato jegyeinek szama: 5
A jegyek:
3
5
5
4
5

A jegyek atlaga: 4.4
A hallgato osztondijra jogosult!
```

```html
Hallgato jegyeinek szama: 3
A jegyek:
3
1
5

A jegyek atlaga: 3.0
A hallgato nem jogosult osztondijra!
```


### 13. feladat: Heti profit (3 pont)

A csokigyáros Jónás nyereményjátéka nagy sikert aratott a vásárlók körében. A statisztikák alapján a csokigyár mindennap kétszer annyi csokit ad el, mint az előző napon. Jónás ki szeretné számolni, hogy egy héten várhatóan mennyi csokit fog eladni.

Írj Python szkriptet, amely beolvassa a hétfőn eladott csokik számát (egész szám), majd kiszámítja, hogy 7 nap alatt összesen mennyi csokit fog eladni Jónás, ha mindennap kétszer annyi csokit ad el, mint az előző napon! (Tehát pl. ha hétfőn 500 csokit ad el, akkor kedden 1000-et, szerdán 2000-et stb., ezeket az értékeket kell összeadogatni.)

<span class="example">Példa:</span>

```html
A hetfon eladott csokik szama: 500
A heten varhatoan 63500 csokit adunk el.
```

```html
A hetfon eladott csokik szama: 2345
A heten varhatoan 297815 csokit adunk el.
```


### 14. feladat: Időkülönbség (5 pont)

Zhang miniszter az idő megszállottja: minden napjának időbeosztását előre megtervezi a lehető legnagyobb precizitással. Sajnos Zhang nem jó fejszámolásban, így sokszor bajban van, amikor egy megbeszélésének az időtartamát kell kiszámolni a megbeszélés kezdetének és végének az időpontja alapján.

Írj Python szkriptet, amely kiszámítja egy nap két időpontja közötti időkülönbséget! Olvasd be a két időpontot (óra és perc, mindketten egész számok) a példában látható formátumban, majd írasd ki a köztük lévő időkülönbséget (óra és perc)! Előfordulhat, hogy az első időpont a későbbi (lásd: második példa)! Egyéb hibakezeléssel nem kell foglalkoznod.

A feladat megoldása során ne használj semmilyen beépített vagy külső Python csomagot!

<span class="example">Példa:</span>

```html
Elso idopont (ora): 8
Elso idopont (perc): 15
Masodik idopont (ora): 16
Masodik idopont (perc): 0

A ket idopont kozott 7 ora es 45 perc telt el.
```

```html
Elso idopont (ora): 10
Elso idopont (perc): 30
Masodik idopont (ora): 8
Masodik idopont (perc): 30

A ket idopont kozott 2 ora es 0 perc telt el.
```


### 15. feladat: Menekülés (5 pont)

Józsi a koronavírus-járvány miatti kijárási korlátozások idején egy házibuliban vesz részt. Sajnos ezt a rendőrök is megtudták, és rajtaütöttek az önfeledten bulizókon, ezért a házibuli résztvevői pánikolva próbálnak elmenekülni a rend éber őrei elől.

Írj Python szkriptet, amely beolvas két egész számot: rendre a házibuliban résztvevők számát és a rendőrök számát! A rendőrök úgy kapják el a bulizókat, hogy az első rendőr elkap 1 bulizót, majd minden további rendőr 1-gyel többet kap el, mint az előző  (tehát az első rendőr 1, a második rendőr 2, a harmadik rendőr 3 bulizót kap el és így tovább).

* Ha senkit nem kaptak el a rendőrök, akkor írasd ki a `Minden bulizo megmenekult!` szöveget a konzolra!
* Ha mindenkit elkaptak a rendőrök, akkor az `Ajaj, mindenkit elkaptak!` szöveget írasd ki!
* Minden egyéb esetben a következő szöveget jelenítsd meg a konzolon: `{elkapottak szama} bulizot elkaptak, {elmenekultek szama} pedig elmenekult.` (a kapcsos zárójelek helyére értelemszerűen a megfelelő értékek legyenek behelyettesítve)!

<span class="example">Példa:</span>

```html
A hazibuliban resztvevok szama: 8
A rendorok szama: 3

6 bulizot elkaptak, 2 pedig elmenekult.
```

```html
A hazibuliban resztvevok szama: 20
A rendorok szama: 6

Ajaj, mindenkit elkaptak!
```

```html
A hazibuliban resztvevok szama: 10
A rendorok szama: 0

Minden bulizo megmenekult!
```


### 16. feladat: Gondoltam egy számra (6 pont)

Készíts egy egyszerű számkitalálós játékot Python nyelven! A gép "gondol" egy számra 1 és 1000 között (az 1 és az 1000 is még beletartozik a lehetséges számok intervallumába), és a felhasználó ezt a számot próbálja meg minél kevesebb próbálkozással kitalálni. A felhasználónak a játék elején 20 élete (próbálkozása) van.

* Hozz létre egy változót a felhasználó életeinek számára! Ennek értéke kezdetben legyen 20!
* Hozz létre egy változót a gondolt számnak! Ez lehet fix szám vagy [véletlenszerűen generált érték](https://www.w3schools.com/python/ref_random_randint.asp).
* A játék során minden körben olvasd be a felhasználó aktuális tippjét a konzolról (egész szám)!
* Ha a felhasználó nem találja el a gondolt számot, akkor írasd ki, hogy a gondolt szám kisebb-e vagy nagyobb-e a felhasználó tippjénél! Csökkentsd a felhasználó életeinek számát 1-gyel!
* Ha a felhasználó eltalálja a gondolt számot, akkor a játéknak vége, és a felhasználó nyert. Ebben az esetben írasd ki a `Gratulalok, nyertel!` szöveget, a gondolt számot és a megmaradt életek számát!
* Ha elfogynak a felhasználó életei, akkor a játéknak vége, és a felhasználó veszít. Ebben az esetben írasd ki a `Sajnos nem nyertel!` szöveget és a gondolt számot!

<span class="example">Példa:</span>

```html
Gondoltam egy szamra 1 es 1000 kozott, talald ki, hogy melyikre! Eletek szama: 20
Tipp: 500
Kisebb
Tipp: 250
Nagyobb
Tipp: 350
Nagyobb
Tipp: 400
Nagyobb
Tipp: 450
Kisebb
Tipp: 420
--------------------------------
Gratulalok, nyertel!
A gondolt szam valoban 420 volt.
Megmaradt eletek: 15
```