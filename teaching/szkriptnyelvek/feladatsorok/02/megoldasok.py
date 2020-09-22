# FELADATSOR: https://cservz.github.io/teaching/szkriptnyelvek/feladatsorok/02/

# 1. feladat: Abszolútérték-maximum

def abs_max(a, b):
    # abs(n): visszaadja az n szám abszolútértékét
    # max(a, b, ...): visszaadja a paraméterül kapott értékek maximumát
    # -----------------------------------------------------------------------------------------------------------------------------
    # ezeket összekombinálva a feladat már egyszerű: vesszük mindkét paraméter abszolútértékét, és visszaadjuk ezek maximumát
    # (persze ha ezek a beépített függvények nem jutnának eszünkbe, akkor ezt manuálisan is lekódolhatnánk (bővebben lásd: videó))

    return max(abs(a), abs(b))

# 2. feladat: Páros számok összege 1-től n-ig

def paros_osszeg(n):
    osszeg = 0                      # változó az összegnek (összeget mindig 0-ról indítunk, szorzatot pedig 1-ről)

    for i in range(1, n+1):         # bejárjuk az 1 és n közötti számokat (n+1-ig megyünk, mert ekkor az utolsó "érintett" szám n lesz)
        if i % 2 == 0:              # ha az aktuálisan vizsgált szám páros...
            osszeg += i             # ...hozzáadjuk az összeghez

    return osszeg                   # a függvény végén visszaadjuk a kiszámított összeget

# 3. feladat: Felhasználónév generátor

def felhasznalonevet_general(nev, szul_ev=1970):    # ha a születési év paramétert nem adjuk meg, akkor az default értéket (1970) veszi fel
    keresztnev = nev.split(" ")[-1].lower()         # az utolsó keresztnevet úgy kapjuk meg, hogy feldaraboljuk a nevet szóközök mentén és lekérjük az utolsó elemet (-1. index), ezt kisbetűsítjük
    felhasznalonev = keresztnev + str(szul_ev)      # hozzáfűzzük a keresztnévhez a születési évet (mivel ez nem string, hanem szám, ezért először stringgé konvertáljuk)
    
    return felhasznalonev                           # visszaadjuk az így kapott felhasználónevet

# 4. feladat: Kuba

def kuba(felhasznalonev):
    if felhasznalonev.endswith("."):                # ha a felhasználónév pontra végződik, eltávolítjuk a pontot
        uj_felhasznalonev = felhasznalonev[:-1]     # tehát vesszük a stringet az utolsó karakter kivételével, és visszaadjuk azt
        return uj_felhasznalonev
    else:                                           # ha a felhasználónév nem végződik pontra, hozzáfűzünk egy pontot és az így kapott stringet adjuk vissza
        return felhasznalonev + "."

# 5. feladat: Kódfejtés

def dekodol(kod, n):
    return kod[::n]                                 # mivel csak minden n-edik karakter kell nekünk, ezért az első karaktertől indulva, n lépésközt használva visszaadjuk a karaktereket

# 6. Jelszó-erősség mérő

def jelszo_erosseg(jelszo):
    erosseg = 1                                     # alapból minden jelszó 1 erős

    if len(jelszo) >= 5:                            # legalább 5 karakter hosszú jelszó: +1 erősség
        erosseg += 1

    if len(jelszo) >= 8:                            # legalább 8 karakter hosszú jelszó: +2 erősség
        erosseg += 2

    if "_" in jelszo or "-" in jelszo or "." in jelszo: # speciális karakterek valamelyike: +3 erősség
        erosseg += 3

    if "jelszo" in jelszo or "123456" in jelszo:    # ha a "jelszo" vagy "123456" stringet tartalmazza a jelszó: automatikusan 0 erős
        erosseg = 0 

    if len(jelszo) == 0:                            # 0 karakter hosszú jelszó szintén automatikusan 0 erősségű lesz
        erosseg = 0 

    return erosseg

# 7. feladat: Szövegben szereplő szavak száma

def szavak_szama(szoveg):
    szavak = szoveg.split()                         # feldaraboljuk a szöveget whitespace-ek mentén, így megkapjuk a szavakat (egy listában)
    return len(szavak)                              # visszaadjuk a szavak lista hosszát, ez lesz a szavak száma

def maganhangzot_torol(szoveg):
    # 1. megoldás: kisbetűsítés, majd a magánhangzókat lecseréljük a "semmi"-re
    #
    # return szoveg.lower().replace('a', '').replace('e', '').replace('i', '').replace('o', '').replace('u', '') """

    # 2. megoldás: végigmegyünk a stringen, és az összes "nem magánhangzó" karaktert kiválogatjuk

    res = ""

    for karakter in szoveg:                # szöveg bejárása karakterenként
        karakter = karakter.lower()        # adott karakter kisbetűsítése
        if karakter not in "aeiou":        # ha az adott karakter nem a felsorolt magánhangzók egyike...
            res += karakter                # ...hozzáfűzzük az eredmény stringhez

    return res

# 9. feladat: Palindrom (Deluxe Edition)

def palindrom(szoveg):
    szoveg = szoveg.lower()                # csupa kisbetűssé alakítjuk a szöveget
    szoveg = szoveg.replace(' ', '').replace('.', '').replace('!', '').replace('?', '').replace(',', '')    # kivesszük a szóközöket, írásjeleket (kettőspontot, pontosvesszőt stb. is bele lehet írni, ha valaki szeretné)
    return szoveg == szoveg[::-1]          # visszaadjuk, hogy az így kapott szöveg megegyezik-e a megfordítottjával

# 10. feladat: SzÖvEg áTaLaKíTáS

def mocking_spongebob(szoveg):
    res = ""                                # az eredmény string, amit majd visszaadunk a függvény végén

    for index in range(0, len(szoveg)):     # végigmegyünk az eredeti szöveg karakterein index alapján
        if index % 2 == 0:                  # ha a karakter páros indexen található, kisbetűsítve fűzzük hozzá az eredmény stringhez
            res += szoveg[index].lower()
        else:                               # ha a karakter páratlan indexen található, nagybetűsítve fűzzük hozzá az eredmény stringhez
            res += szoveg[index].upper()

    return res

# === TESZTELÉS ===

print(abs_max(-70, -12)) 
print(paros_osszeg(200))
print(felhasznalonevet_general("Zsiros Balint Odon", 2001))
print(kuba("Dinnye23"))
print(dekodol("pxxixxzxxzxxaxxdxxéxxlxxbxxexxnxx?x", 3))
print(jelszo_erosseg("asdqwe1000jelszo"))
szoveg = """       Egy, egy almafa
Kettő, két katica
Három, három kiskacsa,
1, 2, 3          """
print(szavak_szama(szoveg))
print(maganhangzot_torol("Hali! Auchanos zsemlet cserelnek kedd esti Prog2 gyakra."))
print(palindrom("Géza, kék az ég!"))
print(mocking_spongebob("A Szkriptnyelvek meg konnyu targynak szamit."))