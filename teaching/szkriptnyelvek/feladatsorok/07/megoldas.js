/* =====================================================================================================================
 * Szkriptnyelvek - 7. gyakorló feladatsor (Egy lehetséges megoldás)
 * A feladatsor linkje: https://cservz.github.io/teaching/szkriptnyelvek/feladatsorok/07/
 * ================================================================================================================== */

// === 1. feladat: Kézfogás ===

function kezfogas(letszam) {
    // Egy `n` emberből álló társaságban összesen `n*(n-1) / 2` kézfogás történhet (mert `n` ember `n-1` másik emberrel
    // foghat kezet, és az egyes kézfogásokat nem számoljuk duplán, ezért osztanunk kell kettővel)

    return letszam * (letszam-1) / 2;
}

// === 2. feladat: Egyezés ===

function egyezes(elso, masodik) {
    // A `===` operátor pont azt vizsgálja, hogy a két kifejezés értéke és típusa is megegyezik-e
    return elso === masodik;
}

// === 3. feladat: Város ===

function udvozol(varosNeve="Szeged") {  // Ha nem adjuk meg a város nevét, akkor alapból "Szeged" lesz a városnév
    return `Udvozoljuk ${varosNeve} varosaban!`;    // A template literálokkal egyszerűen adhatunk meg stringeket
}

// === 4. feladat: Kedves Ferenc ===

function kedves(nev) {
    if (nev === undefined)          // Ha nem adták meg a paraméter értékét, akkor `null`-lal térünk vissza
        return null;

    return nev === "Ferenc";        // Egyéb esetben visszaadjuk, hogy a paraméter a "Ferenc" szöveg-e
}

// === 5. feladat: Köbösszeg ===

function kobosszeg(a, b) {
    // Végigmegyünk az [a; b] intervallumba tartozó egész számokon, és összeadogatjuk azok köbét (harmadik hatványát)

    let osszeg = 0;

    for (let i = a; i <= b; i++)
        osszeg += (i ** 3);         // Hatványozás (természetesen ehelyett a `Math.pow(i, 3)` is tökéletes)

    return osszeg;
}

// === 6. feladat: "Okosabb" köbösszeg ===

function kobosszegetMeghiv(a, b, callback) {
    // Paraméterek típusának ellenőrzése (az első 2 paraméter szám, a 3. paraméter pedig egy függvény)
    if (typeof a === "number" && typeof b === "number" && typeof callback === "function") {
        // Meghívjuk a callback függvényt úgy, hogy az első paraméterben a két szám közül a kisebbet, második
        // paraméterben pedig a két szám közül a nagyobbat adjuk át. Ezután visszaadjuk a callback visszatérési értékét

        return callback(Math.min(a, b), Math.max(a, b));
    }
}

// === 7. feladat: Teve ===

function tevetIgenyel(nev, hivojel) {
    if (hivojel.length < 6)                         // Ha a hívójel 6 karakternél rövidebb...
        return "Tul rovid hivojel!";

    if (hivojel === nev)                            // Ha a hívójel megegyezik a teve nevével...
        return "Tul nyilvanvalo hivojel!";

    if (hivojel.toLowerCase().includes("teve"))     // Ha a hívójel bármilyen formában tartalmazza a "teve" szöveget...
        return "Tiltott szoveg a hivojelben!";

    return "Sikeres teveigenyles!";                 // Ha eddig nem volt hiba, akkor a teveigénylés sikeres
}

// === 8. feladat: Számjegyek átlaga ===

function szamjegyAtlag(szam) {
    if (typeof szam !== "number")                   // Hibakezelés: nem szám típusú paraméter
        return -1;

    // Ötlet: ahhoz, hogy be tudjuk járni a számjegyeket, alakítsuk szöveggé a számot!

    szam = Math.abs(szam);                          // Vesszük a szám abszolútértékét (negatív előjel eltüntetése)

    const szamjegyStr = String(szam);               // A paraméterben kapott szám szöveggé alakítása
    let atlag = 0;                                  // Változó a számjegyek átlagának

    for (let szamjegy of szamjegyStr)               // Rendre összeadogatjuk a számban található számjegyeket
        atlag += Number(szamjegy);

    atlag /= szamjegyStr.length;                    // Végül a számjegyek összegét elosztjuk a számjegyek darabszámával
    return atlag;
}

