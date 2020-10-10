# FELADATSOR: https://cservz.github.io/teaching/szkriptnyelvek/feladatsorok/04/

# A Bor osztály

class Bor(object):
    # Fontos, hogy az osztályon belül minden metódusnak van egy kötelező első paramétere, amit expliciten ki kell írnunk a metódus fejlécében
    # Ezt általában self-nek szokás elnevezni, és ennek segítségével az aktuális objektumra tudunk hivatkozni (nagyjából olyan, mint Javában a this)

    # Konstruktor

    def __init__(self, fajta, evjarat, alkoholtartalom=12.5):       # az alkoholtartalom paraméter opcionális, ha nem adjuk meg, a 12.5 alap értékre állítjuk be
        # adattagok létrehozása és inicializálása (ha egy osztályon belüli adattagra vagy metódusra szeretnénk hivatkozni, mindig ki kell írni a self-et, mert különben lokális változóként lenne értelmezve)
        
        self._fajta = fajta                                         # az alulvonás az adattag neve előtt azt jelzi, hogy nem publikus használatra szánjuk az adattagot (noha kívülről ugyanúgy elérhető lesz a változó)
        self._evjarat = evjarat 
        self._alkoholtartalom = alkoholtartalom

    # Hagyományos getter és setter függvények (általában nem ezeket használjuk)

    def get_fajta(self):
        return self._fajta

    def set_fajta(self, ertek):
        self._fajta = ertek

    # Getter és setter megvalósítása property-k segítségével (általában ezeket használjuk Pythonban)

    @property                               # a get property a @property dekorátorral rendelkezik
    def alkoholtartalom(self):              # kiemelten fontos, hogy az adattag neve (_alkoholtartalom) és a property neve (alkoholtartalom) eltérő legyen, különben végtelen rekurzióba futunk!
        return self._alkoholtartalom

    @alkoholtartalom.setter                 # a set property a @<property_neve>.setter dekorátorral rendelkezik
    def alkoholtartalom(self, ertek):
        if isinstance(ertek, float) and ertek >= 0:     # ellenőrzések (típusellenőrzés isinstance() függvénnyel)
            self._alkoholtartalom = ertek

    @property
    def evjarat(self):
        return self._evjarat

    @evjarat.setter
    def evjarat(self, ertek):
        self._evjarat = ertek

    # Az objektum szöveggé alakításáért felelő metódus - ez az objektum kiíratásakor hívódik meg (kb. mint Javában a toString())

    def __str__(self):
        return f"{self._fajta} (evjarat: {self._evjarat}), melynek alkoholtartalma: {self._alkoholtartalom}"    # Python 3.6-tól használhatjuk az elegáns szintaxissal rendelkező f-stringeket

    # Operator overload: az == operátor működésének felüldefiniálása az osztályban

    def __eq__(self, masik):                    # a két paraméter a két operandus lesz (x == y esetén x az aktuális objektum, y pedig valami másik objektum)
        if not isinstance(masik, Bor):          # ha a második paraméterben érkező cucc nem egy Bor...
            return False                        # ...logikai hamis értéket adunk vissza

        self.set_fajta(self.get_fajta().lower())	# egy későbbi feladat alapján: nem különböztetjük meg a fajta nevében a kis- és nagybetűket
        masik.set_fajta(self.get_fajta().lower())

        # visszaadjuk, hogy a két objektum adattagjainak az értéke rendre megegyezik-e

        return self._fajta == masik.get_fajta() and self._evjarat == masik.evjarat and self._alkoholtartalom == masik.alkoholtartalom

        # a fenti sort lerövidíthetjük, ha használjuk a __dict__-et, ami egy olyan dictionary-t készít az objektumunkból, amiben a kulcsok az adattagok nevei, az értékek pedig rendre az adattagok értékei

        # return self.__dict__ == masik.__dict__

# A Szekrény osztály

