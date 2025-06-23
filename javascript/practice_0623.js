const arr = [1, 2, 3, 4, 5];
arr.forEach((a) => {
  console.log("a=", a);
  if (a === 3) return console.log("find!");
});
