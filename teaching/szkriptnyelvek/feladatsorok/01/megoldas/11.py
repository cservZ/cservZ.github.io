# =====================================================================================================================
# 11. feladat: Számológép
# =====================================================================================================================

# A bemeneti adatok (a két szám és a műveleti jel) beolvasása

szam1 = float(input("Elso szam: "))         # A két számot lebegőpontos értékekké konvertáljuk a float() függvénnyel
szam2 = float(input("Masodik szam: "))
muvelet = input("Muvelet: ")                # A műveleti jel string típusú lesz, így itt nem kell konvertálnunk

print()

# A számítás elvégzése

if muvelet == "+":
    print("Az eredmeny:", round(szam1 + szam2, 2))
elif muvelet == "-":
    print("Az eredmeny:", round(szam1 - szam2, 2))
elif muvelet == "*":
    print("Az eredmeny:", round(szam1 * szam2, 2))
elif muvelet == "/":
    if szam2 == 0:                          # Nullával való osztás kezelése
        print("Ejnye, nullaval nem osztunk!")
    else:
        print("Az eredmeny:", round(szam1 / szam2, 2))
else:                                       # Érvénytelen műveleti jel kezelése
    print("Hibas muveleti jel!")
