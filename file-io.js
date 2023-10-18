const fs = require('fs');
const readline = require('readline');
const path = require('path');

const filePath = path.join(__dirname, 'data.txt');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(`Contents of file: ${data}`);
});

const fileStream = fs.createReadStream(filePath);

const rl = readline.createInterface({input: fileStream, crlfDelay: Infinity});

rl.on('line', (line) => {
  console.log(`Line from file: ${line}`);
});

rl.on('close', () => {
  console.log('File closed');
});

try {
  if (!fs.existsSync(filePath + 'q')) {
    throw new Error('File not found');
  }
  const fileStream2 = fs.createReadStream(filePath + 'q');

  const rl2 =
      readline.createInterface({input: fileStream2, crlfDelay: Infinity});

  rl2.on('line', (line) => {
    console.log(`Line from file: ${line}`);
  });

  rl2.on('close', () => {
    console.log('File closed');
  });

  rl2.on('error', (err) => {
    console.log(err);
  });
} catch (err) {
  console.log(err.message);
}
