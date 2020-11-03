// 1. feladat (Teve)

function tevetIgenyel(nev, hivojel) {
    // típusellenőrzés: ha valamelyik paraméter nem string típusú, akkor "kilépünk" a függvényből
    // (ezt most a feladat nem kérte, csak azért csináltuk, hogy a fejlesztőkörnyezet feldobja a javaslatokat a stringkezelő függvényekre)

    if (typeof nev !== "string" || typeof hivojel !== "string") {   // a !== operátor az === tagadása
        return;
    }

    if (hivojel.length < 6) {                                   // ha a hívójel 6 karakternél rövidebb...
        console.log("Tul rovid hivojel")
    } else if (hivojel === nev) {                               // ha a hívójel megegyezik a teve nevével...
        console.log("Tul nyilvanvalo hivojel");
    } else if (hivojel.toLowerCase().indexOf("teve") >= 0) {    // ha a hívójel tartalmazza a "teve" szöveget bármilyen formában...
        console.log("Tiltott szoveg a hivojelben");
    } else {                                                    // minden egyéb esetben... van egy tevénk :monkayay:
        console.log("Sikeres teve igenyles");
    }
}

// 2. feladat (Köbösszeg)

function kobosszeg(a, b) {
    // a feladat szövege alapján feltesszük, hogy a paraméterek helyesek és a < b

    let osszeg = 0;                     // ebben a változóban fogjuk tárolni a számok köbeinek az összegét

    for (let i = a; i <= b; i++) {      // bejárjuk az [a; b] intervallumban található egész számokat
        osszeg += (i ** 3);             // hozzáadjuk az összeghez minden szám köbét (Math.pow(i, 3) vagy (i*i*i) is tökéletes lenne)
    }

    return osszeg;
}

// 3. feladat (Callback)

function kobosszegetMeghiv(a, b, callback) {
    // callback függvény: egy olyan függvény, amit egy másik függvénynek adunk paraméterül
    // a callback függvény (most ez a kobosszeg függvény lesz) meghívható abban a függvényben, ami őt paraméterül kapja

    if (typeof a === "number" && typeof b === "number" && typeof callback === "function") {         // paraméterek típusának ellenőrzése
        const kisebb = Math.min(a, b);              // a két szám minimuma
        const nagyobb = Math.max(a, b);             // a két szám maximuma

        return callback(kisebb, nagyobb);           // meghívjuk a callback függvényt (a kobosszeg-et) úgy, hogy az első paramétere a kisebb, a második paramétere pedig a nagyobb szám
    } else {
        console.log("HIBA: Nem megfelelo parameter tipus!");    // hibakezelés (mivel ebben az ágban nem adunk vissza semmit, ezért a visszatérési érték undefined)
    }
}

// 4. feladat (Imposztor)

function imposztor(imposztorokSzama, jatekosokSzama) {
    // ha az imposztorok száma vagy a játékosok száma nem megfelelő, hibakezelést végzünk

    if (imposztorokSzama < 1 || imposztorokSzama > 3 || jatekosokSzama < 2 || jatekosokSzama > 10) {
        return "Hiba";
    }

    // helyes paraméterek esetén kiszámítjuk a százalékértéket a képlet alapján, kerekítjük, és visszaaadjuk egy szövegben

    const szazalek = Math.round(100 * (imposztorokSzama / jatekosokSzama));     // Math.round(): hagyományos kerekítés, Math.floor(): lefelé kerekítés, Math.ceil(): felfelé kerekítés
    return `Dani ${szazalek}% valoszinuseggel lesz imposztor`;                  // template stringes megadás (ES2015-től): a behelyettesítendő kifejezéseket ${} segítségével adjuk meg
}

// 5. feladat (Számjegyek átlaga)

function szamjegyAtlag(szam) {
    if (typeof szam !== "number") {         // hibakezelés: nem szám típusú paraméter esetén -1 lesz a visszatérési érték
        return -1;
    }

    szam = Math.abs(szam);                  // abszolútértékkel eltüntetjük a negatív számok előjelét (később bezavarna, és NaN-t eredményezne)

    let atlag = 0;                          // változó az átlagnak
    let szoveg = String(szam);              // szöveggé alakítjuk a paraméterben kapott számot (így végig tudunk menni a számjegyein)

    for (let szamjegy of szoveg) {          // számjegyek bejárása listaszerű for-ciklussal (persze index alapú for-ciklus szintén jó lett volna)
        atlag += Number(szamjegy);          // a szám típusúra visszaalakított számjegyeket összeadjuk
    }

    atlag /= szoveg.length;                 // a kapott összeget elosztjuk a számjegyek darabszámával (szöveggé alakított szám hossza)
    return atlag;
}

// 6. feladat (Karakterek többszörözése)

function karakterTobbszoroz(szoveg, szam) {
    // hibakezelés: nem megfelelő típusú paraméterek, üres string első paraméter, 1-nél kisebb második paraméter

    if (typeof szoveg !== "string" || typeof szam !== "number" || szoveg === "" || szam < 1) {
        return "Hiba";
    }

    // a többszörözött karaktereket tartalmazó string előállítása

    let res = "";

    for (let karakter of szoveg) {              // bejárjuk az első paraméterben kapott szöveg összes karakterét
        for (let i = 0; i < szam; i++) {        // minden karaktert annyiszor hozzáfűzünk az eredmény stringünkhöz, mint amennyi a második paraméterben kapott szám
            res += karakter;
        }
    }
    
    return res;
}

// 7. feladat (E-mail cím generátor)

