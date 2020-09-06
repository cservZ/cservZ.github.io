<style>
	h1:first-of-type { display: none; }
</style>

# Szkriptnyelvek - 1. gyakorló feladatsor

## Python nyelvi alapok, vezérlési szerkezetek


### 1. feladat: Károly

A gimnazista Károly informatikaórán odafigyelés helyett mémeket nézegetett, ezért az informatikatanártól azt a régimódi büntetést kapta, hogy le kell írnia a nevét 100-szor.

Írj Python szkriptet, amely kiírja a konzolra a `Károly` szöveget 100 alkalommal!


### 2. feladat: Mozi

Egy kisvárosi moziban összesen 40 szék van, amelyek 1-től 40-ig vannak számozva. Annak érdekében, hogy a moziba járók be tudják tartani a javasolt másfél méteres védőtávolságot, a mozi igazgatója úgy dönt, hogy csak minden harmadik ülőhelyet engedik lefoglalni a weboldalukon.

Írj Python szkriptet, amely kiírja 1-től 40-ig minden harmadik szék számát! A kiíratás az 1-es sorszámú székkel kezdődjön!

**Elvárt kimenet:**

```python
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

Jónás, a csokigyáros úgy döntött, hogy nyereményjátékot hirdet: minden 10. legyártott tábla csokoládéba egy aranyszelvényt helyez. A szelvények szerencsés megtalálói egy különleges látogatást tehetnek Jónás gyokigyárába.

Írj Python szkriptet, amely beolvassa a konzolról egy csoki gyártási sorszámát (egész szám). Ha a szám 10-zel osztható, akkor írasd ki a `Gratulálok, nyertél!`, ellenkező esetben pedig a `Sajnos nem nyert!` szöveget a konzolra!

**Példa:**

```python
Csoki gyártási száma: 40
Gratulálok, nyertél!
```


### 4. feladat: Hőmérséklet

Noémi, a Flying Duck Travels légitársaság utaskísérője munkájából kifolyólag sokat utazik az Egyesült Államokba. Az USA többek között arról híres, hogy az európai ember számára szinte érthetetlen mértékegységeket használnak. Noémi különösen összezavarónak találja a hőmérseklet mérésére használt Fahrenheit skálát.

Írj programot, amely beolvas egy valós hőmérsékleti értéket Fahrenheitben, és átváltja ezt Celsiusra! Az átváltási képlet:

```Hőmérséklet (°C) = (Hőmérséklet (°F) - 32) * 5/9```

**Példa:**

```python
Hőmérséklet (F): 77
77.0 F = 25.0 C
```


### 5. feladat: Átlagszámítás

Ricsi idén megfogadta, hogy minél jobb átlagot szeretne elérni az egyetemen, hogy az ösztöndíjból vehessen egy új laptopot (amire aztán Arch Linuxot telepít).

Írj programot, amely először beolvassa, hogy összesen hány jegyet kapott Ricsi a félévben (egész szám), majd ennyi érdemjegyet beolvas a standard inputról (az érdemjegyek szintén egész számok). A program számítsa ki ezeknek az érdemjegyeknek az átlagát. (Az átlag kiszámítása: jegyek összege / jegyek darabszáma)

**Példa:**

```python
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