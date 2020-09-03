#!/bin/bash

: '
	Futtatáshoz először adjunk magunknak futtatási jogosultságot: chmod u+x elso.sh
	Ha ez megvan, akkor futtassuk a szkriptet: ./elso.sh param1 param2 ...

	(ja, amúgy így lehet több soros kommentet írni)
'

# Írassuk ki a "Hello World!" szöveget a konzolra!

echo "Hello World!"			# képernyőre írás

# Listázzuk ki az aktuális könyvtár tartalmát, csupa nagybetűssé téve a fájlok és könyvtárak nevét!

ls | tr a-z A-Z				# listázunk, majd a listázás eredményét nagybetűsítjük

# Változók

val="oprendszerek"		# létrehozás - FONTOS, hogy az egyenlőségjel előtt és után NEM szerepelhet szóköz(!)
echo $val			# változó értékének kiíratása - ha a változó értékét szeretnénk elérni, dollárjelet írunk a változó neve elé

# Kiíratások

echo "Kedvenc tárgyam a(z) $val"	# idézőjeles megadás esetén a változók értékei behelyettesítődnek
echo 'Kedvenc tárgyam a(z) $val'	# aposztrófos megadás esetén NEM helyettesíti be a változó értékeit ("azt írja ki, amit lát")

content=`ls`		# backtick-ek (AltGr+7) között végrehajthatunk parancsokat, és ezek kimenetét eltárolhatjuk változókban
echo $content
content2=$(ls)		# hasonlóképpen, így is megadhatunk parancsvégrehajtást
echo $content2

# Beolvasás a konzolról

echo "Add meg a neved:"
read name					# beolvasunk a konzolról egy értéket a name változóba
echo "Szia, $name!"				# kiíratjuk a beolvasott változó értékét

# Parancssori paraméterek kezelése

echo "Ennyi paramétert kaptam: $#"		# a parancssori paraméterek száma: $#
echo "A szkript neve: $0"			# a parancssori paraméterek külön-külön is lekérhetők ($0, $1, $2, ...)
echo "Az első paraméter: $1"
echo "Az összes paraméter: $*"			# a $* segítségével a parancssori paramétereket egyetlen stringként kapjuk meg

# Aritmetikai (matematikai) kifejezések

# Ha valamilyen aritmetikai műveletet végzünk (pl. összeadás, szorzás stb.), akkor a sima SUM=NUM1+NUM2 szintaxis nem lesz megfelelő
# Helyette használjuk az alábbi 3 lehetőség valamelyikét

num1=3
num2=2

sum1=`expr $num1 + $num2`	# 1. verzió (az expr parancsot használjuk a kifejezés kiértékelésére)
echo $sum1

sum2=$(($num1+$num2))		# 2. verzió
echo $sum2

let sum3=$num1+$num2		# 3. verzió
echo $sum3
