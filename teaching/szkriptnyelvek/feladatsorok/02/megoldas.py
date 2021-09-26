# =====================================================================================================================
# Szkriptnyelvek - 2. gyakorló feladatsor (Egy lehetséges megoldás)
# A feladatsor linkje: https://cservz.github.io/teaching/szkriptnyelvek/feladatsorok/02/
# =====================================================================================================================

# === 1. feladat: Abszolútérték-maximum ===

def abs_max(szam1, szam2):
    # A feladat beépített függvények használatával egyszerűen megoldható: az `abs()` függvénnyel vesszük mindkét
    # paraméter abszolútértékét, majd ezek közül vesszük a nagyobbat a `max()` függvény segítségével.
    # Persze a feladatot manuálisan is lekódolhattuk volna: a negatív paramétereket beszorozzuk -1-gyel (ezzel megvan
    # a paraméterek abszolútértéke), és az így kapott abszolútértékek közül visszaadjuk a nagyobbat.

    return max(abs(szam1), abs(szam2))


# === 2. feladat: Fibonacci ===

def fibo(n):
    # A feladatot megoldhatjuk rekurzív vagy iteratív módon is. Ha tudjuk, hogy a paraméterben érkező `n` érték nagy
    # szám is lehet, akkor érdemes az iteratív megoldást választanunk, hiszen a rekurzió ebben az esetben egy
    # részeredményt többször is kiszámol, ezáltal a futásidő jelentősen megnő akár már a 42-es input esetén is.
    # Rekurzív megoldás: https://www.programiz.com/python-programming/examples/fibonacci-recursion

    if n <= 1:                  # A sorozat 0. eleme 0, 1. eleme pedig 1
        return n

    a = 0
    b = 1

    for i in range(1, n):       # 1-nél nagyobb `n` értékek esetén iteratívan meghatározzuk a sorozat első `n` elemét
        c = a + b               # A sorozat minden eleme az előző két elem összegeként kapható meg
        a = b                   # Változók frissítése (az aktuális elem a következő iterációban az előző elem lesz)
        b = c

    return b                    # Az `n`. elemet visszaadjuk


# === 3. feladat: Kuba ===

def kuba(felhasznalonev):
    if felhasznalonev.endswith("."):    # Ha a felhasználónév pontra végződik...
        return felhasznalonev[:-1]      # ...visszaadjuk a felhasználónevet az utolsó (pont) karakter nélkül

    return felhasznalonev + "."         # Egyéb esetben a visszatérési értékben egy pontot teszünk a felhasználónév után


# === 4. feladat: Discord emote-ok ===

def kirakhato(szo):
    szo = szo.lower()                   # A kis- és nagybetűket nem különböztetjük meg a szóban

    for betu in szo:                    # Bejárjuk a szóban található betűket
        if szo.count(betu) > 1:         # Ha valamelyik betű 1-nél többször szerepel a szóban, akkor a szó nem kirakható
            return False

    return True                         # Ha minden betű csak egyszer szerepel, akkor a szó kirakható


# === 5. feladat: Armstrong-szám ===

def armstrong_szam(szam):
    szamjegyek_str = str(szam)              # A szám stringgé alakítása után el tudjuk érni a számban lévő számjegyeket
    szamjegyek_db = len(szamjegyek_str)     # A számban található számjegyek darabszáma
    osszeg = 0                              # Változó a feladatban szereplő összegnek

    # Minden számjegyet felemelünk a `szamjegyek_db`-adik hatványára, és az így kapott értéket hozzáadjuk az összeghez

    for szamjegy in szamjegyek_str:
        osszeg += int(szamjegy) ** szamjegyek_db

    return osszeg == szam                   # Visszaadjuk, hogy az így kapott összeg megegyezik-e a kapott számmal


# === 6. feladat: Jelszó-erősség mérő ===

