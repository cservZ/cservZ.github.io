// Az Etel osztály

class Etel {
    // konstruktor

    constructor(nev, kaloria) {      
        this.nev = nev;                     // adattagok létrehozása és inicializálása (a this kulcsszót minden esetben ki kell írnunk, ezzel az aktuális objektumra hivatkozunk)
        this.kaloriaSzam = kaloria;         // a set property meghívásával garantáljuk, hogy a _kaloriaSzam értéke ne lehessen negatív (ez egy későbbi feladat)
        this._fogyaszthato = true;          // az adattag neve előtti alulvonás jelzi, hogy az adattagot nem publikus használatra szánjuk (ofc ettől még "kívülről" ugyanúgy elérhető lesz)
    }

    // get és set property a _kaloriaSzam adattaghoz

    get kaloriaSzam() {                     // a get property-vel lekérdezhetjük az adattag értékét
        return this._kaloriaSzam;
    }

    set kaloriaSzam(ertek) {                // a set property-vel beállíthatjuk az adattag értékét
        if (ertek < 0)                      // hibakezelés: negatív paraméter esetén az adattag értékét 0-ra állítjuk be
            this._kaloriaSzam = 0;
        else
            this._kaloriaSzam = ertek;
    }

    // get és set property a _fogyaszthato adattaghoz

    get fogyaszthato() {
        return this._fogyaszthato;
    }

    set fogyaszthato(ertek) {
        if (typeof ertek === "boolean")     // típusellenőrzés
            this._fogyaszthato = ertek;
        else
            this._fogyaszthato = false;
    }

    // egyéb metódusok

    info() {
        return `${this.nev} (${this.kaloriaSzam} kaloria)`; // itt használjuk a korábban megismert template string-eket (ECMAScript2015)
    }
}

// A Pizza osztály

class Pizza extends Etel {      // öröklődés az extends kulcsszóval valósítható meg (csak egyszeres öröklődés!)
    // konstruktor
    
    constructor(nev, kaloriak, ar=1500) {           // az ár paramétert nem kötelező megadni, alapértéke 1500
        if (!nev.endsWith("pizza"))                 // ha a pizza neve nem végződik a "pizza" szövegre, akkor hozzáfűzzük azt a névhez
            nev += " pizza";

        super(nev, kaloriak);                       // ősosztály konstruktorának meghívása
        this.ar = ar;
        this.feltetek = [];
    }

    // get és set property az _ar adattaghoz

    get ar() {
        return this._ar;
    }

    set ar(ertek) {
        if (ertek < 0)
            this._ar = 1000;
        else
            this._ar = ertek;
    }

    // egyéb metódusok

    megromlik() {
        this.fogyaszthato = false;                  // setteren keresztül módosítjuk az Etel _fogyaszthato adattagjának az értékét (this helyett super-t is írhattunk volna)
        console.log("A pizza megromlott.");
    }

    feltetetHozzaad(feltet) {
        if (typeof feltet !== "object" || feltet.nev === undefined || feltet.kaloria === undefined) {   // nem object vagy hiányos property-kkel rendelkező object
            console.log("Hiba: nem egy feltet!");
        } else if (typeof feltet.nev !== "string" || typeof feltet.kaloria !== "number") {              // nem megfelelő típusú property értékkel rendelkező object
            console.log("Hiba: nem megfelelo tipus!");
        } else if (this.feltetek.indexOf(feltet.nev) >= 0) {                                            // már van ilyen nevű feltétünk a feltetek tömbben
            console.log("Hiba: mar van ilyen feltet!");
        } else {
            // sikeres rendelés...

            this.feltetek.push(feltet.nev);                 // feltét nevének beszúrása a feltetek tömbbe
            this.kaloriaSzam += feltet.kaloria;             // kalóriaszám megnövelése a feltétben található kalóriák számával
            this.ar += 100;                                 // ár megnövelése 100 forinttal
            console.log("Feltet felvetel sikeres!");
        }
    }

    info() {                                                // overriding: ősosztálybeli metódus működésének felüldefiniálása a gyermekosztályban
        let res = `${super.info()}, ar: ${this.ar} forint`;

        if (this.feltetek.length === 0)                     // ha nincs egyetlen feltétünk sem, akkor visszaadjuk a res változóban tárolt szöveget
            return res;

        res += `, feltetek: ${this.feltetek.join(", ")}`;   // ha vannak feltéteink, akkor ehhez a szöveghez hozzáfűzzük a feltetek tömb stringgé való egyesítését (join() metódus)
        return res;
    }
}

