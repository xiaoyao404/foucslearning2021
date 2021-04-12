const fs = require('fs');

const readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function(error, data) {
      if (error) return reject(error);
      resolve(data);
    });
  });
};

const gen = function* () {
  const f1 = yield readFile('input.txt');
  const f2 = yield readFile('input2.txt');
  console.log(f1.toString());
  console.log(f2.toString());
};

//gen.next()