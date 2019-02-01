/**
 * unicode 查询网站
 * https://codepoints.net/
*/
const { unicodeCodePoint } = require( `./unicodeCodePoint` )
const chalk = require( `chalk` )
const { utf8HexAndBinary } = require( `./utf8` )

function getUTF8Code( str ) {
    let codePoint = unicodeCodePoint( str ) ,
        utf8_hex_binarys = Array.from( str ).map( utf8HexAndBinary ) ,
        utf8_hex = [] ,
        utf8_binary = [] ,
        allBytes = 0
    for( let item of utf8_hex_binarys ) {
        if ( item === undefined || item === null ) {
            continue
        }
        let { hex , formatedBinary , bytes } = item
        utf8_hex.push( hex )
        utf8_binary.push( formatedBinary )
        allBytes += bytes
    }
    
    return {
        origin: str ,
        codePoint ,
        utf8_hex: utf8_hex.join( `\u{20}` ) ,
        utf8_binary: utf8_binary.join( `\u{20}` ) ,
        allBytes ,
    }
}

function showEncode( str ){
    let { origin , 
        codePoint , 
        utf8_hex , 
        utf8_binary ,
        allBytes } = getUTF8Code( str )
    
    console.log( chalk`
{green 字符}: {red ${ origin } }
{green unicode码点}: {red ${ codePoint } }
{green UTF-8}: {red ${ utf8_hex } }
{green UTF-8二进制}: {red ${ utf8_binary } } 长度：{red ${ allBytes } }字节
    `
    )
}

let good = '你'

showEncode( good )

