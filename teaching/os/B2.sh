#!/bin/bash

# --- Feltételes vezérlés ---

: ' 
	A feltételek megadására használjuk a speciális kapcsolókat!
	Puska (kapcsolók listája): Lékó Gábor honlapján (otthoni gyakorlásra), Griechisch Erika jegyzetében (ZH-n)
'

# Döntsük el egy változóban tárolt számról, hogy pozitív, nulla vagy negatív!

val=-42		# továbbra se felejtsük el, hogy értékadáskor az = előtt és után NEM szerepelhet helyköz

if [[ $val -gt 0 ]]; then		# "ha" ág (a feltétel megadásakor kellenek a szóközök!)
	echo "Pozitív";
elif [[ $val -eq 0 ]]; then		# "egyébként ha" ág (a feltétel megadásakor kellenek a szóközök!)
	echo "Nulla"
else					# "egyébként" ág
	echo "Negatív"
fi


# Döntsük el két szövegről, hogy megegyeznek-e!

szoveg1="sajt"
szoveg2="kecske"

if [[ $szoveg1 = $szoveg2 ]]; then		# stringek (szövegek) összehasonlítása az = operátorral történik
	echo "A két szöveg megegyezik"
else
	echo "A két szöveg különbözik"
fi

# Döntsük el, hogy az első parancssori paraméter egy létező fájl neve-e!

if [[ -e $1 ]] && [[ -f $1 ]]; then	# -e: létezik, -f: fájl... a feltételeket logikai ÉS-sel kapcsoljuk össze
	# természetesen ez a feladat megoldható lenne úgy is, hogy két külön if-be tesszük a két feltételt
	echo "$1 egy létező fájl"
fi

# Döntsük el, hogy az első parancssori paraméter könyvtár-e!

if [[ -d $1 ]]; then			# -d: könyvtár
	echo "$1 egy könyvtár"
fi

# --- Ismétléses vezérlés (for-ciklus) ---

# Adjunk példát a listaszerű for-ciklus működésére!

echo "===================================================="
echo "Let's make some pálinka..."

for gyumi in alma körte szilva barack; do
	# a "gyumi" névre hallgató ciklusváltozó rendre fölveszi a megadott lista szóközzel elválasztott elemeinek értékét
	echo $gyumi
done

# Járjuk be a parancssori paramétereket for-ciklus segítségével!

echo "===================================================="
echo "A parancssori paramétereink:"

for param in $*; do	# $*: a parancssori paramétereket egyetlen stringként adja vissza (szóközzel elválasztott listaelemeken iterálunk végig)
	echo $param
done

# Írassuk ki az aktuális könyvtár tartalmát for-ciklus segítségével!

echo "===================================================="
echo "Ezek vannak az aktuális könyvtárban:"

for item in `ls`; do		# lényegében az 'ls' parancs kimenetén iterálunk végig (rövidebben: for item in *; do ... done)
	echo $item
done

# Járjuk be az aktuális könyvtárban található txt fájlokat for-ciklus segítségével!

echo "===================================================="
echo "A txt fájljaink:"

for file in *.txt; do		# csak a txt kiterjesztésű fájlokat járjuk be (*: tetszőleges számú karaktert helyettesít)
	echo $file
done

# Ha valakinek nagyon hiányzik, itt a klasszikus, számlálásos ismétléses vezérlés néven futó for-ciklus is...

echo "===================================================="
echo "És most számolunk..."

for (( i=1; i<=10; i++ )); do	# fun fact: a (( és )) közé írt kódrész kivételesen nem érzékeny a helyközökre
	echo $i
done
