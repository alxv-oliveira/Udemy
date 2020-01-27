const escola = "Cod3r"

console.log(escola.charAt(4)) // Vai passar a letra que está no incide 4
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // Vai passar o valor do elemento dentro da tabela AsC
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3)) // Inclui o primeiro até n-1

console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(','))