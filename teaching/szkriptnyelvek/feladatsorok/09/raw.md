# Szkriptnyelvek - 9. gyakorló feladatsor

## Objektumorientáltság JavaScriptben


### Pizzázó (50 pont)

Levente egy pizzázót üzemeltet, aminek el szeretné készíteni a weboldalát. Ehhez először modellezni szeretné a pizzázóval kapcsolatos fontosabb fogalmakat. Készítsd el az `Etel`, `Pizza` és `Vasarlo` osztályokat JavaScript nyelven a feladatleírás alapján!


#### 1. Az `Etel` osztály (13 pont)

Hozz létre egy `Etel` nevű osztályt, amelynek legyen 3 adattagja: `nev` (az étel neve), `_kaloriaSzam` (az ételben található kalóriák száma) és egy `_fogyaszthato` nevű logikai adattag (ez mondja meg azt, hogy az étel fogyasztható-e vagy sem)! **(1 pont)**

* A konstruktor az étel nevét és az ételben található kalóriák számát várja paraméterben (ilyen sorrendben), és ezekkel inicializálja a `nev` és `_kaloriaSzam` adattagokat. A `_fogyaszthato` adattag értékét minden esetben `true`-ra állítsa be a konstruktor! **(3 pont)**

* Készíts get és set property-t a `_kaloriaSzam` adattaghoz, `kaloriaSzam` néven! A getter adja vissza az adattag értékét, a setter pedig ellenőrizze, hogy az adattag ne vehessen fel negatív értéket! Negatív paraméter esetén a setter állítsa be 0-ra a kalóriaszám értékét! **(3 pont)**

* Készíts get és set property-t a `_fogyaszthato` adattaghoz is, `fogyaszthato` néven! A setter az adattag értékének beállítása előtt ellenőrizze, hogy boolean típusú paramétert kap-e! Ha igen, állítsa be az adattag értékét a paraméterre! Ha nem, akkor `false`-ra állítsa be az adattag értékét! **(3 pont)**

* Írd át az osztály konstruktorát úgy, hogy a `_kaloriaSzam` adattag értéke itt is ugyanúgy legyen beállítva, mint a `kaloriaSzam` setterben! **(1 pont)**

* Írj egy paraméter nélküli `info` metódust, amely a következő formátumú szöveggel térjen vissza: `{nev} ({_kaloriaSzam} kaloria), fogyaszthato: {igen/nem}` !
    * Az utolsó kifejezés helyére az `igen` szöveg kerüljön, ha a `_fogyaszthato` adattag értéke igaz, egyébként pedig a `nem` szöveget helyettesítsd be! **(2 pont)**


#### 2. A `Pizza` osztály (23 pont)

Készíts egy `Pizza` nevű osztályt, amely az `Etel` osztályból öröklődik! Az örökölt adattagokon kívül a pizza rendelkezzen még egy `_ar` és egy `feltetek` adattaggal is! Az `_ar` a pizza árát jelenti, a `feltetek` adattag pedig egy tömb, ami a pizzán található feltétek neveit fogja tárolni. **(1 pont)**

* Írd meg az osztály konstruktorát, amelynek paraméterei rendre a pizza neve, a pizzában található kalóriák száma és a pizza ára! Az árra vonatkozó paraméter értékét ne legyen kötelező megadni az osztály példányosításakor, alapértéke legyen 1500!
    * Hívd meg az ősosztály konstruktorát a megfelelő paraméterek átadásával! Ha a pizza nevének a végén nem szerepel a `pizza` szöveg, akkor fűzd azt hozzá az étel nevéhez egy szóközzel az őskonstruktor hívása során (pl. a `hawaii` szövegből `hawaii pizza` lesz)!
    * A harmadik konstruktor paraméter alapján inicializáld az `_ar` adattagot!
    * A `feltetek` adattagot minden esetben egy üres tömbbel inicializáld! **(5 pont)**

* Készíts get és set property-t az `_ar` adattaghoz, `ar` néven! A setterben ellenőrizd, hogy az adattag ne vehessen fel negatív értéket! Negatív paraméter esetén az ár értéke legyen 1000! **(2 pont)**

* Írd át az osztály konstruktorát úgy, hogy az ár értéke itt is úgy legyen beállítva, mint a setterben! **(1 pont)**

