const data = [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]] 
const object = { A: [ 10, 20 ], B: [ 30, 40 ], C: [ 50, 60, 70 ] }
// => { 'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70] }


// 🚀 ~ aa: 0 [ 'A', 10, 20 ]
// 🚀 ~ aa: 1 [ 'B', 30, 40 ]
// 🚀 ~ aa: 2 [ 'C', 50, 60, 70 ]

let dataObj = {};
for(const [key, ...v] of data){
  // dataObj[key] = v;
  // console.log("🚀 ~ dataObj.dataObj:", dataObj)
  dataObj = {
    ...dataObj, [key] : v,
  }  
}


let dataArr = [];
for(const [key , value] of Object.entries(object)){
  dataArr = [
    ...dataArr, [key, ...value],
  ]
}

console.log("🚀 ~ dataObj:", dataObj)
console.log("🚀 ~ dataArr:", dataArr)

