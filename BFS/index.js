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

function BFS(start,end,map){
  if(map[start] == undefined || map[start] == "block" || map[end] == undefined || map[end] == "block"){
    return false;
  }
  let open = [];
  let close = [];
  let list = {};
  list[start] = {
    height : 0,
    parent : null
  };
  open.push(start);
  let dependent = function(e){
    let result = map[e];
    for(let i=0;i<result.length;i++){
      if(list[result[i]] == undefined){
        list[result[i]] = {
          height : list[e].height + 1,
          parent : e
        };
      }
    }
    return result;
  }
  let way = function(list){
    let result = [];
    let edge = end;
    result.unshift(edge);
    while(list[edge].parent != null){
      edge = list[edge].parent;
      result.unshift(edge);
    }
    return result;
  }
  function pushDependentToEndOfOpen(dpd,openList){
    for(let i=0;i<dpd.length;i++){
      openList.push(dpd[i]);
    }
  }
  function deleteUnreadList(list){
    let check = false;
    for(key in list){
      if(check == true){
        delete list[key];
      }
      if(key == end){
        check = true;
      }
    }
  }
  while(open.length > 0){
    let edge = open[0];
    open.shift();
    if(edge == end){
      deleteUnreadList(list);
      return {
        way : way(list),
        list : list
      }
    }
    pushDependentToEndOfOpen(dependent(edge),open);
    close.push(edge);
  }
}
//ex1
let result = BFS("a0","d3",map);
console.log(result.way);
console.log(result.list);
//ex2
let result2 = BFS("A","U",map2);
console.log(result2.way);
console.log(result2.list);
