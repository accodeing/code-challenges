#!/usr/bin/env ruby
number_string = ARGV[0]
number = number_string.to_i

exit(false) if number.to_s != number_string

length = number_string.length
digits = number_string.split('').map(&:to_i)
result = digits.map{|d| d**length}.reduce(:+)

exit( result == number )


# Assuming that input is a valid integer:

exit( ARGV[0].to_i == ARGV[0].split('').map{|d| d.to_i**ARGV[0].length}.reduce(:+) )
