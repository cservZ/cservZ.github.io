# Webtervezés - 10. gyakorlat

## Az órai feladatunk

Az eheti órán újból elővesszük a már jól ismert projektünket, az Irinyi Pizzázó weboldalát. 

Az eddigi gyakorlatok során már megvalósítottuk a regisztrációt (profilkép feltöltéssel), a bejelentkezést, valamint volt szó a menetkövetésről is. Emlékeztetőképpen: a menetkövetést mi arra használtuk, hogy miután a felhasználó sikeresen bejelentkezett a login.php-ban, akkor a `$_SESSION` tömbbe egy `user` kulccsal beleraktuk azt a `Felhasznalo` objektumot, ami a bejelentkezett felhasználót reprezentálja. Ily módon a belépett felhasználó adatait a `$_SESSION["user"]` indexeléssel el tudtuk érni az egyes aloldalakon.

Az eheti feladatunk a pizzarendelés megvalósítása lenne. Szeretnénk elérni, hogy a bejelentkezett felhasználók...

* ...tudjanak pizzákat a kosarukba tenni
* ...a kosarukból ki tudjanak törölni pizzákat
* ...a kosár tartalmát meg tudják rendelni (a rendeléseket majd az `admin` nevű felhasználó fogja megkapni, és ő fogja tudni kiszolgálni azokat).


### 1. Kosárba tétel

A **pizza.php** oldalon betöltjük a pizzak.txt fájlban tárolt pizzákat a `$pizzak` változóba (ez egy `Pizza` típusú objektumokat tároló tömb lesz), majd egy táblázatban kiíratjuk az egyes pizzák adatait.


#### 1.1. A "Kosárba" gomb elrejtése a nem bejelentkezett felhasználók elől

Azt szeretnénk elérni, hogy csak bejelentkezett felhasználók tudjanak a kosarukba tenni pizzákat. Rejtsük el a nem belépett felhasználók elől az egyes táblázatsorok utolsó cellájában megjelenő "Kosárba" gombot (ehhez csak meg kell néznünk, hogy be lett-e állítva a `$_SESSION["user"]` értéke)!

```php
<table id="pizza-table">
  <tr>
    ...
    <?php if (isset($_SESSION["user"])) { ?>
    <th>Kosárba tétel</th>
    <?php } ?>
  </tr>
  <?php foreach ($pizzak as $pizza) { ?>
  <tr>
    ...
    <?php if (isset($_SESSION["user"])) { ?>
    <td>
      <form action="pizza.php" method="GET">
        <input type="hidden" name="pizza-name" value="<?php echo $pizza->getNev(); ?>">
        <input type="submit" name="add-to-cart-btn" value="Kosárba">
      </form>
    </td>
    <?php } ?>
  </tr>
  <?php } ?>
</table>
```


#### 1.2. A kosárba tétel funkció megtervezése

Nézzük meg a kosárba tételt elvégző HTML űrlap forráskódját!

```html
<form action="pizza.php" method="GET">
  <input type="hidden" name="pizza-name" value="<?php echo $pizza->getNev(); ?>">
  <input type="submit" name="add-to-cart-btn" value="Kosárba">
</form>
```

Látható, hogy az űrlapot a jelenlegi PHP fájlban, a pizza.php-ban fogjuk feldolgozni. Mivel GET-tel továbbítjuk az űrlapot, ezért az űrlapadatok az URL-ben lesznek továbbítva. Az űrlapon találunk egy rejtett beviteli mezőt (ezt a felhasználó nem fogja látni), amely arra szolgál, hogy továbbítsuk a szervernek annak a pizzának a nevét, amit a felhasználó a kosarába szeretne tenni.

A webes projektünkben minden felhasználó rendelkezik egy saját kosárral. A `Felhasznalo` osztály `$kosar` adattagja egy tömb, amely a megrendelt pizzák adatait fogja tárolni. A felhasználó kosarának tartalmát a cart.php oldalon fogjuk megjeleníteni. A kosár tartalmának a megjelenítése valami ilyesmi lesz:

![Kosaram](./img/cart.png)

