function getSymbols(string) {
    var length = string.length ,
        index = -1 ,
        output = [] ,
        character ,
        charCode
    while ( ++index < length ) {
        character = string.charAt( index )
        charCode = character.charCodeAt( 0 )
        // 只要落在0xD800到0xDBFF的区间，就要连同后面2个字节一起读取。
        let ifMultiStartChar = charCode >= 0xD800 && charCode <= 0xDBFF
        if ( ifMultiStartChar ) {
            let nextChar = string.charAt( ++index ) ,
                fixedChar = character + nextChar
            output.push( fixedChar )
        } else {
            output.push( character )
        }
    }
    return output;
}

console.log( getSymbols( '1𝌇23' ).length ) // 4