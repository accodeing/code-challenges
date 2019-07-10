# Rules

The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead, (or populated and unpopulated, respectively).

Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.
2. Any live cell with two or three live neighbours lives on to the next generation.
3. Any live cell with more than three live neighbours dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

# Challenge

Build a web app, in any framework/language, that visualize the game of life. The simulation can optionally be seeded with a state set by the user, instead of just using a random or fixed starting state.

## Steps

1. Create an architecture for the problem; what do you need to keep track of, how will you calculate the next step and how will you update/drive the visualisation.
2. Implement a proof of concept/first version.
3. Reflect on the inplementation and find ways you could improve it for a second version.

### Goal for step 1

- Some design documnet, can just be a simple README or a complete doc with graphs etc, detailing how you are going to solve the problem.
- Technology choice with motivation, tell us what you are going to use and why you choose it.
- Risks, potential problem areas that might make the proposed design fail or get over complicated.
- Estimate of how long it will take.

# Solutions

[Jonas' solution](Jonas/)  
[Hannes' solution](Hannes/)
