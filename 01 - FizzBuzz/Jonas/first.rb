(1..100).each do |number|
  string = ''
  if number % 3 == 0
    string << "Fizz"
  end
  if number % 5 == 0
    string << "Buzz"
  end
  if string.empty?
    string << number.to_s
  end
  puts string
end