* Írj egy paraméter nélküli `megromlik` metódust, amely állítsa a `_fogyaszthato` adattag értékét hamisra, és írja ki a konzolra, hogy `A pizza megromlott.` ! **(2 pont)**

* Írj egy `feltetetFelvesz` nevű metódust, amely egy pizzafeltétet reprezentáló object-et kap paraméterül! Az object a következőképpen épül fel: a `nev` property-hez tartozik a feltét neve, és a `kaloria` property-hez tartozik a feltétben található kalóriák száma (pl. `{ nev: 'sajt', kaloria: 90 }`).
    * Ha a paraméter nem object típusú, vagy a `nev` és `kaloria` property-k valamelyike hiányzik az object-ből, akkor írasd ki a konzolra a `HIBA! Nem egy feltet!` hibaüzenetet!
    * Ha a paraméter megfelelő típusú és a megfelelő property-k is megvannak, akkor ellenőrizd, hogy a feltét neve (`nev` property-hez tartozó érték) szöveges típusú, a kalóriaszám (`kaloria` property-hez tartozó érték) pedig szám típusú legyen! Hibás típus esetén írasd ki a konzolra a `HIBA! Nem megfelelo tipus!` hibaüzenetet!
    * Ha eddig nem volt hiba, de már van ilyen nevű feltétünk a `feltetek` tömbben, akkor írasd ki a `HIBA! Mar van ilyen feltet!` hibaüzenetet a konzolra!
    * Ha eddig nem volt hiba, akkor szúrd be a paraméterben kapott feltét **nevét** a `feltetek` tömb végére! Növeld meg a `_kaloriaSzam` adattag értékét a feltétben található kalóriák számával, valamint az ár értékét is növeld meg 100-zal! Végül írasd ki a konzolra a `Feltet felvetel sikeres!` szöveget! **(9 pont)**

* Definiáld felül az ősosztály `info` metódusát úgy, hogy az a következő formátumú szöveggel térjen vissza: `{nev} ({_kaloriaSzam} kaloria), fogyaszthato: {igen/nem}, ar: {_ar} forint, feltetek: {feltetSorozat}`, ahol `feltetSorozat` a feltétek neveit tartalmazó szöveg!
    * Például, ha a `feltetek` tömb tartalma `['sonka', 'kukorica', 'sajt']`, akkor a feltéteket tartalmazó szöveg: `sonka, kukorica, sajt`.
    * Amennyiben a feltéteket tároló tömb üres, akkor a feltétek felsorolását vegyük ki a visszatérési értékből (az így kapott szöveg: `{nev} ({_kaloriaSzam} kaloria), fogyaszthato: {igen/nem}, ar: {_ar} forint`)! **(3 pont)**


#### 3. A `Vasarlo` osztály (14 pont)

Írj egy `Vasarlo` nevű osztályt, amelynek legyen 3 adattagja: `nev` (a vásárló neve), `penz` (a vásárló pénzének mennyisége) és egy `rendelesek` nevű tömb, amely a vásárló rendeléseit tárolja! **(1 pont)**

* Írd meg az osztály konstruktorát, amely rendre a vásárló nevét és pénzének mennyiségét kapja paraméterül, és ezek alapján inicializálja a `nev` és `penz` adattagokat! A `rendelesek` adattagot minden esetben egy üres tömbbel inicializálja a konstruktor! **(3 pont)**

* Írj egy `pizzatRendel` metódust, amely egy `Pizza` típusú objektumot vár paraméterben!
    * Nem megfelelő típusú paraméter esetén írasd ki a konzolra a `HIBA! Nem pizza!` hibaüzenetet!
    * Ha a paraméter típusa megfelelő, akkor nézd meg, hogy a vásárlónak van-e legalább annyi pénze, mint amennyi a paraméterben kapott pizza ára! Ha nincs, akkor írasd ki a konzolra a `HIBA! Nincs eleg penz!` hibaüzenetet!
    * Természetesen olyan pizzát ne tudjunk rendelni, ami már megromlott! Amennyiben a paraméterben kapott pizza nem fogyasztható, akkor írasd ki a konzolra a `HIBA! Nem eheto pizza!` hibaüzenetet!
    * Ha eddig nem volt hiba, akkor a vásárló meg tudja rendelni a pizzát.
        * Csökkentsd a `penz` adattag értékét a pizza árával!
        * Szúrd be a paraméterben kapott pizza **nevét** a `rendelesek` tömb végére!
        * Írasd ki a konzolra a `Sikeres rendeles!` szöveget! **(6 pont)**