class Szekreny(object):
    # Konstruktor

    def __init__(self):
        self.borok = []         # a borok adattagot egy üres listával inicializáljuk

    # A get_bor metódus

    def get_bor(self, index):
        if index < 0 or index > len(self.borok) - 1:    # ha az index negatív vagy nagyobb, mint a lista utolsó elemének az indexe...
            raise Exception("Nem letezo index!")        # ...dobunk egy Exception típusú kivételt
        else:
            return self.borok[index]                    # helyes input esetén visszaadjuk a borok lista adott indexű elemét

    # Operator overload: a + operátor működésének felüldefiniálása az osztályban

    def __add__(self, masik):                           # hasonlóképpen, mint az __eq__ esetén, a két paraméter itt is az operátor két operandusa lesz (aktuális objektum és egy másik)
        if isinstance(masik, Bor):                      # ha a paraméterben egy Bor érkezik, visszaadunk egy új Szekrény objektumot, aminek a borok listájában az aktuális objektum borai, valamint a paraméterül kapott bor szerepelnek
            uj_szekreny = Szekreny()
            uj_szekreny.borok = self.borok 
            uj_szekreny.borok.append(masik)

            return uj_szekreny

        if isinstance(masik, Szekreny):                 # ha a paraméterben egy Szekrény érkezik, visszaadunk egy új Szekrény objektumot, aminek a borok listája a két objektum borok listájainak összefűzése
            uj_szekreny = Szekreny()
            uj_szekreny.borok = self.borok + masik.borok
            return uj_szekreny

    # Az ossz_alkoholtartalom metódus

    def ossz_alkoholtartalom(self):
        osszeg = 0                                      # változó az összegnek

        for bor in self.borok:                          # végigmegyünk a Szekrény összes borán, és összeadjuk ezek alkoholtartalmát
            osszeg += bor.alkoholtartalom

        return osszeg                                   # visszaadjuk a kiszámított összeget

    # A statisztika metódus

    def statisztika(self):
        if len(self.borok) == 0:                        # ha a Szekrényen nincs egy bor sem, egy üres dictionary-t adunk vissza
            return {}

        res = {}

        for bor in self.borok:                          # ha van bor a szekrényen, bejárjuk a borokat...
            fajta = bor.get_fajta().lower()             # ...kisbetűsítjük a bor fajtáját (hiszen nem akarunk különbséget tenni kis- és nagybetűk között)

            if fajta not in res:                        # ha az adott fajtát még nem láttuk korábban, belerakjuk a dictionary-be 1-es előfordulás értékkel
                res[fajta] = 1 
            else:                                       # ha az adott fajta már szerepel a dictionary-nkben, növeljük az előfordulási számát 1-gyel
                res[fajta] += 1

        return res

    # A megisszak metódus

    def megisszak(self, bor):
        if not isinstance(bor, Bor):                    # nem Bor típusú paraméter esetén kivételt dobunk
            raise TypeError("Nem bor!")
        else:                                           # Bor típusú paraméter esetén kitöröljük az adott Bort a borok listából, amennyiben az szerepel a listában
            if bor in self.borok:
                self.borok.remove(bor)

    # A szöveggé alakításért felelő metódus

    def __str__(self):
        if len(self.borok) == 0:                        # ha a Szekrényen nincs bor, visszaadjuk, hogy a Szekrény üres
            return "A szekreny ures."

        res = ""                                        # ha a Szekrényen vannak borok, akkor ki kell írnunk, hogy milyen borfajtákból mennyi van a szekrényen
        d = self.statisztika()                          # ehhez felhasználhatjuk a statisztika() függvény által visszaadott dictionary-t

        for fajta, mennyiseg in d.items():              # bejárjuk az egyes borfajtákat és azok mennyiségét található dictionary-t
            foo = f"{mennyiseg} {fajta}, "              # minden bor esetén hozzáfűzzük az eredmény stringhez, hogy mennyi bor van az adott fajtából a szekrényen
            res += foo

        res = res[:-2]                                  # mivel a szöveg végére is beraktunk egy ", "-t a kiíratásnál, ezért ettől megszabadulunk (rstrip()-pel is működne)
        
        return res                                      # visszaadjuk az eredmény stringet

# === TESZTELÉS ===

bor1 = Bor("tokaji aszu", 2019, 13.0)                   # konstruktor hívások
bor2 = Bor("egri bikaver", 2018)
bor3 = Bor("EGRI BIKAVER", 2018)

bor1.set_fajta("rosé")                                  # hagyományos getter és setter hívások
print(bor1.get_fajta())

bor1.alkoholtartalom = 14.0                             # get és set property hívások (úgy tűnik, mintha publikus adattagokkal dolgoznánk, viszont ennél azért ez többet tud: ellenőrzött módon tudjuk beállítani és lekérni az adattagok értékét)
print(bor1.alkoholtartalom)

print(bor1)                                             # __str__ hívása
print(bor2)

print(bor2 == bor3)                                     # __eq__ hívása

print("=" * 80)

try:                                                    # try-blokk: olyan kódrész, amelyben kivételt dobódhat
    szekreny1 = Szekreny()                                   # Szekreny osztály konstruktorának hívása
    szekreny2 = Szekreny()
    szekreny1.borok = [bor1]
    szekreny2.borok = [bor3]

    # print(szekreny1.get_bor(0))                            # get_bor() hívása létező indexre
    # print(szekreny1.get_bor(100))                          # get_bor() hívása nem létező indexre => Exception!

    szekreny1 = szekreny1 + bor2                             # __add__ hívása Bor típusú paraméterre
    szekreny3 = szekreny1 + szekreny2                        # __add__ hívása Szekreny típusú paraméterre

    print(szekreny3.ossz_alkoholtartalom())                  # ossz_alkoholtartalom() hívása
    print(szekreny3.statisztika())                           # statisztika() hívása
    print(Szekreny().statisztika())

    # szekreny3.megisszak(bor3)                              # megisszak() hívása

    print("=" * 80)
    
    for bor in szekreny3.borok:
        print(bor)

    # szekreny3.megisszak("valami ami nem bor")
    print(szekreny3)                                         # Szekrény osztály __str__ metódusának hívása
except TypeError as te:                                 # TypeError típusú hibát lekezelő kódrész
    print("ujujujujuj, ez egy csunya TypeError")
    print(te)
except Exception as exc:                                # Exception típusú hibát lekezelő kódrész
    print(exc)
