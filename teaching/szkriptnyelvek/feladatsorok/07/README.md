<style>
    h1:first-of-type { display: none; }
</style>

# Szkriptnyelvek - 7. gyakorló feladatsor

## A JavaScript fontosabb adatszerkezetei


### 1. feladat: Full stack

Jónás, a csokigyáros el akarja készíteni a vállalkozásának a weboldalát, ezért webfejlesztőket keres. A munkára beadott jelentkezések elbírálásakor Jónás előnyben részesíti azokat a fejlesztőket, akik a frontendhez és a backendhez egyaránt értenek ("full stack fejlesztők").

Írj egy `fullStack` nevű függvényt, amely két szöveget kap paraméterül! Az első szövegben a frontend, míg a második szövegben a backend fejlesztők nevei szerepelnek pontosvesszőkkel elválasztva. A függvény adja vissza egy tömbben azoknak a nevét, akik a frontend és backend fejlesztők között egyaránt szereplnek!

**Példa:**

<pre>
<b>Input:</b> 'Zsiros B. Odon;Koaxk Abel;Heu Reka;Riz Otto', 'Riz Otto;Rabsz Olga;Ga Zora;Trab Antal;Koaxk Abel;Winch Eszter'
<b>Return: ['Koaxk Abel', 'Riz Otto']

<b>Input:</b> 'Citad Ella;Techno Kolos', 'Git Aron;Teask Anna'
<b>Return:</b> []
</pre>

