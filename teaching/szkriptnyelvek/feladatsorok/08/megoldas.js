/* =====================================================================================================================
 * Szkriptnyelvek - 8. gyakorló feladatsor (Egy lehetséges megoldás)
 * A feladatsor linkje: https://cservz.github.io/teaching/szkriptnyelvek/feladatsorok/08/
 * ================================================================================================================== */

// === 1. feladat: Számok kiválogatása ===

function szamokatKivalogat(tomb) {
    // Ha van egy olyan feladatunk, hogy "válogassuk ki egy tömbből azokat az elemeket, amelyek egy megadott feltételnek
    // eleget tesznek", akkor ezt akár 1 sorban is megoldhatjuk a `filter()` metódussal. Ez egy callback függvényt vár
    // paraméterben, amit minden tömbelemre meghív. A callback függvényben megadunk egy feltételt (most azt vizsgáljuk,
    // hogy szám típusúak-e a tömbelemek), és a `filter()` visszaadja egy új tömbben mindazon tömbelemeket, amelyek a
    // megadott feltételnek eleget tesznek (itt: szám típusúak)

    return tomb.filter(elem => typeof elem === "number");

    // MEGJEGYZÉS: Természetesen a feladat imperatívan (egy for-ciklus + if párossal) is megoldható
}

// === 2. feladat: Stringek összefűzése ===

function stringeketOsszefuz(tomb) {
    // Itt is trükközhetünk azzal, hogy a `filter()` metódussal kiválogatjuk egy új tömbbe a string típusú elemeket
    const stringek = tomb.filter(elem => typeof elem === "string");

    // Ha a stringeket egyesítjük (a tömbünk `join()` metódusával), akkor ez lényegében a stringösszefűzésnek felel meg
    return stringek.join("");

    // MEGJEGYZÉS: Azt is csinálhattuk volna, hogy egy ciklussal végigmegyünk a tömbön és a stringeket összefűzzük
}

// === 3. feladat: "Szép tömb" ===

function szepTomb(tomb) {
    if (!(tomb instanceof Array))           // Nem tömb típusú paraméter esetén hamisat adunk vissza
        return false;

    if (tomb.length <= 1)                   // A 0 és 1 elemű tömbök nyilvánvalóan ugyanolyan típusú adatokat tárolnak
        return true;

    const tipus = typeof tomb[0];           // Az 1-nél több elemű tömbök esetén eltároljuk a legelső tömbelem típusát

    for (let i = 1; i < tomb.length; i++)   // Bejárjuk a többi tömbelemet
        if (typeof tomb[i] !== tipus)       // Ha valakinek a típusa eltér az első elem típusától, a tömb "nem szép"
            return false;

    return true;                            // Ha csak azonos típusú elemeink vannak, akkor a tömb "szép"
}

// === 4. feladat: Tömbelemek hatványozása ===

function hatvanyoz(tomb, kitevo) {
    if (!(tomb instanceof Array) || typeof kitevo !== "number")     // Hibakezelés: valamelyik paraméter típusa hibás
        return [];

    // Ha van egy olyan feladatunk, hogy "egy tömb minden elemére hajtsunk végre valamilyen műveletet", akkor ezt a
    // `map()` metódussal akár 1 sorban is megoldhatjuk. A `map()` metódus a paraméterében kapott callback függvényt
    // minden tömbelemre meghívja. A callback függvényben megadunk egy műveletet (most egy hatványozást), és a `map()`
    // visszaadja egy új tömbben a művelet (itt: hatványozás) végrehajtása után kapott tömbelemeket

    return tomb.map(elem => elem ** kitevo);        // Mindenkit a `kitevo`-edik hatványára emelünk

    // MEGJEGYZÉS: Természetesen a feladat imperatívan (egy for-ciklus segítségével) is megoldható
}

// === 5. feladat: Karácsony ===

