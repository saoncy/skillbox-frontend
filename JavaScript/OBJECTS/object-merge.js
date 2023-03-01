let motherBoard = {
  usbPortCount: 8,
  chipset: 'AMD X570',
  socket: 'AM3/AM4',
};

let cpu = {
  coreCount: 8,
  cpuManufacturer: 'AMD',
  socket: 'AM4',
};

let videoCard = {
  videoCardModel: 'NVIDIA GeForce GTX 1060',
  videoMemory: 4096,
};

let ram = {
  ramType: 'DDR4',
  ramVolume: 8192,
  ramFrequency: 3200,
};

let computer = {
  price: 100000,
  ...motherBoard,
  ...cpu,
  ...videoCard,
  ...ram,
};

let computerWithAssign = Object.assign(
  {
    price: 100000,
  },
  motherBoard, cpu, videoCard, ram
);

console.log(computer);
console.log(computerWithAssign);

console.log(Object.keys(computer));
console.log(Object.values(computer));
console.log(Object.entries(computer));
