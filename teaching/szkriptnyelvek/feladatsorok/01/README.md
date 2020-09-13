<style>
	h1:first-of-type { display: none; }
</style>

# Szkriptnyelvek - 1. gyakorló feladatsor

## Python nyelvi alapok, vezérlési szerkezetek


### 1. feladat: Károly

A gimnazista Károly informatikaórán odafigyelés helyett mémeket nézegetett, ezért az informatikatanártól azt a régimódi büntetést kapta, hogy le kell írnia a nevét 100-szor.

Írj Python szkriptet, amely kiírja a konzolra a `Károly` szöveget 100 alkalommal!


### 2. feladat: Mozi

Egy moziban összesen 40 szék van, amelyek 1-től 40-ig vannak számozva. Azért, hogy a moziba járók be tudják tartani a javasolt másfél méteres védőtávolságot, a mozi üzemeltetői úgy döntenek, hogy csak minden harmadik ülőhelyet engednek lefoglalni a weboldalukon.

Írj Python szkriptet, amely kiírja 1-től 40-ig minden harmadik szék számát! A kiíratás az 1-es sorszámú székkel kezdődjön!

**Elvárt kimenet:**

```
1
4
7
10
13
16
19
22
25
28
31
34
37
40
```


### 3. feladat: Csokigyár

Jónás, a csokigyáros úgy döntött, hogy nyereményjátékot hirdet: minden 10. legyártott tábla csokoládéba egy aranyszelvényt helyez. A szelvények szerencsés megtalálói egy különleges látogatást tehetnek Jónás csokigyárába.

Írj Python szkriptet, amely beolvassa a konzolról egy csoki gyártási sorszámát (egész szám). Ha a szám 10-zel osztható, akkor írasd ki a `Gratulálok, nyertél!`, ellenkező esetben pedig a `Sajnos nem nyert!` szöveget a konzolra!

**Példa:**

```
Csoki gyártási száma: 40
Gratulálok, nyertél!
```


### 4. feladat: Piramis

Noémi, a Flying Duck Travels légitársaság utaskísérője munkájából kifolyólag sokat utazik a világban. Egyik kedvenc látnivalója az egyiptomi piramisok.

Írj Python programot, amely beolvas egy magasság értéket (egész szám), majd kirajzol a konzolra egy ilyen magas piramist `*` (csillag) karakterekből, a példán látható módon! Hibakezeléssel nem kell foglalkoznod.

**Példa:**

```
Add meg, hogy milyen magas legyen a piramis: 5

    *
   ***
  *****
 *******
*********
```


### 5. feladat: Átlagszámítás

Ricsi idén elhatározta, hogy minél jobb átlagot szeretne elérni az egyetemen, hogy az ösztöndíjból egy új laptopot vehessen.

Írj Python szkriptet, amely először beolvassa, hogy hány jegyet kapott Ricsi összesen a félévben (egész szám), majd ezt követően beolvas ennyi darab érdemjegyet (egész számok)! A szkript számítsa ki a jegyek átlagát! Az átlagot a jegyek összegének és darabszámának hányadosaként kapjuk meg.

**Példa:**

```
Hány jegyet kaptál?: 5
Add meg a jegyeidet:
3
5
5
4
5
-------------------------------
A jegyek átlaga: 4.4
```


### 6. feladat: Gyakorlati jegy

A szkriptnyelvek gyakorlat osztályozása a következő ponthatárok alapján történik:

|  Ponthatárok  |   Érdemjegy   |
|:-------------:|:-------------:|
| 89 - 100 pont | Jeles (5)     |
|  76 - 88 pont | Jó (4)        |
|  63 - 75 pont | Közepes (3)   |
|  50 - 62 pont | Elégséges (2) |
|  0 - 49 pont  | Elégtelen (1) |

Írj Python programot, amely beolvassa a gyakorlaton elért pontszámot (egész szám), és kiírja a pontszámnak megfelelő érdemjegyet!

**Példa:**

```
A pontszámod: 96
--------------------------
Az érdemjegyed: Jeles (5)
```


### 7. Stonks

