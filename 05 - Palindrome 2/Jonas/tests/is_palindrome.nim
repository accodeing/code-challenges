import unittest, palindrome

suite "palindrome tester":
  test "simple":
    check is_palindrome("kayak") == false
