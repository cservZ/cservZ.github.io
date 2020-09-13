<style>
	h1:first-of-type { display: none; }
</style>

# Szkriptnyelvek - 2. gyakorló feladatsor

## Python függvények, stringek


# 1. feladat: Jelszó-erősség mérő

Elliot egy kiberbiztonsági cégnél dolgozik programozóként. Egyik nap a felettese egy jelszó-erősség mérő szkript írásával bízta meg.

Készíts egy `jelszo_erosseg` nevű függvényt, ami egy szöveges paramétert vár, és a paraméterben érkező jelszóról eldönti, hogy mennyire erős! A visszatérési érték a jelszó erőssége legyen.

Szabályok:

* Alapból minden jelszó 1 erős
* Legalább 5 karakter hosszú jelszó: +1 erősség
* Legalább 8 karakter hosszú jelszó: +2 erősség
* Ha van benne alulvonás, kötőjel vagy pont: +3 erősség
* Ha tartalmazza a `jelszo` vagy `123456` részstringet, akkor a jelszó automatikusan 0 erős
* Ha a jelszó 3 karakternél rövidebb, akkor szintén automatikusan 0 erős.

**Példa:**

```
Input: hazi_macska_9
Return: 7
```