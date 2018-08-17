/**
 *
 * Test on Object Values
 *
 * */

function getValuesAndEntries() {
	// JSON object
	let jsonObj = {
		m: 'man',
		f: 'woman'
	}

	// Array Object
	let arrayObj = ['a', 'b', 'c', 'd']

	// String object
	let es8 = 'ES8'

	console.log('=== Object Values ===')
	console.log(Object.values(jsonObj))
	console.log(Object.values(arrayObj))
	console.log(Object.values(es8))

	console.log('')
	console.log('=== Object Entries ===')
	console.log(Object.entries(jsonObj))
	console.log(Object.entries(arrayObj))
	console.log(Object.entries(es8))
}

getValuesAndEntries();
