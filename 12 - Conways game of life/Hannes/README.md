# Step 1

## How to solve the problem

### Classes

#### Game
The `Game` class keeps track of all live cells.
* `alive_cells`: a list of all alive cells. They are ordered by position, see `Cell#compare`.

Methods:
* `run`: an infinite loop that runs `next_time_step`
* `next_time_step`: iterates through the `alive_cells` list and runs `survives?` on
  each cell.

#### Cell
The `Cell` class represents a cell in the grid. It holds the following information:
* `position`: the position in the grid
* `status`: if the cell is dead or alive

The class needs two methods:
* `compare`: defines how to sort the cell compared to other cells
* `survives?`: this method checks the cell's neighbors to see if the cell will survive until the next time step. It does so by checking the status of each neighbor.
