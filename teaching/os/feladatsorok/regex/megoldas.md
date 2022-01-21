# Operációs rendszerek gyakorlat

## Reguláris kifejezéses feladatok - Egy lehetséges megoldás

<div class="bordered-box border-blue">
    <span class="blue">Megjegyzés:</span> A feladatsor megoldásához az A1 anyagrész (azon belül is a reguláris kifejezésekről szóló alfejezet) ismerete szükséges.
</div>


### Teve (20 pont)

A [TeveClub](https://teveclub.hu/) weboldalon virtuálisan nevelhetünk tevéket. A `camels.txt` fájl ([letöltés](./inputs.zip)) egyes soraiban egy-egy tevének a neve szerepel, amit az oldalon regisztráltak.

Válogasd ki a fájlból egy-egy **reguláris kifejezéssel** azokat a tevéket, akiknek a neve...

<span>1.</span> ...tartalmazza a `teve` szöveget! **(1 pont)**

<div class="bordered-box border-black">
<span class="black">Megoldás:</span> Ez még egy egyszerű feladat, aminek a megoldása valószínűleg mindenkinek menni fog, aki az első ZH-t túlélte. Az <code>egrep</code> paranccsal kiválogatjuk azokat a sorokat a bemeneti fájlból, amelyek tartalmazzák a <code>teve</code> szöveget. A szemléletesség kedvéért használjuk a <code>--color</code> kapcsolót is, ami minden sorban kiszínezi azokat a részeket, ahol az <code>egrep</code> megtalálta a reguláris kifejezésre illeszkedő stringet.

<pre>
> egrep --color 'teve' camels.txt
egypupu_<span class="red">teve</span>12
<span class="red">teve</span>98
<span class="red">teve</span>
epic_<span class="red">teve</span>_42
<span class="red">teve</span>4life
<span class="red">teve</span>_4ever444
<span class="red">teve</span>123456
<span class="red">teve</span>kiraly20
<span class="red">teve</span>_suttogo_2
<span class="red">teve</span>_4ever
<span class="red">teve</span>7
</pre>
</div>


<span>2.</span> ...tartalmazza a `teve` és az `epic` szövegek legalább egyikét! **(1 pont)**

<div class="bordered-box border-black">
<span class="black">Megoldás:</span> Ha egynél több mintára is szeretnénk illeszteni egy reguláris kifejezésben, akkor az illesztendő mintákat a VAGY ( <code>|</code >) művelettel kötjük össze.

<pre>
> egrep --color 'teve|epic' camels.txt
egypupu_<span class="red">teve</span>12
<span class="red">teve</span>98
<span class="red">teve</span>
<span class="red">epic</span>_<span class="red">teve</span>_42
<span class="red">teve</span>4life
my <span class="red">epic</span> camel with wings and lazer eyes
<span class="red">teve</span>_4ever444
<span class="red">teve</span>123456
<span class="red">teve</span>kiraly20
<span class="red">teve</span>_suttogo_2
<span class="red">teve</span>_4ever
<span class="red">teve</span>7

</pre>

Megjegyzendő, hogy a reguláris kifejezések világában a VAGY művelet nem a kizáró VAGY, hanem a megengedő VAGY. Például az <code>epic_teve_42</code> sorban jól láthatjuk a színezésből, hogy az <code>egrep</code> mindkét megadott mintára, a <code>teve</code> és az <code>epic</code> szövegekre egyaránt illesztett.
</div>


<span>3.</span> ...a `teve` szöveggel kezdődik, ami után számjegy következik! **(2 pont)**

<div class="bordered-box border-black">
<span class="black">Megoldás:</span> A további példákban először leírjuk a feladat megoldásaként kapott reguláris kifejezést, utána pedig részletesen is kivesézzük annak a felépítését, működését. A reguláris kifejezésünk most:

<pre>
> egrep --color '^teve[0-9]' camels.txt
<span class="red">teve9</span>8
<span class="red">teve4</span>life
<span class="red">teve1</span>23456
<span class="red">teve7</span>
</pre>

Magyarázat:

<ul>
    <li>A <code>^teve</code> jelenti azt, hogy a <code>teve</code> szövegnek a sor elején kell szerepelnie.</li>
    <li>A <code>[0-9]</code> jelöli a feladat által kért számjegy karaktert. A <code>[]</code>-ek általános jelentése a következő: "a <code>[]</code>-ek közti karaktersorozat egyetlen karakterének az előfordulását vizsgáljuk". Persze a <code>[]</code>-ek között legépelhettük volna manuálisan is 0-tól 9-ig a számjegyeket, de ennél jóval elegánsabb a korábban ismertetett megoldás.</li>
</ul>
</div>


<span>4.</span>  ...a `teve` szöveggel kezdődik, ami után kizárólag számjegyek következhetnek egészen a név végéig! A számjegyekből tetszőleges mennyiségű (akár 0 darab is) lehet. **(2 pont)**

<div class="bordered-box border-black">
<span class="black">Megoldás:</span>
<pre>
> egrep --color '^teve[0-9]*$' camels.txt
<span class="red">teve98</span>
<span class="red">teve</span>
<span class="red">teve123456</span>
<span class="red">teve7</span>
</pre>

Magyarázat:

<ul>
    <li>A <code>^teve</code> azt mondja meg, hogy a sor a <code>teve</code> szöveggel kezdődik (ezt már tudjuk).</li>
    <li>A <code>[0-9]*</code> azt mondja meg, hogy számjegyekből tetszőlegesen sok szerepelhet. A <code>*</code> (csillag) szimbólum használata esetén a "tetszőlegesen sok"-ba akár a 0 darab illeszkedés is beletartozik, emiatt a <code>teve</code> sor is kiválogatásra kerül, amiben egyetlen számjegy sem szerepel.</li>
    <li>A <code>$</code> (dollárjel) szimbólum jelzi a sor végét.</li>
</ul>
</div>


<span>5.</span> ...a `teve` szöveggel kezdődik, ami után kizárólag számjegyek következhetnek egészen a név végéig! Legalább 1 számjegynek mindenképpen szerepelnie kell! **(1 pont)**

<div class="bordered-box border-black">
<span class="black">Megoldás:</span>
<pre>
> egrep --color '^teve[0-9]+$' camels.txt
<span class="red">teve98</span>
<span class="red">teve123456</span>
<span class="red">teve7</span>
</pre>

Itt annyi a különbség az előző feladathoz képest, hogy a 0 darab számjegyet nem fogadjuk el, hanem megköveteljük, hogy <strong>legalább 1 számjegynek mindenképpen szerepelnie kell</strong>. Ennek a biztosítására szolgál a <code>+</code> (plusz) szimbólum a reguláris kifejezések világában.
</div>

<span>6.</span> ...a `teve` szöveggel kezdődik, ami után pontosan 2 számjegy szerepel, és a teve neve itt ér végét (tehát az ennél bővebb nevek nem fogadhatók el)! **(1 pont)**

<div class="bordered-box border-black">
<span class="black">Megoldás:</span>
<pre>
> egrep --color '^teve[0-9]{2}$' camels.txt
<span class="red">teve98</span>
</pre>

Magyarázat:

<ul>
    <li>A <code>^teve</code> azt mondja meg, hogy a sor a <code>teve</code> szöveggel kezdődik (ezt már tudjuk).</li>
    <li>A <code>[0-9]{2}</code> azt mondja meg, hogy pontosan 2 darab, egymást követő számjegyet keresünk. Általánosan is igaz, hogy a <code>(KIF){SZAM}</code> azt jelenti, hogy a <code>KIF</code> kifejezésből <code>SZAM</code> darab szerepel egymás után.</li>
    <li>A <code>$</code> szimbólum jelzi a sor végét (ezt már tudjuk).</li>
</ul>
</div>


<span>7.</span> ...a `teve` szöveggel kezdődik, ami után legalább 1, de legfeljebb 5 számjegy következik, és a teve neve itt ér véget (tehát az ennél bővebb nevek nem fogadhatók el)! **(1 pont)**

<div class="bordered-box border-black">
<span class="black">Megoldás:</span>
<pre>
> egrep --color '^teve[0-9]{1,5}$' camels.txt
<span class="red">teve98</span>
<span class="red">teve7</span>
</pre>

Magyarázat: A megoldás nagyon hasonlít az előző feladat megoldásához. Annyi a különbség, hogy <code>{}</code>-ek között egy alsó és egy felső korlátot is megadunk. Általánosan: a <code>(KIF){SZAM1,SZAM2}</code> azt jelenti, hogy a <code>KIF</code> kifejezésből legalább <code>SZAM1</code>, de legfeljebb <code>SZAM2</code> szerepelhet egymás után.

Persze olyat is csinálhatunk, hogy az alsó és a felső korlátok közül csak az egyiket adjuk meg:

<ul>
    <li><code>^teve[0-9]{2,}$</code>: kiválogatja azokat a sorokat, amelyek a <code>teve</code> szöveggel kezdődnek, ami után <strong>legalább</strong> 2 darab számjegy szerepel egészen a sor végéig.</li>
    <li><code>^teve[0-9]{,5}$</code>: kiválogatja azokat a sorokat, amelyek a <code>teve</code> szöveggel kezdődnek, ami után <strong>legfeljebb</strong> 5 darab számjegy szerepel egészen a sor végéig (itt tulajdonképpen a 0 lesz az alsó korlátunk).</li>
</ul>
</div>


<span>8.</span> ...csak nagybetűket és alulvonás (`_`) karaktereket tartalmaz! **(2 pont)**

<div class="bordered-box border-black">
<span class="black">Megoldás:</span>
<pre>
> egrep --color '^[A-Z_]+$' camels.txt
<span class="red">CAMELON_DIAZ</span>
<span class="red">NEMZSIRAF</span>
</pre>

Magyarázat: Nagybetűkből és alulvonás karakterekből szeretnénk tetszőlegesen sokat, de legalább 1-et mindenképpen (<code>[A-Z_]+</code> részkifejezés). Továbbá szeretnénk, ha a teljes sor csak ezeket a karaktereket tartalmazná (ezért kiírjuk a kifejezés elejére a <code>^</code>-ot, a végére pedig a <code>$</code>-et).
</div>


<span>9.</span> ...a `teve` szöveggel kezdődik, ami után tetszőleges mennyiségű (akár 0 darab) tetszőleges karakter következik, majd a név számjegyre végződik! **(2 pont)**

<div class="bordered-box border-black">
<span class="black">Megoldás:</span>
<pre>
> egrep --color '^teve(.)*[0-9]$' camels.txt
<span class="red">teve98</span>
<span class="red">teve_4ever444</span>
<span class="red">teve123456</span>
<span class="red">tevekiraly20</span>
<span class="red">teve_suttogo_2</span>
<span class="red">teve7</span>
</pre>

Magyarázat:

<ul>
    <li>A <code>^teve</code> azt mondja meg, hogy a sor a <code>teve</code> szöveggel kezdődik (ezt már tudjuk).</li>
    <li>Egy darab tetszőleges karakter jele a <code>.</code> (pont) a reguláris kifejezések világában. Mivel a 0 darab tetszőleges karakter is jó, ezért itt a "tetszőleges mennyiség" alatt a <code>*</code>-ot értjük (nem a <code>+</code>-t). Érdemes az egyértelműség kedvéért bezárójelezni azt a részkifejezést, amire a <code>*</code> vonatkozik.</li>
    <li>A <code>[0-9]$</code> azt mondja meg, hogy a sor számjegyre kell, hogy végződjön.</li>
</ul>
</div>


<span>10.</span> ...a `teve` szöveggel kezdődik, ami után vagy szerepel alulvonás vagy nem, majd legalább 1 betű vagy számjegy következik, majd közvetlenül ezután egy számjegy jelzi a teve nevének végét! **(3 pont)**

<div class="bordered-box border-black">
<span class="black">Megoldás:</span>
<pre>
> egrep --color '^teve(_)?[A-Za-z0-9]+[0-9]$' camels.txt
<span class="red">teve98</span>
<span class="red">teve_4ever444</span>
<span class="red">teve123456</span>
<span class="red">tevekiraly20</span>
</pre>

Magyarázat:

<ul>
    <li>A <code>^teve</code> azt mondja meg, hogy a sor a <code>teve</code> szöveggel kezdődik (ezt már tudjuk).</li>
    <li>A "vagy szerepel X, vagy nem"-re a speciális szimbólumunk a <code>?</code> (kérdőjel). Érdemes az egyértelműség kedvéért bezárójelezni azt a részkifejezést, amire a <code>?</code> vonatkozik.</li>
    <li>A <code>[A-Za-z0-9]+</code> azt mondja meg, hogy betűből (itt a nagybetűk és kisbetűk is játszanak) vagy számjegyből legalább 1 darabnak szerepelnie kell.</li>
    <li>A <code>[0-9]$</code> azt mondja meg, hogy a sor számjegyre kell, hogy végződjön (ezt már tudjuk).</li>
</ul>
</div>


<span>11.</span> ...**nem** az angol ábécé valamely magánhangzójával kezdődik! **(1 pont)**

<div class="bordered-box border-black">
<span class="black">Megoldás:</span>
<pre>
> egrep --color '^[^AEIOUaeiou]' camels.txt
<span class="red">t</span>eve98
<span class="red">C</span>AMELON_DIAZ
<span class="red">t</span>eve
<span class="red">t</span>eve4life
<span class="red">m</span>y epic camel with wings and lazer eyes
<span class="red">S</span>TEVE_JOBS_07
<span class="red">t</span>eve_4ever444
<span class="red">t</span>eve123456
<span class="red">N</span>EMZSIRAF
<span class="red">t</span>evekiraly20
<span class="red">l</span>ost_in_sahara_send_help_pls
<span class="red">t</span>eve_suttogo_2
<span class="red">t</span>eve_4ever
<span class="red">t</span>eve7
</pre>

Magyarázat: Ebben a feladatban az egyetlen újdonság a szögletes zárójeleken belül használt "kalapjel". A <code>[^HALMAZ]</code> azt jelenti, hogy a <code>HALMAZ</code>-ban <strong>nem szereplő</strong> karaktereket keressük. Mivel most a "nem magánhangzók" érdekelnek minket, ezért a <code>HALMAZ</code> helyén az angol ábécé magánhangzóit adjuk meg.
</div>


<span>12.</span> ...páratlan sok karakterből áll! **(3 pont)**

<div class="bordered-box border-black">
<span class="black">Megoldás:</span>
<pre>
> egrep --color '^(..)*.$' camels.txt
<span class="red">teve4life</span>
<span class="red">my epic camel with wings and lazer eyes</span>
<span class="red">STEVE_JOBS_07</span>
<span class="red">teve_4ever444</span>
<span class="red">NEMZSIRAF</span>
<span class="red">teve7</span>
</pre>

Magyarázat: A <code>(..)\*</code> garantálja azt, hogy páros sok karakterünk legyen, hiszen 2 darab tetszőleges karakterből van tetszőlegesen sok (akár 0 is). Ezután a páros sok karakter után még szerepeltetünk 1 darab tetszőleges karaktert, ily módon páratlan sok karakterünk lesz (<code>(..)\*.</code> belső rész magyarázata). Ez a minta a teljes vizsgált stringre vonatkozik, tehát kiírjuk a string elejét jelző <code>^</code>, illetve a string végét jelző <code>$</code> karaktereket.
</div>