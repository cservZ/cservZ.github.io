<style>
    h1:first-of-type { display: none; }
</style>

# Szkriptnyelvek - 8. gyakorló feladatsor

## Objektumorientáltság JavaScriptben


### Pizzázó

Károly barátunk egy pizzázót üzemeltet, aminek el szeretné készíteni a weboldalát. Ehhez először modellezni szeretné a pizzázóval kapcsolatos fontosabb fogalmakat. Készítsd el az `Etel`, `Pizza` és `Vasarlo` osztályokat JavaScript nyelven, a feladatleírások alapján!


#### Az `Etel` osztály

Hozz létre egy `Etel` nevű osztályt, amelynek legyen 3 adattagja: `nev`, `_kaloriaszam` és egy logikai adattag `_fogyaszthato` néven!

* A konstruktor az étel nevét és az ételben található kalóriák számát várja paraméterül (ebben a sorrendben), majd ezekkel inicializálja a `nev` és `_kaloriaszam` adattagokat! A `_fogyaszthato` adattag értékét minden esetben `true`-ra állítsa be a konstruktor!

* Készíts get és set property-ket a `_kaloriaszam` adattaghoz `kaloriaszam` néven, amelyekkel lekérdezhetjük és beállíthatjuk az adattag értékét! A setterben ellenőrizd, hogy az adattag ne vehessen fel negatív értéket! Negatív paraméter esetén a setter állítsa be 0-ra a kalóriaszám értékét!

* Készíts get és set property-ket a `_fogyaszthato` adattaghoz is, `fogyaszthato` néven! A setter az új érték beállítása előtt ellenőrizze, hogy boolean típusú paramétert kap-e! Ettől eltérő típus esetén az adattag értékét állítsa be `false`-ra!

* Alakítsd át a konstruktort úgy, hogy a kalóriaszám az osztály példányosításakor se lehessen negatív, valamint a fogyaszthatóság típusa is ellenőrizve legyen! Tipp: használd az imént megírt property-ket!

* Írj egy paraméter nélküli `info` metódust, amely a következő formátumú szöveggel térjen vissza: `{nev} ({kaloriaszam} kaloria)`!