A csokigyáros Jónás nyereményjátéka nagy sikert aratott a vásárlók körében. A statisztikák alapján a csokigyár minden nap dupla annyi csokit ad el, mint az előző napon. Jónás ki szeretné számolni, hogy egy héten várhatóan mennyi csokit fog eladni. 

Írj Python szkriptet, amely beolvassa a hétfőn eladott csokik számát (egész szám), majd kiszámítja, hogy 7 nap alatt összesen mennyi csokit fog Jónás eladni, ha minden nap kétszer annyi csokit ad el, mint az előző napon!

**Példa:**

```
A hétfőn eladott csokik száma: 500
-------------------------------------
A héten 63500 csokit adunk el.
```


### 8. Számológép

Pomeló Zoltán egy zöldségesboltot üzemeltet. Ahhoz, hogy az árakat könnyebben tudja számolni, szüksége van egy számológépre.

Írj Python nyelven egy egyszerű számológépet, amely a négy alapműveletet (összeadás, kivonás, szorzás, osztás) tudja értelmezni!

* A program beolvas két valós számot és egy műveleti jelet (szöveg).
* Ha a műveleti jel helyes (`+`, `-`, `*`, `/` szimbólumok valamelyike), végezzük el a megfelelő műveletet!
* A felsorolt négy jeltől eltérő műveleti jel esetén írassunk ki hibaüzenetet!
* Kezeljük le a nullával osztás esetét is: ha nullával szeretnénk osztani, írassunk ki hibaüzenetet!

**Példa:**

```
Első szám: 3.8
Második szám: 4.2
Művelet: *
---------------------------
Az eredmény: 15.96
```

```
Első szám: 5.0
Második szám: 0.0
Művelet: /
---------------------------
HIBA: Nullával nem osztunk!
```


### 9. Négyzetgyök

Zoltán egyik nap úgy döntött, hogy szeretné, ha a számológépe négyzetgyököt is tudna vonni.

Készíts Python szkriptet, amely beolvas egy egész számot a konzolról! Ha ez a szám nemnegatív, a program számítsa ki a négyzetgyökét! Ellenkező esetben, ha a szám negatív, írass ki hibaüzenetet! Tipp: *n* négyzetgyöke megyezik az *n<sup>1/2</sup>* értékével.

**Példa:**

```
Adj meg egy számot: 2
-----------------------------------
2 négyzetgyöke: 1.4142135623730951
```


### 10. Gondoltam egy számra

Készíts egy egyszerű számkitalálós játékot Python nyelven! A gép "gondol" egy számra 1 és 1000 között (az 1 és az 1000 is még beletartozik a lehetséges számok intervallumába), és a felhasználó ezt a számot próbálja meg minél kevesebb próbálkozással kitalálni. A felhasználónak a játék elején 20 élete (próbálkozása) van.

* Hozz létre egy változót a felhasználói életeinek számára! Ez kezdetben legyen 20!
* Hozz létre egy változót a gondolt számnak! Ez lehet fix szám vagy [véletlenszerűen generált érték](https://www.w3schools.com/python/ref_random_randint.asp).
* A játék során minden körben olvasd be a felhasználó aktuális tippjét a konzolról (egész szám)!
* Ha a felhasználó nem találja el a gondolt számot, akkor írasd ki, hogy a gondolt szám kisebb-e vagy nagyobb-e a felhasználó tippjénél! Csökkentsd a felhasználó életeinek számát 1-gyel!
* Ha a felhasználó eltalálja a gondolt számot, akkor a játéknak vége, és a felhasználó nyert. Ebben az esetben írasd ki a `Gratuálok, nyertél!` szöveget, a gondolt számot és a megmaradt életek számát!
* Ha elfogynak a felhasználó életei, akkor a játéknak vége, és a felhasználó veszít. Ebben az esetben írasd ki a `Sajnos nem nyertél!` szöveget, és a gondolt számot!

**Példa:**

```
Gondoltam egy számra 1 és 1000 között, találd ki melyikre! Életek száma: 20
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
Gratulálok, nyertél!
A gondolt szám valóban 420 volt.
Megmaradt életek: 15
```