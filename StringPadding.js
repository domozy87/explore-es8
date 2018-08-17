/**
 * TEST on String Padding
 */

console.log('=== PadStart===')
console.log('ES8'.padStart(2))
console.log('ES8'.padStart(5))
console.log('ES8'.padStart(6, 'woof'))
console.log('ES8'.padStart(14, 'wow'))
console.log('ES8'.padStart(7, '0'))
console.log('');

console.log('=== PadEnd===')
console.log('es8'.padEnd(2))
console.log('es8'.padEnd(5))
console.log('es8'.padEnd(6, 'woof'))
console.log('es8'.padEnd(14, 'wow'))
console.log('es8'.padEnd(7, '6'))
