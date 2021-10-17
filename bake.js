const fs = require('fs').promises

// first get all the files in the root folder and all the folders
// plan what needs to happen
// copy and compile all files to public (or specified) directory

async function main() {
	
	let lsRoot = await dirSnapshot(__dirname)
	
	// for (const x of lsRoot) {
	// 	console.log(x.slice(1))
	// }
	
	console.log(lsRoot)
	
	
	let folders = []
	for (const i of lsRoot){
		if (i.charAt(i.length-1) == '/') {
			folders.push(i)
		}
	}
	
	console.log(folders)
	
	//lsRoot = filterHidden(lsRoot)
 }

async function dirSnapshot(root, addPath) {
	let returnedFiles = []
	
	if ( !addPath ) { addPath = '' }
	const searchPath = root + addPath
	
	//console.log(searchPath)
	
	const items = await fs.readdir(searchPath, { withFileTypes: true})	
	for (const i of items) {
		if ( filterOut(i.name) ) {
			// filter out hidden files
		}
		else if ( i.isDirectory() ) {
			returnedFiles.push(`${addPath}/${i.name}/`)
			// look inside that directory for all files
			returnedFiles = returnedFiles.concat(
				await dirSnapshot(root, `${addPath}/${i.name}`)
			)
		}
		else {
			returnedFiles.push(`${addPath}/${i.name}`)
		}
	}
	
	//console.log(returnedFiles)
	return returnedFiles
}

function filterOut(item) {
	if ( item.includes('.git') || item.includes('.nova') || item.includes('.DS_Store') || item == 'bake.js' ) {
		return true
	}
	else {
		return false
	}
}



const userArgs = process.argv.slice(2)

if ( userArgs.includes('-h') || userArgs.includes('-help')) {
	console.log('enter a name and recieve message back')
}
else if ( userArgs.length > 0 ) {
	console.log('Process Args')
	const name = userArgs[0]
	console.log('Hello' + name)
}
else {
	main()
}
