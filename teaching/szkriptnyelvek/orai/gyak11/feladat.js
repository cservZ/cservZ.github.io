/*
* Ezen a gyakorlaton egy feladatsor megoldásán keresztül ismerkedtünk meg a JavaScript objektumorientált lehetőségeivel.
* A feladatsor linkje: https://cservz.github.io/teaching/szkriptnyelvek/orai/gyak11/oop_feladat.pdf
*/

// === 1. feladat: A `Mappa` osztály ===

class Mappa {
    // Konstruktor (JavaScriptben is mindig itt fogjuk létrehozni és inicializálni az adattagokat).

    constructor(nev, meret=0) {         // A méret paraméter értékét nem kötelező megadni, alapértéke 0 lesz.
        this.nev = nev;
        this.meret = meret;         // A setter meghívásával ellenőrzött módon állítjuk be a `_meret` adattag értékét.
        this.tartalom = [];
    }

    // Get és set property a `_meret` adattaghoz.

    get meret() {
        return this._meret;
    }

    set meret(ertek) {
        // Ha a paraméter nem szám típusú vagy egy negatív érték, akkor 0-ra állítjuk be az adattag értékét, egyéb
        // esetben pedig a paraméterben kapott értékre. A feltételvizsgálatra itt most a C-ből ismerős ternary
        // operátort használjuk (természetesen hagyományos `if`+`else` is írható ehelyett).

        this._meret = typeof ertek === "number" && ertek >= 0 ? ertek : 0;
    }

    // Egyéb metódusok.

    allomanytFelvesz(fajlNev, fajlMeret) {
        // Ha volt már ilyen nevű fájlunk a mappában, akkor hibaüzenetet íratunk ki a konzolra.

        if (this.tartalom.includes(fajlNev)) {      // Megnézzük, hogy a `fajlNev` szerepel-e a `tartalom` tömbben.
            console.log("Hiba! Mar letezo allomany!");
            return;
        }

        // Ha még nem volt ilyen nevű fájlunk, akkor beszúrjuk a fájl nevét a `tartalom` tömb végére, illetve a
        // `_meret` adattag értékét megnöveljük a fájl méretével.

        this.tartalom.push(fajlNev);
        this._meret += fajlMeret;

        // MEGJEGYZÉS: A feladatsor nem írja, hogy a `fajlMeret` lehet-e negatív szám, ezért az ebből származó hibákat
        // nem kell lekezelnünk (ZH-n sem). Ha valaki ennél precízebb megoldást szeretne készíteni, akkor el lehet
        // végezni a hibakezelést, de anélkül is teljes értékű a megoldás (nyilván ZH-n is).
    }

    info() {
        // Ha egy szövegben több behelyettesítendő érték van, akkor használhatjuk a korábban tanult template literálokat
        // a szöveg megadására (persze stringösszefűzésekkel is megoldhatjuk a feladatot, ha szeretnénk).

        return `${this.nev} mappa, ${this._meret} bajt, ${this.tartalom.length} allomany`;
    }
}

// === 2. feladat: A `MemesMappa` osztály ===

class MemesMappa extends Mappa {        // A `MemesMappa` osztály a `Mappa` osztályból öröklődik.
    // Konstruktor.

    constructor(nev, meret=420) {   // A méret paraméter értékét nem kötelező megadni, alapértéke 420 lesz.
        super(nev, meret);                  // Az ősosztály (`Mappa`) konstruktorának hívása.
    }

    // Egyéb metódusok.

    allomanytFelvesz(fajlNev, fajlMeret) {  // Egy ősosztályból örökölt metódus felüldefiniálása (overriding).
        // Lekérdezzük a fájlnév alapján a kiterjesztést. Ez a legutolsó pont karakter után szereplő szöveg lesz. Ezt a
        // kis- és nagybetűktől függetlenül vizsgáljuk, így érdemes (mondjuk) csupa kisbetűssé alakítani.

        const darabok = fajlNev.split(".");                       // A fájlnév feldarabolása pont karakterek mentén.
        const kit = darabok[darabok.length - 1].toLowerCase();    // A legutolsó feldarabolt érték lesz a kiterjesztés.

        // Ha a fájl kiterjesztése "jpg", "png" vagy "mp4", akkor az ősosztály `allomanytFelvesz` metódusával
        // megpróbáljuk felvenni a paraméterben kapott fájlt a mappánkba.

        if (kit === "jpg" || kit === "png" || kit === "mp4")
            super.allomanytFelvesz(fajlNev, fajlMeret);
    }

    memeketTorol() {
        this.tartalom = [];
        this.meret = 0;         // Itt az a szép, ha az ősosztály `_meret` adattagját a setteren keresztül állítjuk be.
    }
}

// === Tesztelés ===

const mappa1 = new Mappa("Letöltések", 1024);     // A `Mappa` osztály példányosítása.
const mappa2 = new Mappa("Cuccok");

console.log(mappa2.meret);                                  // Mérethez tartozó get property tesztelése.
mappa2.meret = 2048;                                        // Mérethez tartozó set property tesztelése.

mappa2.allomanytFelvesz("macska.txt", 100);  // Az `allomanytFelvesz` metódus tesztelése.
mappa2.allomanytFelvesz("valami.pdf", 1000);
mappa2.allomanytFelvesz("macska.txt", 200);  // (A hibakezelés miatt őt nem fogjuk még egyszer felvenni.)

console.log(mappa1.info());                                 // Az `info` metódus tesztelése.
console.log(mappa2.info());
console.log(mappa1);                                        // A két mappa objektum kiíratása.
console.log(mappa2);

console.log("--------------------------------------------------------------------------------------");

const memesMappa = new MemesMappa("Dank Memes");        // A `MemesMappa` osztály példányosítása.

console.log(memesMappa instanceof MemesMappa); // Osztályok esetén típusellenőrzést az `instanceof` kulcsszóval végzünk.
console.log(memesMappa instanceof Mappa);      // Ez is igaz, hiszen minden `MemesMappa` egyben `Mappa` is.

memesMappa.allomanytFelvesz("VALAMI.JPG", 10000);   // Az `allomanytFelvesz` metódus tesztelése.
memesMappa.allomanytFelvesz("rick.roll.mp4", 100000);
memesMappa.allomanytFelvesz("macska.txt", 100);
memesMappa.allomanytFelvesz("rick.roll.mp4", 100000);
console.log(memesMappa);

memesMappa.memeketTorol();                      // A `memeketTorol` metódus tesztelése.
console.log(memesMappa.info());
console.log(memesMappa);