Amennyiben egy pizzából többet rendelünk - például sonkás-kukoricás pizzából rendelünk hármat -, akkor nem azt fogjuk csinálni, hogy 3-szor megjelenítjük a sonkás-kukoricás pizzát a "Kosaram" táblázatban. Ehelyett azt fogjuk csinálni, hogy minden pizzafajta esetén számontartjuk, hogy az adott pizzából összesen mennyit rendelt a felhasználó, és ezért mennyit kell fizetnie (tehát lényegében a kosárba tett pizzákat nevük alapján csoportosítjuk.)

A `KosarItem` osztály segítségével tudjuk eltárolni, hogy egy adott nevű pizzából mennyit rendelt a felhasználó, és ennyi pizzáért mennyit kell fizetnie. Az osztály konstruktora egy pizzát és egy mennyiség értéket vár paraméterben (az utóbbi paramétert nem kötelező megadni, annak alapértéke 1). A `$nev` adattagot a pizza nevével, a `$mennyiseg` adattagot a paraméterben kapott mennyiség értékkel, az `$ar` adattagot pedig a pizza árának és a mennyiségnek a szorzatával inicializáljuk (hiszen `$mennyiseg`-szer kell kifizetnie a felhasználónak a pizza árát).

```php
class KosarItem {
  private string $nev;
  private int $mennyiseg;
  private int $ar;

  public function __construct(Pizza $pizza, int $mennyiseg=1) {
    $this->nev = $pizza->getNev();
    $this->mennyiseg = $mennyiseg;
    $this->ar = $this->mennyiseg * $pizza->getAr();
  }

  // Getterek és setterek...

  public function __toString(): string {
    return $this->mennyiseg . " " . strtolower($this->nev) . " (" . $this->ar . " Ft)";
  }
}
```

A felhasználók kosarában ilyen, `KosarItem` típusú objektumokat fogunk tárolni.

Egy `KosarItem` kosárba tételét a `Felhasznalo` osztályban definiált `kosarbaTesz()` metódus fogja megvalósítani, amely a `$kosar` tömb tartalmát módosítja. A kosárba tételnél továbbra is ügyelünk arra, hogy pizzafajtánként csoportosítsuk a kosárban lévő pizzákat, így minden item (kosárba tett pizza) neve pontosan egyszer fog szerepelni a kosárban.

* Ha már szerepel egy adott nevű item a kosárban, akkor az itemet nem tesszük bele újból a kosárba. Ekkor elegendő a már kosárban lévő item adatait (mennyiségét és árát) módosítanunk.
* Ha a kosárban még nem szerepel egy adott nevű item, akkor egy új itemet teszünk a `$kosar` tömbbe.

```php
class Felhasznalo {
  // ...
  private array $kosar;

  // ...

  public function kosarbaTesz(KosarItem $ujItem): void {
    // 1. eset: Ha már szerepel ilyen nevű item a kosárban, akkor elegendő az adott
    // névvel rendelkező item mennyiségét és árát módosítani (setter hívások).
    foreach ($this->kosar as $item) {
      if ($item->getNev() === $ujItem->getNev()) {
        $item->setMennyiseg($item->getMennyiseg() + 1);
        $item->setAr($item->getAr() + $ujItem->getAr());
        return;
      }
    }

    // 2. eset: Ha még nem szerepel ilyen nevű item a kosárban, akkor egy új itemet
    // szúrunk be a $kosar tömb végére.
    $this->kosar[] = $ujItem;
  }
}
```


#### 1.3. A kosárba tétel funkció megvalósítása

Az elméleti megtervezés után valósítsuk is meg a kosárba tétel funkciót! A pizza.php-ban fogjuk feldolgozni a kosárba tételt, az alábbi lépéseket követve:

