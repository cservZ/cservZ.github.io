# Operációs rendszerek gyakorlat

## Pipeline gyakorló feladatok (30 pont)

<div class="bordered-box border-blue">
    <span class="blue">Megjegyzés:</span> A feladatsor megoldásához az L1, L2 és L3 anyagrészek ismerete szükséges.
</div>

A kedvenc zenéink adatait egy `playlist.csv` nevű állományban tároljuk ([letöltés](./inputs.zip)). A fájl egyes soraiban szereplő, pontosvesszővel elválasztott adatok sorban:

* a zene előadójának neve
* a zene címe
* a zene műfaja
* a zene hossza másodpercekben.

A bemeneti fájl első sora egy fejlécsor, amit nem kell feldolgozni (csupán tájékoztató jelleggel bír). Oldd meg az alábbi feladatokat **csővezeték (pipeline)** használatával!

> **Megoldás:** A feladatsor egy lehetséges megoldása elérhető <a href="./megoldas.html" target="_blank">ide kattintva</a>.


### 1. A fejlécsor eltávolítása (2 pont)

A bemeneti fájl első sorában szereplő fejlécet nem szeretnénk feldolgozni. Egy alkalmas Linux parancs segítségével hozz létre egy `playlist2.csv` nevű állományt, amelybe írd bele a `playlist.csv` fájl tartalmát **az első sor nélkül**!

<span class="example">A <code>playlist2.csv</code> állomány elvárt tartalma:</span>

```
Rick Astley;Never Gonna Give You Up;pop;213
Imagine Dragons;Thunder;pop;204
Dragonforce;Through the Fire and Flames;metal;445
Boney M.;Rasputin;pop;284
Steppenwolf;Born To Be Wild;rock;216
Powerwolf;Incense and Iron;metal;240
Smash Mouth;All Star;rock;237
Nirvana;Smells Like Teen Spirit;rock;279
Gloryhammer;The Unicorn Invasion of Dundee;metal;265
Powerwolf;We Are The Wild;metal;221
Imagine Dragons;Radioactive;rock;188
Dschinghis Khan;Moskau;pop;275
Dschinghis Khan;Dschinghis Khan;pop;185
Bonnie Tyler;Total Eclipse of the Heart;pop;334
Gopnik McBlyat;Snakes In Tracksuits;hardbass;261
John Farnham;Thunder In Your Heart;rock;234
Ismeretlen;Perfectly Cut Screamz;metal;20
```

### 2. A zenék száma (1 pont)

Írj csővezetéket, ami kiírja a konzolra, hogy hány zene adatait tartalmazza a bemeneti fájl! Tehát azt kell kiíratni, hogy az előző feladatban létrehozott `playlist2.csv` hány sorból áll!

<span class="example">Az elvárt kimenet:</span> `17`


### 3. Az előadók száma (4 pont)

Írj csővezetéket, ami kiírja a konzolra, hogy hány **különböző** előadó neve szerepel a bemeneti fájlban!

<span class="example">Az elvárt kimenet:</span> `14`


### 4. A tizedik zene (3 pont)

Írj csővezetéket, ami kiírja a konzolra a `playlist2.csv` fájl 10. sorában található zenének a címét!

<span class="example">Az elvárt kimenet:</span> `We Are The Wild`


### 5. A leghosszabb zene (3 pont)

Írj csővezetéket, ami kiírja a konzolra a bemeneti fájlban található leghosszabb zene hosszát (másodpercekben)!

<span class="example">Az elvárt kimenet:</span> `445`


### 6. Pop zenék száma (2 pont)

Írj csővezetéket, ami kiírja a konzolra, hogy hány olyan zene van a bemeneti fájlban, amelynek műfaja `pop`! Feltehetjük, hogy a bemeneti fájl egyes soraiban a `pop` szöveg csak a műfajok oszlopában fordul elő.

<span class="example">Az elvárt kimenet:</span> `6`


### 7. A leghosszabb rockzene (3 pont)

Írj csővezetéket, ami kiírja a konzolra, hogy hány másodperc hosszú a leghosszabb olyan zene, amelynek műfaja `rock`! Feltehetjük, hogy a bemeneti fájl egyes soraiban a `rock` szöveg csak a műfajok oszlopában fordul elő.

<span class="example">Az elvárt kimenet:</span> `279`


