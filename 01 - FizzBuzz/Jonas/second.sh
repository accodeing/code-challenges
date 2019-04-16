#!/bin/bash

numbers=($(seq 1 1 100))

for number in ${numbers[@]}; do
  string=""
  if (( $number%3 == 0 )); then
    string="Fizz"
  fi
  if (( $number%5 == 0 )); then
    string=$string"Buzz"
  fi
  if [ -z "$string" ]; then
    string=$number
  fi
  echo $string
done
