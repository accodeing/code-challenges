numbers = Array.new(100) {|i| i+1 }

fizzbuzz = numbers.map do |number|
  if number % 3 == 0 && number % 5 == 0
    'fizzbuzz'
  elsif number % 3 == 0
    'fizz'
  elsif number % 5 == 0
    'buzz'
  else
    number
  end
end

def fizzbuzz(number)
  number % 3 == 0 && number % 5 == 0
end

def fizz(number)
  number % 3 == 0
end

def buzz(number)
  number % 5 == 0
end

p numbers.map do |number|
  next 'fizzbuzz' if fizzbuzz(number)
  next 'fizz' if fizz(number)
  next 'buzz' if buzz(number)
  number
end
