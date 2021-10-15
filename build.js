const args = process.argv.slice(2)
const name = args[0]

const userArgs = process.argv.slice(2)

if ( userArgs.includes('-h') || userArgs.includes('-help')) {
	console.log('enter a name and recieve message back')
}
else if ( userArgs.length < 1 ) {
	console.error('Please enter a name argument')
	process.exit(0)
}
else {
	const name = userArgs[0]
	console.log('Hello ' + userArgs[0])
}
