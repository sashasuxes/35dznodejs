const fs = require('fs');
const path = require('path');
fs.copyFile('./1.jpg', './2.jpg', (err) => {
  if (err) {
    console.error(err)
    return
  }
  //файл записан успешно
})