function emailCimetGeneral(teljesNev, szulEv=1970) {    // a születési évet nem kötelező megadni, alapértéke 1970 (default függvényparaméter)
    let email = "";                                 // ebben a változóban fogjuk előállítani az e-mail címet
    const nevek = teljesNev.split(" ");             // teljes név feldarabolása szóközök mentén -> egy tömbben visszakapjuk az egyes neveket

    for (let nev of nevek) {                        // nevek tömb bejárása listaszerűen (persze index alapján is bejárhattuk volna)
        email += nev.toLowerCase().substr(0, 3);    // minden név első 3 karakterét hozzáfűzzük az eredményhez, csupa kisbetűsen
    }

    email += szulEv % 10;                           // a születési év utolsó számjegyét is hozzáfűzzük az e-mail címhez
    email += "@duck.com";                           // végül, az e-mail címet a "@duck.com" szöveggel zárjuk le

    return email;
}

// 8. feladat (Cenzúra)

function cenzura(uzenet) {
    /* === 1. megoldás: a gyakorlaton tanultak használatával oldjuk meg a feladatot === */

    let res = "";                                   // ebben a változóban állítjuk elő az cenzúrázott szöveget (az eredeti szövegbe belepiszkálni nem ér, mert a string JavaScriptben is immutable!)
    const maganhangzok = "AEIOUaeiou";              // az egyszerűség kedvéért eltároljuk egy stringben az angol ábécé magánhangzóit kis- és nagybetűs formában

    for (let karakter of uzenet) {                  // bejárjuk az üzenetet karakterenként
        if (maganhangzok.indexOf(karakter) >= 0) {  // ha az adott karakter magánhangzó (benne van a magánhangzókat tároló stringben), egy csillagot fűzünk az eredmény stringhez
            res += "*";
        } else {                                    // mássalhangzó esetén nem cenzúrázunk, csak simán hozzáfűzzük a karaktert az eredmény stringhez
            res += karakter;
        }
    }

    return res;

    /* === 2. megoldás: A rövidebb módszer - használjunk reguláris kifejezést! === */

    // Ha JavaScriptben s1 egy string, akkor az s1.replace(s2, s3) függvény lecseréli az s1-ben az s2 részstring LEGELSŐ előfordulását az s3 stringre
    // Nekünk ez nem elég, ugyanis mi egy magánhangzónak az ÖSSZES előfordulását le akarjuk cserélni, ráadásul úgy, hogy a csere ne legyen érzékeny a kis- és nagybetűkre!
    
    // Megoldás: a replace() függvény első paraméterében egy reguláris kifejezést adunk meg (*Vietnam flashbacks to Oprendszerek, Fonya, Számtud, whatever*)
    // Vesszük az angol ábécé összes magánhangzóját [ és ] között - ez a szögletes zárójelek között felsorolt bármely karakter (most: bármely magánhangzó) egy példányára fog illeszkedni
    // A 'g' betűvel jelezzük, hogy az egész stringben az összes magánhangzót le szeretnénk cserélni ('g' itt a 'global' rövidítése lesz)
    // Az 'i' betűvel jelezzük, hogy a magánhangzók vizsgálata ne legyen érzékeny a kis- és nagybetűkre ('i' itt a 'case-insensitive'-ből jön)

    // return uzenet.replace(/[aeiou]/gi, "*");
}

// 9. feladat (Discord emote-ok)

// egy segédfüggvény, ami megszámolja, hogy az első paraméterben kapott szövegben a második paraméterben kapott betű hányszor fordul elő
// (btw, ilyen segédfüggvényeket írni házikban és ZH-kban is nyugodtan lehet, ha szükségetek van rá)

function count(szoveg, betu) {
    let ctr = 0;

    for (let karakter of szoveg) {
        if (karakter === betu) {
            ctr++;
        }
    }

    return ctr;
}

// a tényleges függvény, amit a feladat kér - ebben felhasználjuk az előző segédfüggvényt

function kirakhato(szo) {
    for (let karakter of szo) {             // bejárjuk a beérkező szó összes betűjét
        if (count(szo, karakter) > 1) {     // ha az adott betű 1-nél többször szerepel a szóban, akkor a szó nem rakható ki Discord emote-okból
            return false;
        }
    }

    return true;                            // ha sikerült bejárnunk a szót úgy, hogy egyszer sem léptünk ki false-szal, akkor a szó kirakható Discord emote-okból
}

// 10. feladat (Valaki éppen gépel...)

function gepeles(felhasznalok) {
    if (typeof felhasznalok !== "string" || felhasznalok === "") {      // hibakezelés: nem megfelelő típus vagy üres string paraméter
        return "Hiba";
    }

    const felhasznalokTomb = felhasznalok.split(";");                   // a szöveget feldaraboljuk pontosvesszők mentén -> egy tömbben visszakapjuk a felhasználók nevét

    if (felhasznalokTomb.length === 1) {                                // ha csak 1 felhasználó gépel éppen... 
        return `${felhasznalokTomb[0].trim()} eppen gepel...`;          // trim(): leszedi a whitespace karaktereket a string elejéről és végéről
    }

    if (felhasznalokTomb.length === 2) {                                // ha 2 felhasználó gépel...
        return `${felhasznalokTomb[0].trim()} es ${felhasznalokTomb[1].trim()} eppen gepel...`;
    }

    return `${felhasznalokTomb[0].trim()}, ${felhasznalokTomb[1].trim()} es ${felhasznalokTomb.length - 2} tovabbi felhasznalo eppen gepel...`;     // ha 2-nél több felhasználó gépel...
}

