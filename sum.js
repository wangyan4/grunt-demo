
if(process.argv.length != 4) {
  console.log('sum x y');
  process.exit(1);
}
const add = require('./calc')
var x = Number(process.argv[2]);
var y = Number(process.argv[3]);

console.log(`${x} + ${y} = ${add(x,y)}`)
