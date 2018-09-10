// Use sample files from:
//   https://www.sample-videos.com/download-sample-text-file.php

const fs = require('fs');
const FILE = 'SampleTextFile_10kb.txt';

// Execution Starts here
fs.readFile(FILE, 'utf8', (err, data) => {
  if (err) console.log('Error:', err);
  console.log(data);

  // Pass read() as a callback to the write function, and pass console.log() as a
  // callback to the callback. Confusing? I know. Welcome the callback hell!
  write('Updated content', read(console.log));
});

// This function writes the 'content' to the FILE
// and executes a callback after async the write is completed.
function write(content, callback) {
  fs.writeFile(FILE, content, err => {
    if (err) console.log('Error:', err);
    callback;
  });
}

// This function reads from the FILE and
// passes the data into a callback function
function read(callback) {
  fs.readFile(FILE, 'utf8', (err, data) => {
    if (err) console.log('Error:', err);
    callback(data);
  })
}
