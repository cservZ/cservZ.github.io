/* =====================================================================================================================
 * Szkriptnyelvek - 9. gyakorló feladatsor (Egy lehetséges megoldás)
 * A feladatsor linkje: https://cservz.github.io/teaching/szkriptnyelvek/feladatsorok/09/
 * ================================================================================================================== */

// === 1. feladat: Az `Etel` osztály ===

class Etel {
    // Konstruktor

    constructor(nev, kaloriaSzam) {
        this.nev = nev;                     // Létrehozzuk és inicializáljuk az adattagokat
        this.kaloriaSzam = kaloriaSzam;     // A setter meghívásával ellenőrzött módon állítjuk be az adattag értékét
        this._fogyaszthato = true;
    }

    // Get és set property-k

    get kaloriaSzam() {
        return this._kaloriaSzam;
    }

    set kaloriaSzam(ertek) {
        this._kaloriaSzam = ertek < 0 ? 0 : ertek;  // Negatív paraméter esetén az adattag értékét 0-ra állítjuk be
    }

    get fogyaszthato() {
        return this._fogyaszthato;
    }

    set fogyaszthato(ertek) {
        this._fogyaszthato = typeof ertek === "boolean" ? ertek : false;    // Ellenőrizzük a paraméter típusát
    }

    // Egyéb metódusok

    info() {
        return `${this.nev} (${this._kaloriaSzam} kaloria), fogyaszthato: ${this._fogyaszthato ? "igen" : "nem"}`;
    }
}

// === 2. feladat: A `Pizza` osztály ===

class Pizza extends Etel {      // A `Pizza` osztály az `Etel` osztályból öröklődik (minden pizza egyben egy étel is)
    // Konstruktor

    constructor(nev, kaloriaSzam, ar=1500) {    // Az árra vonatkozó paraméter értékét nem kötelező megadni
        if (!nev.endsWith("pizza"))     // Ha a név végén nem szerepel a "pizza" szöveg, akkor hozzáfűzzük azt a névhez
            nev += " pizza";

        super(nev, kaloriaSzam);
        this.ar = ar;                   // A setter meghívásával ellenőrzött módon állítjuk be az adattag értékét
        this.feltetek = [];
    }

    // Get és set property-k

    get ar() {
        return this._ar;
    }

    set ar(ertek) {
        this._ar = ertek < 0 ? 1000 : ertek;    // Negatív paraméter esetén az adattag értékét 1000-re állítjuk be
    }

    // Egyéb metódusok

    megromlik() {
        this._fogyaszthato = false;
        console.log("A pizza megromlott.");
    }

    feltetetFelvesz(feltet) {
        // Hibakezelés: nem object típusú paraméter vagy hiányzó property az object-en belül

        if (typeof feltet !== "object" || feltet["nev"] === undefined || feltet["kaloria"] === undefined) {
            console.log("HIBA! Nem egy feltet!");
            return;
        }

        // Hibakezelés: a property-khez tartozó értékek típusa nem megfelelő

        if (typeof feltet["nev"] !== "string" || typeof feltet["kaloria"] !== "number") {
            console.log("HIBA! Nem megfelelo tipus!");
            return;
        }

        // Hibakezelés: már létező feltét

        if (this.feltetek.includes(feltet["nev"])) {
            console.log("HIBA! Mar van ilyen feltet!");
            return;
        }

        // Sikeres feltét felvétel

        this.feltetek.push(feltet["nev"]);      // A feltét nevét a `feltetek` tömb végéhez fűzzük
        this.kaloriaSzam += feltet["kaloria"];  // A `_kaloriaSzam` adattag megnövelése (itt egy getter hívás történik)
        this._ar += 100;                        // Az `_ar` adattag megnövelése
        console.log("Feltet felvetel sikeres!");
    }

    info() {
        if (this.feltetek.length === 0)         // Ha nincsenek feltétek, akkor a feltétek felsorolását kivesszük a visszatérési értékből
            return `${super.info()}, ar: ${this._ar} forint`;   // Trükk: felhasználjuk az ősosztály `info()` metódusának visszatérési értékét

        // Ha vannak feltétek a pizzán, akkor azok nevét a `join()` tömbkezelő függvénnyel egyesíthetjük egy szöveggé
        return `${super.info()}, ar: ${this._ar} forint, feltetek: ${this.feltetek.join(", ")}`;
    }
}

// === 3. feladat: A `Vasarlo` osztály ===

class Vasarlo {
    // Konstruktor

    constructor(nev, penz) {
        this.nev = nev;
        this.penz = penz;
        this.rendelesek = [];
    }

    // Egyéb metódusok

    pizzatRendel(pizza) {
        if (!(pizza instanceof Pizza)) {            // Hibakezelés: nem `Pizza` típusú paraméter
            console.log("HIBA! Nem pizza!");
            return;
        }

        if (this.penz < pizza.ar) {                 // Hibakezelés: kevesebb pénz, mint amennyi a pizza ára
            console.log("HIBA! Nincs eleg penz!");
            return;
        }

        if (!pizza.fogyaszthato) {                  // Hibakezelés: nem fogyasztható pizza
            console.log("HIBA! Nem eheto pizza!");
            return;
        }

        // Sikeres rendelés

        this.penz -= pizza.ar;                      // A vásárló pénzének mennyiségét csökkentjük a pizza árával
        this.rendelesek.push(pizza.nev);            // Felvesszük a rendelések közé a pizza nevét
        console.log("Sikeres rendeles!");
    }

    pizzakatListaz() {
        if (this.rendelesek.length === 0)           // Ha nem rendelt a vásárló egyetlen pizzát sem...
            return "Nincs rendeles!";

        // Számoljuk meg egy object-ben, hogy a `rendelesek` tömbben melyik pizzanév hányszor szerepel! A property-k a
        // pizzanevek lesznek, az értékek pedig megmondják, hogy az adott pizzanév hányszor szerepel a rendelések között

        const statisztika = {};

        for (let pizzaNev of this.rendelesek)
            if (statisztika[pizzaNev] === undefined)    // Ha az adott pizzanevet még nem láttuk korábban...
                statisztika[pizzaNev] = 1;              // ...felvesszük 1-es előfordulási értékkel
            else                                        // Ha az adott pizzanevet már láttuk korábban...
                statisztika[pizzaNev]++;                // ...megnöveljük a hozzá tartozó előfordulás értéket

        // Az így kapott `statisztika` object tartalmát alakítsuk egy szöveggé!

        let eredmeny = "";

        for (let [pizzaNev, mennyiseg] of Object.entries(statisztika))  // Az object property-érték párjainak bejárása
            eredmeny += `${mennyiseg} darab ${pizzaNev}, `;

        return eredmeny.substr(0, eredmeny.length - 2); // Az utolsó 2 karaktert (vessző és szóköz) levágjuk
    }
}
