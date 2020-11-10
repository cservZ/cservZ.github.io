// 1. feladat (Full stack)

function fullStack(frontend, backend) {
    let frontendTomb = frontend.split(";");         // feldaraboljuk a frontend-eseket tároló szöveget pontosvesszők mentén -> visszakapjuk a fejlesztők neveit egy tömbben
    let backendTomb = backend.split(";");           // ugyanezt megcsináljuk a backend-esek neveit tartalmazó szövegre is

    let fullStackTomb = [];                         // ebben a tömbben fogjuk tárolni azokat, akik frontend-esek és backend-esek is (visszatérési érték)

    for (let fejleszto of frontendTomb) {           // bejárjuk a frontend tömböt (persze a backend tömböt is bejárhattuk volna)
        if (backendTomb.indexOf(fejleszto) >= 0) {  // ha az aktuális fejlesztő a backend-esek között is szerepel...
            fullStackTomb.push(fejleszto);          // ...beszúrjuk full stack fejlesztőket tároló tömbbe
        }
    }

    return fullStackTomb;
}

// 2. feladat (Tömbelemek hatványozása)

function hatvanyoz(tomb, n) {
    if (!(tomb instanceof Array) || typeof n !== "number")      // hibakezelés: nem megfelelő típusú paraméterek
        return [];

    let tomb2 = [...tomb];                                      // lemásoljuk a tömböt (opcionális) - ennek hiányában az eredeti tömb értékeit módosítanánk (referencia szerinti paraméterátadás)

    for (let i = 0; i < tomb2.length; i++) {                    // bejárjuk a lemásolt tömböt
        tomb2[i] = tomb2[i] ** n;                               // minden elemnek vesszük az n-edik hatványát (itt persze Math.pow()-ot is használhattunk volna)
    }

    return tomb2;

    // NOTE: ha valaki ismeri a map()-et, akkor ez a feladat annak a segítségével is megoldható lett volna
    // return tomb.map(elem => elem ** n);
    // ------------------------------------------------------------------------------------------------------------
    // Itt paraméterben egy arrow function-t adunk át (ES2015 szabvány): 1 paraméterrel (elem) rendelkező függvény,
    // amely visszaadja az adott elem n-edik hatványát
}

// 3. feladat (Csak pozitívan)

function pozitivSzamok(tomb) {
    if (!(tomb instanceof Array))                       // hibakezelés: nem megfelelő típusú paraméter
        return undefined;

    let pozitivak = [];                                 // ebbe a tömbbe fogjuk kiválogatni a megfelelő elemeket

    for (let elem of tomb) {                            // a paraméterben kapott tömb bejárása
        if (typeof elem === "number" && elem > 0)       // ha az adott tömbelem pozitív és szám típusú...
            pozitivak.push(elem);                       // ...hozzáfűzzük az eredmény tömbünkhöz
    }

    return pozitivak;

    // NOTE: ha valaki ismeri a filter()-t, akkor ez a feladat annak a segítségével is megoldható
    // return tomb.filter(elem => typeof elem === "number" && elem > 0);
}

// 4. feladat (Kahoot)

function leghosszabbNyeroszeria(jatekosok) {
    let maxNyeroszeria = 0;                             // a leghosszabb nyerőszéria hosszát tároló változó
    let maxJatekos = "";                                // a leghosszabb nyerőszériával rendelkező játékost tároló változó

    let aktualisNyeroszeria = 1;                        // egy játékos aktuális nyerőszériáját tároló változó

    for (let i = 0; i < jatekosok.length - 1; i++) {    // bejárjuk a játékosokat tartalmazó tömböt index alapján
        if (jatekosok[i] === jatekosok[i+1]) {          // ha a következő kört ugyanaz a játékos nyerte, mint a mostani kört...
            aktualisNyeroszeria++;                      // ...növeljük a játékos aktuális nyerőszériáját
        } else {
            if (aktualisNyeroszeria > maxNyeroszeria) { // ha az így kiszámolt aktuális nyerőszéria hosszabb, mint az eddig ismert leghosszabb nyerőszéria...
                maxNyeroszeria = aktualisNyeroszeria;   // ...felülírjuk a maximális nyerőszéria hosszát...
                maxJatekos = jatekosok[i];              // ...és eltároljuk az aktuális játékost
            }

            aktualisNyeroszeria = 1;                    // ha a következő kört más nyerte, visszaállítjuk az aktuális nyerőszéria értékét 1-re
        }
    }

    return maxJatekos;                                  // visszaadjuk a leghosszabb nyerőszériával rendelkező játékost
}

// 5. feladat (Egyedi szavak száma)

function egyediSzavakSzama(szoveg) {
    let szavak = szoveg.toLowerCase().split(" ");       // eltároljuk a szavakat, csupa kisbetűssé alakítva (mert nem különböztetjük meg a kis- és nagybetűket)
    let egyediSzavak = [];                              // a szöveg szavait pontosan egyszer tartalmazó tömb

    for (let szo of szavak) {                           // végigmegyünk a szöveg szavain
        if (egyediSzavak.indexOf(szo) < 0)              // ha az adott szó még NEM szerepel az egyedi szavak tömbben...
            egyediSzavak.push(szo);                     // ...beszúrjuk a tömbbe (így mindenkit pontosan 1-szer tárolunk)
    }

    return egyediSzavak.length;                         // visszaadjuk az egyedi szavak számát

    // Persze ha elegánsak szeretnénk lenni, akkor használhatnánk halmazt is:
    // belerakjuk a szöveg szavait egy halmazba (ez minden szót egyszer fog eltárolni), és ennek a halmaznak az elemszámát adjuk vissza
    // --------------------------------------------------------------------------------------------------------------------------------
    // return new Set(szavak).size;
}