1. Az űrlap elküldését követően lekérdezzük a bejelentkezett felhasználó kosarát, hiszen ennek a kosárnak a tartalmát fogjuk módosítani.
1. Lekérdezzük a `name="pizza-name"` attribútumal rendelkező mező értékét, azaz a kosárba teendő pizza nevét.
1. Megkeressük az összes pizza adatát tároló `$pizzak` tömbben azt a pizzát, amelynek a neve megegyezik a kosárba teendő pizza nevével. Ezzel a pizzával létrehozunk egy új `KosarItem` objektumot, amit a `Felhasznalo` osztály `kosarbaTesz()` metódusával belerakunk a bejelentkezett felhasználó kosarába.
1. Mivel a bejelentkezett felhasználó kosarának tartalma módosult, ezért a felhasználók adatait tároló felhasznalok.txt fájl tartalmát frissítjük a fuggvenyek.php-ban definiált `felhasznalokModositasa()` függvénnyel.
1. A pizza kosárba tételét követően újratöltjük az oldalt. Az oldal újratöltésekor a múlt héten látott módon belerakunk az URL-be egy `siker` kulcsot, aminek segítségével a forráskódban később kiíratunk egy üzenetet a felhasználónak a kosárba tétel sikerességéről.

```php
if (isset($_SESSION["user"]) && isset($_GET["add-to-cart-btn"])) {
  $felhasznalo = $_SESSION["user"];
  $kosar = $felhasznalo->getKosar();                // 1. lépés

  $pizzaNeve = $_GET["pizza-name"];                 // 2. lépés

  foreach ($pizzak as $pizza) {                     // 3. lépés
    if ($pizza->getNev() === $pizzaNeve) {
      // MEGJEGYZÉS: Az item mennyiségét nem adjuk meg, ezért a korábban tárgyaltaknak
      // megfelelően a mennyiség az alapértelmezett 1 értéket fogja felvenni (egyszerre
      // 1 itemet teszünk a felhasználó kosarába.)
      $item = new KosarItem($pizza);
      $felhasznalo->kosarbaTesz($item);
    }
  }

  felhasznalokModositasa("data/felhasznalok.txt", $felhasznalo);  // 4. lépés
  header("Location: pizza.php?siker=true");                       // 5. lépés
}
```

Nézzük meg a fuggvenyek.php-ban definiált `felhasznalokModositasa()` függvényt! Ez annyit csinál, hogy az 1. paraméterben kapott fájlból (felhasznalok.txt) betölti az összes regisztrált felhasználó adatát, felhasználónév alapján megkeresi a felhasználók között a 2. paraméterben kapott felhasználót (akiknek a kosarát módosítjuk), frissíti ennek a felhasználónak az adatait, majd a módosított `$felhasználok` tömböt elmenti az 1. paraméterben kapott fájlba.

```php
function felhasznalokModositasa(string $fajlnev, Felhasznalo $modositandoFelhasznalo) {
    $felhasznalok = adatokBetoltese($fajlnev);

    foreach ($felhasznalok as &$felhasznalo) {
        if ($felhasznalo->getFelhasznalonev() === $modositandoFelhasznalo->getFelhasznalonev()) {
            $felhasznalo = $modositandoFelhasznalo;
        }
    }

    adatokMentese($fajlnev, $felhasznalok);
}
```

Vegyük észre a `foreach`-ciklusban a `$felhasznalo` ciklusváltozó előtti `&`-jelet! Megtanultuk, hogy alapból a `foreach`-ciklus nem az eredeti tömbbel, hanem annak csupán egy másolatával dolgozik, így ha az eredeti tömb elemeit szeretnénk módosítani, egy `&`-jelet kell tennünk a ciklusváltozónk neve elé (referencia szerinti átadás).

Egy kis érdekesség, hogy PHP-ban az objektumok alapból referencia szerint működnek, ezért ha egy `foreach`-ciklusban csak annyit csinálunk, hogy objektum adattagjait állítgatjuk (pl. setter hívásokkal), akkor a ciklusváltozó neve elől az `&`-jel elhagyható (ekkor alapból az eredeti objektum fog módosulni). Erre láthattunk példát az 1.2. alfejezetben szereplő `kosarbaTesz()` metódusban, ahol `KosarItem` típusú objektumok belső adattagjait piszkáltuk setterekkel.


### 2. A "Kosaram" oldal működőképessé tétele

Tegyük működőképessé a **cart.php** oldalt! Az oldalon jelenítsük meg a bejelentkezett felhasználó kosarának a tartalmát, biztosítsunk lehetőséget egy-egy kosárbeli item törlésére, valamint a kosár tartalmának megrendelésére (az így előállított rendelés adatait majd az admin felhasználó fogja elérni).


