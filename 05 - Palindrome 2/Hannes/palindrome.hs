import Data.Array

main = do
     line <- getLine

     let reverseLine = reverse line

     if length reverseLine == 0
       then putStrLn "false"

       else if reverseLine == line
         then putStrLn "true"
         else putStrLn "false"

-- You should probabaly do someting like this, but I didn't manage to get it working

isPalindrome :: String -> Bool
isPalindrome word
  | word == "" = False
  | length word == 0 = False
  | reverse word == word = True
  | otherwise = False