// === 9. feladat: Cenzúra (3 lehetséges megoldás) ===

function cenzura01(uzenet) {
    // Hagyományos megoldás: menjünk végig a szöveg karakterein! A mássalhangzókat tartsuk meg, a magánhangzók helyett
    // pedig egy csillag karaktert írjunk az eredmény szövegünkbe!

    const maganhangzok = "aeiou";                   // Az angol ábécé kisbetűs magánhangzói
    let eredmeny = "";                              // Változó az eredmény szövegnek

    for (let betu of uzenet) {
        if (maganhangzok.includes(betu.toLowerCase()))      // Ha az aktuális betű egy magánhangzó...
            eredmeny += "*";                                // ...az eredményhez egy csillag karaktert fűzünk hozzá
        else                                                // Egyébként pedig (ha a betű nem magánhangzó)...
            eredmeny += betu;                               // ...magát a betűt fűzzük hozzá az eredményhez
    }

    return eredmeny;
}

function cenzura02(uzenet) {
    // Egy másik megoldás: a `replace()` függvény használata a magánhangzók lecserélésére. Fontos, hogy ez a függvény
    // a paraméterben kapott szöveg LEGELSŐ előfordulását cseréli le alapból a stringben! Ha mi az ÖSSZES magánhangzót
    // szeretnénk lecserélni, akkor érdemes reguláris kifejezést (regexet) megadni!

    // Az `[aeiou]` azt jelenti, hogy az 'a', 'e', 'i', 'o' és 'u' betűk közül bármelyiket le akarjuk cserélni
    // A `g` betűvel jelezhetjük, hogy a stringben az ÖSSZES magánhangzót le akarjuk cserélni ('g', mint 'global')
    // Az `i` betűvel mondjuk meg, hogy a magánhangzók vizsgálata ne legyen kis- és nagybetűérzékeny ('i', mint 'insensitive')

    return uzenet.replace(/[aeiou]/gi, "*");
}

function cenzura03(uzenet) {
    // Egy másik megoldás: használjuk az ECMAScript2021 (ES2021) szabványban bevezetett `replaceAll()` függvényt, amely
    // a paraméterben kapott szöveg összes előfordulását lecseréli a stringen belül

    const maganhangzok = "aeiou";                   // Az angol ábécé kisbetűs magánhangzói

    for (let betu of uzenet) {                      // A magánhangzók összes előfordulását lecseréljük csillagra
        if (maganhangzok.includes(betu.toLowerCase()))
            uzenet = uzenet.replaceAll(betu, "*");
    }

    return uzenet;
}

// === 10. feladat: Színkód ===

function konvertal(hexaSzinkod) {
    // A `parseInt(szam, 16)` segítségével egyszerűen átalakíthatunk egy hexadecimális számot decimális számmá.
    // A '#' utáni első 2 betű lesz a vörös, az azutáni 2 betű lesz a zöld, az utolsó 2 betű lesz a kék szín mennyisége.
    // Ezeket a betűpárokat a `substr()` függvénnyel elegánsan ki tudjuk nyerni

    const voros = parseInt(hexaSzinkod.substr(1, 2), 16);
    const zold = parseInt(hexaSzinkod.substr(3, 2), 16);
    const kek = parseInt(hexaSzinkod.substr(5, 2), 16);

    return `rgb(${voros}, ${zold}, ${kek})`;
}

// === 11. feladat: Betűcsere ===

function betucsere(szoveg) {
    let eredmeny = "";                      // Ebben a változóban fogjuk előállítani az eredmény szöveget

    for (let betu of szoveg) {              // A paraméterben kapott szöveg karaktereinek bejárása
        // Ötlet: Ha egy karakter megegyezik a csupa kisbetűssé alakított változatával, akkor a karakter kisbetű

        if (betu === betu.toLowerCase())    // A kisbetűket nagybetűként fűzzük hozzá az eredményhez
            eredmeny += betu.toUpperCase();
        else                                // A nagybetűket kisbetűként fűzzük hozzá az eredményhez
            eredmeny += betu.toLowerCase();
    }

    return eredmeny;
}

// === 12. feladat: Python ===

