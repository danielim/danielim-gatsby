#!/bin/bash
file=$1

extension="${file##*.}"
filename="${file%.*}"

convert $file $filename.jpg
imagemin $filename.jpg > $filename.jpeg
mv $filename.jpeg $filename.jpg
