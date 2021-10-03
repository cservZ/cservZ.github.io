# =====================================================================================================================
# Szkriptnyelvek - 3. gyakorló feladatsor (Egy lehetséges megoldás)
# A feladatsor linkje: https://cservz.github.io/teaching/szkriptnyelvek/feladatsorok/03/
# =====================================================================================================================

# === 1. feladat: Könyvespolc ===

def konyveket_rendez(konyvcimek):
    konyvcimek.sort()                       # Rendezzük a listában szereplő könyvcímeket (A-tól Z-ig)
    return konyvcimek[::-1]                 # Visszatérünk a rendezett lista megfordítottjával


# === 2. feladat: Kiárusítás ===

def akcios_ar(arak, szazalek):
    for i in range(len(arak)):              # Az árak módosításához kell a listaelemek indexe, így ezeken megyünk végig
        uj_ar = arak[i] * (100 - szazalek) / 100   # Az eredeti árnak a (100 - `learazas_szazalek`)%-át kell kifizetnünk
        arak[i] = int(uj_ar)                # Átírjuk az eredeti árat a leárazás utáni, egész számmá alakított árra

    return arak


# === 3. feladat: Béla ===

def belat_kirug(jatekosok):
    # Emlékezzünk, hogy a `remove()` metódus mindig csak a LEGELSŐ előfordulását törli az adott listaelemnek! Ha az
    # összes előfordulást szeretnénk törölni a listából, akkor a gyakorlaton tanult trükköt használhatjuk

    while "EpicBela20" in jatekosok:        # Amíg előfordul az "EpicBela20" elem a játékosnevek között...
        jatekosok.remove("EpicBela20")      # ...addig mindig kitörlünk egy előfordulást

    return jatekosok


# === 4. feladat: Leghosszabb szó ===

def leghosszabb_szo(szoveg):
    if szoveg == "":                        # Ha a paraméter az üres string, akkor a "HIBA!" szöveggel térünk vissza
        return "HIBA!"

    szavak = szoveg.split()                 # A szöveg szavait eltároljuk egy listában
    leghosszabb = ""                        # Ebben a változóban fogjuk eltárolni a szöveg leghosszabb szavát

    for szo in szavak:                      # Végigmegyünk a szöveg szavain
        if len(szo) > len(leghosszabb):     # Ha egy szó hosszabb, mint az eddig ismert leghosszabb szó, ...
            leghosszabb = szo               # ...akkor frissítjük a leghosszabb szót tároló változó értékét

    return leghosszabb


# === 5. feladat: Gyenge jelszavak ===

def gyenge_jelszavak(jelszavak):
    eredmeny = []                           # Ebben a listában fogjuk összegyűjteni a gyengének számító jelszavakat

    for jelszo in jelszavak:                # Minden jelszót megvizsgálunk, hogy gyengének számít-e
        van_szamjegy = False

        for karakter in jelszo:
            if karakter.isdigit():
                van_szamjegy = True

        # Egy jelszó gyenge, ha 5 karakternél rövidebb VAGY nem tartalmaz számjegy karaktert VAGY bármilyen formában
        # tartalmazza a `jelszo`, illetve `123` szövegeket. A gyenge jelszavakat beszúrjuk az eredmény listánkba

        if len(jelszo) < 5 or not van_szamjegy or "jelszo" in jelszo.lower() or "123" in jelszo.lower():
            eredmeny.append(jelszo)

    return eredmeny


# === 6. feladat: Egyedi szavak száma ===

def egyedi_szavak_szama(szoveg):
    szavak = szoveg.split()                 # A szöveg szavait eltároljuk egy listában
    egyedi_szavak = []                      # Ebben a listában fogjuk összegyűjteni az ismétlődés nélküli szavakat

    for szo in szavak:                      # A szavakban a kis- és nagybetűkkel és az írásjelekkel nem foglalkozunk
        szo = szo.lower().replace(".", "").replace("!", "").replace("?", "").replace(",", "")

        if szo not in egyedi_szavak:        # Ha még nem láttuk korábban ezt a szót, belerakjuk az eredmény listába
            egyedi_szavak.append(szo)

    return len(egyedi_szavak)               # Visszaadjuk az egyedi szavak számát

    # MEGJEGYZÉS: A feladat list comprehension és egy halmaz használatával egyszerűbben is megoldható!
    # szavak = [sz.lower().replace(".", "").replace("!", "").replace("?", "").replace(",", "") for sz in szoveg.split()]
    # return len(set(szavak))


# === 7. feladat: Felváltva ===

def felvaltva(szoveg):
    szavak = szoveg.split()                 # A szöveg szavait eltároljuk egy listában

    if len(szavak) < 2:                     # 2-nél kevesebb szó esetén a "HIBA!" szöveggel térünk vissza
        return "HIBA!"

    for i in range(len(szavak)):            # Ebben a feladatban célszerű nem a szavakon, hanem azok indexein végigmenni
        if i % 2 == 0:                      # A páros indexeken lévő szavakat csupa nagybetűssé alakítjuk
            szavak[i] = szavak[i].upper()
        else:                               # A páratlan indexeken lévő szavakat csupa kisbetűssé alakítjuk
            szavak[i] = szavak[i].lower()

    return " ".join(szavak)                 # Az átalakított lista elemeit szóközök mentén egy szöveggé egyesítjük


