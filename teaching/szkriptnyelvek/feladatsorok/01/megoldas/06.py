# =====================================================================================================================
# 6. feladat: Szóbeli vizsga
# =====================================================================================================================

vizsgazok_szama = int(input("Vizsgazok szama: "))                   # A bemeneti adatok beolvasása
kerdesek_szama = int(input("Feltett kerdesek szama: "))
elso_vizsgazo_szama = int(input("Az elso kerdest kapo hallgato szekszama: "))

eredmeny = elso_vizsgazo_szama              # Ebben a változóban tároljuk, hogy ki kapja a bónusz kérdést

# Minden kérdést kiosztunk egy-egy hallgatónak. A ciklusban azért kell a -1, mert az első kérdést már kiosztottuk
# az `elso_vizsgazo_szama` sorszámú hallgatónak.

for i in range(kerdesek_szama - 1):
    if eredmeny + 1 <= vizsgazok_szama:     # Alapból mindig továbbmegyünk az 1-gyel nagyobb sorszámú hallgatóra
        eredmeny += 1
    else:                                   # Az utolsó széken ülő hallgató után az 1. széken ülővel folytatjuk a sort
        eredmeny = 1

print("\nA(z) " + str(eredmeny) + ". szeken ulo hallgato kapja a bonusz kerdest.")
