# =====================================================================================================================
# 16. feladat: Gondoltam egy számra
# =====================================================================================================================

import random                               # Véletlenszám-generáláshoz szükséges modul

eletek_szama = 20                           # A játék során 20 próbálkozási lehetősége van a felhasználónak
gondolt_szam = random.randint(1, 1000)      # 1 és 1000 közötti véletlenszám generálása (fix értékkel is dolgozhatnánk)

print("Gondoltam egy szamra 1 es 1000 kozott, talald ki, hogy melyikre! Eletek szama:", eletek_szama)

while True:                                 # Végtelen ciklus (amíg ez fut, addig tart a játék)
    tipp = int(input("Tipp: "))             # A felhasználó tippjének beolvasása

    if tipp == gondolt_szam:                # Ha a felhasználó eltalálja a gondolt számot, akkor megnyeri a játékot
        print("--------------------------------")
        print("Gratulalok, nyertel!")
        print("A gondolt szam valoban", gondolt_szam, "volt.")
        print("Megmaradt eletek:", eletek_szama)
        break
    else:                                   # Ha a felhasználó nem találja el a gondolt számot...
        if gondolt_szam < tipp:             # ...kiíratjuk, hogy a gondolt szám kisebb/nagyobb a felhasználó tippjénél
            print("Kisebb")
        else:
            print("Nagyobb")

        eletek_szama -= 1                   # ...csökkentjük a próbálkozási lehetőségek számát

    if eletek_szama == 0:                   # Ha a felhasználó életei elfogynak, akkor veszít
        print("--------------------------------")
        print("Sajnos nem nyertel!")
        print("A gondolt szam", gondolt_szam, "volt.")
        break