function kisKaracsonyNagyKaracsony(aktualisNap, napokSzama) {
    // Ötlet: tároljuk el a hét napjait egy tömbben! Keressük meg, hogy az `aktualisNap` hányas indexén lakik a napokat
    // tároló tömbnek! Ehhez az indexhez adjuk hozzá a `napokSzama` értékét, majd képezzük az így kapott összegnek a
    // 7-tel vett osztási maradékát (így megkapjuk annak a napnak az indexét, amilyen napra a karácsony esik)!

    const napok = ["hetfo", "kedd", "szerda", "csutortok", "pentek", "szombat", "vasarnap"];
    const index = (napok.indexOf(aktualisNap) + napokSzama) % 7;

    return napok[index];        // Visszaadjuk, hogy milyen napra esik karácsony
}

// === 6. feladat: Full stack ===

function fullStack(frontendesek, backendesek) {
    // Feldaraboljuk a paraméterben kapott szövegeket pontosvesszők mentén. Így megkapjuk a front-end fejlesztők és
    // a back-end fejlesztők neveit egy-egy tömbben

    const frontendTomb = frontendesek.split(";");
    const backendTomb = backendesek.split(";");

    // Ötlet: a korábban látott `filter()` metódussal válogassuk ki valamelyik tömbből (mondjuk a front-endeseket tároló
    // tömbből) azokat a fejlesztőket, akik a másik tömbben is szerepelnek!

    return frontendTomb.filter(fejleszto => backendTomb.includes(fejleszto));
}

// === 7. feladat: Valaki éppen gépel... ===

function gepeles(szoveg) {
    if (typeof szoveg !== "string" || szoveg === "")       // Hibakezelés: hibás típusú vagy üres string paraméter
        return "HIBA!";

    // A paraméterben kapott szöveg pontosvesszők mentén való feldarabolásával megkaphatjuk a gépelő felhasználókat egy
    // tömbben. Emellett még el kell távolítanunk a felhasználók neve elejéről és végéről a fölösleges whitespace
    // karaktereket (`trim()` függvény) - ezt a korábban látott `map()` metódussal minden tömbelemre meg tudjuk csinálni

    const felhasznalok = szoveg.split(";").map(felhasznalonev => felhasznalonev.trim());    // A whitespace-ek nélküli nevek tömbje

    if (felhasznalok.length === 1)                         // Ha pontosan 1 felhasználó gépel...
        return `${felhasznalok[0]} eppen gepel...`;

    if (felhasznalok.length === 2)                         // Ha pontosan 2 felhasználó gépel...
        return `${felhasznalok[0]} es ${felhasznalok[1]} eppen gepel...`;

    // Ha 2-nél több felhasználó gépel...
    return `${felhasznalok[0]}, ${felhasznalok[1]} es ${felhasznalok.length - 2} tovabbi felhasznalo eppen gepel...`;
}

// === 8. feladat: Ötöslottó ===

function otoslotto() {
    const lottoszamok = [];                     // Egy tömb, amiben a kigenerált lottószámokat fogjuk tárolni

    while (lottoszamok.length < 5) {            // Pontosan 5 darab véletlenszámot fogunk generálni
        const lottoszam = Math.floor(Math.random() * 90 + 1);   // 1 és 90 közötti véletlen egész szám generálása

        if (!lottoszamok.includes(lottoszam))   // Ha még korábban nem generáltunk ki az adott véletlenszámot...
            lottoszamok.push(lottoszam);        // ...berakjuk azt a lottószámokat tároló tömbbe
    }

    // Növekvő sorrendbe rendezzük a lottószámokat (magyarázat: https://www.w3schools.com/js/js_array_sort.asp)
    lottoszamok.sort((a, b) => a - b);

    return lottoszamok;
}

// === 9. feladat: E-mail cím generátor ===

