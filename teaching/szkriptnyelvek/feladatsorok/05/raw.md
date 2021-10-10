# Szkriptnyelvek - 5. gyakorló feladatsor

## Python - Fájlkezelés


### Lejátszási lista (40 pont)

A `playlist.csv` állomány (<a href="./input.zip" target="_blank">letöltés</a>) a telefonra letöltött zenéink adatait tartalmazza. A fájl egyes soraiban szereplő, pontosvesszővel elválasztott adatok rendre:

* az előadó neve
* a zene címe
* a zene műfaja
* a zene hossza (másodpercben).


#### 1. Zenék adatainak beolvasása (6 pont)

Írj egy `beolvas` függvényt, amely nem vár paramétert! A függvény olvassa be a `playlist.csv` fájl tartalmát! A beolvasott sorok feldarabolása után minden zene adatait egy dictionary-ben tárold el! A dictionary-k az `eloado`, `cim`, `mufaj` és `hossz` kulcsokkal rendelkezzenek, amelyek közül a `hossz` kulcshoz tartozó érték egész szám, a többi kulcshoz tartozó érték string! Az így kapott dictionary-ket helyezd egy listába, majd térj vissza a listával!

A fájlkezelés során ügyelj arra, hogy a megnyitott fájl minden esetben biztonságosan le legyen zárva! Ehhez használd a gyakorlaton tanult, kontextus-kezelős megoldást!

<span class="example">A függvény elvárt visszatérési értéke:</span>

<pre class="language-html">
[
    {'eloado': 'Rick Astley', 'cim': 'Never Gonna Give You Up', 'mufaj': 'pop', 'hossz': 213}, 
    {'eloado': 'Imagine Dragons', 'cim': 'Thunder', 'mufaj': 'pop', 'hossz': 204}, 
    {'eloado': 'Dragonforce', 'cim': 'Through the Fire and Flames', 'mufaj': 'metal', 'hossz': 445}, 
    {'eloado': 'Boney M.', 'cim': 'Rasputin', 'mufaj': 'pop', 'hossz': 284}, 
    {'eloado': 'Steppenwolf', 'cim': 'Born To Be Wild', 'mufaj': 'rock', 'hossz': 216}, 
    {'eloado': 'Powerwolf', 'cim': 'Incense and Iron', 'mufaj': 'metal', 'hossz': 240}, 
    {'eloado': 'Smash Mouth', 'cim': 'All Star', 'mufaj': 'rock', 'hossz': 237}, 
    {'eloado': 'Nirvana', 'cim': 'Smells Like Teen Spirit', 'mufaj': 'rock', 'hossz': 279}, 
    {'eloado': 'Gloryhammer', 'cim': 'The Unicorn Invasion of Dundee', 'mufaj': 'metal', 'hossz': 265}, 
    {'eloado': 'Powerwolf', 'cim': 'Venom of Venus', 'mufaj': 'metal', 'hossz': 208}, 
    {'eloado': 'Imagine Dragons', 'cim': 'Radioactive', 'mufaj': 'rock', 'hossz': 188}, 
    {'eloado': 'Dschinghis Khan', 'cim': 'Moskau', 'mufaj': 'pop', 'hossz': 275}, 
    {'eloado': 'Dschinghis Khan', 'cim': 'Dschinghis Khan', 'mufaj': 'pop', 'hossz': 185}, 
    {'eloado': 'Bonnie Tyler', 'cim': 'Total Eclipse of the Heart', 'mufaj': 'pop', 'hossz': 334}, 
    {'eloado': 'Gopnik McBlyat', 'cim': 'Snakes In Tracksuits', 'mufaj': 'hardbass', 'hossz': 261}, 
    {'eloado': 'Foster The People', 'cim': 'Pumped Up Kicks', 'mufaj': 'pop', 'hossz': 253}, 
    {'eloado': 'Linkin Park', 'cim': 'In The End', 'mufaj': 'rock', 'hossz': 219}, 
    {'eloado': 'Powerwolf', 'cim': 'Dancing With The Dead', 'mufaj': 'metal', 'hossz': 291}, 
    {'eloado': 'Green Day', 'cim': 'Boulevard of Broken Dreams', 'mufaj': 'rock', 'hossz': 288}, 
    {'eloado': 'Korpiklaani', 'cim': 'Ievan polkka', 'mufaj': 'metal', 'hossz': 194}
]
</pre>


