<style>
	h1:first-of-type { display: none; }
</style> 

# Szkriptnyelvek - 3. gyakorló feladatsor

## Python adatszerkezetek: lista, dictionary


### 1. feladat: Leghosszabb szó

Írj Pythonban egy `leghosszabb_szo` nevű függvényt, amely egy szöveget vár paraméterül! A szöveg szóközzel elválasztott szavakat tartalmaz. A függvény keresse meg a szövegben található leghosszabb szót, és térjen vissza vele! Ha a paraméterül kapott szöveg az üres string, akkor a visszatérési érték szintén üres string legyen!

**Példa:**

<pre>
<b>Input:</b> A Bekescsabarol Szegedre tarto vonat varhatoan fel orat kesik. Az okozott kellemetlensegert szives elnezesuket kerjuk.
<b>Return:</b> kellemetlensegert           
</pre>


### 2. feladat: Gyorsétterem

A kedvenc gyorséttermünkben a vásárlók belépés után sorszámot húznak, amely alapján leadhatják a rendelésüket. Az étteremben két kassza üzemel: az egyiknél a páros, a másiknál pedig a páratlan sorszámmal rendelkező vendégeket szolgálják ki.

Írj egy `kasszahoz_rendel` függvényt, amely egy sorszámokból (egész értékek) álló listát kap paraméterül! A függvény először rendezze a lista elemeit növekvő sorrendbe, majd csoportosítsa őket "páros" és "páratlan" kategóriákba! Az eredményt a függvény adja vissza egy dictionary-ben a példában látható formátumban!

**Példa:**

<pre>
<b>Input:</b> [7, 4, 1, 0, 2, 5, 21]
<b>Return:</b> { 'paros': [0, 2, 4], 'paratlan': [1, 5, 7, 21] }
</pre>


### 3. feladat: Fájlcsoportosítás

Krisztián szeretne statisztikát készíteni a Letöltések mappájában található fájlokról, ezért egy Python szkriptet ír. A szkript feladata, hogy megszámolja, hogy az adott mappán belül a különböző kiterejesztésű fájlokból mennyi található.

Írj egy `statisztika` nevű függgvényt, amely egy listát kap paraméterül! Ez a lista tartalmazza a mappában szereplő fájlok neveit kiterjesztéssel együtt (a kiterjesztés mindig a **legutolsó** pont karakter után szerepel). A függvény számolja meg, hogy a különböző kiterjesztésekből mennyi fordul elő a mappában, és az eredményt adja vissza egy dictionary-ben a példában látható formában! 

A feladatot úgy oldjuk meg, hogy a kiterjesztések vizsgálata során ne különböztessük meg a kis- és nagybetűket (tehát pl. `hello.py` és `TEST.PY` egyaránt `py` kiterjesztésűek).

**Példa:**

<pre>
<b>Input:</b> ["feladat.py", "Bolygo.java", "HELLOFRIENDS.MP4", "TEST.PY", "biro.gib.maxpont.py", "russian-driving-fails.mp4"]
<b>Return:</b> {'mp4': 2, 'py': 3, 'java': 1}        
</pre>