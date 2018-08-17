/**
 * TEST on async and await
 *
 * The purpose of async/await functions is to simplify the behavior of using promises synchronously
 * and to perform some behavior on a group of Promises. Just as Promises are similar to structured callbacks,
 * async/await is similar to combining generators and promises.
 *
 * Promise represents the result of a task, which may or may not have completed.
 * The only interface requirement of a Promise is having a function called then,
 * which can be given callbacks to be called when the promise is fulfilled or has failed.
 */

function getValue(index) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(index)
		}, 2000)
	})
}

function getValueNoWait(index) {
	setTimeout(function () {
		console.log('Wait 3 secs')
	}, 3000)
}

async function download10(){
	let result = []
	for(let i = 1; i <= 5; i++){
		//let item = await getValue(i)

		let item = i
		const noWait = getValueNoWait(i)

		result.push('ES' + item)
	}

	return result
}

download10().then(console.log)
