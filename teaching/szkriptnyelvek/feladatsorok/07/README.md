<style>
    h1:first-of-type { display: none; }
</style>

# Szkriptnyelvek - 7. gyakorló feladatsor

## A JavaScript fontosabb adatszerkezetei - Tömbök és objectek


### 1. feladat: Full stack

Jónás, a csokigyáros el akarja készíteni a vállalkozásának a weboldalát, ezért fejlesztőket keres. A munkára való jelentkezések elbírálásakor Jónás előnyben részesíti azokat a fejlesztőket, akik a frontendhez és a backendhez egyaránt értenek (full stack fejlesztők).

Írj egy `fullStack` nevű függvényt, amely két szöveget kap paraméterül: az első szövegben a frontend, míg a második szövegben a backend fejlesztők nevei találhatóak pontosvesszőkkel elválasztva! A függvény válogassa ki egy tömbbe azoknak az embereknek a nevét, akik a frontend és backend fejlesztők között is szerepelnek! Az így kapott tömb legyen a függvény visszatérési értéke!

**Példa:**

<pre>
<b>Input:</b> 'Ron;Dumbledore;Hermione;Neville', 'Sirius;Lupin;Neville;Piton;Dumbledore;Lockhart'
<b>Return:</b> ['Dumbledore', 'Neville']

<b>Input:</b> 'Voldemort;Bellatrix', 'Fred;George'
<b>Return:</b> []
</pre>