// 6. feladat (Ötöslottó)

function otoslotto() {
    let lottoszamok = [];                                       // ebben a tömbben fogjuk tárolni a kigenerált lottószámokat

    while (lottoszamok.length < 5) {                            // amíg nincs 5 darab lottószámunk...
        let randomSzam = Math.floor(Math.random() * 90) + 1;    // ...generálunk egy 1 és 90 közötti véletlenszerű egész számot...

        if (lottoszamok.indexOf(randomSzam) < 0)                // ...ha ezt a lottószámot még nem húztuk ki, beszúrjuk az eredmény tömbbe
            lottoszamok.push(randomSzam);
    }

    return lottoszamok;
}

// 7. feladat (Fájlok csoportosítása)

function fajlokatCsoportosit(fajlok) {
    let res = [ [], [], [] ];                       // 2-dimenziós tömb: elemei szintén tömbök (első tömb: Python fájlok, második tömb: JS fájlok, harmadik tömb: egyéb fájlok)

    for (let fajl of fajlok) {                                  // fájlok tömbjének bejárása
        let darabok = fajl.split(".");                          // fájl nevének feldarabolása pont karakterek mentén
        let kit = darabok[darabok.length - 1].toLowerCase();    // az utolsó pont utáni string lesz a kiterjesztés, ezt kisbetűsítve tároljuk el

        if (kit === "py")                                       // a "py" kiterjesztésű fájlokat a 2D tömb első "résztömbjébe" rakjuk
            res[0].push(fajl);
        else if (kit === "js")                                  // a "js" kiterjesztésű fájlokat a 2D tömb második "résztömbjébe" rakjuk
            res[1].push(fajl);
        else                                                    // minden egyéb kiterjesztést a 2D tömb harmadik "résztömbjébe" rakunk
            res[2].push(fajl);
    }

    return res;
}

// 8. feladat (Statisztika)

function statisztika(pontok) {
    if (!(pontok instanceof Array) || pontok.length < 3)        // hibakezelés: nem megfelelő típusú paraméter vagy 3-nál kevesebb elem a tömbben
        return {};

    let atl = 0;                                                // változó az átlagnak
    let med = 0;                                                // változó a mediánnak
    let terj = 0;                                               // változó a terjedelemnek

    // átlag kiszámítása

    for (let pont of pontok)
        atl += pont;

    atl /= pontok.length;

    // medián kiszámítása

    pontok.sort(function(a, b) { return a - b; });              // pontok növekvő sorrendbe rendezése (https://www.w3schools.com/js/js_array_sort.asp)

    if (pontok.length % 2 === 1)                                // páratlan hosszú tömb esetén visszaadjuk a középső elemet
        med = pontok[Math.floor(pontok.length/2)];              // az indexet itt egész számra kell kerekíteni, hiszen az osztás is alapból lebegőpontos osztás
    else                                                        // páros hosszú tömb esetén a medián a két középső elem átlaga
        med = (pontok[pontok.length/2 - 1] + pontok[pontok.length/2]) / 2;

    // terjedelem kiszámítása

    terj = pontok[pontok.length - 1] - pontok[0];               // a maximum a rendezett tömb utolsó eleme, míg a minimum a rendezett tömb első eleme

    // eredmény visszaadása egy object-ben

    return { atlag: atl, median: med, terjedelem: terj };
}

// 9. feladat (Szavazatok)

function szavazas(memek) {
    let res = {};                           // ebben az object-ben fogjuk eltárolni a mémeket és az azokra érkezett szavazatok számát

    for (let mem of memek) {                // mémek bejárása
        mem = mem.toLowerCase();            // a mém nevét kis- és nagybetűkre NEM érzékeny módon vizsgáljuk

        if (res[mem] === undefined)         // ha az aktuális mém még nem szerepel property-ként az object-ben, felvesszük (alapból 1 szavazattal)
            res[mem] = 1;
        else                                // ha már szerepelt az object-ben, akkor növeljük a hozzá tartozó szavazatok számát 1-gyel
            res[mem]++;
    }

    return res;
}

// 10. feladat (Nyertes)

function nyertesMem(memek) {
    let stat = szavazas(memek);             // a mémeket és az azokra leadott szavazatok számát összesítő object eltárolása egy változóban

    let maxSzavazatok = -1;                 // a legtöbb szavazat, ami egy mémre érkezett
    let nyertes = "";                       // a letöbb szavazattal rendelkező mém neve

    for (let [mem, szavazat] of Object.entries(stat)) {             // bejárjuk az object-et kulcs-érték párok alapján
        if (szavazat > maxSzavazatok) {                             // ha az adott mémre több szavazat érkezett, mint az eddigi maximális szavazatszám...
            maxSzavazatok = szavazat;                               // ...felülírjuk a legtöbb szavazatnak az értékét...
            nyertes = mem;                                          // ...eltároljuk a nyertes mémet is
        }
    }

    return nyertes;
}