// A Vasarlo osztály

class Vasarlo {
    // konstruktor

    constructor(nev, penz) {
        this.nev = nev;
        this.penz = penz;
        this.rendelesek = [];
    }

    // egyéb metódusok

    pizzatRendel(pizza) {
        if (!(pizza instanceof Pizza)) {            // nem Pizza típusú paraméter (a instanceof B: visszaadja, hogy az 'a' objektum a 'B' osztály példánya-e)
            console.log("Hiba: nem pizza!");
        } else if (this.penz < pizza.ar) {          // nincs elég pénz a pizza megvételéhez
            console.log("Hiba: nincs eleg penz!");
        } else if (!pizza.fogyaszthato) {           // nem fogyasztható a pizza
            console.log("Hiba: nem eheto pizza!");
        } else {                                    // sikeres rendelés: pénz csökkentése a pizza árával + pizza nevének beszúrása a rendelesek tömbbe
            this.penz -= pizza.ar;
            this.rendelesek.push(pizza.nev);
            console.log("Sikeres rendeles!");
        }
    }

    pizzakatListaz() {
        if (this.rendelesek.length === 0)          // ha nincs egyetlen rendelés sem...
            return "Nincs rendeles.";

        let stat = {};                             // ha vannak rendeléseink, akkor egy objektumban megszámoljuk, hogy az egyes pizzák hányszor fordulnak elő a rendelesek tömbben

        for (let pizza of this.rendelesek) {       // rendelesek tömb bejárása
            if (stat[pizza] === undefined)         // ha az adott pizza még nem szerepel a statisztika objektumunkban, beszúrjuk 1-es előfordulási értékkel
                stat[pizza] = 1;
            else                                   // ha már láttuk korábban a pizzát, megnöveljük az előfordulás értékét 1-gyel
                stat[pizza]++;
        }

        let res = "";                               // az object-ben szereplő adatokat szeretnénk összefűzni egy stringben

        for (let [pizza, db] of Object.entries(stat))   // object kulcs-érték párjainak bejárása
            res += `${db} darab ${pizza}, `;            // hozzáfűzzük az adott pizza darabszámát és nevét az eredmény stringhez

        res = res.substr(0, res.length - 2);            // a string végéről eltávolítjuk az utolsó 2 karaktert (a vesszőt és a szóközt)

        return res;
    }
}

// === TESZTELÉS ===

let etel = new Etel("alma", 70);
let etel2 = new Etel("sajt", -100);

etel.kaloriaSzam = 50;
console.log(etel.kaloriaSzam);

etel.fogyaszthato = false;
console.log(etel.fogyaszthato);

console.log(etel);
console.log(etel2);

console.log(etel.info());
console.log(etel2.info());

console.log("----------------------------------------------------------------------------------------------");

let p1 = new Pizza("hawaii", 1000, 1800);
let p2 = new Pizza("sonkas-kukoricas pizza", 1000);

p1.ar = 2000;
console.log(p1.ar);

p1.megromlik();

p2.feltetetHozzad("sajt");
p2.feltetetHozzad({ nev: "sajt" });
p2.feltetetHozzad({ nev: "sajt", kaloria: "kilencven" });
p2.feltetetHozzad({ nev: "sajt", kaloria: 90 });
p2.feltetetHozzad({ nev: "sajt", kaloria: 90 });
p2.feltetetHozzad({ nev: "sonka", kaloria: 120 });
p2.feltetetHozzad({ nev: "kukorica", kaloria: 30 });

console.log(p1);
console.log(p2);

console.log(p1.info());
console.log(p2.info());

console.log("----------------------------------------------------------------------------------------------");

 
let v1 = new Vasarlo("Sanyi", 5000);
let v2 = new Vasarlo("Bela", 10000);

v1.pizzatRendel("macska");
v1.pizzatRendel(p1);
v1.pizzatRendel(p2);
v1.pizzatRendel(new Pizza("negysajtos", 1200, 1200));
v1.pizzatRendel(p2);
v1.pizzatRendel(p2);

console.log(v1);
console.log(v2);

console.log(v1.pizzakatListaz());
console.log(v2.pizzakatListaz());

