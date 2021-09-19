# =====================================================================================================================
# 9. feladat: Szorzótábla
# =====================================================================================================================

# A feladatot legegyszerűbben egy dupla for-ciklussal oldhatjuk meg: a külső és a belső for-ciklusban is végigmegyünk
# a számokon 1-től 10-ig, és rendre összeszorozgatjuk őket.

for i in range(1, 11):         # A felső határ nincs benne a kigenerált intervallumban (így 11-ig megyünk, nem 10-ig)
    for j in range(1, 11):
        print(i * j, end=" ")  # Az end=" " paraméterrel megadjuk, hogy szóközzel legyenek elválasztva a számok a sorban
    print()                    # Minden kiírt sor után teszünk egy sortörést (ezt egy sima üres print()-tel tesszük meg)
