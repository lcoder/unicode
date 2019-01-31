const { unicodeCodePoint } = require( `./unicodeCodePoint` )
const Buffer = require( 'buffer' ).Buffer
const chalk = require( `chalk` )
const { binaryFormat } = require( `./binaryFormat` )



function getEveryCode( str ) {
    let codePoint = unicodeCodePoint( str ) ,
        utf8_hex = Buffer.from( str ).toString( 'hex' ) ,
        utf8_binary = Number( parseInt( utf8_hex , 16 ) ).toString( 2 )
    return {
        origin: str ,
        codePoint: codePoint ,
        utf8_hex: utf8_hex.toUpperCase() ,
        utf8_binary ,
    }
}

function showEncode( str ){
    let { origin , 
        codePoint , 
        utf8_hex , 
        utf8_binary } = getEveryCode( str )
    let utf8_binary_formated = binaryFormat( utf8_binary ) ,
        utf8_binary_bytes = utf8_binary_formated.split( `\u{20}` ).length
    console.log( chalk`
{green 字符}: {red ${ origin } }
{green unicode码点}: {red ${ codePoint } }
{green UTF-8}: {red ${ utf8_hex } }
{green UTF-8二进制}: {red ${ utf8_binary_formated } } 长度：{red ${utf8_binary_bytes} }字节
    `
    )
}

let good = '好'

showEncode( good )