def jelszo_erosseg(jelszo):
    # Ha a jelszó 0 karakter hosszú, vagy tartalmazza a "jelszo" és "123" stringek valamelyikét, akkor az erősség 0

    if len(jelszo) == 0 or "jelszo" in jelszo or "123" in jelszo:
        return 0

    # Nem 0 erősségű jelszavak erősségének kiszámítása

    erosseg = 1                     # Alapból minden jelszó 1 erős

    if len(jelszo) >= 5:            # Legalább 5 karakter hosszú jelszó: +1 erősség
        erosseg += 1

    if len(jelszo) >= 8:            # Legalább 8 karakter hosszú jelszó: +2 erősség
        erosseg += 2

    # A jelszóban szereplő minden alulvonás, kötőjel vagy pont karakter 2-vel növeli a jelszó erősségét

    erosseg += jelszo.count("_") * 2
    erosseg += jelszo.count("-") * 2
    erosseg += jelszo.count(".") * 2

    return erosseg                  # A kiszámított erősség visszaadása


# === 7. feladat: Magánhangzó eltávolítás ===

def maganhangzot_torol(szoveg):
    eredmeny = ""                   # Ebben a változóban fogjuk előállítani a magánhangzók nélküli szöveget
    maganhangzok = "aeiou"          # Az angol ábécében szereplő magánhangzók

    for betu in szoveg:             # Bejárjuk a szöveg karaktereit...
        if betu.lower() not in maganhangzok:    # ...ha a karakter nem magánhangzó, hozzáfűzzük az eredményhez
            eredmeny += betu

    return eredmeny                 # A magánhangzók nélküli szöveg visszaadása


# === 8. feladat: Szöveg titkosítása ===

def kodol(uzenet, n, c):
    kodolt_uzenet = ""              # Ebben a változóban fogjuk előállítani a kódolt üzenetet

    for betu in uzenet:             # Bejárjuk az eredeti üzenet betűit...
        kodolt_uzenet += f"{betu}{n * c}"   # ...az eredményhez hozzáfűzzük a betűt és az `n` darab `c` karaktert

    return kodolt_uzenet


# === 9. feladat: Titkosított szöveg visszafejtése ===

def dekodol(kodolt_szoveg, n):
    return kodolt_szoveg[::n+1]     # A kódolt szöveget úgy fejthetjük vissza, ha minden `n+1`. betűt összeolvasunk


# === 10. feladat: Elmozdulás ===

def elmozdulas(utvonal):
    x = 0                           # Ebben a változóban tartjuk számon, hogy mennyit mentünk a vízszintes irányba
    y = 0                           # Ebben a változóban tartjuk számon, hogy mennyit mentünk a függőleges irányba

    x += utvonal.count("J")         # Ha jobbra megyünk, pozitív irányban mozdulunk el a vízszintes tengelyen
    x -= utvonal.count("B")         # Ha balra megyünk, negatív irányban mozdulunk el a vízszintes tengelyen
    y += utvonal.count("F")         # Ha felfelé megyünk, pozitív irányban mozdulunk el a függőleges tengelyen
    y -= utvonal.count("L")         # Ha lefelé megyünk, negatív irányban mozdulunk el a függőleges tengelyen

    if x == 0 and y == 0:           # Ha a kiinduló pozícióba értünk vissza, akkor nem mentünk sehova
        return "Nem mentunk sehova"

    # Meghatározzuk, hogy a kiinduló pozíciónkhoz képest merre vagyunk vízszintesen és függőlegesen

    vizszintes = "jobbra"
    fuggoleges = "fel"

    if x < 0:
        vizszintes = "balra"
    if y < 0:
        fuggoleges = "le"

    # Visszaadjuk az elmozdulást a példában látható formátumban (mivel az `x` és `y` változók akár negatív értékeket
    # is tárolhatnak, ezért ezeknek az abszolútértékét rakjuk bele a visszaadott szövegbe)

    if x == 0:
        return f"{abs(y)} lepes {fuggoleges}"

    if y == 0:
        return f"{abs(x)} lepes {vizszintes}"

    return f"{abs(x)} lepes {vizszintes}, {abs(y)} lepes {fuggoleges}"


