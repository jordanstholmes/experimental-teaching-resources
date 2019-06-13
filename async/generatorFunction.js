const createGenerator = function* () {
  for (let i = 0; i < 10; i += 1) {
    let stuff = yield 'hi';
    console.log(`log: ${stuff} num: ${i}`);
  }
};

const g = createGenerator();
console.log(g.next());
console.log(g.next());