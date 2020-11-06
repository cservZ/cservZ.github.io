<style>
    h1:first-of-type { display: none; }
</style>

# Szkriptnyelvek - 7. gyakorló feladatsor

## A JavaScript fontosabb adatszerkezetei - Tömbök és objectek


### 1. feladat: Full stack

Jónás, a csokigyáros el akarja készíteni a vállalkozásának a weboldalát, ezért webfejlesztőket keres. A munkára való jelentkezések elbírálásakor Jónás előnyben részesíti azokat a fejlesztőket, akik a frontendhez és a backendhez egyaránt értenek (full stack fejlesztők).

Írj egy `fullStack` nevű függvényt, amely két szöveget kap paraméterül: az első szövegben a frontend, míg a második szövegben a backend fejlesztők nevei szereplnek pontosvesszőkkel elválasztva! A függvény válogassa ki egy tömbbe azoknak a nevét, akik a frontend és a backend fejlesztők között is szerepelnek! Az így kapott tömb legyen a függvény visszatérési értéke!

**Példa:**

<pre>
<b>Input:</b> 'Zsiros B. Odon;Koaxk Abel;Heu Reka;Riz Otto', 'Riz Otto;Rabsz Olga;Ga Zora;Trab Antal;Koaxk Abel;Winch Eszter'
<b>Return:</b> ['Koaxk Abel', 'Riz Otto']

<b>Input:</b> 'Citad Ella;Techno Kolos', 'Git Aron;Teask Anna'
<b>Return:</b> []
</pre>