function calculateTotal(cartTotal, cartSize, promocode = null) {
  let total = cartTotal;

  if (promocode === 'ДАРИМ300') {
    total = total < 300 ? 0 : total - 300;
  }

  if (cartSize >= 10) {
    total *= 0.95;
  }

  if (total > 50000) {
    total -= (total - 50000) * 0.2;
  }

  if (promocode === 'СКИДКА15' && total >= 20000) {
    total *= 0.85;
  }

  return total.toFixed(2);
}

console.log(calculateTotal(57300, 11, 'ДАРИМ300'));
console.log(calculateTotal(57300, 11, 'СКИДКА15'));
console.log(calculateTotal(52000, 5, 'СКИДКА15'));
