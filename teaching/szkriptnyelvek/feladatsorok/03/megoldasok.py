# FELADATSOR: https://cservz.github.io/teaching/szkriptnyelvek/feladatsorok/03/

# 1. feladat (Leghosszabb szó)

def leghosszabb_szo(szoveg):
    if szoveg == "":            # hibakezelés: üres string paraméter esetén a "Hiba" szöveget adjuk vissza
        return "Hiba"

    szavak = szoveg.split(" ")  # a szöveg szavait tartalmazó lista
    leghosszabb = ""            # ebben a változóban fogjuk tárolni majd a leghosszabb szót

    for szo in szavak:          # szavak bejárása
        if len(szo) > len(leghosszabb):     # ha az aktuális szó hosszabb, mint az eddig ismert leghosszabb szó...
            leghosszabb = szo               # ...az aktuális szó lesz az új leghosszabb szó (maximumkeresés goes brr)

    return leghosszabb

# 2. feladat (Kiárusítás)

def akcios_arak(arak):
    masolat = arak[:]           # ha nem az eredeti listába szeretnénk belepiszkálni, lemásoljuk (ez opcionális, a későbbiekben nem foglalkozunk vele)

    for i in range(0, len(masolat)):    # lista indexeinek bejárása
        masolat[i] = masolat[i] * 0.7   # 30%-os kedvezmény, azaz minden terméknek csak a 70%-át kell kifizetnünk
        masolat[i] = int(masolat[i])    # egész számra konvertálás (enélkül pl. 3500 helyett 3500.0 szerepelne az outputban)

    return masolat

# 3. feladat (Könyvespolc)

def konyveket_rendez(cimek):
    cimek.sort()                # lista stringjeinek ábécé sorrendbe rendezése (A-Z)
    return cimek[::-1]          # megfordítjuk az ábécé sorrendbe rendezett listát (Z-A)

# 4. feladat (Votekick)

def belat_kirug(jatekosok):
    # probléma: a listák remove() metódusa mindig csak az adott elem LEGELSŐ előfordulását törli ki a listából (nekünk most viszont az összeset kéne)

    while "EpicBela20" in jatekosok:    # amíg szerepel "EpicBela20" játékosnév a játékosok között..
        jatekosok.remove("EpicBela20")  # ...mindig töröljünk ki egy előfordulást

    return jatekosok                    # az így kapott lista már egyszer sem fogja tartalmazni az "EpicBela20" stringet

# 5. feladat (Egyedi szavak száma)

def egyedi_szavak(szoveg):
    szavak = szoveg.split(" ")          # szöveg összes szavának lekérése egy listába
    egyedi_szavak = []                  # ebbe a listába fogjuk belerakni a különböző szavakat (mindenkit csak 1-szer)

    for szo in szavak:                  # szavak bejárása
        if szo not in egyedi_szavak:    # ha még az adott szó nem szerepel az egyedi szavak listájában...
            egyedi_szavak.append(szo)   # ...akkor szúrjuk be a listába (ellenkező esetben pedig ne csináljunk semmit)

    return len(egyedi_szavak)           # visszaadjuk az egyedi szavak számát

    # MÁSIK MEGOLDÁS: halmaz (set) használata
    # a halmaz az elemeket rendezetlen módon, ismétlődések nélkül tárolja
    # az utóbbi tulajdonságot kihasználva: belerakjuk a halmazba a szavakat tartalmazó listát, és ekkor a halmazban a szavak ismétlődés nélkül fognak szerepelni

    # return len(set(szoveg.split(" ")))

# 6. feladat (Gyenge jelszavak)

def gyenge_jelszavak(jelszavak):
    gyenge_jelszavak = []               # ebben a listában fogjuk tárolni a gyenge jelszavakat (visszatérési érték)

    for jelszo in jelszavak:            # jelszavak bejárása
        if len(jelszo) < 5:             # ha a jelszó rövidebb, mint 5 karakter, akkor gyenge...
            gyenge_jelszavak.append(jelszo)     # ...ekkor bekerül a listánkba

    return gyenge_jelszavak

    # MÁSIK MEGOLDÁS: list comprehension (listaképzés) használata
    # ez tulajdonképpen a fenti 5 sornak a tömörebb, 1 soros változata (nem gyakanyag, tho elegáns és előadáson lesz róla szó)

    # return [gyenge_jelszo for gyenge_jelszo in jelszavak if len(gyenge_jelszo) < 5]

# 7. feladat (Mátrix összeadás)

def matrix_osszead(m1, m2):             # az m1, m2 mátrixok itt lényegében 2 dimenziós listák (pl. [ [1, 2, 3], [4, 5, 6] ])
    # Side Note: persze ha nem vagyunk mazochisták, akkor a mátrixműveletekre a numpy modul beépített függvényeit használjuk :)

    if len(m1) != len(m2) or len(m1[0]) != len(m2[0]):  # ha a sorok vagy oszlopok száma nem egyezik meg...
        return []                                       # ...üres listával térünk vissza (hibakezelés)

    m_osszeg = []                       # változó az összegmátrixnak

    for i in range(len(m1)):            # m1 mátrix sorainak a bejárása
        sor = []                        # az összegmátrixhoz hozzáadandó sor, ezt a belső for-ciklusban töltjük ki      
        for j in range(len(m1[i])):     # az adott sor elemeinek (oszlopainak) bejárása
            osszeg = m1[i][j] + m2[i][j]    # az összegmátrix adott indexű elemét úgy kapjuk, hogy az m1 és m2 azonos indexű elemeit összeadjuk
            sor.append(osszeg)              # az így kapott számot (oszlopelem) hozzáfűzzük a sorhoz
        m_osszeg.append(sor)            # miután feltöltöttük az adott sort, hozzáfűzzük az összegmátrixhoz

    return m_osszeg