* Írj egy paraméter nélküli `pizzakatListaz` metódust! A metódus visszatérési értéke egy szöveg, amely vesszőkkel elválasztva, `{mennyiség} darab {pizzanev}` formában felsorolva tartalmazza azt, hogy az egyes pizzafajtákból mennyit rendelt a vásárló (`rendelesek` tömb)!
    * Például, ha a `rendelesek` tömb `['hawaii pizza', 'dupla sajtos pizza', 'hawaii pizza']`, akkor a visszatérési érték a `2 darab hawaii pizza, 1 darab dupla sajtos pizza` szöveg.
    * Amennyiben a `rendelesek` tömb üres, akkor a visszatérési érték a `Nincs rendeles!` szöveg legyen! **(4 pont)**


#### Példa a kód működésére

```js
const etel1 = new Etel('alma', 70);
const etel2 = new Etel('sajt', -100);
etel1.kaloriaSzam = 50;
etel2.fogyaszthato = false;

console.log(etel1);         // Etel { nev: 'alma', _kaloriaSzam: 50, _fogyaszthato: true }
console.log(etel2);         // Etel { nev: 'sajt', _kaloriaSzam: 0, _fogyaszthato: false }
console.log(etel1.info());  // 'alma (50 kaloria), fogyaszthato: igen'
console.log(etel2.info());  // 'sajt (0 kaloria), fogyaszthato: nem'
console.log('----------------------------------------------------------------------------------------------------');

const p1 = new Pizza('hawaii', 1000, 1800);
const p2 = new Pizza('sonkas-kukoricas pizza', 1000);
p1.ar = 2000;

p1.megromlik();                                       // 'A pizza megromlott.'
p1.feltetetFelvesz('sajt');                           // 'HIBA! Nem egy feltet!'
p1.feltetetFelvesz({nev: 'sajt'});                    // 'HIBA! Nem egy feltet!'
p1.feltetetFelvesz({nev: 'sajt', kaloria: 'otven'});  // 'HIBA! Nem megfelelo tipus!'
p1.feltetetFelvesz({nev: 'sajt', kaloria: 50});       // 'Feltet felvetel sikeres!'
p1.feltetetFelvesz({nev: 'sajt', kaloria: 70});       // 'HIBA! Mar van ilyen feltet!'
p1.feltetetFelvesz({nev: 'sonka', kaloria: 120});     // 'Feltet felvetel sikeres!'
p1.feltetetFelvesz({nev: 'kukorica', kaloria: 30});   // 'Feltet felvetel sikeres!'

console.log(p1.info());  // 'hawaii pizza (1200 kaloria), fogyaszthato: nem, ar: 2300 forint, feltetek: sajt, sonka, kukorica'
console.log(p2.info());  // 'sonkas-kukoricas pizza (1000 kaloria), fogyaszthato: igen, ar: 1500 forint'
console.log('----------------------------------------------------------------------------------------------------');

const v1 = new Vasarlo('Sanyi', 5000);
const v2 = new Vasarlo('Bela', 10000);

v1.pizzatRendel('valami pizza');                        // 'HIBA! Nem pizza!'
v1.pizzatRendel(p1);                                    // 'HIBA! Nem eheto pizza!'
v1.pizzatRendel(p2);                                    // 'Sikeres rendeles!'
v1.pizzatRendel(new Pizza('negysajtos', 1200, 1200));   // 'Sikeres rendeles!'
v1.pizzatRendel(p2);                                    // 'Sikeres rendeles!'
v1.pizzatRendel(p2);                                    // 'HIBA! Nincs eleg penz!'

console.log(v1.penz);                               // 800
console.log(v2.penz);                               // 10000
console.log(v1.pizzakatListaz());                   // '2 darab sonkas-kukoricas pizza, 1 darab negysajtos pizza'
console.log(v2.pizzakatListaz());                   // 'Nincs rendeles!'
```
