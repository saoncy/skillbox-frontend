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

for (let key in computer) {
  if (!computer.hasOwnProperty(key)) continue;

  console.log(`${key}: ${computer[key]}`)
}
