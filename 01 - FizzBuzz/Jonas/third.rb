(1..100).each{|n| a=n%3;b=n%5; puts [a==0?'Fizz':'', b==0?'Buzz':'', a*b==0?'':n].join}
