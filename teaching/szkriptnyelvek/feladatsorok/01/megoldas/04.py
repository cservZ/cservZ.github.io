# =====================================================================================================================
# 4. feladat: Négyzetgyök
# =====================================================================================================================

szam = int(input("Adj meg egy szamot: "))       # Egy egész szám beolvasása a konzolról

if szam < 0:                                    # Negatív számok esetén hibaüzenetet íratunk ki
    print("Negativ szambol nem vonunk negyzetgyokot!")
else:                                           # Nemnegatív számok esetén kiíratjuk a szám négyzetgyökét
    print("A beirt szam negyzetgyoke:", szam ** 0.5)
