<style>
    h1:first-of-type { display: none; }
</style>

# Szkriptnyelvek - 8. gyakorló feladatsor

## Objektumorientáltság JavaScriptben


### Pizzázó

Károly egy pizzázót üzemeltet, aminek el szeretné készíteni a weboldalát. Ehhez először modellezni szeretné a pizzázóval kapcsolatos fontosabb fogalmakat. Készítsd el az `Etel`, `Pizza` és `Vasarlo` osztályokat JavaScript nyelven, a feladatleírások alapján!


#### Az `Etel` osztály

Hozz létre egy `Etel` nevű osztályt, amelynek legyen 3 adattagja: `nev`, `_kaloriaSzam` és egy logikai adattag `_fogyaszthato` néven!

* A konstruktor az étel nevét és az ételben található kalóriák számát várja paraméterül (ebben a sorrendben), majd ezekkel inicializálja a `nev` és `_kaloriaSzam` adattagokat! A `_fogyaszthato` adattag értékét minden esetben `true`-ra állítsa be a konstruktor!

* Készíts get és set property-ket a `_kaloriaSzam` adattaghoz, `kaloriaSzam` néven, amelyekkel lekérdezhetjük és beállíthatjuk az adattag értékét! A setterben ellenőrizd, hogy az adattag ne vehessen fel negatív értéket! Negatív paraméter esetén a setter állítsa be 0-ra a kalóriaszám értékét!

* Készíts get és set property-ket a `_fogyaszthato` adattaghoz is, `fogyaszthato` néven! A setter az új érték beállítása előtt ellenőrizze, hogy boolean típusú paramétert kap-e! Ettől eltérő típus esetén az adattag értékét állítsa be `false`-ra!

* Alakítsd át a konstruktort úgy, hogy a kalóriaszám az osztály példányosításakor se lehessen negatív! Tipp: használd az imént megírt property-t!

* Írj egy paraméter nélküli `info` metódust, amely a következő formátumú szöveggel térjen vissza: `{nev} ({kaloriaSzam} kaloria)`!


#### A `Pizza` osztály

Készíts egy `Pizza` osztályt, amely az `Etel` osztályból öröklődik! Az örökölt adattagokon kívül a pizza rendelkezzen egy `_ar` és egy `feltetek` adattaggal! A `feltetek` adattag egy tömb, ami a pizzán található feltétek neveit fogja tárolni.

* Írd meg az osztály konstruktorát, amelynek paraméterei rendre a pizza neve, a pizzában található kalóriák száma és a pizza ára! Az árat ne legyen kötelező megadni a konstruktorban, alapértéke legyen 1500!
    * Hívd meg az ősosztály konstruktorát a megfelelő paraméterek átadásával! Ha a pizza nevének a végén nem szerepel a `pizza` szöveg, fűzzük hozzá azt a névhez! Például a `hawaii` szövegből `hawaii pizza` lesz.
    * A harmadik paraméter alapján inicializáld az `_ar` adattagot!
    * A `feltetek` adattagot minden esetben egy üres tömbbel inicializálja a konstruktor!

* Készíts get és set property-ket az `_ar` adattaghoz, `ar` néven! A setterben ellenőrizd, hogy az adattag ne vehessen fel negatív értéket! Negatív paraméter esetén az ár értéke legyen 1000!

* Írj egy paraméter nélküli `megromlik` metódust, amely állítsa a `_fogyaszthato` adattag értékét hamisra, és írja ki a konzolra, hogy `A pizza megromlott.`!

