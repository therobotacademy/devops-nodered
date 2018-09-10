// non-blocking / async code:
var fs = require('fs');

console.log('ALERTA: ¡Fuga de la prisión de conejos!');
// notice the method is called readFile not readFileSync.
fs.readFile('wishlist.html', function(err, wishlist) {
	if(err) throw err;
	console.log(wishlist.toString());
})
console.log('ALERTA: ¡Saltador sin prejuicios!');
console.log('ALERTA: ¡Devora salvajemente frambuesas!');

/* EXTRA: This method adds something new to your wishlist.html file.
Run 'node bunnyAsync.js' and see for yourself.

Notice I leave this method in blocking format.
Otherwise, if I left in as appendFile (the async version),
the fs.readFile reads the wishlist.html file async and
then the all the ALERT's print before the appendFile method is done
processing. Thus you won't see the change taking place until you call
'node bunnyAsync.js' in your terminal again.
*/
fs.appendFileSync('wishlist.html', '6. Grita"¡Feliz con Async!"', 'utf8');
