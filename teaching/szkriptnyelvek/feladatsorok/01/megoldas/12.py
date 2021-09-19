# =====================================================================================================================
# 12. feladat: Ösztöndíj
# =====================================================================================================================

jegyek_szama = int(input("Hallgato jegyeinek szama: "))     # Az érdemjegyek számának beolvasása
osszeg = 0                                                  # Egy változó a beolvasott jegyek összegének

print("A jegyek:")

i = 0

while i < jegyek_szama:             # Az érdemjegyekből beolvasunk `jegyek_szama` darabot
    jegy = int(input())
    osszeg += jegy                  # A beolvasott érdemjegyeket összeadogatjuk
    i += 1

atlag = osszeg / jegyek_szama       # Az átlagot az érdemjegyek összegének és darabszámának hányadosaként kapjuk meg
print("\nA jegyek atlaga:", round(atlag, 2))

if atlag >= 4.0:                    # Az átlag alapján megállapítjuk, hogy kap-e ösztöndíjat az adott hallgató
    print("A hallgato osztondijra jogosult!")
else:
    print("A hallgato nem jogosult osztondijra!")
