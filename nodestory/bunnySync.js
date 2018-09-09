// blocking / sync code:
// you have to require the file system(fs), Node.js's core module for it to work:
var fs = require('fs');

// First read the file 'wishlist.html' synchronously using the readFileSync method:
// We have to use the toString because it returns as a buffer.
// You can learn about buffers in the resources I provide at the end of this article.
var wishlist = fs.readFileSync('wishlist.html').toString();
//print the file
console.log(wishlist);
// Do another thing:
console.log('ALERT: Pounce owner!!!');