#### 2.1. A kosár tartalmának megjelenítése

Miután a cart.php-ban meggyőződtünk arról, hogy a felhasználó bejelentkezett, kérdezzük le a bejelentkezett felhasználónak a kosarát a `$kosar` adattaghoz tartozó `getKosar()` getterrel!

```php
$felhasznalo = $_SESSION["user"];
$kosar = $felhasznalo->getKosar();
```

Amennyiben a kosár nem üres, akkor megjelenítjük a kosárban lévő itemek adatait egy táblázatban (az adatokat a `KosarItem` osztály publikus gettereinek meghívásával érhetjük el). Egyébként, ha a kosár üres, akkor az "A kosarad jelenleg üres!" üzenetet íratjuk ki.

```php
<?php if (count($kosar) > 0) { ?>
  <table id="cart-table">
    <tr>
      <th>Pizza neve</th>
      <th>Mennyiség</th>
      <th>Ár</th>
      <th>Törlés</th>
    </tr>
    <?php foreach ($kosar as $item) { ?>
    <tr>
      <td><?php echo $item->getNev(); ?></td>
      <td><?php echo $item->getMennyiseg(); ?></td>
      <td><?php echo $item->getAr() . " Ft"; ?></td>
      <td>
        <form action="cart.php" method="GET" class="cart-delete-form">
          <input type="hidden" name="item-name" value="<?php echo $item->getNev(); ?>">
          <input type="submit" name="delete-from-cart-btn" value="Törlés">
        </form>
      </td>
    </tr>
    <?php } ?>
    <tr class="total-sum">
      <th colspan="4">Végösszeg: <?php echo vegosszeg($kosar) ?> Ft</th>
    </tr>
  </table>
  ...
<?php } else { ?>
  <p class="center strong">A kosarad jelenleg üres!</p>
<?php } ?>
```

Azért, hogy a felhasználóbarátok legyünk, a fuggvenyek.php-ban definiált `vegosszeg()` függvénnyel kiszámítjuk a kosárban lévő itemekért fizetendő teljes összeget. A függvény működésének értelmezése valószínűleg senki olyan számára nem lesz nehéz, aki túlélte a progalapot. :)

```php
function vegosszeg(array $kosar) {
  $osszeg = 0;

  foreach ($kosar as $item) {
    $osszeg += $item->getAr();
  }

  return $osszeg;
}
```


#### 2.2. A kosárból való törlés megvalósítása

A cart.php-ban minden kosárban lévő item esetén megjelenítünk egy "Törlés" űrlapot, amelynek a HTML forráskódja a következőképpen néz ki:

```html
<form action="cart.php" method="GET" class="cart-delete-form">
  <input type="hidden" name="item-name" value="<?php echo $item->getNev(); ?>">
  <input type="submit" name="delete-from-cart-btn" value="Törlés">
</form>
```

Látható, hogy a `name="item-name"` attribútummal rendelkező rejtett mezővel továbbítjuk a szervernek a törlendő item nevét (feltehetjük, hogy minden itemet egyértelműen azonosít a neve). Dolgozzuk fel az űrlapot, valósítsuk meg a kosárból való törlést!

1. Kérdezzük le, hogy mi a törlendő item neve!
1. Egy `$ujKosar` nevű tömbben gyűjtsük össze azokat a kosárbeli itemeket, amiket meg akarunk tartani (azaz amiket NEM akarunk törölni a kosárból)!
1. A felhasználó kosarát állítsuk be az `$ujKosar` változó értékére! 
1. Mivel frissítettük a bejelentkezett felhasználó kosarát, ezért a `felhasznalokModositasa()` függvénnyel mentsük el a módosításokat a felhasznalok.txt-be, majd töltsük újra az oldalt!

```php
if (isset($_GET["delete-from-cart-btn"])) {
  $torlendoItemNeve = $_GET["item-name"];                           // 1. lépés
  $ujKosar = [];

  foreach ($kosar as $item) {                                       // 2. lépés
    if ($item->getNev() !== $torlendoItemNeve) {
      $ujKosar[] = $item;
    }
  }

  $felhasznalo->setKosar($ujKosar);                                 // 3. lépés
  felhasznalokModositasa("data/felhasznalok.txt", $felhasznalo);    // 4. lépés
  header("Location: cart.php");
}
```


