# =====================================================================================================================
# 7. feladat: Príma nyereményjáték
# =====================================================================================================================

gyartasi_szam = int(input("Add meg a csoki gyartasi sorszamat: "))      # A csoki gyártási sorszámának beolvasása

if gyartasi_szam < 2:               # A 2-nél kisebb számok nem prímek, ekkor biztosan nem nyer a játékos
    print("Sajnos nem nyert!")
else:
    prim = True                     # Kezdetben minden gyártási sorszámról feltesszük, hogy prímszám

    for i in range(2, gyartasi_szam // 2 + 1):  # Elmegyünk 2-től a gyártási sorszám felééig (a gyökéig is mehetnénk)
        if gyartasi_szam % i == 0:              # Ha a gyártási sorszám osztható `i`-vel, akkor biztosan nem prímszám
            prim = False
            break

    if prim:                        # Prím gyártási sorszám esetén a játékos nyer, egyébként pedig veszít
        print("Gratulalok, nyertel!")
    else:
        print("Sajnos nem nyert!")
