const { binaryFormat } = require( `./binaryFormat` )
const { codePoint2UTF8Binary } = require( `./codePoint2UTF8Binary` )

exports.utf8HexAndBinary = char => {
    if ( char === undefined || char === null || ( typeof char !== 'string' ) ) {
        return undefined
    }
    let charHex = Buffer.from( char ).toString( 'hex' ) ,
        hex = `0x${ charHex.toUpperCase() }` ,
        binary = Number( parseInt( hex , 16 ) ).toString( 2 ) ,
        binaryVariant = codePoint2UTF8Binary( char ) ,
        isDifferent = binary !== binaryVariant ,
        formatedBinary = binaryFormat( binary ) ,
        bytes = formatedBinary.split( `\u{20}` ).length
    if ( isDifferent ) {
        throw new Error( `根据unicode码点计算utf-8的二进制，和原生的不一致` )
    }
    return {
        hex ,
        binary ,
        formatedBinary ,
        bytes ,
    }
}