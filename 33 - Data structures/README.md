# Data structures

A collection of code challenges for data structures.

Implement in any language you like, but only using primitive language constructs. You are not allowed to use external libraries to achieve the solution, obviously.

## 1. Array, list and tree

Construct a representation of a tree structure using each of the three mentioned approaches. To make the task slightly more challenging, and less googlable, we will build ternary trees, each node splits into three other nodes.

The data we are inserting will be on the form of:

                             A
                    /        |        \
          AA                AB                AC
        /  |  \           /  |  \           /  |  \
    AAA   AAB   AAC   ABA   ABB   ABC   ACA   ACB   ACC

And so on for as long as you like, but a minimum of three full levels.

There is also a choice of if you want to implement the walk as depth first or breadth first. The former would be `A, AA, AAA, AAB, AAC, AB, ABA, ABB, ABC, AC, ACA, ACB, ACC` while the latter would be `A, AA, AB, AC, AAA, AAB, AAC, ABA, ABB, ABC, ACA, ACB, ACC`.

For each structure you should support insertion and search. We will leave deletion and rebalancing for another time :)
