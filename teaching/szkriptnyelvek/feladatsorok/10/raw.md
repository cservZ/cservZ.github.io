# Szkriptnyelvek - 10. gyakorló feladatsor

## Aszinkron programozás JavaScriptben


### Aszinkron adatlekérdezés Promise-ok használatával (10 pont)

* Keress az interneten egy számodra szimpatikus API-t, amely valamilyen adatokat tesz elérhetővé a fejlesztők számára! Ne az órán bemutatott JSON placeholder-es API-t használd, hanem valami mást! Néhány egyszerűen használható API (természetesen nem kötelező pont ezeket használni):
    * [The Cat API](https://docs.thecatapi.com/) - Véletlenszerű macskás kép adatai
    * [The Dog API](https://docs.thedogapi.com/) - Véletlenszerű kutyás kép adatai
    * [Dad Joke API](https://icanhazdadjoke.com/api) - Véletlenszerű angol nyelvű faviccek
    * [Cat Fact API](https://catfact.ninja/) - Véletlenszerű tények macskákról
    * [Harry Potter API](https://hp-api.herokuapp.com/) - Harry Potter szereplők adataival kapcsolatos egyszerű API (itt az adatlekérés előtt át kell írni az URL-ben a `http`-t `https`-re).

* Hozz létre egy HTML weboldalt, amin helyezz el egy gombot! Amikor a felhasználó a gombra kattint, akkor kérdezd le a kiválasztott API-tól az adatokat JavaScript segítségével! Az adatlekéréshez használd a gyakorlaton látott Promise-okat (esetleg az `async` és `await` kulcsszavakat)!

* A lekérdezett adatokat jelenítsd meg a weboldalon!

<span class="example">Példa az elkészítendő weboldalra (részlet):</span>

<a href="example.png" target="_blank"><img src="example.png" alt=""></a>

<div class="bordered-box border-blue">
    <span class="blue">Megjegyzés:</span> Mivel itt alapvetően az aszinkron JavaScripten van a hangsúly, nem a weboldal kinézetén, ezért a beadott megoldásokban nem kötelező CSS formázásokat használni.
</div>