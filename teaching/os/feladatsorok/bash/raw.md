# Operációs rendszerek gyakorlat

## BASH gyakorló feladatok (30 pont)

<div class="bordered-box border-blue">
    <span class="blue">Megjegyzés:</span> A feladatsor megoldásához a B1, B2 és B3 anyagrészek ismerete szükséges.
</div>

A feladatsorhoz tartozó **bemeneti fájlok** letölthetők <a href="./inputs.zip" target="_blank">ide kattintva</a>.

> **Megoldás:** A feladatsor egy lehetséges megoldása letölthető <a href="./megoldas.zip" target="_blank">ide kattintva</a>.


### 1. Egyszerű spambot (2 pont)

Írj BASH szkriptet `1.sh` néven, amely két paramétert kap: rendre egy szót és egy számot! Ha a szám 1-nél kisebb, akkor írasd ki a `HIBA!` szöveget a konzolra! Ellenkező esetben írasd ki az első paraméterben kapott szót annyiszor, mint amennyi a második paraméterben kapott szám!

<span class="example">Példa a szkript működésére:</span>

```html
> ./1.sh kecskesajt -1
HIBA!

> ./1.sh kecskesajt 4
kecskesajt
kecskesajt
kecskesajt
kecskesajt
```


### 2. Cserebere (2 pont)

Írj BASH szkriptet `2.sh` néven, amely két fájl elérési útvonalát kapja paraméterül! A program cserélje meg a paraméterben kapott két fájl tartalmát!

<span class="example">Példa a szkript működésére:</span>

```html
> ./2.sh inputs/rick_roll.txt inputs/all_star.txt

> cat inputs/rick_roll.txt
Hey now, you're an all-star, get your game on, go play
Hey now, you're a rock star, get the show on, get paid
And all that glitters is gold
Only shooting stars break the mold

> cat inputs/all_star.txt
Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you
```


### 3. Szöveg keresése fájlban (3 pont)

Írj BASH szkriptet `3.sh` néven, amely két paramétert vár: rendre egy fájl elérési útvonalát és egy stringet! A szkript válogassa ki az első paraméterben kapott fájlnak azon sorait, amelyek bármilyen formában (a kis- és nagybetűket nem megkülönböztetve, akár részstringként is) tartalmazzák a második paraméterben kapott stringet! Ezeket a sorokat a program írja bele egy `result.dat` nevű állományba!

<div class="bordered-box border-green">
    <span class="green">Tipp:</span> A <code>man</code> paranccsal vagy a <code>--help</code> kapcsolóval keresd meg, hogy a fájlban való mintaillesztést (keresést) végző parancsnak mely kapcsolójával lehet a kis- és nagybetűket <strong>nem</strong> megkülönböztetni a mintaillesztéskor!
</div>

<span class="example">Példa a szkript működésére:</span>

```html
> cat inputs/meow.txt
Ebben a sorban szerepel egy macska, illetve meg egy macska.
Ebben a sorban nem, itt csak kutyak, lovak es unikornisok vannak.
Ebben a sorban egyetlen allat sincs.
Az egyik babona, hogy a FEKETE MACSKA balszerencset hoz.
A hazimacska a macskafelek koze tartozo kisebb termetu allat.
Lehetne meg tobb peldamondatot is kitalalni, de az a baj, hogy lusta vagyok.

> ./3.sh inputs/meow.txt macska

> cat result.dat
Ebben a sorban szerepel egy macska, illetve meg egy macska.
Az egyik babona, hogy a FEKETE MACSKA balszerencset hoz.
A hazimacska a macskafelek koze tartozo kisebb termetu allat.
```


### 4. A Java még csak most jön (3 pont)

Írj BASH szkriptet `4.sh` néven, amely `FAJLNEV.KITERJESZTES` formátumú állományneveket kap paraméterül (tehát a névben egyetlen pont karakter található, ami előtt a fájl neve, utána pedig a fájl kiterjesztése szerepel)! A szkript számolja meg, hogy hány `java` kiterjesztésű fájl érkezik paraméterben! A kiterjesztés vizsgálatakor a kis- és nagybetűket <strong>ne</strong> különböztesd meg (tehát pl. `Macska.java` és `MAIN.JAVA` ugyanúgy `java` kiterjesztésű)!

<span class="example">Példa a szkript működésére:</span>

```html
> ./4.sh Macska.java Bolygo.java kecske.txt java.html MAIN.JAVA
3 darab Java kiterjesztesu fajlt kaptam parameterben.
```


