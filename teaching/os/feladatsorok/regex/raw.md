# Operációs rendszerek gyakorlat

## Reguláris kifejezéses gyakorló feladatok (20 pont)

<div class="bordered-box border-blue">
    <span class="blue">Megjegyzés:</span> A feladatsor megoldásához az A1 anyagrész (azon belül is a reguláris kifejezésekről szóló alfejezet) ismerete szükséges.
</div>

> **Megoldás:** A feladatsor egy lehetséges megoldása elérhető <a href="./megoldas.html" target="_blank">ide kattintva</a>.


### Teve (20 pont)

A [TeveClub](https://teveclub.hu/) weboldalon virtuálisan nevelhetünk tevéket. A `camels.txt` fájl ([letöltés](./inputs.zip)) egyes soraiban egy-egy tevének a neve szerepel, amit az oldalon regisztráltak.

Válogasd ki a fájlból egy-egy **reguláris kifejezéssel** azokat a tevéket, akiknek a neve...

1. ...tartalmazza a `teve` szöveget! **(1 pont)**
1. ...tartalmazza a `teve` és az `epic` szövegek legalább egyikét! **(1 pont)**
1. ...a `teve` szöveggel kezdődik, ami után számjegy következik! **(2 pont)**
1. ...a `teve` szöveggel kezdődik, ami után kizárólag számjegyek következhetnek egészen a név végéig! A számjegyekből tetszőleges mennyiségű (akár 0 darab is) lehet. **(2 pont)**
1. ...a `teve` szöveggel kezdődik, ami után kizárólag számjegyek következhetnek egészen a név végéig! Legalább 1 számjegynek mindenképpen szerepelnie kell! **(1 pont)**
1. ...a `teve` szöveggel kezdődik, ami után pontosan 2 számjegy szerepel, és a teve neve itt ér végét (tehát az ennél bővebb nevek nem fogadhatók el)! **(1 pont)**
1. ...a `teve` szöveggel kezdődik, ami után legalább 1, de legfeljebb 5 számjegy következik, és a teve neve itt ér véget (tehát az ennél bővebb nevek nem fogadhatók el)! **(1 pont)**
1. ...csak nagybetűket és alulvonás (`_`) karaktereket tartalmaz! **(2 pont)**
1. ...a `teve` szöveggel kezdődik, ami után tetszőleges mennyiségű (akár 0 darab) tetszőleges karakter következik, majd a név egy számjegyre végződik! **(2 pont)**
1. ...a `teve` szöveggel kezdődik, ami után vagy szerepel alulvonás vagy nem, majd legalább 1 betű vagy számjegy következik, majd közvetlenül ezután egy számjegy jelzi a teve nevének végét! **(3 pont)**
1. ...**nem** az angol ábécé valamely magánhangzójával kezdődik! **(1 pont)**
1. ...páratlan sok karakterből áll! **(3 pont)**