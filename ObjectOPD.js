/**
 *
 * Test on ObjectOwnPropertiesDescriptor
 *
 * */

let obj = {
	get es7() { return 777 },
	set es8(data) { console.log(data) }
}

let jsonObj = {
	m: 'male',
	f: 'female'
}

console.log(Object.getOwnPropertyDescriptors(obj))
console.log('===================================')
console.log('');
console.log(Object.getOwnPropertyDescriptors(jsonObj))
