package main

import (
	"testing"
)

func TestNarcissistic(t *testing.T) {
	narcissistic := "371"
	result := isNarcissistic(narcissistic)
    if !result {
        t.Fatalf("%s should be a narcissistic number", narcissistic)
    }
}

func TestNotNarcissistic(t *testing.T) {
	notNarcissistic := "372"
	result := isNarcissistic(notNarcissistic)
    if result {
        t.Fatalf("%s should not be a narcissistic number", notNarcissistic)
    }
}