function python(szoveg, index) {
    // Észrevétel: Az "Amennyiben túl- vagy alulindexeljük a stringet, akkor a visszatérési érték undefined legyen!"
    // részfeladatot nem kell külön lekódolnunk, hiszen JavaScriptben alapból `undefined`-ot kapunk akkor, ha egy
    // string nem létező indexére hivatkozunk (alul- vagy túlindexelés esetén pont ez történik)

    if (index < 0)                              // Negatív index esetén a szöveg végétől kezdünk el számolni
        return szoveg[szoveg.length + index];

    return szoveg[index];                       // A nemnegatív indexelést a JavaScript "tudja magától"
}

// === 13. feladat: Karakterek többszörözése ===

function karakterTobbszoroz(szoveg) {
    if (typeof szoveg !== "string" || szoveg === "")    // Hibakezelés: nem szöveges típusú vagy üres string paraméter
        return "HIBA!"

    let eredmeny = "";                          // Változó az eredmény szövegnek

    for (let i = 0; i < szoveg.length; i++)     // A paraméterben kapott szöveg karaktereinek bejárása
        for (let j = 0; j < i+1; j++)           // Minden karaktert hozzáfűzünk `i+1`-szer az eredményhez (azért `i+1`-szer, mert az `i` 0-ról indul)
            eredmeny += szoveg[i];

    return eredmeny;
}

// === 14. feladat: Háromszög ===

function haromszog(a, b, c) {
    if (a < 0 || b < 0 || c < 0)                    // Hibakezelés: negatív oldalhossz
        return "HIBA! Nem letezo haromszog!";

    if (a >= b + c || b >= a + c || c >= a + b)     // Hibakezelés: nem megszerkeszthető háromszög
        return "HIBA! Nem letezo haromszog!";

    const kerulet = a + b + c;                      // A háromszög kerületének kiszámítása
    const s = (a + b + c) / 2;                      // Az `s` változó a területszámításhoz kell
    const terulet = Math.sqrt(s * (s - a) * (s - b) * (s - c)); // A háromszög területének kiszámítása (Hérón-képlet)

    // A `toFixed(2)` metódussal 2 tizedesjegyre kerekítjük a kiszámolt kerületet és területet
    return `Kerulet: ${kerulet.toFixed(2)} cm, terulet: ${terulet.toFixed(2)} cm2`;
}

// === 15. feladat: Leghosszabb nyerőszéria ===

function leghosszabbNyeroszeria(eredmenyek) {
    let leghosszabb = 0;                        // Változó a leghosszabb nyerőszéria hosszának
    let aktualis = 0;                           // Változó a jelenlegi nyerőszéria hosszának

    for (let eredmeny of eredmenyek) {          // A paraméterben kapott szöveg karaktereinek bejárása
        if (eredmeny === "1") {                 // Ha az aktuális kört megnyertük ('1'-es karakter)...
            aktualis++;                         // ...kiszámoljuk a jelenlegi nyerőszéria hosszát

            if (aktualis > leghosszabb)         // Ha a jelenlegi nyerőszériánk hosszabb, mint az eddigi leghosszabb nyerőszéria...
                leghosszabb = aktualis;         // ...frissítjük a leghosszabb nyerőszéria hosszát
        } else {                                // Ha az aktuális kört elveszítettük...
            aktualis = 0;                       // ...lenullázzuk a jelenlegi nyerőszéria hosszát tároló változó értékét
        }
    }

    return leghosszabb;
}

// === 16. feladat: Tömörített szöveg kibontása ===

function kibont(tomoritett) {
    const szamjegyek = "0123456789";            // A lehetséges számjegyeket tároló szöveg
    let eredmeny = "";                          // Változó az eredmény szövegnek

    for (let i = 0; i < tomoritett.length; i++) {   // Bejárjuk a tömörített szöveg karaktereit
        const karakter = tomoritett[i];

        if (szamjegyek.includes(karakter)) {        // Ha az aktuális karakter egy számjegy...
            i++;                                    // ...a következő karakterrel fogjuk folytatni

            // Hozzáfűzzük az eredményhez a következő karaktert annyiszor, mint amennyi a számjegy értéke

            for (let j = 0; j < Number(karakter); j++)
                eredmeny += tomoritett[i];
        } else {                                    // A nem számjegy karaktereket "simán" hozzáfűzzük az eredményhez
            eredmeny += karakter;
        }
    }

    return eredmeny;
}
