<style>
    /* === Gányolás kezdete. === */

    img { display: block; margin: auto; }
    ul { margin-left: 0 !important; padding-left: 20px !important; }
    ul ul li:first-child { margin-top: 5px !important; }
    li { margin-bottom: 5px !important; }

    /*  === Gányolás vége. === */
</style>


# Objektumorientáltság JavaScriptben


## Mappa (18 pont)

* Írj egy `Mappa` nevű osztályt, amely egy mappát reprezentál a számítógépünkön! Az osztály adattagjai: `nev` (a mappa neve), `_meret` (a mappa mérete bájtokban) és egy `tartalom` nevű tömb, ami a mappában található állományok neveit fogja tárolni! **(1 pont)**

* A konstruktor rendre a mappa nevét és méretét kapja paraméterben, és ezek alapján inicializálja a `nev` és `_meret` adattagokat. A `tartalom` adattag egy üres tömbbel legyen inicializálva!
    * A méret paraméter értékét ne legyen kötelező megadni, alapértéke legyen 0! **(4 pont)**

* Készíts get és set property-t a `_meret` adattaghoz, `meret` néven! A getter adja vissza az adattag értékét, a setter pedig ellenőrizze, hogy az új érték egy **0 vagy annál nagyobb szám** legyen!
    * Ha a setterben a paraméter típusa és értéke megfelelő, akkor állítsd be az adattagot a paraméterben kapott értékre!
    * Hibás típus vagy érték esetén a setter 0-ra állítsa be az adattag értékét! **(5 pont)**

* Írd át az osztály konstruktorát úgy, hogy a méret értéke itt is ugyanúgy legyen beállítva, mint a setterben! **(2 pont)**

* Írj egy `allomanytFelvesz` metódust, amely két paramétert vár: rendre egy állomány nevét és méretét!
    * Ha az állomány neve már szerepel a `tartalom` tömbben, akkor írasd ki a konzolra a `Hiba! Mar letezo allomany!` üzenetet! Ebben az esetben ne módosítsd az objektum adattagjait!
    * Ha az állomány neve még nem szerepel a `tartalom` tömbben, akkor szúrd be az állomány nevét a tömb végére, és növeld meg a `_meret` adattag értékét az állomány méretével! **(4 pont)**

* Írj egy paraméter nélküli `info` metódust, amely a következő formátumú szöveggel tér vissza: `{nev} mappa, {_meret} bajt, {allomanyokSzama} allomany` (ahol az `allomanyokSzama` a `tartalom` tömb hossza)! **(2 pont)**


## Mémes mappa (12 pont)

* Hozz létre egy `MemesMappa` osztályt, amely a `Mappa` osztályból öröklődik! A mémes mappa egy olyan speciális mappa lesz, amelyben mémeket tárolunk. **(2 pont)**

* A konstruktor itt is a mappa nevét és méretét várja paraméterben! A méret paraméter értékét ne legyen kötelező megadni, alapértéke legyen 420! Inicializáld az osztály adattagjait az ősosztály konstruktorának megfelelő meghívásával! **(4 pont)**

* Definiáld felül az ősosztály `allomanytFelvesz` metódusát! A metódus csak a `jpg`, `png` és `mp4` kiterjesztésű állományokat engedje felvenni a mappába! A kiterjesztés alatt a legutolsó pont karakter utáni szöveget értjük. A kiterjesztés vizsgálatakor a kis- és nagybetűket nem különböztetjük meg (pl. `be.txt` és `KI.TXT` mindketten txt kiterjesztésűek). **(4 pont)**

* Írj egy paraméter nélküli `memeketTorol` metódust, amely ürítse ki a `tartalom` tömböt, és a `_meret` adattag értékét állítsa be 0-ra! **(2 pont)**
