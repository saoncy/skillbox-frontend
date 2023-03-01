let computer = {
  price: 100000,
  usbPortCount: 8,
  chipset: 'AMD X570',
  socket: 'AM4',
  coreCount: 8,
  cpuManufacturer: 'AMD',
  videoCardModel: 'NVIDIA GeForce GTX 1060',
  videoMemory: 4096,
  ramType: 'DDR4',
  ramVolume: 8192,
  ramFrequency: 3200
};

let values = Object.values(computer);
let keys = Object.keys(computer);
let entries = Object.entries(computer);

console.log('VALUES\n');
for (let value of values) {
  console.log(value);
}

console.log('\n\nKEYS\n');
for (let key of keys) {
  console.log(`${key}: ${computer[key]}`);
}

console.log('\n\nENTRIES\n');
for (let entry of entries) {
  console.log(`${entry[0]}: ${entry[1]}`);
}

console.log('\n\nENTRIES WITH DESTRUCTURING\n')
for (let [key, value] of entries) {
  console.log(`${key}: ${value}`);
}
