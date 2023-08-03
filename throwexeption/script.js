function twoParams(x, y) {
  if (arguments.length !== 2) throw "PAss 2 arguments only";
}

//twoParams(1);

function adding() {
  var res = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (!Number(arguments[i])) throw "this is not a number";

    res += arguments[i];
  }

  return res;
}

//console.log(adding(1, 5, 6, 8, "eisa"));

function reversed1() {
  var arr = [];
  for (let i = 0; i < arguments.length; i++) {
    arr[i] = arguments[i];
  }
  return arr.reverse();
}

//console.log(reversed1(1, 2, 35, 5, 8));

function reversed2() {
  var arr = [];
  var counter = 0;
  for (let i = arguments.length - 1; i >= 0; i--) {
    arr[counter++] = arguments[i];
  }

  return arr;
}

function reversed3() {
  var arr = [];

  for (let i = arguments.length - 1; i >= 0; i--) {
    arr.push(arguments[i]);
  }

  return arr;
}

console.log(reversed3(1, 2, 35, 5, 8));
