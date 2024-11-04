//  npm global commond comes whit this node 
// npm --version 

// local dependences - use it only in the particular project
// npm i <packagename>

// global dependences - use it in any project 
// npm install -g <packagename>

// package.json - manifest file  (store important information about project package)
// manual approch (creat package.json in the root , create properties etc)

// npm init (step by step , press enter to skip)
//  npm inti -y (everything default)


const _ = require('lodash')

const item = [1, [2, [3, [4 ]]]];

const newItem = _.flattenDeep(item);
  console.log(newItem);
  console.log('hello people');
  