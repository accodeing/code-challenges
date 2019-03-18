using System;
using System.Collections;
using System.Collections.Generic;

namespace arraysort
{
    class Program
    {
        static void Main(string[] args)
        {
            List<char> listToSort = new List<char>();
            listToSort.AddRange(args[0]);
            Console.WriteLine(listToSort.ToArray());
            QuickSort(listToSort);
            
        }

        static List<char> QuickSort(List<char> abc)
        {
            int[] sortedList = new int[abc.Count];

            Random ran = new Random();
            int pointer = ran.Next(0, abc.Count - 1);
            
            //select a pivot from the list based on the random number.
            char pivot = abc[pointer];

            //Create two lists for each pivot.Left list will contain the lesser items and right list
            //will contain all the grater items then pivot
            List<char> leftList= new List<char>();
            List<char> rightList = new List<char>();

            foreach (var item in abc)
            {
                if (item < pivot)
                leftList.Add(item); 
                else if (item > pivot)
                    rightList.Add(item);                    
            }

            //Call the same method recursively unless we have one items left in each left and right
            //side
            var mergedSolution = QuickSort(leftList);
            mergedSolution.Add(pivot);
            mergedSolution.AddRange(QuickSort(rightList));
            return mergedSolution;
         }

    }
}
