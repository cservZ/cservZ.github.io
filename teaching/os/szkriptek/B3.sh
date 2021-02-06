#!/bin/bash

# Írassuk ki az egész számokat 1-től 10-ig while utasítás segítségével!

i=0

while [ $i -lt 10 ]; do	  # amíg az i értéke 10-nél kisebb...
	let i=$i+1		# ...1-gyel növeljük (aritmetikai kifejezés miatt a 'let'-et használjuk)
	echo $i			# ...kiíratjuk az értékét
done

echo "=========================================="

# Hozzunk létre végtelen ciklust! Adjunk példát a break és continue utasítások használatára!

i=0

while true; do		 # így lehet egyszerűen végtelen ciklust létrehozni
	let i=$i+1

	if [[ $i -gt 5 ]]; then		# a 5-ös érték elérése után kilépünk a ciklusból
		break
	fi

	if [[ $i -eq 3 ]]; then		# az 3-ast elérve átugorjuk az aktuális iterációt, és a következővel folytatjuk
		continue
	fi

	echo $i
	sleep 2				# várunk 2 másodpercet minden kiíratás után
done

echo "=========================================="

# Legyen az első parancssori paraméter egy egész szám. Tekintsünk erre egy érdemjegyként (1-5), és írassuk ki a megfelelő szöveges értékelést!

case $1 in	# az első paraméter értékének függvényében vizsgálunk meg eseteket (mint C-ben a switch)
	5 )				# ha a paraméter értéke 5...
		echo "Jeles";;
	4 )				# ha a paraméter értéke 4...
		echo "Jó";;
	3 | 2 )				# ha a paraméter értéke 3 vagy 2...
		echo "Nem jó, nem tragikus";;
	1 )				# ha a paraméter értéke 1...
		echo "Elégtelen :(";;
	* )				# "default ág": ha a paraméter értéke a fentiektől különböző...
		echo "Nem megfelelő érték...";;
esac

echo "=========================================="

# Függvények

function hello() {			# függvénydefiníció
	echo "Hello World!"
}

function koszon() {			# a függvény paramétereit a $1, $2, ... segítségével érhetjük el a függvényen belül
	echo "Hello $1!"			# hivatkozás az első függvényparaméterre
}

function osszead() {
	if [[ $# -ne 2 ]]; then		# ha nem pontosan 2 paraméterrel hívják meg a függvényt...
		echo "Juj!"
		exit 12				# ...kilépünk a programból 12-es hibakóddal
	fi

	let sum=$1+$2
	echo "A paraméterek összege: $sum"
}

hello					# függvényhívás (a függvény neve után NINCS zárójelpár!)
koszon "Béla"				# a függvény paramétereit szóközzel elválasztva soroljuk föl
osszead 5 2
osszead 5
echo "ez már nem fog kiíródni, mert kiléptünk a programból"

