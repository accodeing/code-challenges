let wordToCheck = "inif"
let MakePalindrome (word:string) = new string(Array.rev (word.ToCharArray()))
let wordReversed = MakePalindrome wordToCheck
printfn "%s" wordToCheck

if (wordToCheck = wordReversed) then
 printfn "Woop"
else
 printfn "Not so Woop"
