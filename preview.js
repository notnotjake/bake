let includesList = document.querySelectorAll('template')
console.log(`Previewing with ${includesList.length} includes`)


includesList.forEach( include => {
	source = include.getAttribute('src')
	fetch(source)
		.then( result => {
			return result.text()
		} )
		.then( content => {
			const div = document.createElement('div')
			include.replaceWith(div)
			div.innerHTML = content
		} )
})

// should work recursively
// component should be able to include css, js
// reactivity????
// pass arguments to component