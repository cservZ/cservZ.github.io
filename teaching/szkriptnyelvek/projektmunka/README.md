<style>
	h1:first-of-type { display: none; }
</style>

# Szkriptnyelvek gyakorlat - Szorgalmi projektmunka

A Szkriptnyelvek gyakorlaton a félév során **legfeljebb 10 plusz pont** szerzésére van lehetőség. A plusz pontok megszerzésének fő módja egy szorgalmi jeleggel elkészíthető **projektmunka** a tanult nyelvek (Python, JavaScript) valamelyikét használva.

A plusz pontok a minimum pontszámba természetesen nem számítanak bele, a minimumkövetelmény nem váltható ki velük!


## Formai követelmények

* A projekt beadása és értékelése a **CooSpace** rendszerén keresztül történik.
* A beadási határidő: **2020.12.06. 23:55**.
* A beadás előtt a hallgató írásban tájékoztatja a gyakorlatvezetőt a projekt témájával és megvalósításával kapcsolatban. A gyakorlatvezető ezt jóváhagyhatja, illetve szükség esetén módosíthatja. Ennek határideje:  **2020.11.29. 23:55**.
* Fontos, hogy a hallgató tisztában legyen a projekt működésével. A felhasznált külső forrásokat (pl. StackOverflow, indiai YouTube tutorialok) pontosan meg kell jelölni a projektben (felsorolással, ha vannak másolt kódsorok, akkor azokat a beillesztés helyénél).
* A projekt beadásakor a hallgató felsorolja az esetleges függőségeket, amelyek a projekt beüzemeléséhez szükségesek (pl. felhasznált Python modulok), szükség esetén leírást készít a beüzemelésről.
* Az elkészült projektmunkát a hallgatónak meg kell védenie. A **projektvédés** során a gyakorlatvezető kérdéseket tesz fel a hallgatónak a projekttel kapcsolatban, amelyekkel ellenőrzi, hogy a hallgató tisztában van-e a kód működésével. A gyakorlatvezető kérheti egy adott funkció eltávolítását/új funkció implementálását/működés módosítását a védés során. A hallgatónak ilyenkor tudnia kell, hogy hol, mit kell átírni a kért módosításhoz.
* A gyakorlatvezetők véletlenszerűen kódkeresést is végeznek az interneten. Amennyiben egy kódsorról kiderül, hogy másolt, de nincs hivatkozva a forrás, a projektmunka nem értékelhető (természetesen nem fájl megnyitásra fogunk keresni).

## Lehetséges projekt ötletek

A projektmunka témája tetszőleges, viszont a tanult két nyelv (Python, JavaScript) valamelyikét kell használni (esetleg kombinálva a kettőt).

A lehetséges kategóriák a projekt elkészítésére vonatkozóan:

* konzolos alkalmazás (pl. automatizálási feladatot végző szkript, konzolos játék)
* asztali alkalmazás, grafikus játék
* webes alkalmazás
* web scraping szkript. 

### Néhány konkrét projekt példa

* Egy több kérdésből álló kvíz alkalmazás elkészítése. A kérdések egy előre meghatározott kérdésbankból vannak véletlenszerűen kiválasztva. A helyes kérdések megválaszolásával pontokat szerezhetünk. A kvíz végén megtekinthetjük az általunk elért összpontszámot, valamint visszanézhetjük az egyes kérdésekre adott válaszainkat és a helyes válaszokat.
* Egy klasszikus [amőba (tic-tac-toe)](https://0v.hu/jatekok/amoba) alkalmazás elkészítése. A játék célja, hogy amelyik játékos 5 `X`-et vagy `O`-t kigyűjt a táblán, az nyer. A táblaméteret személyre szabható, de minimum 5x5-ös. Az alkalmazásban a felhasználó játszhat egy másik játékos ellen vagy pedig a CPU ellen (itt valamilyen egyszerű megvalósítás is megfelelő a CPU logikájának megvalósításához, de természetesen tetszőlegesen bonyolult is lehet).
* Asztali játék, [Sárkánytojás társasjáték](https://www.youtube.com/watch?v=2f1ErgUAykc) megvalósítása grafikusan.
* Egy interaktív chatbot írása (pl. Discord, Facebook, Telegram platformok valamelyikére). A bottal különböző parancsokon keresztül lehet kommunikálni, és a bot válaszol ezekre. A bot tudjon válaszolni legalább 8 különböző parancsra. Ezek közül a válaszok közül legalább 3 összetett feladatot hajtson végre (pl. adott város időjárási adatainak lekérdezése, új napi teeendő felvétele stb.).


## Értékelési szempontok

* **Össztettség**: mennyire sokoldalú, bonyolult a program és a feladat, amire készül, mi az, ami még esetleg hiányzik a komplex működésből (pl. bizonyos eseteket nem kezel)
* **Megfelelő működés**: a működő funkciók milyen jól működnek, hiányzó inputot és hibás inputot hogyan kezeli a program
* **Használhatóság**: mennyire intuitív a program beüzemelése, indítása, használata, a felhasználói interakció illetve a "flow" mennyire érthető
* **Kódminőség**: Logikus felépítésű, modulokba szervezett kód, osztályok kialakítása (ha vannak)

**Általános mondás:** Egy bonyolult dolgot rosszul megoldó programnál jobb, ha egy kisebb feladatot old meg az alkalmazás, azt viszont helyesen, szépen, érthetően.