function emailCimetGeneral(teljesNev, szuletesiEv=1970) {   // A születési év paramétert nem kötelező megadni
    let emailCim = "";                      // Ebben a változóban fogjuk előállítani a generált e-mail címet

    const nevek = teljesNev.split(" ");     // A teljes név feldarabolása szóköz karakterek mentén

    for (let nev of nevek)                  // Minden névnek vesszük az első 3 betűjét, csupa kisbetűvel
        emailCim += nev.substr(0, 3).toLowerCase();

    emailCim += szuletesiEv % 10;   // A születési év utolsó számjegye megegyezik az év 10-zel vett osztási maradékával
    emailCim += "@duck.com";        // Az e-mail cím végéhez hozzáfűzzük a "@duck.com" szöveget

    return emailCim;
}

// === 10. feladat: Egyszámjáték ===

function egyszamjatek(szamok) {
    while (szamok.length > 0) {
        // Amíg vannak számok a paraméterben kapott tömbben, addig mindig megkeressük a tömbben lévő legnagyobb értéket
        const legnagyobb = Math.max(...szamok);     // A ... operátor "kicsomagolja" a tömböt, így a tömbben lévő számokat kvázi egyesével adjuk át a `Math.max()`-nak

        // Ha a legnagyobb szám pontosan 1-szer fordult elő a tömbben, akkor készen vagyunk, visszaadjuk a számot
        if (szamok.filter(szam => szam === legnagyobb).length === 1)
            return legnagyobb;

        // Egyébként kitöröljük a szám összes előfordulását a tömbből, és folytatjuk a következő legnagyobb elemmel
        szamok = szamok.filter(szam => szam !== legnagyobb);
    }

    return -1;      // Ha minden tömbelemet kitöröltünk, akkor nem volt nyertes tipp, tehát -1-gyel térünk vissza
}

// === 11. feladat: Fájlok rendszerezése ===

function fajlokatRendszerez(fajlok) {
    let eredmeny = [[], [], []];        // Egy 2-dimenziós tömb, ami a visszatérési értékünk lesz

    for (let fajl of fajlok) {          // A tömbben szereplő fájlok bejárása
        // A kiterjesztés a legutolsó pont karakter után szereplő szöveg lesz. A kiterjesztéseket a kis- és nagybetűktől
        // függetlenül vizsgáljuk, ezért érdemes a kiterjesztéseket egységesen (mondjuk) csupa kisbetűssé alakítani

        const darabok = fajl.split(".");
        const kit = darabok[darabok.length - 1].toLowerCase();

        // A kiterjesztés értékének függvényében beszúrjuk a fájlnevet az eredmény tömb megfelelő "rekeszébe"

        switch (kit) {
            case "py": eredmeny[0].push(fajl); break;
            case "js": eredmeny[1].push(fajl); break;
            default: eredmeny[2].push(fajl);
        }
    }

    return eredmeny;
}

// === 12. feladat: Mátrix transzponálás ===

function transzponal(matrix) {
    const eredmeny = [];                // Ebben a változóban fogjuk tárolni a transzponálás után kapott mátrixot

    for (let j = 0; j < matrix[0].length; j++) {    // Most a paraméterben kapott mátrix oszlopait járjuk be először
        const sor = [];                 // Minden oszlopból készítünk egy sort, amit hozzáveszünk majd a transzponálthoz

        for (let i = 0; i < matrix.length; i++)     // Ezt követően bejárjuk az adott oszlop sorait
            sor.push(matrix[i][j]);     // Az oszlopon belüli elemeket hozzáfűzzük az eredmény mátrix egy sorához

        eredmeny.push(sor);             // Az így kapott sort hozzáfűzzük az eredmény mátrixhoz
    }

    return eredmeny;
}

// === 13. feladat: Számok csoportosítása ===

function szamokatCsoportosit(szoveg) {
    const eredmeny = {pozitiv: [], nulla: [], negativ: []};     // Ezt az object-et fogjuk majd visszaadni

    // Feldaraboljuk a szöveget pontosvesszők mentén, majd a `map()` metódussal mindenkit számmá konvertálunk
    const szamok = szoveg.split(";").map(darab => Number(darab));

    for (let szam of szamok)        // A számok bejárása
        if (szam > 0)               // Minden számot beszúrunk a megfelelő property-hez tartozó tömbbe
            eredmeny.pozitiv.push(szam);
        else if (szam === 0)
            eredmeny.nulla.push(szam);
        else
            eredmeny.negativ.push(szam);

    return eredmeny;
}

