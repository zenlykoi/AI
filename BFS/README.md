# BFS - JS code example

## map
![map](https://raw.githubusercontent.com/zenlykoi/AI/master/BFS/map.png)
![tree_map](https://raw.githubusercontent.com/zenlykoi/AI/master/BFS/tree_map.png)

## code
```javascript
//The value of the edges is an array of its adjacent edges and not is the blocks
let map = {
  "a0" : ["b0","a1"],
  "a1" : ["a0","a2"],
  "a2" : ["a1","b2"],
  "a3" : "block",
  "b0" : ["a0","c0"],
  "b1" : "block",
  "b2" : ["a2","b3","c2"],
  "b3" : ["b2","c3"],
  "c0" : ["b0","c1"],
  "c1" : ["c0","d1","c2"],
  "c2" : ["c1","b2","c3"],
  "c3" : ["c2","b3","d3"],
  "d0" : "block",
  "d1" : ["c1"],
  "d2" : "block",
  "d3" : ["c3"]
}

//Tree
let map2 = {
  "A" : ["B","C","D"],
  "B" : ["M","N"],
  "C" : ["L"],
  "D" : ["O","P"],
  "M" : ["X","Y"],
  "N" : ["U","V"],
  "O" : ["I","J"],
  "Y" : ["R","S"],
  "X" : [],
  "L" : [],
  "P" : [],
  "U" : [],
  "V" : ["G","H"],
  "I" : [],
  "J" : [],
  "R" : [],
  "S" : [],
  "G" : [],
  "H" : [],
}
```

## run
```javascript
let result = BFS("a0","d3",map);
console.log(result.way);       //The way to the goal
console.log(result.list);      //The list of edges has been checked

//input "Start" + "End" + "Map object"
//output ["edge1","edge2"] <- way
```