# === 11. feladat: Palindrom ===

def palindrom(szoveg):
    # A paraméterben kapott szöveg csupa kisbetűssé alakítása + a szóközök és írásjelek eltávolítása

    szoveg = szoveg.lower()
    szoveg = szoveg.replace(" ", "").replace(".", "").replace("!", "").replace("?", "").replace(",", "")

    # Visszaadjuk, hogy az így kapott szöveg megegyezik-e a megfordítottjával
    return szoveg == szoveg[::-1]


# === 12. feladat: Palindromszám ===

def palindromszam(szam):
    # Stringgé alakítjuk a számot, és megnézzük, hogy az így kapott string megegyezik-e a megfordítottjával
    return str(szam) == str(szam)[::-1]


# === 13. feladat: Idegesség detektor ===

def idegesseg_detektor(komment):
    if len(komment) == 0:           # Ha a komment szövege egyetlen karaktert se tartalmaz, `None`-nal térünk vissza
        return None

    szamlalo = 0                    # Ebben a változóban fogjuk megszámolni a felkiáltójeleket és nagybetűket
    szamlalo += komment.count("!")  # Megszámoljuk a kommentben található felkiáltójeleket

    for betu in komment:            # Megszámoljuk a kommentben található nagybetűket
        if betu.isupper():
            szamlalo += 1

    arany = szamlalo / len(komment)
    return arany > 0.5              # Visszaadjuk, hogy a nagybetűk és felkiáltójelek aránya nagyobb-e 0.5-nél


# === 14. feladat: Mocking Spongebob ===

def mocking_spongebob(szoveg):
    eredmeny = ""                   # Ebben a változóban fogjuk előállítani az átalakított szöveget

    for i in range(len(szoveg)):    # Mivel a betűk indexére van szükségünk, ezért érdemes az indexeket bejárni
        if i % 2 == 0:              # A páros indexű betűket kicsivé, a páratlan indexűeket pedig naggyá alakítjuk
            eredmeny += szoveg[i].lower()
        else:
            eredmeny += szoveg[i].upper()

    return eredmeny


# === 15. feladat: Szövegtömörítés ===

def tomorit(szoveg):
    eredmeny = ""               # Ebben a változóban fogjuk előállítani a tömörített szöveget
    szamlalo = 1                # Ebben a változóban fogjuk megszámolni, hogy hányszor szerepel egy karakter egymás után

    # Intuitíve érezzük, hogy ahhoz, hogy el tudjuk érni a rákövetkező karaktert, érdemes az indexeken végigmenni.
    # Az alábbi for-ciklusban azért `len(szoveg) - 1`-ig megy az `i`, mert ha `len(szoveg)`-ig menne, akkor a
    # `szoveg[i + 1]` hivatkozással túlindexelnénk a stringet!

    for i in range(len(szoveg) - 1):
        if szoveg[i] == szoveg[i + 1]:  # Megszámoljuk, hogy az aktuális betű hányszor fordul elő egymás után
            szamlalo += 1
        else:
            # Ha 1-nél többször szerepelt az aktuális betű egymás után, akkor az eredmény szöveghez hozzáfűzzük az
            # előfordulási számot és a betűt. Ha 1-szer szerepelt, akkor csak a betűt fűzzük hozzá az eredményhez

            if szamlalo > 1:
                eredmeny += f"{szamlalo}{szoveg[i]}"
            else:
                eredmeny += szoveg[i]

            szamlalo = 1        # Ha végeztünk egy betűvel, akkor visszaállítjuk a számlálót a kezdeti értékre

    # Az utolsó karaktert is hozzáfűzzük a visszatérési értékünkhöz

    if szamlalo > 1:
        eredmeny += f"{szamlalo}{szoveg[-1]}"
    else:
        eredmeny += szoveg[-1]

    return eredmeny


if __name__ == '__main__':
    # Itt ki lehet próbálni a függvényeink működését...

    print(tomorit('Hahooooo! Van itt valaki???'))