# === 8. feladat: Sorozatok ===

def sorozat(szamok):
    if len(szamok) < 3:                     # Ha a kapott lista túl rövid, akkor a "HIBA!" szöveggel térünk vissza
        return "HIBA!"

    szamtani = True                         # Kezdetben a sorozatról feltesszük, hogy számtani ÉS mértani sorozat is
    mertani = True
    d = szamok[1] - szamok[0]               # Eltároljuk az első két elem különbségét (differencia)
    q = szamok[1] / szamok[0]               # Eltároljuk az első két elem hányadosát (kvóciens)

    for i in range(1, len(szamok) - 1):     # Bejárjuk a második és az utolsó előtti listaelem közötti értékeket
        if szamok[i + 1] - szamok[i] != d:  # Ha két szomszédos elem különbsége nem egyezik meg a differenciával...
            szamtani = False                # ...akkor a sorozat biztosan nem számtani sorozat

        if szamok[i + 1] / szamok[i] != q:  # Ha két szomszédos elem hányadosa nem egyezik meg a kvócienssel...
            mertani = False                 # ...akkor a sorozat biztosan nem mértani sorozat

    # Visszaadjuk, hogy a paraméterben kapott sorozat számtani vagy mértani sorozat-e

    if szamtani and mertani:
        return "A sorozat szamtani es mertani sorozat is egyben."
    if szamtani:
        return "A sorozat szamtani sorozat."
    if mertani:
        return "A sorozat mertani sorozat."

    return "A sorozat se nem szamtani, se nem mertani sorozat."


# === 9. feladat: Gyorsétterem ===

def kasszahoz_rendel(sorszamok):
    sorszamok_lista = sorszamok.split(";")  # A pontosvesszővel elválasztott sorszámokat eltároljuk egy listában
    eredmeny = [[], []]                     # Egy 2-dimenziós lista az eredménynek, ami 2 kisebb részlistából áll

    for sorszam in sorszamok_lista:         # Bejárjuk a sorszámokat (amik a `split()`-elés után kapott stringek)
        sorszam = int(sorszam)              # Minden (string) sorszámot egész számmá konvertálunk

        if sorszam % 2 == 0:                # A páros sorszámokat az eredmény lista 1. részlistájába tesszük
            eredmeny[0].append(sorszam)
        else:                               # A páratlan sorszámokat az eredmény lista 2. részlistájába tesszük
            eredmeny[1].append(sorszam)

    eredmeny[0].sort()                      # Az eredmény lista mindkét részlistáját rendezzük
    eredmeny[1].sort()

    return eredmeny


# === 10. feladat: Mátrixok összeadása ===

def matrix_osszead(m1, m2):
    # Ha a két mátrix sorainak száma vagy oszlopainak száma eltér, akkor egy üres listával térünk vissza

    if len(m1) != len(m2) or len(m1[0]) != len(m2[0]):
        return []

    # Ha a mátrixok dimenziószáma megegyezik, akkor visszatérünk a két mátrix összegével

    m_osszeg = []                           # A két mátrix összege szintén egy mátrix (2-dimenziós lista) lesz

    for i in range(len(m1)):                # Bejárjuk az `m1` mátrix sorait
        m_sor = []                          # Az összegmátrixhoz hozzáfűzendő sor (ezt a belső for-ciklusban töltjük ki)

        for j in range(len(m1[i])):         # Az aktuális sor elemeinek bejárása
            osszeg = m1[i][j] + m2[i][j]    # Az `m1` és `m2` mátrixok azonos indexeken lévő elemeit összeadjuk
            m_sor.append(osszeg)            # Az így kapott számot beszúrjuk az összegmátrix aktuális sorába

        m_osszeg.append(m_sor)              # Miután kitöltöttünk egy sort, hozzáfűzzük azt az összegmátrixhoz

    return m_osszeg


# === 11. feladat: Szövegelemzés ===

def szoveget_elemez(szoveg):
    eredmeny = {"betu": 0, "szamjegy": 0, "egyeb": 0}   # Kitöltjük kezdőértékekkel az eredmény dictionary-t

    for karakter in szoveg:                 # Bejárjuk a paraméterben kapott szöveg karaktereit
        if karakter.isalpha():              # Minden betű esetén növeljük a "betu" kulcshoz tartozó értéket
            eredmeny["betu"] += 1
        elif karakter.isdigit():            # Minden számjegy esetén növeljük a "szamjegy" kulcshoz tartozó értéket
            eredmeny["szamjegy"] += 1
        else:                               # Egyéb karakterek esetén az "egyeb" kulcshoz tartozó értéket növeljük
            eredmeny["egyeb"] += 1

    return eredmeny


# === 12. feladat: Kurzuskódok ===