* Írj egy `feltetetHozzaad` nevű metódust, amely egy object-et kap paraméterül! Az object a következőképpen épül fel: a `nev` property-jéhez tartozik a feltét neve, míg a `kaloria` property-jéhez a feltétben található kalóriák száma tartozik (pl. `{ nev: 'sajt', kaloria: 90 }`).
    * Ha a paraméter nem object típusú, vagy a kettő közül bármelyik property-je hiányzik, írassuk ki a `Hiba: nem egy feltet!` hibaüzenetet a konzolra!
    * Ha a paraméter megfelelő típusú, és a property-k is megvannak, ellenőrizzük, hogy a feltét neve szöveges típusú, a kalória pedig szám típusú adat legyen! Hibás típus esetén írassuk ki a `Hiba: nem megfelelo tipus!` hibaüzenetet a konzolra!
    * Ha a feltét megfelelő, de ilyen nevű feltétünk már szerepel a `feltetek` tömbben, írassuk ki a `Hiba: mar van ilyen feltet!` hibaüzenetet a konzolra!
    * Ha eddig nem volt hiba, akkor szúrjuk be a paraméterben kapott feltét **nevét** a `feltetek` tömbbe! Növeljük meg a `_kaloriaSzam`  adattag értékét a feltétben található kalóriák számával, valamint az ár értékét is növeljük meg 100-zal! Végül írassuk ki a `Feltet felvetel sikeres!` szöveget a konzolra!

* Definiáld felül az ősosztály `info` metódusát, ami a következő szöveggel térjen vissza: `{nev} ({kaloriaSzam} kaloria), ar: {ar} forint, feltetek: {feltet_sorozat}`, ahol `feltet_sorozat` a feltétek neveit vesszőkkel elválasztva tartalmazó szöveg!
    * Például ha a `feltetek` tömb tartalma: `['sonka', 'kukorica', 'sajt']`, akkor a feltételeket tartalmazó szöveg: `sonka, kukorica, sajt`.
    * Amennyiben a feltéteket tároló tömb üres, akkor a feltétek felsorolását vegyük ki a visszatérési értékből (az új szöveg: `{nev} ({kaloriaSzam} kaloria), ar: {ar} forint`).


#### A `Vasarlo` osztály

Írj egy `Vasarlo` osztályt, amelynek legyen 3 adattagja: `nev`, `penz` és egy `rendelesek` nevű tömb!

* Írd meg az osztály konstruktorát, amely rendre a vásárló nevét és pénzének mennyiségét kapja paraméterül, majd ezekkel inicializálja a `nev` és `penz` adattagokat! A `rendelesek` adattagot inicializáld egy üres tömbbel!

* Írj egy `pizzatRendel` metódust, amely egy `Pizza` típusú objektumot vár paraméterül!
    * Nem megfelelő típusú paraméter esetén írasd ki a konzolra a `Hiba: nem pizza!` hibaüzenetet!
    * Ha a típus megfelelő, akkor nézzük meg, hogy a vásárlónak van-e legalább annyi pénze, mint amennyi a paraméterben kapott pizza ára! Ha nincs, írasd ki a `Hiba: nincs eleg penz!` hibaüzenetet a konzolra!
    * Természetesen olyan pizzát ne tudjunk rendelni, ami már megromlott. Amennyiben a paraméterben kapott pizza nem fogyasztható, írassuk ki a `Hiba: nem eheto pizza!` hibaüzenetet a konzolra!
    * Ha eddig nem volt hiba, akkor a pizza megrendelhető. Csökkentsd a `penz` adattag értékét a pizza árával, szúrd be a paraméterben kapott pizza **nevét** a `rendelesek` tömbbe, és írasd ki a `Sikeres rendeles!` szöveget a konzolra!

* Írj egy paraméter nélküli `pizzakatListaz` metódust! A metódus visszatérési értéke egy szöveg, amely vesszőkkel elválasztva, `{n} darab {pizzanev}` formában felsorolva tartalmazza azt, hogy az egyes pizzafajtákból mennyit rendelt a vásárló (`rendelesek` tömb)!
    * Például ha a `rendelesek` tömb: `['hawaii pizza', 'dupla sajtos pizza', 'hawaii pizza']`, akkor a visszatérési érték: `2 darab hawaii pizza, 1 darab dupla sajtos pizza`.