### 5. Páros összeg, páratlan szorzat (5 pont)

Írj BASH szkriptet `5.sh` néven, amely egész számokat vár paraméterül! A szkript írja ki a paraméterben kapott értékek közül a páros számok összegét, valamint a páratlan számok szorzatát! Amennyiben a szkriptet parancssori paraméterek nélkül akarjuk futtatni, akkor írasd ki a `HIBA!` szöveget a konzolra! Egyéb hibakezeléssel nem kell foglalkoznod.

<span class="example">Példa a szkript működésére:</span>

```html
> ./5.sh 7 4 1 -2 8 5
A paros szamok osszege: 10
A paratlan szamok szorzata: 35

> ./5.sh
HIBA!
```


### 6. Szavak számának összege (5 pont)

Írj BASH szkriptet `6.sh` néven, amely egy könyvtár elérési útvonalát várja paraméterben! A szkript írja ki a konzolra a példában látható formátumban, hogy a paraméterben kapott könyvtár `txt` kiterjesztésű fájljaiban összesen hány szó található! Amennyiben nem egy könyvtár elérési útvonala érkezik paraméterben, akkor írass ki hibaüzenetet és a program lépjen ki 11-es hibakóddal!

<span class="example">Példa a szkript működésére:</span>

```html
> ./6.sh inputs/
A(z) all_star.txt fajlban talalhato szavak szama: 35
A(z) meow.txt fajlban talalhato szavak szama: 58
A(z) rick_roll.txt fajlban talalhato szavak szama: 34
------------------------------------------------------
A txt-fajlokban levo szavak szama osszesen: 127

> ./6.sh inputs/rick_roll.txt
HIBA! Nem egy konyvtar eleresi utvonalat adtad meg!

> echo $?       # Program kilépési kódjának kiíratása.
11
```


### 7. Legtöbb sor (4 pont)

Írj BASH szkriptet `7.sh` néven, amely egy könyvtár elérési útvonalát várja paraméterben! A szkript írja ki a konzolra a paraméterben kapott könyvtárban található, legtöbb sorból álló `php` kiterjesztésű fájlnak a nevét! Ha több fájl is ugyanannyi sorból áll, akkor közülük az ábécé sorrendben hamarabb szereplő fájlnevet válaszd!

<span class="example">Példa a szkript működésére:</span>

```html
> ./7.sh inputs/
2.php
```


### 8. Gondoltam egy számra (6 pont)

Készíts egy egyszerű számkitalálós játékot egy `8.sh` nevű fájlba! A gép "gondol" egy számra 1 és 1000 között (az 1 és az 1000 is még beletartozik a lehetséges számok intervallumába), és a felhasználó ezt a számot próbálja meg minél kevesebb próbálkozással kitalálni. A felhasználónak a játék elején 20 élete (próbálkozási lehetősége) van.

* Hozz létre egy-egy változót a felhasználó életeinek (ennek az értéke kezdetben legyen 20) és a gép által gondolt számnak!
* A játék során minden körben olvasd be a felhasználó aktuális tippjét a konzolról!
* Ha a felhasználó nem találja el a gondolt számot, akkor írasd ki, hogy a gondolt szám kisebb-e vagy nagyobb-e a felhasználó tippjénél! Ekkor csökkentsd a felhasználó életeinek számát 1-gyel!
* Ha a felhasználó eltalálja a gondolt számot, akkor a játéknak vége, és a felhasználó nyert. Ebben az esetben írasd ki a `Gratulalok, nyertel!` szöveget, a kitalált számot és a megmaradt életek számát a konzolra!
* Ha elfogynak a felhasználó életei, akkor a játéknak vége, és a felhasználó veszít. Ebben az esetben írasd ki a `Sajnos nem nyertel!` szöveget és a gondolt számot a konzolra!

<div class="bordered-box border-green">
    <span class="green">Megjegyzés:</span> A gép által gondolt szám nyugodtan lehet egy előre rögzített érték. Ha valaki szeretné, véletlenszám generálást is használhat, amiről <a href="https://stackoverflow.com/questions/1194882/how-to-generate-random-number-in-bash/1195035" target="_blank">ezen a linken</a> olvashatunk.
</div>

<span class="example">Példa a szkript működésére:</span>

```html
> ./8.sh
Gondoltam egy szamra 1 és 1000 kozott, talald ki, melyikre! Eletek szama: 20
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
Megmaradt eletek: 15.
```