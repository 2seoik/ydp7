globalThis.name = 'Global Name';

const obj = {
  name: 'Obj Name',
  printName: function() {
    console.log(this.name);
  },
};

obj.printName();  // run in the heap(obj)
const printName = obj.printName;  // <f.o> address
// obj = null;
printName();


return 
// globalThis.name = 'Global'

// ⇔ function declareFn(name) {
const expressFn = function(name) {
  // if, 'use strict' ?
  // this.name = name;
  console.log("🚀 ~ expressFn ~ this:", this)
  console.log("🚀 ~ expressFn ~ new.target:", new.target)
  console.log("🚀 ~ expressFn ~ this.name:", this.name)
  console.log("🚀 ~ expressFn ~ name:", name)
  console.log('------------------------------')
}



const arrowFn = (name) => {
  // this.name = name;
  console.log("🚀 ~ arrowFn ~ this:", this)
  console.log("🚀 ~ arrowFn ~ new.target:", new.target)
  console.log("🚀 ~ arrowFn ~ this.name:", this.name)
  console.log("🚀 ~ arrowFn ~ name:", name)
}

expressFn('expfn');
arrowFn('afn');


// const dfn = new expressFn('D');
// const afn = new arrowFn('A'); // error!