# 8. feladat (Gyorsétterem)

def kasszahoz_rendel(sorszamok):
    res = { 'paros': [], 'paratlan': [] }   # ezt a dictionary-t fogjuk visszaadni (örülünk, mert előre tudjuk, hogy mik a kulcsaink)

    for sorszam in sorszamok:               # sorszámok bejárása
        if sorszam % 2 == 0:                # a páros sorszámokat a 'paros' kulcshoz tartozó listába rakjuk bele
            res['paros'].append(sorszam)
        else:                               # a páratlan sorszámokat a 'paratlan' kulcshoz tartozó listába pakoljuk
            res['paratlan'].append(sorszam)
    
    return res

# 9. feladat (Fájlok csoportosítása)

def statisztika(fajlok):
    res = {}                                # ezt a dictionary-t fogjuk visszaadni (itt annyi a csavar az előzőhöz képest, hogy nem ismertek előre a kulcsok)

    for fajl in fajlok:                     # fájlok bejárása
        kit = fajl.split(".")[-1]           # az aktuális fájl kiterjesztése a legutolsó pont után szereplő szöveg
        kit = kit.lower()                   # mivel nem különböztetjük meg a kis- és nagybetűket, ezért a kiterjesztést csupa kisbetűssé alakítjuk

        if kit not in res:                  # ha az adott kiterjesztés még nem szerepel a dictionary-ben kulcsként...
            res[kit] = 1                    # ...szúrjuk be 1-es kezdőértékkel (előfordulás száma)
        else:       
            res[kit] += 1                   # ha pedig már szerepel a dictionary-ben, akkor növeljük meg a hozzá tartozó előfordulás számot 1-gyel
    
    return res

# 10. feladat (Összpontszám)

def vegeredmeny(korok):
    res = {}                                # ez lesz a visszatérési érték (a kulcsokat itt sem tudjuk előre)

    for kor in korok:                       # a 'korok' lista bejárása (ennek az elemei az egyes körök eredményeit tartalmazó dictionary-k)
        for nev, pontszam in kor.items():   # adott kört reprezentáló dictionary bejárása (kulcsok és értékek együttes bejárása)
            if nev not in res:
                res[nev] = pontszam         # ha az adott user még nem szerepel az eredmény dictionary-nkben, vegyük fel az aktuális pontszámával együtt
            else:
                res[nev] += pontszam        # ha már szerepel, akkor pedig növeljük meg a pontszám értékét az adott körben szerzett pontokkal
    
    return res

# === TESZTELÉS ===

lista = [5000, 12000, 10000, 29000, 47000]

print(leghosszabb_szo(""))
print(leghosszabb_szo("A Bekescsabarol Szegedre tarto vonat varhatoan fel orat kesik. Az okozott kellemetlensegert szives elnezesuket kerjuk."))
print(akcios_arak(lista))               # itt az eredeti lista nem módosul, hiszen a függvényen belül lemásoljuk (vö. többi feladat)
print(konyveket_rendez(['Vajak I', 'Allatfarm', 'Harry Potter es a bolcsek kove', 'A hobbit', 'Szamitogep Architekturak']))
print(belat_kirug(['EpicBela20', 'python4life', 'EpicBela20', 'EpicBela20', 'kalkEasy', 'varj_ez_nem_is_csgo', 'sajt42']))
print(egyedi_szavak("a progalap meg konnyu de a java meg csak azutan jon"))
print(gyenge_jelszavak(['cica', 'kiscica', 'nagy_macska_82', '123', 'HosszuJelszoGoBrrr', 'kekw', 'sajt2']))
print(matrix_osszead([ [7, 1, 3], [4, 0, 2] ], [ [2, 5, 5], [8, 6, 0] ]))
print(matrix_osszead([ [5, 1], [3, 2], [8, 6] ], [ [4, 8], [2, 7] ]))
print(kasszahoz_rendel([1, 2, 3, 4, 5, 6, 7]))
print(statisztika(['feladat.py', 'Bolygo.java', 'HELLOFRIENDS.MP4', 'TEST.PY', 'biro.gib.maxpont.py', 'russian-driving-fails.mp4']))
print(vegeredmeny([
  { 'shronk': 400, 'Dante': 200, 'Kruzor57': 800, 'Szepi': 500, 'Karoly': 70 },
  { 'Dante': 0, 'Szepi': 0, 'Karoly': 200, 'shronk': 0, 'Kruzor57': 100 },
  { 'Szepi': 600, 'Kruzor57': 400, 'Karoly': 500, 'shronk': 200, 'Dante': 300 },
  { 'Dante': 500, 'Szepi': 100, 'Karoly': 0, 'shronk': 600, 'Kruzor57': 200 },
  { 'Kruzor57': 100, 'Szepi': 500, 'shronk': 0, 'Dante': 300, 'Karoly': 100 }
]))