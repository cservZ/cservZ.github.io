# =====================================================================================================================
# 15. feladat: Menekülés
# =====================================================================================================================

bulizok_szama = int(input("A hazibuliban resztvevok szama: "))      # A bemeneti adatok beolvasása
rendorok_szama = int(input("A rendorok szama: "))
print()

if rendorok_szama == 0:     # Ha nincs egyetlen rendőr se, akkor nem kapnak el egyetlen bulizót se
    print("Minden bulizo megmenekult!")
else:
    elkapottak_szama = 0    # Változó az elkapott bulizók számának

    for i in range(1, rendorok_szama + 1):      # Minden rendőr elkap valamennyi bulizót
        elkapottak_szama += i                   # Az 1. rendőr 1, a 2. rendőr 2, a 3. rendőr 3 bulizót kap el stb.

    if elkapottak_szama < bulizok_szama:        # Ha nem kapták el a rendőrök az összes bulizót...
        elmenekultek_szama = bulizok_szama - elkapottak_szama
        print(elkapottak_szama, "bulizot elkaptak,", elmenekultek_szama, "pedig elmenekult.")
    else:                                       # Ha minden bulizót elkaptak a rendőrök...
        print("Ajaj, mindenkit elkaptak!")

# MEGJEGYZÉS: Világos, hogy `n` rendőr 1+2+3+...+n darab bulizót fog elkapni. Észrevehetjük, hogy a rendőrök által
# elkapott bulizók száma megegyezik az első `n` természetes szám összegével, amit akár a következő képlettel is
# egyszerűen kiszámolhatunk: `(n * (n + 1)) / 2`.
