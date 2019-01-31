const { binaryFormat } = require( `./binaryFormat` )
var iconv = require('iconv-lite');

const utf16HexAndBinary = char => {
    if ( char === undefined || char === null || ( typeof char !== 'string' ) ) {
        return undefined
    }
    let charHex = iconv.encode( char, 'utf16' ).toString( 'hex' ) ,
        hex = `0x${ charHex.toUpperCase() }` ,
        binary = Number( parseInt( hex , 16 ) ).toString( 2 ) ,
        formatedBinary = binaryFormat( binary ) ,
        bytes = formatedBinary.split( `\u{20}` ).length
    return {
        hex ,
        binary ,
        formatedBinary ,
        bytes ,
    }
}
let a = utf16HexAndBinary( 'a' )
console.log( a )
exports.utf16HexAndBinary = utf16HexAndBinary