def kurzuskodot_csoportosit(kurzuskodok):
    if kurzuskodok == "":                   # Ha a paraméter az üres string, akkor egy üres dictionary-vel térünk vissza
        return {}

    kurzuskod_lista = kurzuskodok.split(";")    # A pontosvesszővel elválasztott kurzuskódokat eltároljuk egy listában
    eredmeny = {"infos": [], "matekos": [], "szabval": []}  # Kitöltjük kezdőértékekkel az eredmény dictionary-t

    for kurzuskod in kurzuskod_lista:       # Minden kurzuskódot a megfelelő kulcshoz tartozó listába szúrunk be
        if kurzuskod.startswith("I"):       # Az `I` betűvel kezdődő kurzuskódok az infós tárgyakhoz tartoznak
            eredmeny["infos"].append(kurzuskod)
        elif kurzuskod.startswith("M"):     # Az `M` betűvel kezdődő kurzuskódok a matekos tárgyakhoz tartoznak
            eredmeny["matekos"].append(kurzuskod)
        elif kurzuskod.startswith("X"):     # Az `X` betűvel kezdődő kurzuskódok a szabválokhoz tartoznak
            eredmeny["szabval"].append(kurzuskod)

    return eredmeny


# === 13. feladat: Fájlok csoportosítása ===

def statisztika(fajlok):
    eredmeny = {}                       # A kiterjesztéseket nem tudjuk előre, így egy üres dictionary-ből indulunk ki

    for fajl in fajlok:                 # Bejárjuk a paraméterben kapott listában szereplő fájlokat
        kit = fajl.split(".")[-1]       # A kiterjesztés a legutolsó pont után lévő string
        kit = kit.lower()               # A kis- és nagybetűket nem különböztetjük meg a kiterjesztések esetén

        if kit not in eredmeny:         # Ha az adott kiterjesztés még nem szerepel kulcsként a dictionary-ben...
            eredmeny[kit] = 1           # ...beszúrjuk 1-es kezdőértékkel (hiszen most látjuk először)
        else:                           # Ha pedig már szerepel a kiterjesztés a dictionary kulcsai között...
            eredmeny[kit] += 1          # ...megnöveljük a hozzá tartozó előfordulási értéket 1-gyel

    return eredmeny


# === 14. feladat: Végeredmény ===

def vegeredmeny(korok):
    eredmeny = {}                       # A játékosneveket nem tudjuk előre, így egy üres dictionary-ből indulunk ki

    for kor in korok:                   # Bejárjuk a `korok` lista elemeit (itt `kor` egy dictionary)
        for nev, pont in kor.items():   # Bejárjuk az adott kört reprezentáló dictionary kulcs-érték párjait
            if nev not in eredmeny:     # Ha egy játékos neve még nem szerepel az eredmény dictionary kulcsai között...
                eredmeny[nev] = pont    # ...felvesszük a játékost az aktuális pontszámával együtt
            else:                       # Ha pedig már szerepel a játékos neve az eredmény dictionary kulcsai között...
                eredmeny[nev] += pont   # ...megnöveljük a játékos összpontszámát az adott körben szerzett ponttal

    return eredmeny


# === 15. feladat: Szöveges végeredmény ===

def szoveges_vegeredmeny(vegeredmeny_dict):
    szoveg = ""                         # Ebben a változóban fogjuk előállítani a szöveges végeredményt

    for jatekos, pont in vegeredmeny_dict.items():  # Bejárjuk a paraméterben kapott dictionary kulcs-érték párjait
        szoveg += f"{jatekos}: {pont} pont, "       # Előállítunk ebből egy szöveget, amit hozzáfűzünk az eredményhez

    szoveg = szoveg[:-2]                # Az eredmény szöveg végéről eltávolítjuk a fölösleges vesszőt és a szóközt
    return szoveg


# === 16. feladat: Győztes ===

def gyoztes(vegeredmeny_dict):
    gyoztes_pont = -1                   # Ebben a változóban fogjuk tárolni a győztes játékos pontszámát
    gyoztes_jatekos = ""                # Ebben a változóban fogjuk tárolni a győztes játékos nevét

    for jatekos, pont in vegeredmeny_dict.items():  # Bejárjuk a paraméterben kapott dictionary kulcs-érték párjait
        if pont > gyoztes_pont:                     # Ha a játékos pontszáma több, mint az eddigi legjobb pontszám...
            gyoztes_pont = pont                     # ...frissítjük a győztes játékos pontszámát és nevét
            gyoztes_jatekos = jatekos

    return gyoztes_jatekos

    # MEGJEGYZÉS: Ha egy dictionary-ban a legnagyobb értékhez tartozó kulcsra vagyunk kíváncsiak, akkor ezt egyetlen
    # utasítással is lekérhetjük: `max(vegeredmeny_dict, key=vegeredmeny_dict.get)`


if __name__ == '__main__':
    # Itt ki lehet próbálni a függvényeink működését...

    print(gyoztes({'shronk': 1200, 'Tamas': 1300, 'adam': 1600, 'Wolf': 1700, 'Karoly': 870}))
