<style>
	h1:first-of-type { display: none; }
</style>

# Szkriptnyelvek - 3. gyakorló feladatsor

## Python adatszerkezetek: Lista, dictionary


### 1. feladat: Leghosszabb szó

Írj Pythonban egy `leghosszabb_szo` nevű függvényt, amely egy szöveget vár paraméterül! A szöveg szóközzel elválasztott szavakat tartalmaz. A függvény keresse meg a szövegben található leghosszabb szót, és térjen vissza vele! Ha a paraméterül kapott szöveg az üres string, akkor a visszatérési érték a `Hiba` szöveg legyen!

**Példa:**

<pre>
<b>Input:</b> A Bekescsabarol Szegedre tarto vonat varhatoan fel orat kesik. Az okozott kellemetlensegert szives elnezesuket kerjuk.
<b>Return:</b> kellemetlensegert           
</pre>


### 2. feladat: Könyvespolc

Tünde szeret olvasni, így a polcán is számos könyv van. Egyik nap Tünde rendet rak a laksásában, és a könyveit is rendezni szeretné.

Írj egy `konyveket_rendez` függvényt, amely egy könyvcímekből álló listát vár paraméterül! A függvény rendezze a könyvek címeit Z-től A-ig - tehát először rendezzük a listát ábécé sorrendbe (A-tól Z-ig), majd fordítsuk meg a rendezett listát! A függvény visszatérési értéke az így kapott lista.

**Példa:**

<pre>
<b>Input:</b> ["Vajak I", "Allatfarm", "Harry Potter es a bolcsek kove", "A magyar helyesirás szabalyai", "Szamitogep Architekturak"]
<b>Return:</b> ['Vajak I', 'Szamitogep Architekturak', 'Harry Potter es a bolcsek kove', 'Allatfarm', 'A magyar helyesirás szabalyai']
</pre>


### 3. feladat: Lottó

Feri bácsi minden héten játszik az ötöslottón. A játékszabály egyszerű: minél többet eltalál a játékos a véletlenszerűen kisorsolt 5 szám közül, annál nagyobb nyereményre tehet szert.

Írj egy `talalatok` nevű függvényt, amely két listát vár paraméterül: a lottón kisorsolt nyerőszámok listáját, valamint Feri bácsi megjelölt számainak listáját! A függvény számolja meg, hogy hány találata volt Feri bácsinak az adott héten, azaz hány közös elem szerepel a két listában - ez legyen a visszatérési érték! Amennyiben a paraméterben érkező két lista közül valamelyik nem pontosan 5 elemet tartalmazz, a függvény térjen vissza a `-404` értékkel!

**Példa:**

<pre>
<b>Input:</b> [12, 45, 56, 33, 20], [42, 56, 20, 11, 12]
<b>Return:</b> 3

<b>Input:</b> [5, 49, 27, 18, 2], [10, 20]
<b>Return:</b> -404
</pre>


### 4. feladat: Gyorsétterem

A kedvenc gyorséttermünkben a vásárlók belépés után sorszámot húznak, amely alapján leadhatják a rendelésüket. Az étteremben két kassza üzemel: az egyiknél a páros, a másiknál pedig a páratlan sorszámmal rendelkező vendégeket szolgálják ki.

Írj egy `kasszahoz_rendel` függvényt, amely egy sorszámokból (egész értékek) álló listát kap paraméterül! A függvény csoportosítsa a paraméterül kapott lista értékeit "páros", illetve "páratlan" kategóriákba! Az eredményt adja vissza egy dictionary-ben a példában látható formátumban!

<pre>
<b>Input:</b> [1, 2, 3, 4, 5, 6, 7]
<b>Return:</b> { 'paros': [2, 4, 6], 'paratlan': [1, 3, 5, 7] }
</pre>


### 5. feladat: Fájlok csoportosítása

Krisztián szeretne statisztikát készíteni a Letöltések mappájában található fájlokról, ezért egy Python szkriptet ír. A szkript feladata, hogy megszámolja, hogy az adott mappán belül a különböző kiterejesztésű fájlokból mennyi található.

Írj egy `statisztika` nevű függgvényt, amely egy listát kap paraméterül! Ez a lista tartalmazza a mappában szereplő fájlok neveit kiterjesztéssel együtt (a kiterjesztés mindig a **legutolsó** pont karakter után szerepel). A függvény számolja meg, hogy a különböző kiterjesztésekből mennyi fordul elő a mappában, és az eredményt adja vissza egy dictionary-ben a példában látható formában! 

A feladatot úgy oldjuk meg, hogy a kiterjesztések vizsgálata során ne különböztessük meg a kis- és nagybetűket (tehát pl. `hello.py` és `TEST.PY` egyaránt `py` kiterjesztésűek).

**Példa:**

<pre>
<b>Input:</b> ["feladat.py", "Bolygo.java", "HELLOFRIENDS.MP4", "TEST.PY", "biro.gib.maxpont.py", "russian-driving-fails.mp4"]
<b>Return:</b> {'mp4': 2, 'py': 3, 'java': 1}        
</pre>