### 8. Thunder, Heart (7 pont)

Írj csővezetéket, ami kiírja egy `out.txt` nevű fájlba azoknak a zenéknek a címét **csupa nagybetűkkel**, **ábécé sorrendben**, amelyek tartalmazzák a `Thunder` vagy `Heart` szövegek legalább egyikét! Feltehetjük, hogy a bemeneti fájl egyes soraiban ez a két szöveg csak a zenék címében fordul elő. **(5 pont)**

<span class="example">Az <code>out.txt</code> fájl elvárt tartalma:</span>

```
THUNDER
THUNDER IN YOUR HEART
TOTAL ECLIPSE OF THE HEART
```

Az `out.txt` fájlra vonatkozó jogosultságokat állítsd be a következők szerint:

* A tulajdonosnak csak olvasási és írási joga legyen a fájlra!
* A csoportnak szintén csak olvasási és írási joga legyen a fájlra!
* A "többiek" ne rendelkezzenek semmilyen jogosultsággal a fájlra vonatkozóan! **(2 pont)**


### 9. Napóleon-kódolás (3 pont)

Írj csővezetéket, ami a `playlist2.csv` fájlban található előadóneveket és zenecímeket Napóleon-kódolással titkosítja, és a titkosított adatokat beleírja egy `napoleon_encoded.csv` nevű állományba!

A Napóleon-kódolás minden egyes kis- és nagybetűt megváltoztat úgy, hogy helyettesíti az ábécében utána következő betűvel. Tehát az `a` betűből `b` betű lesz, a `g`-ből `h`, a `z` után pedig ismét `a` betű következik. A kódolás csak a betűket módosítja, az egyéb karaktereket (pl. szóköz, pontosvessző, számjegyek, speciális írásjelek) nem. Feltehetjük, hogy az inputban szereplő betűkben nem szerepelnek ékezetek.

<span class="example">A <code>napoleon_encoded.csv</code> fájl elvárt tartalma:</span>

```
Sjdl Btumfz;Ofwfs Hpoob Hjwf Zpv Vq
Jnbhjof Esbhpot;Uivoefs
Esbhpogpsdf;Uispvhi uif Gjsf boe Gmbnft
Cpofz N.;Sbtqvujo
Tufqqfoxpmg;Cpso Up Cf Xjme
Qpxfsxpmg;Jodfotf boe Jspo
Tnbti Npvui;Bmm Tubs
Ojswbob;Tnfmmt Mjlf Uffo Tqjsju
Hmpszibnnfs;Uif Vojdpso Jowbtjpo pg Evoeff
Qpxfsxpmg;Xf Bsf Uif Xjme
Jnbhjof Esbhpot;Sbejpbdujwf
Etdijohijt Libo;Nptlbv
Etdijohijt Libo;Etdijohijt Libo
Cpoojf Uzmfs;Upubm Fdmjqtf pg uif Ifbsu
Hpqojl NdCmzbu;Toblft Jo Usbdltvjut
Kpio Gbsoibn;Uivoefs Jo Zpvs Ifbsu
Jtnfsfumfo;Qfsgfdumz Dvu Tdsfbna
```


### 10. Napóleon-kódolás visszafejtése (2 pont)

Írj csővezetéket, ami az előző feladatban létrehozott `napoleon_encoded.csv` fájl adatait visszafejti (dekódolja a Napóleon-kódolást), és a visszafejtett adatokat beleírja a `napoleon_decoded.csv` nevű állományba!

<span class="example">A <code>napoleon_decoded.csv</code> fájl elvárt tartalma:</span>

```
Rick Astley;Never Gonna Give You Up
Imagine Dragons;Thunder
Dragonforce;Through the Fire and Flames
Boney M.;Rasputin
Steppenwolf;Born To Be Wild
Powerwolf;Incense and Iron
Smash Mouth;All Star
Nirvana;Smells Like Teen Spirit
Gloryhammer;The Unicorn Invasion of Dundee
Powerwolf;We Are The Wild
Imagine Dragons;Radioactive
Dschinghis Khan;Moskau
Dschinghis Khan;Dschinghis Khan
Bonnie Tyler;Total Eclipse of the Heart
Gopnik McBlyat;Snakes In Tracksuits
John Farnham;Thunder In Your Heart
Ismeretlen;Perfectly Cut Screamz
```
