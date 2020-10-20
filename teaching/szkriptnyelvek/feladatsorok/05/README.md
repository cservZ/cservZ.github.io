<style>
    h1:first-of-type { display: none; }
</style>

# Szkriptnyelvek - 5. gyakorló feladatsor

## HTML, CSS, JavaScript alapok


A feladat egy egyszerű weboldal elkészítése, amely tartalmaz egy számológépet, amely segítségével a 4 alapműveletet (összeadás, kivonás, szorzás és osztás) végezhetjük el. A számológép alatt egy táblázat látható, amely a számítási előzményeinket tartalmazza.


### Az oldal kialakítása

* A weboldal tetején jelenjen meg a `JavaScript alapok` feliratú címsor, vízszintesen középre igazítva!
* A weboldalon szereplő minden szöveges tartalom Arial betűtípusú legyen!
* Állítsd át a weboldal háttérszínét az alapértelmezettről egy számodra szimpatikus színre!
* Módosítsd az oldal tetején lévő címsor szövegét JavaScriptben a `Számológép` feliratra!


### Számológép

* Hozz létre egy `div` objektumot, ami a számológépet fogja tartalmazni! Az objektumot igazítsd vízszintesen középre, illetve ízlés szerint adj neki margót, valamint térközt!
* A létrehozott `div` objektumon belül hozd létre a következő elemeket:
    * egy beviteli mező az egyik számnak
    * egy beviteli mező a műveleti jelnek
    * egy beviteli mező a másik számnak
    * egy gomb, amire kattintva elvégezzük a számítást!
* A gombra kattintva számítsuk ki a beírt kifejezés eredményét JavaScriptben!
    * Ellenőrizd, hogy mindhárom beviteli mező ki legyen töltve! Amennyiben valamelyik beviteli mezőnek nem adjuk meg az értékét, írass ki hibaüzenetet!
    * Ha az űrlapmezők megfelelően lettek kitöltve, végezd el a beírt számítást! Kezeld le a következő speciális eseteket:
        * nullával történő osztás
        * a négy alapművelettől eltérő műveleti jel megadása!
    * A kiszámolt eredményt jelenítsük meg a számológép alatt egy `div`-en belül!



### Számítási előzmények

* Hozz létre egy táblázatot a számológép alatt, amely a számítási eredményeket fogja tartalmazni! A táblázat legyen vízszintesen középre igazítva!
* A táblázat első sora két fejléccellát tartalmaz: `Számítás` és `Eredmény`. Ezek alatt fogjuk megjeleníteni az egyes számítások adatait.
* Miután kiszámítjuk egy számítás eredményét, fűzzünk hozzá egy új sort a táblázathoz! A sor két táblázatcellát tartalmaz: a számítást (a két szám és az operátor), illetve az eredményt.
* A táblázat alatt legyen egy `Előzmények törlése` feliratú gomb! A gombra kattintva töröljük a táblázatból az összes számítási előzményt!