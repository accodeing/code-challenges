# Requirements
* We need a grid, I'm going to allow it to be configurable in size, to hold/show the current state.
* The time will also be configurable, to seconds, and is the pause between state updates.
* The starting state should be configurable by the user, you should be able to generate a random one and load famous ones from a library.

## Order of implementation
To make this possible to do in half an hour we need to focus our efforts.

### Must haves
* Data structures
* Visual grid
* Timer
* Update logic
* Rendering loop
* A starting state

### Nice to have
In order of niceness
* Random start
* Configurable resizing
* Configurable delay
* Library of cool automatons
* User generated start
* Save and load your own creations :)

# Estimations
I estimate that I can barely do the must haves in 30 minutes, _if_ the update logic works out on the first try.

## Must haves
Most likely it will mostly work, I will be stuck on a simple issue with the update logic and spend two more hours fixing it after the challeng ends, but I will have been really close on the first try :)

## Nice to haves
Doing all of the features ... After the must haves are done doing the configurable stuff is really easy. I think I can do to first three in 20 minutes.

The library i pretty simple logic, but the issue there is to convert existing samples into something that I can consume. So given I have the samples in a good format, I think I can do this in another 20 minutes.

User generated start is also pretty simple once you get everything else done. It is just showing the grid and directly modifying the current state bit array on click. So I'd say 20 minutes for that as well.

Save and load ... If you do it to local storage it shouldn't be that hard TBH. I think about another 20 minutes.

## Summary
Total time: ~2 hours, 30 minutes to get the main logic and rendering working and then 20 minute increments for the rest of the features.

# Implementation plan
The simulation will run a timestep at a time. Waiting for the timer, performing the state update and rendering.

The datastructure for the grid will be a bit array. Essentially holding each cell in the grid as a bit in the array.

At each timestep we need to calculate the new state of each cell. Since we have the data as bits and depend on only 8 of the bits to determine liveness for the next step we need to make, at most, 8 bitwise calculations per cell in the grid. At mist since we can exit early as soon as we reach at least two live bits.

The state needs to be replaced each time, or using a buffer swap to save on memory allocations, since we cant write to the current state while calculating the new state.

The edges will wrap, so for a grid of size 8 to calculate the 8th cell you need to look at the 9th bits of the row above, current row and row below, you will instead look at the first position on that row. The same goes for rows, when calculating the last row you need to look at the row below it, which will then be the top row.

# Technology
JavaScript, React using simple provider/consumer logic.

The state will be an `ArrayBuffer` with a uint8 view.

## Motivation
* I'm very familiar with the technology stack.
* It is easy it iterate a solution, the developer tools are nice and reload changes automatically. Good tooling.
* It is fast for this kind of work, ArrayBuffer is implemented in a way to make it almost as fast as in C.
* React gives me the render loop for free.
* I want to learn more about bitwise operations in JavaScript
* It works as a live demo and can be published :)

# Risks
* I don't know how to efficiently do the bitwise operations.
* It might take longer than I think to get the update logic working, the rest of the must haves are pretty simple - but still takes time.

# Notes
* Functions for finding neighbours can use the `( center_x + offset + rows) % rows` trick.
* Like this: `center_index = (total_length + (y * row_length) + x) % total_length`, if x and y are zero based, so 0-9 for a 10x10 grid.

To generalize that we need to take row length etc into account and applythe trick in two steps, once for the row part and once for the position in the row:

```
const index = ( x, y ) => ((( 10 + y ) * 10 ) % 100 ) + (( 10 + x ) % 10 );`

so running a loop like this:
```
for(let y=-1;y<2;y++){
  for(let x=-1;x<2;x++){
	console.log( index( center_x + x, center_y + y ));
  }
}
```
Will give you all the neighbours indexex in the array, including edges!
