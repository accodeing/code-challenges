import os, strutils, unicode

proc is_palindrome*( str: string ): bool =
  var str = toLowerAscii( str )
  var head = str[0 .. len(str)/2]
  var tail = (str[len(str)/2 .. ^1]).reversed
  return head == tail

when isMainModule:
  proc main() =
    if paramCount() < 1:
      quit("synopsis: " & getAppFilename() & " [palindrome string]")
    echo is_palindrome( paramStr(1) )

  main()