// === 14. feladat: Statisztika ===

function statisztika(pontok) {
    if (!(pontok instanceof Array) || pontok.length < 3)    // Hibakezelés: nem tömb vagy túl rövid tömb paraméter
        return {};

    const eredmeny = {atlag: 0, median: 0, terjedelem: 0};  // Ebben a object-ben fogjuk kiszámolni a 3 statisztikai adatot

    // A pontszámok átlagának kiszámítása

    for (let pont of pontok)
        eredmeny.atlag += pont;

    eredmeny.atlag /= pontok.length;

    // A pontszámok mediánjának kiszámítása

    pontok.sort((a, b) => a - b);   // Pontszámok sorbarendezése (fontos, hogy számokként rendezzük őket a korábban látott módon!)

    if (pontok.length % 2 === 0)             // Páros elemszám esetén a medián a két középső elem átlaga
        eredmeny.median = (pontok[pontok.length / 2] + pontok[pontok.length / 2 - 1]) / 2;
    else                                    // Páratlan elemszám esetén a medián a középső elem
        eredmeny.median = pontok[Math.floor(pontok.length / 2)];    // Az index itt alapból egy tört, ezért azt lefelé kerekítjük

    // A pontszámok terjedelmének kiszámítása (kihasználhatjuk, hogy sorba lettek rendezve az elemek, így elegendő
    // a legutolsó és legelső elem különbségét vennünk)

    eredmeny.terjedelem = pontok[pontok.length - 1] - pontok[0];

    return eredmeny;
}

// === 15. feladat: Kérdőív ===

function valaszokatOsszesit(tantargyak) {
    const stat = {};        // Ebben az object-ben fogjuk megszámolni, hogy melyik tantárgyra hány szavazat érkezett

    for (let tantargy of tantargyak) {          // A paraméterben érkező tömbben szereplő tantárgyak bejárása
        tantargy = tantargy.toLowerCase();      // A tantárgyak nevében a kis- és nagybetűket nem különböztetjük meg

        if (stat[tantargy] === undefined)       // Ha a tantárgy még nem szerepel az object property-jei között...
            stat[tantargy] = 1;                 // ...beszúrjuk azt 1-es előfordulás értékkel (most láttuk először)
        else                                    // Ha a tantárgy már szerepel az object property-jei között...
            stat[tantargy]++;                   // ...megnöveljük a hozzá tartozó előfordulás értéket
    }

    return stat;
}

// === 16. feladat: Legnehezebb tárgy ===

function legnehezebbTargy(statisztika) {
    // Meg kell keresnünk a paraméterben kapott object-ben azt a property-t, amihez a legnagyobb érték tartozik

    let legtobbSzavazat = -1;       // Ebben a változóban fogjuk tárolni az object-ben szereplő legnagyobb értéket
    let horrorTargy = "";           // Ebben a változóban fogjuk tárolni a legnagyobb értékhez tartozó property-t

    for (let [tantargy, szavazatok] of Object.entries(statisztika)) {   // Object property-érték párjainak bejárása
        if (szavazatok > legtobbSzavazat) {                             // Egy egyszerű maximumkeresés
            legtobbSzavazat = szavazatok;
            horrorTargy = tantargy;
        }
    }

    return horrorTargy;
}

// === 17. feladat: Szavazat különbség ===

function szavazatKulonbseg(statisztika) {
    // Az `Object.values()` visszaadja az object értékeit, tehát a szavazatok számát egy tömbben. Keressük meg a
    // legnagyobb és legkisebb értéket, és adjuk vissza a közöttük lévő különbséget!

    const szavazatok = Object.values(statisztika);
    return Math.max(...szavazatok) - Math.min(...szavazatok);
}
