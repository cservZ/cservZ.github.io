# =====================================================================================================================
# 5. feladat: Páros számok összege
# =====================================================================================================================

also = int(input("Az intervallum also vegpontja: "))            # Az intervallum alsó és felső végpontjainak beolvasása
felso = int(input("Az intervallum felso vegpontja: "))

paros_osszeg = 0

# Végigmegyünk az `also` és `felso` értékek közötti egész számokon, és ezek közül összeadogatjuk a párosakat.
# Fontos, hogy a `range()` felső határa alapból már nincs benne a kigenerált intervallumban, így ennek
# kiküszöböléséhez az 1-gyel nagyobb értékig (`felso + 1`) kell elmennünk.

for i in range(also, felso + 1):
    if i % 2 == 0:
        paros_osszeg += i

print("\nA(z) [" + str(also) + "; " + str(felso) + "] intervallumba eso paros szamok osszege: " + str(paros_osszeg))
