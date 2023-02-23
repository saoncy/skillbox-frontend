function checkPassword(password) {
  if ((password.includes('-') || password.includes('_')) && password.length >= 4) {
    console.log('Пароль надежный');
  } else {
    console.log('пароль ненадежный');
  }
}

checkPassword('1234-');
checkPassword('4321_');
checkPassword('qaz-xsw');
checkPassword('_zxd');
checkPassword('_-a');
checkPassword('qazwsx');
checkPassword('_-3');
checkPassword('1234567');
