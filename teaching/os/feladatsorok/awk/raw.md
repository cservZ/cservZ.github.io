# Operációs rendszerek gyakorlat

## AWK gyakorló feladatok (30 pont)

<div class="bordered-box border-blue">
    <span class="blue">Megjegyzés:</span> A feladatsor megoldásához az A1, A2 és A3 anyagrészek ismerete szükséges.
</div>

A feladatsorhoz tartozó **bemeneti fájlok** letölthetők <a href="./inputs.zip" target="_blank">ide kattintva</a>.

> **Megoldás:** A feladatsor egy lehetséges megoldása letölthető <a href="./megoldas.zip" target="_blank">ide kattintva</a>.


### 1. Mérnökinformatikusok (2 pont)

A `01_users.csv` fájl Discord felhasználók adatait tartalmazza. Az egyes sorokban szereplő, pontosvesszővel elválasztott adatok rendre: a felhasználó neve, szakja és állapota.

Írj AWK szkriptet `1.awk` néven, amely a paraméterben érkező fájlból kiíratja a **`mernokinfo` szakos** felhasználók felhasználónevét és állapotát, kötőjellel elválasztva! Ügyelj arra, hogy a `mernokinfo` szöveg nem csak a szakok között fordulhat elő a fájlban!

<span class="example">Példa a szkript működésére:</span>

```html
> ./1.awk inputs/01_users.csv
Float - elfoglalt
szte2k – online
```

### 2. Macskás videók (3 pont)

Márk szereti a macskákat, ezért a számítógépén is tárol macskás videókat. A `02_contents.txt` állomány tartalmazza az `ls -l` parancs kimenetének egy részét, mégpedig Márk mappáinak és fájljainak az adatait. Ezek közül szeretnénk kiválogatni a macskás videók neveit az alábbi szempontok szerint:

* Az `ls -l` kimenetében az 1. oszlop kötőjellel kell, hogy kezdődjön (hiszen fájlokról van szó) ÉS
* Az állomány nevének (9. oszlop) a `macska` szöveggel kell kezdődnie, ami után tetszőleges mennyiségű (akár 0 darab) betű/számjegy/alulvonás/pont karakter szerepelhet, majd ezután a `.mp4` szöveg jelzi a fájlnév végét.

Írj AWK szkriptet `2.awk` néven, amely kiíratja a paraméterben kapott fájlból a fenti szempontok alapján megtalált macskás videók nevét! Azt is írasd ki, hogy hány ilyen videót talált a szkripted!

<span class="example">Példa a szkript működésére:</span>

```html
> ./2.awk inputs/02_contents.txt
macska.mp4
macska123.mp4
macska_01.cute.mp4
macska_jancsi.mp4
-----------------------------------
4 macskas videot talaltam.
```


### 3. Összpontszám (3 pont)

A `03_scores.csv` állomány egy online játék aktuális állását tartalmazza. A fájl soraiban szereplő, pontosvesszővel elválasztott adatok rendre: a játékos neve, országa és pontszáma.

Írj AWK szkriptet `3.awk` néven, amely összeadja a paraméterben kapott fájlból azoknak a játékosoknak a pontszámát, akiknek a neve a következőképpen épül fel:

* A név elején opcionálisan szerepel az `[admin]` szöveg (tehát vagy szerepel, vagy nem)
* Ezután legalább 1 darab betű, számjegy, szóköz, alulvonás vagy pont karakter következik
* Ezután legalább 2 darab számjegy szerepel, ami után a játékosnév véget ér.

A szkript kimenete a fenti szempontoknak megfelelő névvel rendelkező játékosok összpontszáma.

<span class="example">Példa a szkript működésére:</span>

```html
> ./3.awk inputs/03_scores.csv
102250
```


### 4. Idegesség detektor (3 pont)

Írj AWK szkriptet `4.awk` néven, amely kiírja a paraméterben kapott állományból azokat a szavakat, amelyek:

* 1 karakternél hosszabbak ÉS
* Csupa nagybetűket tartalmaznak, majd a szó végén opcionálisan egyetlen írásjel (pont, felkiáltójel, kérdőjel vagy vessző) szerepelhet (tehát vagy szerepel írásjel a szó végén, vagy nem)!

<span class="example">Példa a szkript működésére:</span>

```html
> ./4.awk inputs/04_post.txt
KEDVES 
FERENC! 
VELEMENYEM 
VAN, 
HALALLAL 
BUNTETHETO. 
LATOTT 
MEG 
IS 
HALADJA 
SEMMI
```


### 5. Mocking SpongeBob (4 pont)

Ki ne emlékezne az alábbi meme template-re és annak jellegzetes szövegformátumára?

![Mocking SpongeBob](./meme.jpg)

Írj AWK szkriptet `5.awk` néven, amely egy több soros szöveges fájlt kap paraméterül, amelynek minden sora szóközzel elválasztott szavakat tartalmaz! A szkript írja ki a fájl tartalmát úgy, hogy a kis- és nagybetűk felváltva kövessék egymást (mint ahogy az a fenti képen látható)!

