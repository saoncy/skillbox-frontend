// Кол-во квартир в доме

 let entrances = 4;
 let floors = 9;
 let flatsPerFloor = 4;

 let flatsPerEntrance = floors * flatsPerFloor;
 console.log('Кол-во квартир в подъезде - ', flatsPerEntrance);

 let flats = flatsPerEntrance * entrances;
 console.log('Кол-во квартир в доме - ', flats);


 // Пропорция напитка в коктейле Кровавая Мэри

 let vodka = 50;
 let tomatoJuice = 120;
 let lemonJuice = 10;
 let tobasco = 1;
 let worcester = 1;

 let volume = 100;

 let k = volume / (vodka + tomatoJuice + lemonJuice + tobasco + worcester)

 console.log(`Vodka for ${volume}ml of Bloody Mary is ${vodka * k}ml`);


 // Квадратное уравнение

 let a = 2;
 let b = -1;
 let c = -15;

 let d = b * b - 4 * a * c;
 let dRoot = Math.sqrt(d);

 console.log('X1 = ', (-b + dRoot) / (2 * a));
 console.log('X2 = ', (-b - dRoot) / (2 * a));


 // n чисел Фибоначчи

 let n = 10;

 let current = 0;
 let fPrev = 0;
 let sPrev = 1;

 while (n-- > 10) {
   fPrev = sPrev;
   sPrev = current;
   current += fPrev;
   console.log(current);
 }
