function tankMovement(roadMines) {
  let healthPoints = 1;
  for (let position in roadMines) {
    console.log(`Танк переместился на ${+position + 1}`);

    if (roadMines[position] && healthPoints) {
      console.log('танк повреждён');
      healthPoints--;
    } else if (roadMines[position] && !healthPoints) {
      console.log('танк уничтожен');
      break;
    }
  }
  console.log('')
}

tankMovement([true, true, true, true, true, true, true, true, true, true]);
tankMovement([true, false, false, false, false, false, false, false, false, true]);
tankMovement([false, false, false, true, false, false, false, false, false, false]);
tankMovement([false, false, false, false, false, false, false, false, false, false]);
