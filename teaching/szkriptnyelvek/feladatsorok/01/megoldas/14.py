# =====================================================================================================================
# 14. feladat: Időkülönbség
# =====================================================================================================================

# A két időpont beolvasása

ora1 = int(input("Elso idopont (ora): "))
perc1 = int(input("Elso idopont (perc): "))

ora2 = int(input("Masodik idopont (ora): "))
perc2 = int(input("Masodik idopont (perc): "))

# A két időpont percekre történő átváltása

idopont1 = ora1 * 60 + perc1
idopont2 = ora2 * 60 + perc2

# A két időpont közötti időkülönbség kiszámítása percekben

kulonbseg = abs(idopont2 - idopont1)    # Itt az `abs()` az abszolútérték (arra az esetre, ha az 1. időpont a későbbi)

# Az időkülönbség átváltása óra+perc formátumra

kulonbseg_ora = kulonbseg // 60         # Az órákat könnyedén megkaphatjuk egészosztással
kulonbseg_perc = kulonbseg % 60         # A perceket könnyedén megkaphatjuk maradékos osztással

print("\nA ket idopont kozott", kulonbseg_ora, "ora es", kulonbseg_perc, "perc telt el.")
