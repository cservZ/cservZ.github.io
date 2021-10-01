# Szkriptnyelvek - 1. gyakorlat

## A Python nyelvi alapjai

Ezen a gyakorlaton a Python parancssori értelmezőn keresztül ismerkedtünk meg a Python nyelv alapvető elemeivel.


### 1. A Python parancssori értelmező elindítása

Nyissunk egy parancssort, és adjuk ki a `python --version` parancsot! A parancs kimenete alapvetően kétféle lehet:

* `Python 3.X.Y`, tehát az alapértelmezett Python értelmezőnk Python 3-as
* `Python 2.X.Y`, tehát az alapértelmezett Python értelmezőnk Python 2-es.

Indítsuk el a Python 3 parancssori értelmezőt...

* ...a `python` paranccsal, ha az alapértelmezett Python verziónk Python 3-as
* ...a `python3` paranccsal, ha az alapértelmezett Python verziónk Python 2-es!


### 2. Aritmetikai operátorok

Pythonban is használhatók a szokásos aritmetikai operátorok: `+` (összeadás), `-` (kivonás), `*` (szorzás), `/` (osztás).

Itt is van az operátorok között egy <span class="red">precedencia</span> (fontossági sorrend). Például a szorzás és osztás "erősebb", mint az összeadás és kivonás. A műveletek végrehajtási sorrendjét szokásos módon, zárójelekkel szabályozhatjuk.

```python
>>> 5 + 2 * 3           # először szorzunk, aztán összeadunk
11
>>> (5 + 2) * 3         # először összeadunk, aztán szorzunk
21
```

Pythonban a `/` operátor minden esetben lebegőpontos osztást végez. Egészosztásra a `//` operátort használhatjuk.

Ne keverjük az itt látottakat a C-ben tanultakkal! Amíg C-ben a `//` egysoros kommentek megadására szolgált, addig Pythonban ez egy operátor az egészosztáshoz. Pythonban a `#` karakter után adhatunk meg kommenteket.

```python
>>> 5 / 2                # lebegőpontos ("valós") osztás
2.5
>>> 5 // 2               # egészosztás
2
```

Maradékos osztásra a `%` operátort használjuk itt is. A `**` operátorral hatványozást is végezhetünk.

```python
>>> 5 % 2               # maradékos osztás
1
>>> 2 ** 10             # hatványozás
1024
```


### 3. Kiíratás

Pythonban a `print()` beépített függvényt használjuk a konzolra való kiíratáshoz. A függvény paramétereként megadjuk a kiírandó kifejezést (vagy kifejezéseket).

```python
>>> print("Hello World!")
Hello World!
>>> print("Hello World!", "Az élet értelme", 42)    # több paraméter is megadható
Hello World! Az élet értelme 42
```

> **Megjegyzés:** Pythonban nem teszünk pontosvesszőt az utasítások végére.


### 4. Változók

Pythonban a változólétrehozás és -értékadás szintaxisa roppant egyszerű.

```python
>>> val = 42                # változó létrehozása és értékadás
>>> print(val)              # változó értékének kiíratása
42
```

#### 4.1. Változókkal kapcsolatos operátorok


Pythonban is használhatjuk a szokásos `+=`, `-=`, `*=` és `/=` operátorokat a változó értékének növelésére, csökkentésére, beszorzására és osztására.

```python
>>> val = 42
>>> val += 10           # változó értékének megnövelése 10-zel
>>> print(val)
52
```

Fontos megjegyezni viszont, hogy <span class="red">a `++` és `--` operátorok Pythonban nem működnek</span>!

```python
>>> val = 42
>>> val++                       # ez nem működik (természetesen a -- sem)! :(
  File "<stdin>", line 1
    val++
        ^
SyntaxError: invalid syntax

>>> val += 1                    # így már oké :)
>>> print(val)
43
```


#### 4.2. Dinamikusan típusosság

Vegyük észre, hogy a `val = 42` létrehozásánál nem adtuk meg expliciten a `val` változó típusát (C-ben ez a deklaráció így nézne ki: `int val = 42;`)! Ennek az az oka, hogy a Python értelmező automatikusan, dinamikusan "ki tudja találni" a változók típusát a bennük tárolt érték alapján. Ezt úgy is mondjuk, hogy <span class="red">a Python egy dinamikusan típusos nyelv</span>.

A dinamikusan típusosság egyik érdekes következménye, hogy ugyanabban a változóban akár eltérő típusú adatokat is tárolhatunk. A `type()` függvénnyel lekérdezhetjük egy változó típusát.

```python
>>> val = 42
>>> print(type(val))
<class 'int'>

>>> val = "alma"
>>> print(type(val))
<class 'str'>
```


### 5. Alapvető adattípusok

* `bool`: logikai adattípus - `True` vagy `False` értéke lehet (ezek a kulcsszavak mindketten érzékenyek a kis- és nagybetűkre!)

* `int`: egész szám

* `float`: lebegőpontos ("valós") szám

```python
>>> logikai = True
>>> egesz = -123
>>> lebegopontos = 3.14
```

* `str`: szöveges adattípus, string
    * megadás: idézőjelek vagy aposztrófok között
    * a szokásos escape-szekvenciák itt is működnek
    * összefűzés: `+` operátor
    * többszörözés: `*` operátor

```python
>>> print('"Never gonna give you up." - Rick Astley')
"Never gonna give you up." - Rick Astley
>>> print("\"Never gonna give you up.\" - Rick Astley")   # a belső idézőjelek escape-elése is jó megoldás
"Never gonna give you up." - Rick Astley
>>> print("Valami szöveg, sortöréssel a végén\n")   # a szokásos escape-szekvenciák (pl. sortörés) működnek
Valami szöveg, sortöréssel a végén

>>> print("kecske" + "sajt")                        # stringek összefűzése
kecskesajt
>>> print("HA" * 3)                                 # string többszörözése
HAHAHA
>>> print("NA" * 10 + " BATMAN")
NANANANANANANANANANA BATMAN
```

> **Megjegyzés:** A bonyolultabb adattípusokkal egy későbbi gyakorlaton fogunk foglalkozni.


### 6. Beolvasás, típuskonverziók

Pythonban az `input()` függvénnyel olvashatunk be adatot a konzolról.

* A függvény paramétereként megadható egy szöveg, ami az input beolvasásakor fog megjelenni.
* A függvény visszatér a beolvasott értékkel, így lementhetjük azt egy változóba.
* <span class="red">Az `input()` függvény minden esetben egy stringet olvas be. Szükség esetén más típusra kell konvertálnunk a beolvasott értéket!</span>

```python
>>> nev = input("Hogy hívnak? ")
Hogy hívnak? Bence
>>> print("Szia, " + nev + "!")
Szia, Bence!
```

A típuskonverziókhoz általában a következő függvényeket használjuk:

* `int()`: egész számra konvertálás
* `float()`: valós számra konvertálás
* `str()`: stringre konvertálás.

Figyeljünk arra, hogy <span class="red">Pythonban stringet csak stringgel lehet összefűzni</span>! Ha az összefűzés operátor valamelyik operandusa nem string típusú, akkor először szöveggé kell azt alakítanunk az `str()` függvénnyel!

```python
>>> szuletesi_ev = int(input("Melyik évben születtél? "))   # konvertálás egész számra
Melyik évben születtél? 1999
>>> eletkor = 2021 - szuletesi_ev
>>> print(str(eletkor) + " éves vagy.") # konvertálás stringre (összefűzés miatt)
22 éves vagy.
```