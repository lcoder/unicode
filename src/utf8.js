const { binaryFormat } = require( `./binaryFormat` )

exports.utf8HexAndBinary = char => {
    if ( char === undefined || char === null || ( typeof char !== 'string' ) ) {
        return undefined
    }
    let charHex = Buffer.from( char ).toString( 'hex' ) ,
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