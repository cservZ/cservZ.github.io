# FELADATSOR: https://cservz.github.io/teaching/szkriptnyelvek/feladatsorok/04/

legtobb_pont = -1                       # változó a maximális pontszámnak
mvp = ""                                # változó a legtöbb pontot elért hallgató nevének

# Bemeneti fájl megnyitása context manager használatával
# (A context manager gondoskodik a megnyitott erőforrás megfelelő lezárásáról, még akkor is, ha a fájlkezelés során kivétel keletkezik)

with open("zh.csv", "r") as file:       # "zh.csv" fájl megnyitása olvasásra (file-ként hivatkozhatunk rá a blokkon belül)
    tartalom = file.readlines()         # a fájl teljes tartalmának beolvasása (egy listában adja vissza a sorokat, a sorvége-jeleket sajnos megtartja)
    
    for sor in tartalom:                # bejárjuk az egyes sorokat
        akt_sor = sor.rstrip()          # megszabadulunk a sor végén szereplő sorvége-jeltől
        
        darabok = akt_sor.split(";")    # minden sor pontosvesszővel elválasztott adatokat tartalmaz => darabolás pontosvesszők mentén
        nev = darabok[0]                # minden sor legelső (0. indexű) adata lesz a hallgató neve
        pontszam = int(darabok[2])      # minden sor 2. indexű adata lesz a hallgató által elért pontszám (ez egy egész szám, így int-té konvertáljuk)

        if pontszam > legtobb_pont:     # ha az adott hallgató több pontot ért el, mint az eddig ismert maximális pontszám...
            legtobb_pont = pontszam     # ...felülírjuk a legtöbb pontszámot tároló változó értékét
            mvp = nev                   # ...felülírjuk a legtöbb pontszámot elért hallgató nevét tároló változó értékét

# Kimeneti fájl megnyitása írásra context manager használatával

with open("mvp.txt", "w") as file:
    file.write(mvp + "\n")              # kiíratjuk a fájlba a legtöbb pontot elért hallgató nevét