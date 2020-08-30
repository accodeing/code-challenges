def palindrome?(word)
  if word.length == 0
    return false
  elsif word.length == 1
    return true
  else
    return word.downcase == word.downcase.reverse
  end
end
