import sys

def narcissistic_number(string_value):
  value = int(string_value)
  nr_of_digits = len(string_value)
  digits = map(lambda string: int(string), list(string_value))
  summary = reduce(lambda a, b: a + b,
                   map(lambda digit: pow(digit, nr_of_digits), digits))
  result = value == summary

  print result

  return result

narcissistic_number(sys.argv[1])
