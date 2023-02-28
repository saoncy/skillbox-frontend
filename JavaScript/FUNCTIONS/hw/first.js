function deleteElementsFromArray(initialArray, itemsToRemove) {
  let newArray = [];

  for (let item of initialArray) {
    if (!itemsToRemove.includes(item)) newArray.push(item);
  }

  return newArray;
}

console.log(
  deleteElementsFromArray(
    ['skillb.ox.fronten.d@gmail.com',
  'skillb.ox.fronte.nd@gmail.com',
  'skillb.ox.fronte.n.d@gmail.com',
  'skillb.ox.front.end@gmail.com',
  'skillb.ox.front.en.d@gmail.com',
  'skillb.ox.front.e.nd@gmail.com',
  'skillb.ox.front.e.n.d@gmail.com',
  'skillb.ox.fron.tend@gmail.com',
  'skillb.ox.fron.ten.d@gmail.com',
  'skillb.ox.fron.te.nd@gmail.com',
  'skillb.ox.fron.te.n.d@gmail.com',
  'skillb.ox.fron.t.end@gmail.com',
  'skillb.ox.fron.t.en.d@gmail.com',
  'skillb.ox.fron.t.e.nd@gmail.com',
  'skillb.ox.fron.t.e.n.d@gmail.com',
  'skillb.ox.fro.ntend@gmail.com'],
  ['skillb.ox.fronte.n.d@gmail.com',
  'skillb.ox.front.end@gmail.com',
  'skillb.ox.fron.te.nd@gmail.com',
  'skillb.ox.fron.te.n.d@gmail.com']
  )
)

export default deleteElementsFromArray;