#### 2.3. A kosár tartalmának megrendelése

Érjük el, hogy amennyiben a felhasználó megelégedett a kosarának a tartalmával, akkor meg tudja rendelni a kosárban lévő itemeket! Ehhez a kosár tartalmát listázó táblázat alatti "Rendelés" űrlapot kell működőképessé tennünk.

```html
<form action="cart.php" method="GET" class="order-form">
  <input type="submit" name="order-btn" value="Rendelés">
</form>
```

A rendeléseket objektumorientáltan fogjuk kezelni: minden rendelés egy `Rendeles` típusú objektum lesz. Ezeket a rendeléseket a rendelesek.txt-ben fogjuk tárolni a jól megszokott módon, szerializált formában.

A `Rendeles` osztályra rápillantva láthatjuk, hogy minden rendelésről eltároljuk a rendelést feladó felhasználó nevét (`$megrendelo` adattag), a megrendelt itemeket (`$rendelesTartalma` adattag - ez lényegében a kosár tartalma lesz), a rendelés dátumát (`$rendelesDatuma` adattag - ez az aktuális dátum lesz), valamint azt, hogy a rendelést teljesítette-e már az admin (`$teljesitett` adattag).

```php
class Rendeles {
  private string $megrendelo;
  private array $rendelesTartalma;
  private DateTime $rendelesDatuma;
  private bool $teljesitett;

  public function __construct(string $felhasznalonev, array $rendelesTartalma) {
    $this->megrendelo = $felhasznalonev;
    $this->rendelesTartalma = $rendelesTartalma;
    // Alapértelmezett módon egyik rendelés sincs teljesítve.
    $this->teljesitett = false;
    // A rendelés dátuma az aktuális dátum és időpont lesz (itt a DateTime egy beépített PHP osztály).
    $this->rendelesDatuma = new DateTime();
    // A dátumokat és időpontokat budapesti ("magyar") idő szerint fogjuk kezelni.
    $this->rendelesDatuma->setTimezone(new DateTimeZone("Europe/Budapest")); 
  }

  // Getterek és setterek...
}
```

A cart.php-ba visszatérve egy megrendelést az alábbi lépések követésével fogunk feldolgozni: 

1. Töltsük be a rendelesek.txt-ből az összes rendelés adatát az `adatokBetoltese()` függvénnyel!
1. Hozzunk létre egy új, `Rendeles` típusú objektumot, amit a bejelentkezett felhasználó felhasználónevével és kosarának tartalmával inicializáljunk! Ezt a rendelést fűzzük hozzá az összes rendelést tároló tömbhöz!
1. Mentsük el az új rendeléssel kibővített, rendeléseket tároló tömböt a rendelesek.txt-be az `adatokMentese()` függvénnyel!
1. Mivel a felhasználó megrendelte a kosár tartalmát, ezért ürítsük ki a felhasználó kosarát!
1. Mivel módosítottuk a bejelentkezett felhasználó kosarát, ezért mentsük el a felhasznalok.txt-be ezt a módosítást a `felhasznalokModositasa()` függvénnyel!
1. Töltsük újra az oldalt! Az URL-ben elhelyezett `siker` kulcs jelezze a rendelés sikerességét!

```php
if (isset($_GET["order-btn"])) {
  $rendelesek = adatokBetoltese("data/rendelesek.txt");                 // 1. lépés

  $rendeles = new Rendeles($felhasznalo->getFelhasznalonev(), $kosar);  // 2. lépés
  $rendelesek[] = $rendeles;
  adatokMentese("data/rendelesek.txt", $rendelesek);                    // 3. lépés

  $felhasznalo->setKosar([]);                                           // 4. lépés
  felhasznalokModositasa("data/felhasznalok.txt", $felhasznalo);        // 5. lépés
  header("Location: cart.php?siker=true");                              // 6. lépés
}
```


### 3. Rendelések megjelenítése az admin számára

TODO
