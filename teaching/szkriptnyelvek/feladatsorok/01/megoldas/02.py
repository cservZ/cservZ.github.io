# =====================================================================================================================
# 2. feladat: Áremelés
# =====================================================================================================================

jelenlegi_ar = int(input("Az alkatresz jelenlegi ara: "))           # A jelenlegi árat egész számként olvassuk be
aremeles_szazalek = float(input("Aremeles (szazalekban): "))        # Az áremelés százalékát valós számként olvassuk be

uj_ar = jelenlegi_ar + (jelenlegi_ar * aremeles_szazalek / 100)     # Megnöveljük az eredeti árat az adott százalékkal
print("\nAz alkatresz uj ara:", int(uj_ar))                         # Az így kapott árat egész számként íratjuk ki
