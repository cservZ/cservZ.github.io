# =====================================================================================================================
# 10. feladat: Piramis
# =====================================================================================================================

# A piramis magasságának beolvasása

magassag = int(input("Add meg, hogy milyen magas legyen a piramis: "))

# Az egyes sorokban szereplő csillag karakterek és helyközök darabszámát meghatározó változók létrehozása

csillag_darab = 1               # Az első sorban 1 darab csillag karakter szerepel
helykoz_darab = magassag - 1    # Az első sorban `magassag - 1` darab helyköz szerepel

print()

# A piramis kirajzolása

for i in range(magassag):       # A piramis `magassag` darab sorból fog állni
    print(" " * helykoz_darab + "*" * csillag_darab)    # Adott számú helyköz és csillag karakter kiíratása
    csillag_darab += 2          # Minden sorban 2-vel több csillag karakter lesz, mint az előzőben
    helykoz_darab -= 1          # Minden sorban elején 1-gyel kevesebb helyköz lesz, mint az előzőben