#### 2. Lejátszási lista teljes hossza (4 pont)

Írj egy `teljes_hossz` függvényt, amely a lejátszási listát (a `beolvas` függvény visszatérési értékét) várja paraméterül! A függvény összegezze a lejátszási listában található zenék hosszát! Az összesített hosszt váltsd át percekbe és másodpercekbe, majd az átváltás eredményét írasd ki egy `02_hossz.txt` nevű szöveges fájlba!

A fájlkezelés során ügyelj arra, hogy a megnyitott fájl minden esetben biztonságosan le legyen zárva! Ehhez használd a gyakorlaton tanult, kontextus-kezelős megoldást!

<span class="example">A  <code>02_hossz.txt</code> fájl elvárt tartalma:</span>

<pre class="language-html">
A lejatszasi lista hossza: 84 perc, 39 masodperc
</pre>


#### 3. Leghosszabb rockzene (5 pont)

Írj egy `leghosszabb_rockzene` függvényt, amely a lejátszási listát várja paraméterül! A függvény írja ki egy `03_leghosszabb_rock.txt` nevű szöveges fájlba a lejátszási listában található leghosszabb, rock műfajú zene címét! Amennyiben több zene is ugyanolyan hosszú, akkor közülük a listában korábban előfordulót válaszd!

A fájlkezelés során ügyelj arra, hogy a megnyitott fájl minden esetben biztonságosan le legyen zárva! Ehhez használd a gyakorlaton tanult, kontextus-kezelős megoldást!

<span class="example">A  <code>03_leghosszabb_rock.txt</code> fájl elvárt tartalma:</span>

<pre class="language-html">
Boulevard of Broken Dreams
</pre>


#### 4. Kedvenc műfaj (5 pont)

Írj egy `leggyakoribb_mufaj` függvényt, amely a lejátszási listát várja paraméterül! A függvény számolja össze, hogy műfajonként hány zene található a lejátszási listában, majd határozza meg, hogy melyik műfaj fordul elő a leggyakrabban! Az eredményt írasd ki egy `04_kedvenc_mufaj.txt` nevű szöveges fájlba, **csupa nagybetűkkel**! Amennyiben több műfaj is ugyanannyiszor fordul elő, akkor közülük tetszőlegesen válassz egyet!

A fájlkezelés során ügyelj arra, hogy a megnyitott fájl minden esetben biztonságosan le legyen zárva! Ehhez használd a gyakorlaton tanult, kontextus-kezelős megoldást!

<span class="example">A  <code>04_kedvenc_mufaj.txt</code> fájl elvárt tartalma:</span>

<pre class="language-html">
POP
</pre>


#### 5. Zenék hossza előadónként csoportosítva (6 pont)

Írj egy `zeneket_csoportosit` függvényt, amely a lejátszási listát várja paraméterül! A függvény számítsa ki a lejátszási listában szereplő összes előadóra, hogy **összesen** hány másodpercnyi zene található az inputban az adott előadótól! Az eredményt írasd ki egy `05_osszegzes.txt` nevű szöveges fájlba, a példában látható formátumban úgy, hogy a kimeneti fájlban az előadónevek **ábécé sorrendben** szerepeljenek!

A fájlkezelés során ügyelj arra, hogy a megnyitott fájl minden esetben biztonságosan le legyen zárva! Ehhez használd a gyakorlaton tanult, kontextus-kezelős megoldást!

<div class="bordered-box border-green">
    <span class="green">Tipp:</span> Keress rá az interneten, hogy hogyan lehet Pythonban egy dictionary kulcsait egyszerűen rendezni!
</div>

<span class="example">A  <code>05_osszegzes.txt</code> fájl elvárt tartalma:</span>

<pre class="language-html">
Boney M. - osszesen 284 masodpercnyi zene
Bonnie Tyler - osszesen 334 masodpercnyi zene
Dragonforce - osszesen 445 masodpercnyi zene
Dschinghis Khan - osszesen 460 masodpercnyi zene
Foster The People - osszesen 253 masodpercnyi zene
Gloryhammer - osszesen 265 masodpercnyi zene
Gopnik McBlyat - osszesen 261 masodpercnyi zene
Green Day - osszesen 288 masodpercnyi zene
Imagine Dragons - osszesen 392 masodpercnyi zene
Korpiklaani - osszesen 194 masodpercnyi zene
Linkin Park - osszesen 219 masodpercnyi zene
Nirvana - osszesen 279 masodpercnyi zene
Powerwolf - osszesen 739 masodpercnyi zene
Rick Astley - osszesen 213 masodpercnyi zene
Smash Mouth - osszesen 237 masodpercnyi zene
Steppenwolf - osszesen 216 masodpercnyi zene
</pre>


