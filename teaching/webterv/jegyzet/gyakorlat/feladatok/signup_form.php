<!DOCTYPE html>
<html lang="hu">
  <head>
    <title>Regisztráció</title>
    <meta charset="UTF-8"/>
    <style>
      form input { margin-bottom: 10px; }
    </style>
  </head>
  <body>
    <form action="signup.php" method="POST">
      <label>Felhasználónév: <input type="text" name="felhasznalonev"/></label> <br/>
      <label>Jelszó: <input type="password" name="jelszo"/></label> <br/>
      <label>Jelszó ismét: <input type="password" name="jelszo2"/></label> <br/>
      <label>Életkor: <input type="number" name="eletkor"/></label> <br/>
      Nem:
      <label><input type="radio" name="nem" value="F"/> Férfi</label>
      <label><input type="radio" name="nem" value="N"/> Nő</label>
      <label><input type="radio" name="nem" value="E"/> Egyéb</label> <br/>
      Hobbik:
      <label><input type="checkbox" name="hobbik[]" value="programozás"/> Programozás</label>
      <label><input type="checkbox" name="hobbik[]" value="főzés"/> Főzés</label>
      <label><input type="checkbox" name="hobbik[]" value="macskázás"/> Macskázás</label>
      <label><input type="checkbox" name="hobbik[]" value="mémnézegetés"/> Mémnézegetés</label>
      <label><input type="checkbox" name="hobbik[]" value="alvás"/> Alvás</label> <br/>
      <input type="submit" name="regiszt"/> <br/><br/>
    </form>

    <?php
      // a rendszer által ismert felhasználókat tartalmazó 2-dimenziós tömb
      $fiokok = [
        ["felhasznalonev" => "admin", "jelszo" => "Macska123", "nem" => "F", "hobbik" => ["macskázás", "programozás"]],
        ["felhasznalonev" => "guest", "jelszo" => "guest1", "nem" => "E", "hobbik" => ["alvás", "mémnézegetés"]],
        ["felhasznalonev" => "TestUser", "jelszo" => "test99", "nem" => "N", "hobbik" => ["macskázás", "főzés"]]
      ];

      // az űrlapfeldolgozás során keletkező hibákat ebbe a tömbbe fogjuk gyűjteni
      $hibak = [];

      // űrlapfeldolgozás

      if (isset($_POST["regiszt"])) {   // ha az űrlapot elküldték...
        // a kötelezően kitöltendő mezők ellenőrzése
        if (!isset($_POST["felhasznalonev"]) || trim($_POST["felhasznalonev"]) === "")
          $hibak[] = "A felhasználónév megadása kötelező!";

        if (!isset($_POST["jelszo"]) || trim($_POST["jelszo"]) === "" || !isset($_POST["jelszo2"]) || trim($_POST["jelszo2"]) === "")
          $hibak[] = "A jelszó és az ellenőrző jelszó megadása kötelező!";

        if (!isset($_POST["eletkor"]) || trim($_POST["eletkor"]) === "")
          $hibak[] = "Az életkor megadása kötelező!";

        if (!isset($_POST["nem"]) || trim($_POST["nem"]) === "")
          $hibak[] = "A nem megadása kötelező!";

        // legalább 2 hobbit kötelező kiválasztani
        if (!isset($_POST["hobbik"]) || count($_POST["hobbik"]) < 2)
          $hibak[] = "Legalább 2 hobbit kötelező kiválasztani!";

        // űrlapadatok lementése változókba
        $felhasznalonev = $_POST["felhasznalonev"];
        $jelszo = $_POST["jelszo"];
        $jelszo2 = $_POST["jelszo2"];
        $eletkor = $_POST["eletkor"];
        $nem = NULL;
        $hobbik = NULL;

        if (isset($_POST["nem"]))           // csak akkor kérjük le a nemet, ha megadták
          $nem = $_POST["nem"];
        if (isset($_POST["nhobbik"]))       // csak akkor kérjük le a hobbikat, ha megadták
          $hobbik = $_POST["hobbik"];       // (ez egy tömb lesz)

        // foglalt felhasználónév ellenőrzése
        foreach ($fiokok as $fiok) {
          if ($fiok["felhasznalonev"] === $felhasznalonev)  // ha egy regisztrált felhasználó neve megegyezik az űrlapon megadott névvel...
            $hibak[] = "A felhasználónév már foglalt!";
        }

        // túl rövid jelszó
        if (strlen($jelszo) < 5)
          $hibak[] = "A jelszónak legalább 5 karakter hosszúnak kell lennie!";

        // a két jelszó nem egyezik
        if ($jelszo !== $jelszo2)
          $hibak[] = "A jelszó és az ellenőrző jelszó nem egyezik!";

        // 18 év alatti életkor
        if ($eletkor < 18)
          $hibak[] = "Csak 18 éves kortól lehet regisztrálni!";

        // regisztráció sikerességének ellenőrzése
        if (count($hibak) === 0) {   // ha nem történt hiba a regisztráció során, hozzáadjuk az újonnan regisztrált felhasználót a $fiokok tömbhöz
          $fiokok[] = ["felhasznalonev" => $felhasznalonev, "jelszo" => $jelszo, "eletkor" => $eletkor, "nem" => $nem, "hobbik" => $hobbik];
          echo "Sikeres regisztráció! <br/>";
        } else {                      // ha voltak hibák, kiírjuk őket egy-egy bekezdésben
          foreach ($hibak as $hiba)
            echo "<p>" . $hiba . "</p>";
        }
      }
    ?>
  </body>
</html>