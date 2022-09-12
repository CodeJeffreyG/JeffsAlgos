#Jeff's Graph Algorithms


About The Project

I was inspired to create this project while researching
data structures and algorithms I thought it would be a useful
for the learning process, not only for me but others interested in the subject.

The goal of this project is to be able to let the user select multiple algorithms. Such as breadth-first search or depth-first search. The user can also choose a start point and an end point of two nodes for the algorithm to traverse through.

Once the search begins, the user can see how the chosen algorithm gets from its starting to its ending destination. 


#built with
React-Native
TypeScript
Css

#install

git clone https://github.com/CodeJeffreyG/Jeffs-Graph-Algos

npm install

#contact
JeffreyGrahamBusiness@gmail.com

#my thought process

1. The first step was creating a grid with nested loops—fifteen rows with 50 columns.

2. I iterated through each node, and each node created a node component for a total of 750 Node components. Each one has a unique key of the index in which the node was created.

3. I had to create some type of interface for a couple of reasons. Most importantly, mark if a Node was visited so the algorithm ran was not endlessly looping. Additionally, for logic to visually draw where the starting node is and where the ending node is. 