#### 6. Adott előadó zenéinek listázása (10 pont)

Írj egy `zeneket_listaz` függvényt, amely két paramétert vár: rendre a lejátszási listát, és egy előadó nevét!

* Hozz létre egy `06_eloadonev_dalok.txt` szöveges fájlt, ahol `eloadonev` helyére a paraméterül kapott előadó neve kerüljön, csupa kisbetűkkel! A több szóból álló előadónevekben a szóköz karaktereket cseréld le alulvonás karakterekre (így pl. `Imagine Dragons` előadónév esetén a fájlnév `06_imagine_dragons_dalok.txt` lesz)! **(3 pont)**

* Válogasd ki az adott előadó zenéit a lejátszási listából! Az előadónév keresésekor ne különböztesd meg a kis- és nagybetűket (tehát pl. `Rick Astley` és `RICK ASTLEY` ugyanaz)! A kiválogatott zenéket írasd ki az imént létrehozott fájl egy-egy sorába úgy, hogy minden sor esetén pontosvesszővel elválasztva felsorolod a zene címét, műfaját és hosszát! **(5 pont)**

* Kezeld le azt az esetet, amikor a paraméterben kapott előadó nem szerepel a lejátszási listában! Ekkor a `Nincs ilyen eloado a lejatszasi listaban!` szöveg kerüljön a kimeneti fájlba! **(2 pont)**

A fájlkezelés során ügyelj arra, hogy a megnyitott fájl minden esetben biztonságosan le legyen zárva! Ehhez használd a gyakorlaton tanult, kontextus-kezelős megoldást!

<span class="example">Példa a függvény működésére:</span>

<pre class="language-html">
<b>Előadó neve:</b> 'POWERWOLF'

<b>A 06_powerwolf_dalok.txt fájl tartalma:</b>
Incense and Iron;metal;240
Venom of Venus;metal;208
Dancing With The Dead;metal;291
</pre>

<pre class="language-html">
<b>Előadó neve:</b> 'Imagine Dragons'

<b>A 06_imagine_dragons_dalok.txt fájl tartalma:</b>
Thunder;pop;204
Radioactive;rock;188
</pre>

<pre class="language-html">
<b>Előadó neve:</b> 'Taylor Swift'

<b>A 06_taylor_swift_dalok.txt fájl tartalma:</b>
Nincs ilyen eloado a lejatszasi listaban!
</pre>

#### 7. Adott előadók zenéinek törlése (4 pont)

Írj egy `zeneket_torol` függvényt, amely két paramétert vár: rendre a lejátszási listát és egy előadóneveket tartalmazó listát! A függvény írja ki egy `07_torolt.txt` szöveges fájlba azoknak a zenéknek az adatait, amelyek előadója **nem szerepel** a második paraméterben kapott listában!

A fájlkezelés során ügyelj arra, hogy a megnyitott fájl minden esetben biztonságosan le legyen zárva! Ehhez használd a gyakorlaton tanult, kontextus-kezelős megoldást!

<span class="example">Példa a függvény működésére:</span>

<pre class="language-html">
<b>Előadók nevei:</b> ['Imagine Dragons', 'Rick Astley', 'Powerwolf']

<b>A 07_torolt.txt fájl tartalma:</b>
Dragonforce;Through the Fire and Flames;metal;445
Boney M.;Rasputin;pop;284
Steppenwolf;Born To Be Wild;rock;216
Smash Mouth;All Star;rock;237
Nirvana;Smells Like Teen Spirit;rock;279
Gloryhammer;The Unicorn Invasion of Dundee;metal;265
Dschinghis Khan;Moskau;pop;275
Dschinghis Khan;Dschinghis Khan;pop;185
Bonnie Tyler;Total Eclipse of the Heart;pop;334
Gopnik McBlyat;Snakes In Tracksuits;hardbass;261
Foster The People;Pumped Up Kicks;pop;253
Linkin Park;In The End;rock;219
Green Day;Boulevard of Broken Dreams;rock;288
Korpiklaani;Ievan polkka;metal;194
</pre>