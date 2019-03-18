using System;
namespace LongestCommonSubstring
{
  class Program
  {
    // Main calls longestCommonString and prints the result.
    static void Main(string[] args)
    {
        string needle = args.Length >= 1 ? args[0] : "use arguments!";
        string haystack = args.Length == 2 ? args[1] : "you should really use arguments!";
        Console.WriteLine(FindLongestCommonString(needle, haystack));
        Console.ReadKey(true);
    } 
 
    // Function that finds the longest common string in the two arguments
     public static string FindLongestCommonString(string needle, string haystack)
    {
      string longestCommonString = "";
      int lengthOfNeedle = needle.Length;     
      for (int searchSize = 0; searchSize < lengthOfNeedle; searchSize++)
      {
        for (int searchPosition = lengthOfNeedle - searchSize; searchPosition > -1; searchPosition--)  // 0 eller -1
        {
          string commonString = needle.Substring(searchSize, searchPosition);
          if (haystack.IndexOf(commonString) > -1 && commonString.Length > longestCommonString.Length) longestCommonString = commonString; // 0 eller -1
        } 
      }  
      return longestCommonString;
    }
  }
}