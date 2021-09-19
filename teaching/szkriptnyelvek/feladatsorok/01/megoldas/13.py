# =====================================================================================================================
# 13. feladat: Heti profit
# =====================================================================================================================

eladott_csokik = int(input("A hetfon eladott csokik szama: "))      # A hétfőn eladott csokik számának beolvasása
osszeg = 0                                                          # Változó a teljes héten eladott csokik számának

for i in range(7):                  # Végigmegyünk a hét minden napján
    osszeg += eladott_csokik        # A héten eladott csokik számához hozzáadjuk az adott napon eladott csokik számát
    eladott_csokik *= 2             # A következő napon kétszer annyi csokit adunk el, mint az előző napon

print("A heten varhatoan", osszeg, "csokit adunk el.")

# MEGJEGYZÉS: Ha belegondolunk, akkor a hét napjain eladott csokik száma mértani sorozatot alkot. Egy mértani sorozat
# első `n` elemének az összegét a következő képlettel kaphatjuk meg: `S = a1 * (q^n - 1) / (q - 1)`, ahol:
#     - `a1` a mértani sorozat első eleme - itt a hétfőn eladott csokik száma
#     - `q` a kvóciens, amivel mindig szorzunk - itt 2, hiszen minden nap 2-szer annyi csokit adunk el, mint előzőleg
#     - `n`: itt most ez 7 lesz, hiszen 7 napra szeretnénk kiszámolni az eladott csokik számát.
# A megfelelő értékek behelyettesítése után a héten eladott csokik számát a következőképpen is meghatározhatjuk:
# `osszeg = eladott_csokik * (2 ** 7 - 1) // (2 - 1)`.
