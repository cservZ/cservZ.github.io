# =====================================================================================================================
# 8. feladat: Gyakorlati jegy
# =====================================================================================================================

# A gyakorlaton elért pontszám beolvasása

pontszam = int(input("A pontszamod: "))

# A pontszámhoz tartozó szöveges értékelés megállapítása és kiíratása

if 89 <= pontszam <= 100:
    print("Az erdemjegyed: Jeles (5).")
elif 76 <= pontszam <= 88:
    print("Az erdemjegyed: Jo (4).")
elif 63 <= pontszam <= 75:
    print("Az erdemjegyed: Kozepes (3).")
elif 50 <= pontszam <= 62:
    print("Az erdemjegyed: Elegseges (2).")
elif 0 <= pontszam <= 49:
    print("Az erdemjegyed: Elegtelen (1).")
else:
    print("Ervenytelen ertek!")

# MEGJEGYZÉS: itt használhatnánk logikai operátort is a feltételek megadására: `if pontszam >= 89 and pontszam <= 100`,
# viszont ennél a fenti megoldás valamivel tömörebb és elegánsabb.
