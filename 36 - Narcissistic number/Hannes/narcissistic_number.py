def narcissistic_number(value):
  string_value = str(value)
  nr_of_digits = len(string_value)
  digits = map(lambda string: int(string), list(string_value))
  summary = reduce(lambda a, b: a + b,
                   map(lambda digit: pow(digit, nr_of_digits), digits))
  result = value == summary

  print result

  return result
