export const timeoutFn = () => {
	console.log('the first statement')
	global.setTimeout(() => {
		console.log('the second statement')
	}, 1000)
}