<span class="example">Példa a szkript működésére:</span>

```html
> ./5.awk inputs/05_rick_roll.txt
NeVeR gOnNa GiVe YoU uP
NeVeR gOnNa LeT yOu DoWn
NeVeR gOnNa RuN aRoUnD aNd DeSeRt YoU
NeVeR gOnNa MaKe YoU cRy
NeVeR gOnNa SaY gOoDbYe
NeVeR gOnNa TeLl A lIe AnD hUrT yOu
```


### 6. Átlagok (5 pont)

A `06_points.csv` állomány az Operációs rendszerek gyakorlaton megíratott 1. ZH eredményeit tartalmazza. Minden sorban egy-egy csoport hallgatói által elért pontszámok találhatók, pontosvesszővel elválasztva.

Írj AWK szkriptet `6.awk` néven, amely meghatározza a paraméterben kapott fájl alapján...

* ...az egyes csoportok pontszámának az átlagát
* ...a legjobb átlagot, ami egy csoporton belül született
* ...a fájlban szereplő összes pontszám átlagát!

<span class="example">Példa a szkript működésére:</span>

```html
> ./6.awk inputs/06_points.csv
A(z) 1. csoport atlaga: 10.12 pont
A(z) 2. csoport atlaga: 9.00 pont
A(z) 3. csoport atlaga: 15.00 pont
A(z) 4. csoport atlaga: 10.89 pont
A(z) 5. csoport atlaga: 11.67 pont
-------------------------------------------
A legjobb csoportatlag: 15.00 pont
Az osszes pontszam atlaga: 12.05 pont
```


### 7. Kiterjesztés statisztika (4 pont)

Írj AWK szkriptet `7.awk` néven, amely egy olyan fájlt kap paraméterben, ami az `ls -l` parancs egy kimenetét tartalmazza! A program írja ki a 9. oszlopban található állománynevek alapján, hogy az egyes kiterjesztésekből mennyi fordul elő! **A feladat megoldása során használj tömböt** (tehát ne csak a példainputban szereplő kiterjesztésekre működjön jól a szkripted)!

A kiterjesztést a kis- és nagybetűktől függetlenül vizsgáld (tehát pl. `file1.txt` és `FILE2.TXT` ugyanúgy `txt` kiterjesztésűek)! A program kimenetében minden kiterjesztés csupa kisbetűkkel szerepeljen!

Az egyszerűség kedvéért feltesszük a következőket:

* A bemenetben csak fájlok adatai szerepelnek, könyvtárak garantáltan nem fordulnak elő.
* A bemenetben található állományok nevei garantáltan csak 1 darab pont karaktert tartalmaznak, ami előtt a fájlnév, utána pedig a kiterjesztés szerepel (`fajlnev.kiterjesztes`).

<span class="example">Példa a szkript működésére:</span>

```html
> ./7.awk inputs/07_files.txt
1 darab csv fajl 
3 darab awk fajl 
4 darab txt fajl 
2 darab sh fajl
```


### 8. Matekos (6 pont)

A `08_results.csv` fájl egy középiskolai matematikai csapatverseny adatait tartalmazza. Minden sorban 3 adat szerepel pontosvesszővel elválasztva: rendre a versenyző neve, a versenyző csapatának neve, valamint a versenyző által elért egyéni pontszám.

Írj AWK szkriptet `8.awk` néven, amely összeszámolja, hogy a bemeneti fájlban az egyes csapatok hány pontot értek el (tehát össze kell adni az adott csapatban versenyző diákok pontszámait), majd kiírja, hogy melyik csapat érte el a legtöbb pontot! **A feladat megoldása során használj tömböt** (tehát ne csak a példainputban szereplő csapatnevekre működjön jól a szkripted)!

A feladat megoldása során figyelj a következőkre:

* A bemeneti fájl első sora egy fejlécet tartalmaz, ezt a program ne dolgozza fel!
* A csapatnevet a kis- és nagybetűktől függetlenül vizsgáld (tehát pl. `kalkulustak` és `Kalkulustak` ugyanaz a csapatnév)! A kiíratásban a csapatnév csupa nagybetűkkel szerepeljen!

<span class="example">Példa a szkript működésére:</span>

```html
> ./8.awk inputs/08_results.csv
OSZTALYELSO TAN(ULOK) csapat pontszama: 200 
NEGYOLDALAS TETELBIZONYITAS csapat pontszama: 150 
KALKULUSTAK csapat pontszama: 270 
ALGEBRUH csapat pontszama: 42 
3.14RATES OF THE CARIBBEAN csapat pontszama: 100 
PITAGORASZ JOBBKEZEI csapat pontszama: 100 
------------------------------------------------- 
A legtobb pontot elero csapat: KALKULUSTAK
```
