package main

import (
	"fmt"
	"math"
	"os"
	"strconv"
	"strings"
)

func power(number, exponent int) int {
    return int(math.Pow(float64(number), float64(exponent)))
}

func isNarcissistic(candidate string) bool {
	digits := strings.Split(candidate, "")
	sum := 0
	for _, digit := range digits {
		number, _ := strconv.Atoi(digit)
		sum += power(number, len(candidate))
	}
	return strconv.Itoa((sum)) == candidate
}

func main() {
	candidateNumber := os.Args[1]
	if isNarcissistic(candidateNumber) {
		fmt.Printf("%s is a narcissistic number", candidateNumber)
	} else {
		fmt.Printf("%s is not a narcissistic number", candidateNumber)
	}
	fmt.Println("")
}